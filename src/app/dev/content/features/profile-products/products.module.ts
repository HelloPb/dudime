import { ProductSpecificProfilesModule } from './add-edit-product/product-specific-profiles/specific-profiles.module';
import { ProductStandardProfileModule } from './add-edit-product/product-standard-profile/standard-profile.module';
import { ProfileProductsRoutingModule } from './products-routing.module';
import { ProfileProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductStandardProfileModule,
    ProductSpecificProfilesModule,
    ProfileProductsRoutingModule
  ],
  declarations: [ProfileProductsComponent, SearchProductComponent]
})
export class ProfileProductsModule { }
