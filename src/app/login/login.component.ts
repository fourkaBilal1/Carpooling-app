import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';



interface MyObj {
  username: string;
  password: number;
  success:boolean;
}
@Component({
  selector: 'app-login',
  providers:[NavComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router,
              private nav : NavComponent) {
  }
  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(email, password).subscribe(data => {
      if(data.success) {
        this.nav.changeButton()
        this.router.navigate(['dashboard']).then(f=>{
          window.location.reload()})
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
  }

}
