import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { ProductModel, Product } from './../../models/product.model';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy  {
  product: ProductModel;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.product = new ProductModel();

    const observer: any = {
      next: (product: ProductModel) => {
        this.product = {...product}; 
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Stream is completed');
      }
    };

    this.store.select(selectSelectedProductByUrl)
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(observer);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  onSaveProduct() {
    const product = { ...this.product } as Product;
    if (product.id) {
      this.store.dispatch(ProductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProductsActions.createProduct({ product }));
    }
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.go({
      path: ['/products-list']
    }));
  }
}
