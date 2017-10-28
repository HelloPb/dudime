import { ProductStandardProfileComponent } from './standard-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'standard'
  },
  {
    path: 'standard',
    component: ProductStandardProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductStandardProfileRoutingModule { }
