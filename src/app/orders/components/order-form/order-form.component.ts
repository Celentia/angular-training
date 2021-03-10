import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { OrdersObservableService } from '../../services/orders-observable.service';
import { OrderModel } from '../../models/order.model';
import { AutoUnsubscribe } from 'src/app/core/decorators/auto-unsubscribe.decorator';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

@AutoUnsubscribe()
export class OrderFormComponent implements OnInit {
  order: OrderModel;
  initialOrder: OrderModel;

  private sub: Subscription;

  constructor(
    private ordersObservableService: OrdersObservableService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.order = new OrderModel();

    const observer = {
      next: (order: OrderModel) => (this.order = { ...order }),
      error: (err: any) => console.log(err)
    };

    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return params.get('orderID')
          ? this.ordersObservableService.getOrder(+params.get('orderID'))
          : Promise.resolve(null);
      }))  
    .subscribe(observer);
  }

  onSaveOrder() {
    const order = {...this.order};

    const method = order.id ? 'updateOrder' : 'createOrder';
    const observer = {
          next: (savedOrder: OrderModel) => {
            this.initialOrder = { ...savedOrder };
            order.id
              ?
                this.router.navigate(['order-list'])
              : this.onGoBack();
          },
          error: (err: any) => console.log(err)
    };
    this.sub = this.ordersObservableService[method](order).subscribe(observer);
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
    this.location.back();
  }
}
