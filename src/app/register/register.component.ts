import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ToDisplay : boolean;
  constructor(private Auth: AuthService,
    private router: Router) {
      
     }

  ngOnInit() {
    this.ToDisplay = false;
  }
  checked(event){
    event.preventDefault()
    const target = event.target
    this.ToDisplay = target.checked
  }

  registerUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target
    const email  = target.querySelector('#email').value
    const password  = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value
    const sexe = target.querySelector('#sexe').value
    const age  = target.querySelector('#age').value
    const tel  = target.querySelector('#tel').value
    const nom = target.querySelector('#nom').value
    const prenom = target.querySelector('#prenom').value
    var carDescri : String;
    var carPlaces : String;
    var carMat : String;
    if(this.ToDisplay){
      carDescri  = target.querySelector('#car').value
      carPlaces = target.querySelector('#car_places').value
      carMat = target.querySelector('#car_mat').value
    }


    console.log(nom,prenom,email,age,tel,sexe,password,cpassword)
    if(password != cpassword){
      errors.push("Passwords do not match")
    }
    //mor validation

    if( errors.length === 0 ){
      if(this.ToDisplay){
        this.Auth.registerUserCond(nom,prenom,email,age,tel,sexe,password,carDescri,carPlaces,carMat).subscribe(data =>{
          console.log(data)
          if(data.success){
            this.router.navigate(['dashboard'])
          }
        })
      }else{
        this.Auth.registerUser(nom,prenom,email,age,tel,sexe,password).subscribe(data =>{
          console.log(data)
          if(data.success){
            this.router.navigate(['dashboard'])
          }
        })
      }
    }
    console.log(email, password)
  }

}
