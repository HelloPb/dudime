import { MyStoreRouterModule } from './my-store-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreComponent } from './my-store.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyStoreComponent],
  exports: [MyStoreRouterModule]
})
export class MyStoreModule { }
