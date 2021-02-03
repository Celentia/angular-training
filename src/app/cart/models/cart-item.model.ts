import { ProductModel } from '../../products/models/product.model';

export interface CartModel {
  item: ProductModel;
  count: number;
  price: number;
}
