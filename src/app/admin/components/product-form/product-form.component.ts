import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/interfaces/can-component-deactivate.interface';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {

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
    this.router.navigate(['./../../../products'], { relativeTo: this.route});
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return confirm('Go back?');
    }
}
