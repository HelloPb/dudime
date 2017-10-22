import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopMenuComponent, LeftMenuComponent],
  exports: [TopMenuComponent, LeftMenuComponent]
})
export class MenuModule { }
