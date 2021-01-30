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

  @Output() onChanged = new EventEmitter<number>();

  constructor() { }

  onBuy() {
    this.onChanged.emit(this.product.id);
  }
}
