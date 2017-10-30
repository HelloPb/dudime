import { ProductSpecificProfilesModule } from './add-edit-product/product-specific-profiles/specific-profiles.module';
import { ProductStandardProfileModule } from './add-edit-product/product-standard-profile/standard-profile.module';
import { ProfileProductsRoutingModule } from './products-routing.module';
import { ProfileProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductSearchResultComponent } from './search-product/product-search-result/product-search-result.component';
import { ProductSearchCriteriaComponent } from './search-product/product-search-criteria/product-search-criteria.component';

@NgModule({
  imports: [
    CommonModule,
    ProductStandardProfileModule,
    ProductSpecificProfilesModule,
    ProfileProductsRoutingModule
  ],
  declarations: [ProfileProductsComponent]
})
export class ProfileProductsModule { }
