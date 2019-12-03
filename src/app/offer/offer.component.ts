import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);
import { DateTimePicker } from '@syncfusion/ej2-calendars';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor(private user :UserService,private router: Router,private offer: OfferService) { }

  ngOnInit() {
    let datetimepicker: DateTimePicker = new DateTimePicker({
      format: 'dd-MMM-yy hh:mm a',
      value: new Date(),
      placeholder: 'Select a date and time',
      width: "233px"
    });
    datetimepicker.appendTo('#datetimepicker');
    datetimepicker.show("time");
  }

  ProposerTrajet(event){
    event.preventDefault()
    const target = event.target
    const from  = target.querySelector('#from').value
    const to  = target.querySelector('#to').value
    const datetimepicker  = target.querySelector('#datetimepicker').value
    const nbPl  = target.querySelector('#nbPl').value
    const prix  = target.querySelector('#prix').value
    this.user.getSomeData().subscribe(data =>{
      if(data.status){
        this.offer.ProposerTrajetS(data.email,from,to,nbPl,prix,datetimepicker).subscribe(data_offer =>{
          console.log(data_offer)
        })
      }else{
        this.router.navigate(['login'])
      }
    })
  }

}
