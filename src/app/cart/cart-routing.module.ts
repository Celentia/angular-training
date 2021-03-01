import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

import { CartListComponent, ProcessOrderComponent } from './components';
import { IsCartEmptyGuard } from './guards/is-cart-empty.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'order',
        component: ProcessOrderComponent,
        canActivate: [IsCartEmptyGuard]
      },
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent, ProcessOrderComponent, CartListComponent];
}
