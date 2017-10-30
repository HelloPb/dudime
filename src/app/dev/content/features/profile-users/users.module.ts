import { SearchUserModule } from './search-user/search-user.module';
import { AddEditUserModule } from './add-edit-user/add-edit-user.module';
import { ProfileUsersRoutingModule } from './users-routing.module';
import { ProfileUsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SearchUserModule,
    AddEditUserModule,
    ProfileUsersRoutingModule
  ],
  declarations: [ProfileUsersComponent]
})
export class ProfileUsersModule { }
