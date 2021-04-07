import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
import { ProductsPromiseService } from '../../services';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsPromiseService: ProductsPromiseService) { }

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

  onGoBack(): void {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }
}
