import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../../models/cart-item.model';
import { CartProductsService } from '../../services/cart-products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: CartModel[] = [];

  constructor(private cartProductsService: CartProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.items = this.cartProductsService.getProducts();
  }

  increaseQuantity(id: number): void {
    this.cartProductsService.increaseQuantity(id);
  }

  decreaseQuantity(id: number): void {
    this.cartProductsService.decreaseQuantity(id);
  }

  removeProduct(id: number): void {
    this.cartProductsService.removeProduct(id);
  }

  trackByFn(index: number, item: ProductModel): string {
    return item.name;
  }
}
