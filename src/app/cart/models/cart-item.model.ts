import { ProductModel } from '../../products/models/product.model';

export interface CartItem {
  item: ProductModel;
  count: number;
  price: number;
}
