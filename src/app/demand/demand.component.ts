import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DemandService } from '../demand.service';
import { Router } from '@angular/router';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);
import { DateTimePicker } from '@syncfusion/ej2-calendars';
@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements OnInit {

  submitted = false;
  success = false;

  constructor(private user :UserService,private router: Router,private Demande :DemandService) { }

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

  DemanderTrajet(event){
    event.preventDefault()
    const target = event.target
    const from  = target.querySelector('#from').value
    const to  = target.querySelector('#to').value
    const Nbp  = target.querySelector('#NbP').value
    const datetimepicker  = target.querySelector('#datetimepicker').value
    this.user.getSomeData().subscribe(data =>{
      if(data.status){
        this.Demande.DemanderTrajetS(data.email,from,to,datetimepicker,Nbp).subscribe(data_demand =>{
          this.Demande.GetLastId(data.email).subscribe(dataLast => {
            this.router.navigate(['listOffers',{"from" : from,"to": to,"idDemand" : dataLast.id,"NbPlaces": Nbp ,"datetimepicker" : datetimepicker}])
          })
        })        
      }else{
        this.router.navigate(['listOffers',{"from" : from,"to": to,"datetimepicker" : datetimepicker}])
      }
    })
  }
}
