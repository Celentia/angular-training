import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { FirstComponent } from './first/first.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './core/interceptors';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    CartModule,
    CoreModule,
    CommonModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
