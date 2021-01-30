import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItem } from '../../models/cart-item.model';
import { CartProductsService } from '../../services/cart-products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: CartItem[] = [];

  constructor(private cartProductsService: CartProductsService) { }

  ngOnInit(): void {
    this.getBoughtProducts()
  }

  getBoughtProducts(): void {
    this.items = this.cartProductsService.getBoughtProducts();
  }

  addOneItem(id: number) {
    this.cartProductsService.addOneItem(id);
  }

  removeOneItem(id: number) {
    this.cartProductsService.removeOneItem(id);
  }

  deleteProductFromCart(id: number) {
    this.cartProductsService.deleteProductFromCart(id);
  }

  trackByFn(index: number, item: ProductModel) {
    return item.name;
  }
}
