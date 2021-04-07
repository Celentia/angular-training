import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { routerReducers, RouterEffects } from './router';
import { ProductsStoreModule } from './products/products-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    EffectsModule.forRoot([RouterEffects]),
    ProductsStoreModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
  ]
})
export class RootStoreModule { }
