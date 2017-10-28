import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-standard-profile',
  templateUrl: './standard-profile.component.html',
  styleUrls: ['./standard-profile.component.css']
})
export class ProductStandardProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log(this.activatedRoute);
    console.log(this.router);
  }

}
