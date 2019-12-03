import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
interface userType{"_id" : String,"email" : String,"password" : String,"nom" : String,"prenom" : String,"age" : String,"tel" : String,"sexe" : String,"cars": String,"demands": String ,"offers":[offerType] }
interface listMyOffersResponse{
  success: boolean,
  list: userType
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
interface offerResponse {
  success: boolean,
  message: String
}
interface listOfferResponse{
  success: boolean,
  list: [userType]
}


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  listerOffres(from,to,datetimepicker){
    return this.http.post<listOfferResponse>("/api/listOffer",{
      from,to,datetimepicker
    })
  }
  listMyOffers(email){
    return this.http.post<listMyOffersResponse>("/api/listMyOffers",{
      email
    })
  }

  ProposerTrajetS(email,From,To,NbPl,Prix,datetimepicker){
    return this.http.post<offerResponse>("/api/offer",{
      email,From,To,NbPl,Prix,datetimepicker
    })
  }

}
