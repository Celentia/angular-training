import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartModel } from '../../models/cart-item.model';
import { CartProductsService } from '../../services/cart-products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: CartModel[] = [];

  orderArray = ['price', 'count', 'name'];
  orderByValue: 'price';
  isAsc = false;

  constructor(private cartProductsService: CartProductsService, private router: Router) { }

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

  onShowOrders(): void {
    const link = ['/cart/order'];
    this.router.navigate(link);
  }
}
