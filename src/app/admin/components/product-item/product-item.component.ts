import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from './../../../products/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product!: ProductModel;
  @Output() showProduct = new EventEmitter<ProductModel>();

  constructor() { }
  
  onShowProduct() {
    this.showProduct.emit(this.product);
  }
}
