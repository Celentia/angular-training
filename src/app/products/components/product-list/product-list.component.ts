import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProductsData, selectProductsError } from './../../../core/@ngrx';
import { Observable } from 'rxjs';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

import { CartProductsService } from 'src/app/cart/services/cart-products.service';
import { UserRoleService } from 'src/app/core/services/user-role.service';
import { ProductModel, Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<ProductModel>>;
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  constructor(
    public userRoleService: UserRoleService,
    private cartProductsService: CartProductsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData);
    this.productsError$ = this.store.select(selectProductsError);
    this.store.dispatch(ProductsActions.getProducts());
  }

  async addProductToCart(id: number): Promise<void> {
    const product = (await this.products).find(x => x.id === id);
    this.cartProductsService.addProduct(product);
  }

  onShowProduct(product: ProductModel): void {
    const link = ['/product', product.id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }

  onCreateProduct() {
    this.store.dispatch(RouterActions.go({
      path: ['/product/add']
    }));
  }

  onEditProduct(product: ProductModel) {
    const link = ['/edit', product.id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }

  onDeleteProduct(product: ProductModel): void {
    const productToDelete: Product = { ...product };
    this.store.dispatch(ProductsActions.deleteProduct({ product: productToDelete }));
  }
}
