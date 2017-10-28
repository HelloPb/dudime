import { ProfileUsersResolverService } from './users-resolver.service';
import { ProfileUsersComponent } from './users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanDeactivateGuardService } from '../shared/services/auth/can-deactivate-guard/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileUsersComponent,
    children: [
      {
        path: '', redirectTo: 'id'
      },
      {
        path: 'add',
        component: AddEditUserComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
      {
        path: ':id',
        component: AddEditUserComponent,
        resolve: { userProfile: ProfileUsersResolverService },
        canDeactivate: [CanDeactivateGuardService]
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
