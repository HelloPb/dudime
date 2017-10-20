import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './addedit/add-user.component';
import { SearchUserComponent } from './list/search-user.component';
import { UserManagementComponent } from './user-management.component';

const route: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      { path: 'addedit', component: AddUserComponent },
      { path: 'list', component: SearchUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
