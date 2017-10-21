import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileProductsComponent } from './profile-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProfileProductsComponent]
})
export class ProfileProductsModule { }
