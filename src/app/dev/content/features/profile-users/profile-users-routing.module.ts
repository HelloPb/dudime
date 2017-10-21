import { SearchUserComponent } from './search-user/search-user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ProfileUsersComponent } from './profile-users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ProfileUsersComponent,
    children: [
      {
        path: '', redirectTo: 'search'
      },
      {
        path: 'search',
        component: SearchUserComponent
      },
      {
        path: 'addedit',
        component: AddEditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileUsersRoutingModule { }
