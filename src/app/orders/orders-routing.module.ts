import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFormComponent, OrderListComponent } from './components';

const routes: Routes = [
  {
    path: 'order-list',
    component: OrderListComponent
  },
  {
    path: 'order-list/add',
    component: OrderFormComponent
  },
  {
    path: 'edit-order/:orderID',
    component: OrderFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
