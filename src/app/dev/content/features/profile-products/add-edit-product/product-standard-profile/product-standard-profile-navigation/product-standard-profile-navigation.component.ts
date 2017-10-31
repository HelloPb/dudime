import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-standard-profile-navigation',
  templateUrl: './product-standard-profile-navigation.component.html',
  styleUrls: ['./product-standard-profile-navigation.component.css']
})
export class ProductStandardProfileNavigationComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.create();
  }

  private create(): void {
    this.formGroup = this.formBuilder.group({
      time: ['10:00', Validators.required]
    });
  }

  // Angular Lifecycle Hooks
  ngOnInit() {
  }

}
