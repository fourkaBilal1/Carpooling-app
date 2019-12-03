import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface myData{
  email: String,
  status: boolean,
  quote: String
}
interface userData{
  "_id" : String,
  "email" : String,
	"password" : String,
	"nom" : String,
	"prenom" : String,
	"age" : String,
	"tel" : String,
  "sexe" : String 
}
interface isLoggedIn{
  status : boolean
}
interface logoutStatus{
  success : boolean
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getSomeData(){
    return this.http.get<myData>('/api/data');
  }
  getUserData(email){
    return this.http.post<userData>('/api/user/data',{
      email
    });
  }
  constructor(private http: HttpClient) { }
  
  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isloggedin');
  }
  logout(){
    return this.http.get<logoutStatus>("/api/logout")
  }
}
