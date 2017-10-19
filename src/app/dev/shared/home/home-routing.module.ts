import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [{path: '', component: HomeComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
