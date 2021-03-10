import { Component, OnInit } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { OrderModel } from '../../models/order.model';
import { OrdersObservableService } from '../../services/orders-observable.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Array<OrderModel>>;

  constructor(
    private ordersObservableService: OrdersObservableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orders$ = this.ordersObservableService.getOrders();
    switchMap((params: ParamMap) => {
      return params.get('editedOrderID')
        ? this.ordersObservableService.getOrder(+params.get('editedOrderID'))
        : of(null);
    })
  }

  onCreateOrder() {
    const link = ['/order-list/add'];
    this.router.navigate(link);
  }

  onEditOrder(order: OrderModel) {
    const link = ['/edit-order', order.id];
    this.router.navigate(link);
  }

  onDeleteOrder(order: OrderModel) {
    this.orders$ = this.ordersObservableService.deleteOrder(order);
  }
}
