import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-logout',
  providers:[NavComponent],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService,
    private router: Router,
    private auth: AuthService,
    private nav : NavComponent) { }

  ngOnInit() {
    this.user.logout().subscribe(data => {
      if(data.success){
        this.nav.changeButton()
        this.auth.setLoggedIn(false)
        this.router.navigate(['/']).then(f=>{
          window.location.reload()})
      }else{
        window.alert('some problem')
      }
    })
  }

}
