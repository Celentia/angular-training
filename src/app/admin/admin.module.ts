import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductItemComponent, ProductsComponent } from './components';

@NgModule({
  declarations: [ProductItemComponent, AdminRoutingModule.components],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
