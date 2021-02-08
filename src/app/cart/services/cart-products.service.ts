import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {

  private cartList: CartModel[] = [];
  private initialPrice: number;

  constructor() { }

  getProducts(): CartModel[] {
    return this.cartList;
  }

  addProduct(product: ProductModel): void {
    const CartModel = this.cartList.find(x => x.item.id === product.id);
    this.initialPrice = product.price;

    if (CartModel === undefined) {
      this.cartList.push({
        item: product,
        name: product.name,
        count: 1,
        price: this.initialPrice
      });
    }
  }

  increaseQuantity(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    cartItem.count += 1;
    cartItem.price = cartItem.price + this.initialPrice;
    this.cartProducts();
  }

  decreaseQuantity(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    cartItem.count -= 1;
    cartItem.price = cartItem.price - this.initialPrice;
  }

  removeProduct(id: number): void {
    const cartItem = this.cartList.find(x => x.item.id === id);
    this.cartList.splice(this.cartList.indexOf(cartItem), 1);
  }

  cartProducts(): CartModel[] {
    return this.cartList;
  }

  totalSum(): number {
    return this.cartList.reduce((sum, item) => sum += item.price, 0);
  }

  totalQuantity(): number {
    return this.cartList.reduce((sum, item) => sum += item.count, 0);
  }

  removeAllProducts(): number {
    return this.cartList.length = 0;
  }

  isEmptyCart(): boolean {
    return this.cartList.length === 0;
  }
}
