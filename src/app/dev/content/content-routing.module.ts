import { HomeComponent } from './home/home.component';
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
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: 'app/dev/content/features/profile-users/profile-users.module#ProfileUsersModule'
      },
      {
        path: 'products',
        loadChildren: 'app/dev/content/features/profile-products/profile-products.module#ProfileProductsModule'
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
