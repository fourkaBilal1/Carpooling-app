import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DemandService } from '../demand.service';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';

interface UserData{
  "_id" : String,
  "email" : String,
	"password" : String,
	"nom" : String,
	"prenom" : String,
	"age" : String,
	"tel" : String,
  "sexe" : String
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
interface OneOffer{
  "offer": offerType,
  "demanders" : UserData[] 
}
interface demandType{
  "_id" : String,
  From: String,
	To: String,
	DateSys : Date ,
	Etat : String,
	DateDem : Date,
	NbPlaces : {type: Number, default : 0 },
	Prix : Number 
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quote : String = "Bienvenue dans votre espace personnel"
  email = "Getting your email"
  listO : OneOffer[] = [];
  listD : demandType[] = [];
  constructor(private user :UserService,private router: Router,private offer: OfferService,private demand:DemandService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data =>{
      if(data.status){
        this.email = data.email.toString();
        this.offer.listMyOffers(data.email).subscribe(datas =>{
          
          datas.list.offers.forEach((offer,index)=>{
            var listDemanders : UserData[] =[]
            this.demand.getDemandsForOffer(offer._id).subscribe(datad =>{
              datad.listReservation.forEach((reservation,index)=>{
                this.user.getUserData(reservation.emailDemand).subscribe(datar =>{
                  console.log("datar ",datar)
                  listDemanders.push(datar)
                })
              })
            });
            this.listO.push({"offer" : offer, "demanders" : listDemanders })
          });
        });
        this.demand.GetMyDemands(data.email).subscribe(data=>{
          data.demands.forEach(element => {
            this.listD.push(element)
          });
          console.log("demands are : ",data)
        })
        console.log("finaly : ",this.listO)
        console.log("finally Dem : ",this.listD)
      }else{
        this.router.navigate(['logout'])
      }
    })
    


  }

}
