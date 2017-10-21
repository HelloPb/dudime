import { HomeComponent } from '../../features/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './content-area.component';

const routes: Routes = [
  {
    path: '',
    component: ContentAreaComponent,
    children: [
      {
        path: 'user',
        loadChildren: 'app/dev/features/userManagement/user.module#UserModule'
      },
      {
        path: 'products',
        loadChildren: 'app/dev/features/products/products.module#ProductsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
