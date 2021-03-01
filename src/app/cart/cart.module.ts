import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartRoutingModule.components, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
