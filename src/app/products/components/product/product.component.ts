import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: ProductModel;

  @Output() buyProduct = new EventEmitter<number>();
  @Output() showProduct = new EventEmitter<ProductModel>();

  constructor() { }

  onBuyProduct(): void {
    this.buyProduct.emit(this.product.id);
  }  
  
  onShowProduct() {
    this.showProduct.emit(this.product);
  }
}
