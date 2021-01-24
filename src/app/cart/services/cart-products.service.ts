import { Injectable } from '@angular/core';
import { Сategory } from 'src/app/products/models/category.enum';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {

  constructor() { }

  getBoughtProducts(): ProductModel[] {
    return [
      { name: 'Assam Gold', description: "This is one of the finest and the most traditional variety of the leafy black tea of Assam. When brewed, the liquor is particularly light, brisk, and aromatic.", price: 59, category: Сategory.Black, isAvailable: true },
      { name: 'Milk Oolong', description: "A high quality oolong from the Fujian province, which sends a distinctive rich waft of creaminess as you open the pack.", price: 69, category: Сategory.Oolong, isAvailable: true }
    ];;
  }
}
