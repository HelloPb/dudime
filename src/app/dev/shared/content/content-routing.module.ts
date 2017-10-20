import { HomeComponent } from '../../features/home/home.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ContentRoutingModule { }
