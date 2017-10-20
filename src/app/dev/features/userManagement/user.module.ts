import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './addedit/add-user.component';
import { SearchUserComponent } from './list/search-user.component';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    AddUserComponent,
    SearchUserComponent,
    UserManagementComponent]
})
export class UserModule { }
