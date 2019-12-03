import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private redButton;
  private InscriptionButton;
  constructor(private user :UserService,private router: Router) {}


  ngOnInit() {
    this.user.getSomeData().subscribe(data =>{
      console.log("data is ",data)
      if(data.status){
        this.redButton =  data.email.toString()
        this.InscriptionButton = "Proposer un trajet"
      }else{
        this.redButton = "Connexion"
        this.InscriptionButton = "Inscription"
      }
      
    })
  }




  
  changeButton(){
    this.user.getSomeData().subscribe(data =>{
      if(data.status){
        this.redButton =  data.email.toString()   
        this.InscriptionButton = "Proposer un trajet"  
      }else{
        this.redButton = "Connexion"
        this.InscriptionButton = "Inscription"
      }
    })
  }
  ConnexionRouteTo(event){
    event.preventDefault()
    console.log("run")
    if(this.redButton == "Connexion"){
      this.router.navigate(['login'])
    }else{
      this.router.navigate(['dashboard'])
    }
  }
  InscriptionRouteTo(event){
    event.preventDefault()
    console.log("run as admin")
    if(this.InscriptionButton == "Inscription"){
      this.router.navigate(['register'])
    }else{
      this.router.navigate(['offer'])
    }
  }
}
