import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  connect(username : String ,password : String) {
    return this.http.post('/api/auth.php',{
      username,
      password
    }).subscribe(data => {
      console.log(data+' is wach we received from the server');
    });
  }
}
