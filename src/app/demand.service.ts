
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface demandResponse {
  success: boolean,
  message: String,
  id : String
}
interface Reservation{
  "_id":String,
  "DateSys": Date ,
  "Etat":String,
  "emailOffer":String,
  "emailDemand":String,
  "idOffer":String,
  "idDemand":String,
  "NbPlaces":number
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
interface MydemandsResponse{
  "_id" : String,
  "email" : String,
	"password" : String,
	"nom" : String,
	"prenom" : String,
	"age" : String,
	"tel" : String,
  "sexe" : String,
  "demands" : [demandType] 
}

interface Reservations{
  success: boolean,
  listReservation: [Reservation]
}

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http: HttpClient) { }

  reserver(emailOffer,idOffer,emailDemand,idDemand,NbPlaces){
    return this.http.post<demandResponse>("/api/reservation",{
      emailOffer,idOffer,emailDemand,idDemand,NbPlaces
    })
  }
  GetLastId(email){
    return this.http.post<demandResponse>("/api/demand/last",{
      email
    })
  }
  getDemandsForOffer(idOffer){
    return this.http.post<Reservations>("/api/reservation/getReservations",{
      idOffer
    })
  }
  DemanderTrajetS(email,From,To,datetimepicker,NbPlaces){
    return this.http.post<demandResponse>("/api/demand",{
      email,From,To,datetimepicker,NbPlaces
    })
  }
  GetMyDemands(email){
    return this.http.post<MydemandsResponse>("/api/GetMyDemands",{
      email
    })
  }
}
