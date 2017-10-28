import { ProductStandardProfileRoutingModule } from './standard-profile-routing.module';
import { ProductStandardProfileComponent } from './standard-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ProductStandardProfileRoutingModule
  ],
  declarations: [ProductStandardProfileComponent]
})
export class ProductStandardProfileModule { }
