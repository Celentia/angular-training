import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OrderComponent, OrderListComponent, OrderFormComponent } from './components';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({  
  declarations: [OrderComponent, OrderListComponent, OrderFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  exports: []
})
export class OrdersModule { }
