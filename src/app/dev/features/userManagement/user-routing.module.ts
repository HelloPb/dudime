import { SearchUserComponent } from './search-user/search-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [
   {path: 'addedit', component: AddUserComponent}, {path: 'list', component: SearchUserComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
