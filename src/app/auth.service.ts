import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: String
}

interface registerResponse {
  success: boolean,
  message: String
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
    

  }
  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(email, password) {
    // post these details to API server return user info if correct
    
    return this.http.post<myData>('/api/login', {
      email,
      password
    })
  }
  registerUserCond(nom,prenom,email,age,tel,sexe,password,carDescri,carPlaces,carMat){
    return this.http.post<registerResponse>("/api/register/Conductor",{
      nom,prenom,email,age,tel,sexe,password,carDescri,carPlaces,carMat
    })
  }

  registerUser(nom,prenom,email,age,tel,sexe,password){
    return this.http.post<registerResponse>("/api/register",{
      nom,prenom,email,age,tel,sexe,password
    })
  }
}
