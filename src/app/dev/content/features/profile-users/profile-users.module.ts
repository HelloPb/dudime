import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUsersComponent } from './profile-users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProfileUsersComponent, AddEditUserComponent, SearchUserComponent]
})
export class ProfileUsersModule { }
