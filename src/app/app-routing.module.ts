import { HomeComponent } from './dev/features/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './dev/shared/content/content-area.component';

const route: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'content',
    loadChildren: 'app/dev/shared/content/content.module#ContentModule'
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
