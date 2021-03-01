import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CartProductsService } from 'src/app/cart/services/cart-products.service';

@Injectable({
  providedIn: 'root'
})

export class IsCartEmptyGuard implements CanActivate {

  constructor(
    private cartProductsService: CartProductsService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cartProductsService.getProducts().length !== 0) {
        return true;
      }
      else alert('Cart is empty');
  }
}
