import { ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from '../../../shared/comps/forms/date-time-picker/date-time-picker.module';
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
    ReactiveFormsModule,
    DateTimePickerModule,
    ProductStandardProfileRoutingModule
  ],
  declarations: [ProductStandardProfileComponent, ProductStandardProfileDetailComponent, ProductStandardProfileNavigationComponent]
})
export class ProductStandardProfileModule { }
