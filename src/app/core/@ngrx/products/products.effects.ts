import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import { ProductsPromiseService } from './../../../products/services';
import * as RouterActions from './../router/router.actions';

import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap, map } from 'rxjs/operators';
import { ProductModel, Product } from '../../../products/models/product.model';


@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productPromiseService: ProductsPromiseService) {
      console.log('[PRODUCTS EFFECTS]');
  }

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productPromiseService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );
  
  updateProduct$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductsActions.updateProduct),
    pluck('product'),
    concatMap((product: ProductModel) =>
      this.productPromiseService
        .updateProduct(product)
        .then((updatedProduct: Product) => {
          return ProductsActions.updateProductSuccess({ product: updatedProduct });
        })
        .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productPromiseService
          .createProduct(product)
          .then((createdProduct: Product) => {
            return ProductsActions.createProductSuccess({ product: createdProduct });
          })
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productPromiseService
          .deleteProduct(product)
          .then(
            () => {
              return ProductsActions.deleteProductSuccess({ product });
            }
          )
          .catch(error => ProductsActions.deleteProductError({ error }))
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action => {
        const { type: actionType, product: { id: productID } } = action;
        let path: any[];

        if (actionType === '[Update Product Effect] UPDATE_PRODUCT_SUCCESS') {
          path = ['/products-list', { editedProductID: productID }];
        } else {
          path = ['/products-list'];
        }

        return RouterActions.go({ path });
      })
    )
  );
}
