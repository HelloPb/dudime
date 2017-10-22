import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './manage-products.component';
import { AdminProductSearchComponent } from './admin-product-search/admin-product-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ManageProductsComponent, AdminProductSearchComponent]
})
export class ManageProductsModule { }
