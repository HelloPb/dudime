import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area/content-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentAreaComponent, TopMenuComponent, LeftMenuComponent]
})
export class MenuModule { }
