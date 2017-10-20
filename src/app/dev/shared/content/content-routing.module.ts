import { HomeComponent } from '../../features/home/home.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';

const routes: Routes = [
  {
    path: '',
    component: ContentAreaComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'user',
        loadChildren: 'app/dev/features/userManagement/user.module#UserModule'
      }]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ContentRoutingModule { }
