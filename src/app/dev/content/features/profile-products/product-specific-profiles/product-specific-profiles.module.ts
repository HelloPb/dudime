import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSpecificProfilesComponent } from './product-specific-profiles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductSpecificProfilesComponent]
})
export class ProductSpecificProfilesModule { }
