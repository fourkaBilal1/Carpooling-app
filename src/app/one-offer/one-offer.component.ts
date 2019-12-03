import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-one-offer',
  templateUrl: './one-offer.component.html',
  styleUrls: ['./one-offer.component.scss']
})
export class OneOfferComponent implements OnInit {
  private email :String;
  private id :String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get("email");
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.email,this.id)
  }

}
