import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit() {
   
  }

}
