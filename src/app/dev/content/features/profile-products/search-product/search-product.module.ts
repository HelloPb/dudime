import { SearchProductComponent } from './search-product.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { ProductSearchCriteriaComponent } from './product-search-criteria/product-search-criteria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductRoutingModule } from './search-product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchProductRoutingModule
  ],
  declarations: [SearchProductComponent, ProductSearchResultComponent, ProductSearchCriteriaComponent]
})
export class SearchProductModule { }
