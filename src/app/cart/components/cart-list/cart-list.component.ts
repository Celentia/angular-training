import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartProductsService } from '../../services/cart-products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: ProductModel[];

  constructor(private cartProductsService: CartProductsService) { }

  getBoughtProducts(): void {
    this.items = this.cartProductsService.getBoughtProducts();
  }

  ngOnInit(): void {
    this.getBoughtProducts()
  }

  trackByFn(index: number, item: ProductModel) {
    return item.name;
  }
}
