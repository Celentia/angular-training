import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() cartItem!: CartModel;
  @Output() increaseCount = new EventEmitter<number>();
  @Output() decreaseCount = new EventEmitter<number>();
  @Output() removeProduct = new EventEmitter<number>();

  constructor() { }

  onincreaseQuantity(): void {
    this.increaseCount.emit(this.cartItem.item.id);
  }

  ondecreaseQuantity(): void {
    if (this.cartItem.count > 1) { 
      this.decreaseCount.emit(this.cartItem.item.id);
    }
  }

  onRemoveProduct(): void {
    this.removeProduct.emit(this.cartItem.item.id);
  }
}
