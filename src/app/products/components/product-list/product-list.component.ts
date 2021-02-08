import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProductsService } from 'src/app/cart/services/cart-products.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService, private cartProductsService: CartProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productsService.getProducts();
  }

  addProductToCart(id: number): void {
    this.products$.subscribe(val => {
      const product = val.find(x => x.id === id);
      this.cartProductsService.addProduct(product);
    })
  }
}
