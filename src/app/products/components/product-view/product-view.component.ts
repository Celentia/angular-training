import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  product: ProductModel;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();

    this.products$.subscribe(val => {
      this.product = val.find(x => x.id === +this.route.snapshot.paramMap.get('productID'));
    })
  }
  
  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }
}
