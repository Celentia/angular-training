import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from './../../../products/models/product.model';
import { ProductsService } from './../../../products/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<ProductModel[]>;

  constructor(
    private router: Router, 
    private productsService: ProductsService, 
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productsService.getProducts();
  }

  onShowProduct(product: ProductModel): void {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }
}
