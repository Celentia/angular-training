import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent, ProductListComponent, ProductViewComponent } from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'product/add',
    component: ProductFormComponent
  },
  {
    path: 'product/:productID',
    component: ProductViewComponent
  },
  {
    path: 'edit/:productID',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { 
  static components = [
    ProductFormComponent,
    ProductListComponent,
    ProductViewComponent
  ];
}
