import { HomeComponent } from './dev/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'content',
    loadChildren: 'app/dev/content/content.module#ContentModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
