import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from './../../models/product.model';
import { ProductsPromiseService } from '../../services';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product = new ProductModel();

    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('productID')
            ? this.productsPromiseService.getProduct(+params.get('productID'))
            : Promise.resolve(null);
        }))  
      .subscribe(observer);
  }

  onSaveProduct() {
    const product = { ...this.product } as ProductModel;
    const method = product.id ? 'updateProduct' : 'createProduct';
    console.log(product);
    this.productsPromiseService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack(): void {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }
}
