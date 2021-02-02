import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {

  private cartList: CartItem[] = [];
  private initialPrice: number;

  constructor() { }

  getBoughtProducts(): CartItem[] {
    return this.cartList;
  }

  addProduct(product: ProductModel): void {
    const cartItem = this.cartList.find(x => x.item.id === product.id);
    this.initialPrice = product.price;

    if (cartItem === undefined) {
      this.cartList.push({
        item: product,
        count: 1,
        price: this.initialPrice
      });
    }
  }

  addOneItem(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    cartItem.count += 1;
    cartItem.price = cartItem.price + this.initialPrice;
  }

  removeOneItem(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    cartItem.count -= 1;
    cartItem.price = cartItem.price - this.initialPrice;
  }

  deleteProductFromCart(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    this.cartList.splice(this.cartList.indexOf(cartItem), 1);
  }
}
