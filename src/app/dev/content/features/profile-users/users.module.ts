import { ProfileUsersRoutingModule } from './users-routing.module';
import { ProfileUsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ProfileUsersRoutingModule
  ],
  declarations: [ProfileUsersComponent, AddEditUserComponent, SearchUserComponent]
})
export class ProfileUsersModule { }
