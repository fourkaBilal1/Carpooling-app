import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';
import { DemandService } from '../demand.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user.service';
interface userType{
  "_id" : String,
  "email" : String,
	"password" : String,
	"nom" : String,
	"prenom" : String,
	"age" : String,
	"tel" : String,
	"sexe" : String,
	"cars": String,
	"demands": String,
	"offers":[offerType] 
}

interface offerType{
  "_id" : String,
  From: String,
	To: String,
	DateSys : Date ,
	Etat : String,
	DateOffer : Date,
	NbPlaces : Number,
	Prix : Number 
}


@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss']
})
export class ListOffersComponent implements OnInit {
  private from :String;
  private to :String;
  private id :String;
  private NbPlaces :String;
  private datetimepicker :String;
  private list : [userType];
  

  constructor(private user :UserService,private router: Router,private route: ActivatedRoute,private offer: OfferService,private Demande :DemandService) { }
  
  ngOnInit(){
    this.from = this.route.snapshot.paramMap.get("from");
    this.to = this.route.snapshot.paramMap.get("to");
    this.id = this.route.snapshot.paramMap.get("idDemand");
    this.NbPlaces = this.route.snapshot.paramMap.get("NbPlaces");
    this.datetimepicker = this.route.snapshot.paramMap.get("datetimepicker");
    this.offer.listerOffres(this.from,this.to,this.datetimepicker).subscribe(data => {
      this.list = data.list; 
      for(let user of this.list){
        for(let offer of user.offers){
          offer.Etat = offer.DateOffer.toString().substr(11,5) ;
        }
      } 
    })
  }
  Reserver(event,emailOffer,idOffer){
    event.preventDefault()
    const target = event.target
    this.user.getSomeData().subscribe(data =>{
      if(data.status){
        this.Demande.reserver(emailOffer,idOffer,data.email,this.id,this.NbPlaces).subscribe(data_reserve =>{
          if(data.status){
            this.router.navigate(['listOffers/result',{ "id" : data_reserve.id}])
          }else{
            window.alert("something went wrong")
          }
        })
      }else{

      }
    })
    
  }

}
