import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, HomeOverviewComponent, HomeSectionsComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
