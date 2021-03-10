import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartProductsService } from 'src/app/cart/services/cart-products.service';
import { UserRoleService } from 'src/app/core/services/user-role.service';
import { ProductModel } from '../../models/product.model';
import { ProductsPromiseService } from './../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<ProductModel>>;

  constructor(
    public userRoleService: UserRoleService,
    private router: Router, 
    private cartProductsService: CartProductsService,
    private productsPromiseService: ProductsPromiseService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productsPromiseService.getProducts();
  }

  async addProductToCart(id: number): Promise<void> {
    const product = (await this.products).find(x => x.id === id);
    this.cartProductsService.addProduct(product);
  }

  onShowProduct(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

  onCreateProduct() {
    const link = ['/product/add'];
    this.router.navigate(link);
  }

  onEditProduct(product: ProductModel) {
    const link = ['/edit', product.id];
    this.router.navigate(link);
  }

  onDeleteProduct(product: ProductModel): void {
    this.productsPromiseService
      .deleteProduct(product)
      .then(() => (this.products = this.productsPromiseService.getProducts()))
      .catch(err => console.log(err));
  }
}
