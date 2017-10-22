import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users.component';
import { AdminUserSearchComponent } from './admin-user-search/admin-user-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ManageUsersComponent, AdminUserSearchComponent]
})
export class ManageUsersModule { }
