import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductFormComponent, ProductsComponent, OrdersComponent } from './components';
import { AdminResolveGuard } from './guards/user-resolve.guard';
import { AuthGuard } from './../core/guards/auth.guard';
import { CanDeactivateGuard } from './../core/guards/can-deactivate.guard';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        {
          path: 'products',
          component: ProductsComponent
        },
        {
          path: 'product/add',
          component: ProductFormComponent
        },
        {
          path: 'product/edit/:productID',
          component: ProductFormComponent,
          canDeactivate: [CanDeactivateGuard],
          resolve: {
            user: AdminResolveGuard
          }
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ProductFormComponent,
    ProductsComponent,
    OrdersComponent
  ];
}
