import { SearchUserRoutingModule } from './search-user-routing.module';
import { SearchUserComponent } from './search-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchCriteriaComponent } from './user-search-criteria/user-search-criteria.component';
import { UserSearchResultComponent } from './user-search-result/user-search-result.component';

@NgModule({
  imports: [
    CommonModule,
    SearchUserRoutingModule
  ],
  declarations: [SearchUserComponent, UserSearchCriteriaComponent, UserSearchResultComponent]
})
export class SearchUserModule { }
