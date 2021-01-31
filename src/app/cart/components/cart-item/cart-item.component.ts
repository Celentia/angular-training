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
  @Output() onChanged = new EventEmitter<number>();

  constructor() { }

  onAddOneItem() {
    this.increaseCount.emit(this.cartItem.item.id);
  }

  onRemoveOneItem() {
    if (this.cartItem.count > 1) { 
      this.decreaseCount.emit(this.cartItem.item.id);
    }
  }

  onDeleteItem() {
    this.onChanged.emit(this.cartItem.item.id);
  }
}
