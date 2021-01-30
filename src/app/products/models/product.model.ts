import { Сategory } from './category.enum';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Сategory;
  isAvailable: boolean;
}
