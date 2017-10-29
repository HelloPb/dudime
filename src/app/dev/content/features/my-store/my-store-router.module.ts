import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { MyStoreComponent } from './my-store.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MyStoreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyStoreRouterModule { }
