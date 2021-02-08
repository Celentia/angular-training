import { ProductModel } from '../../products/models/product.model';

export interface CartModel {
  item: ProductModel;
  name: string;
  count: number;
  price: number;
}
