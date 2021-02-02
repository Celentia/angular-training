import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() cartItem!: CartItem;
  @Output() increaseCount = new EventEmitter<number>();
  @Output() decreaseCount = new EventEmitter<number>();
  @Output() changed = new EventEmitter<number>();

  constructor() { }

  onAddOneItem(): void {
    this.increaseCount.emit(this.cartItem.item.id);
  }

  onRemoveOneItem(): void {
    if (this.cartItem.count > 1) {
      this.decreaseCount.emit(this.cartItem.item.id);
    }
  }

  onDeleteItem(): void {
    // как-то название аутпута и название метода расходятся
    this.changed.emit(this.cartItem.item.id);
  }
}
