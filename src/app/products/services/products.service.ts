import { Injectable } from '@angular/core';
import { Сategory } from '../models/category.enum';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    return [
      { id: 1, name: 'Assam Gold', description: 'This is one of the finest and the most traditional variety of the leafy black tea of Assam. When brewed, the liquor is particularly light, brisk, and aromatic.', price: 59, category: Сategory.Black, isAvailable: true },
      { id: 2, name: 'Chinese Sencha', description: 'This Chinese Sencha is a distinctive green tea that reflects its Japanese processing and Chinese terroir. The leaves are Long with a crisp dryness and grassy yet subtly floral scent.', price: 79, category: Сategory.Green, isAvailable: false },
      { id: 3, name: 'Milk Oolong', description: 'A high quality oolong from the Fujian province, which sends a distinctive rich waft of creaminess as you open the pack.', price: 69, category: Сategory.Oolong, isAvailable: true }
    ];
  }
}
