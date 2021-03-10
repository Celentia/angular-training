import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderModel } from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {

  @Input() order: OrderModel;
  @Output() editOrder = new EventEmitter<OrderModel>();
  @Output() deleteOrder = new EventEmitter<OrderModel>();

  constructor() { }

  onEditOrder() {
    this.editOrder.emit(this.order);   
  }

  onDeleteOrder() {
    this.deleteOrder.emit(this.order);
  }
}
