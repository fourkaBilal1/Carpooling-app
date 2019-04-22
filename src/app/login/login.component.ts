import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { APP_ROOT } from '@angular/core/src/di/scope';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;


  constructor(private formBuilder: FormBuilder,private Auth : AuthService) {
  }
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  loginUser(event){
    const target = event.target;
    const username = target.querySelector('.username').value;
    const password = target.querySelector('.password').value;
    this.Auth.connect(username,password);
    
    
    
  }
  onSubmit( event ) {
    
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }
    this.loginUser(event);
    this.success = true;
  }

}
