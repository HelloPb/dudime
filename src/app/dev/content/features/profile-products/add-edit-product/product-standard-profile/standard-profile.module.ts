import { ProductStandardProfileRoutingModule } from './standard-profile-routing.module';
import { ProductStandardProfileComponent } from './standard-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStandardProfileDetailComponent } from './product-standard-profile-detail/product-standard-profile-detail.component';
// tslint:disable-next-line:max-line-length
import { ProductStandardProfileNavigationComponent } from './product-standard-profile-navigation/product-standard-profile-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    ProductStandardProfileRoutingModule
  ],
  declarations: [ProductStandardProfileComponent, ProductStandardProfileDetailComponent, ProductStandardProfileNavigationComponent]
})
export class ProductStandardProfileModule { }
