import { ProfileProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProfileProductsComponent, SearchProductComponent]
})
export class ProfileProductsModule { }
