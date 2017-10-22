import { ProfileProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ProfileProductsComponent,
    children: [
      {
        path: '', redirectTo: 'standard'
      },
      {
        path: 'standard',
        loadChildren: 'app/dev/content/features/profile-products/product-standard-profile/\
        standard-profile.module#ProductStandardProfileModule'
      },
      {
        path: 'specific',
        loadChildren: 'app/dev/content/features/profile-products/product-specific-profiles/\
        specific-profiles.module#ProductSpecificProfilesModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileProductsRoutingModule { }