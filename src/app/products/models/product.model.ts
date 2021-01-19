import { Сategory } from './category.enum';

export interface ProductModel {
  name: string;
  description: string;
  price: number;
  category: Сategory;
  isAvailable: boolean;
}
