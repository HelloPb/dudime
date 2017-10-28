import { ProductSpecificProfilesRoutingModule } from './specific-profiles-routing.module';
import { ProductSpecificProfilesComponent } from './specific-profiles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ProductSpecificProfilesRoutingModule
  ],
  declarations: [ProductSpecificProfilesComponent]
})
export class ProductSpecificProfilesModule { }
