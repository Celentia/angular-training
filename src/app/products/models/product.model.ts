import { Сategory } from './category.enum';
export class ProductModel implements Product {
  constructor(
    public id: number = null,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category?: Сategory,
    public isAvailable?: boolean
  ) {}
}

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  category?: Сategory;
  isAvailable?: boolean;
}
