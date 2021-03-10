import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductsRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
