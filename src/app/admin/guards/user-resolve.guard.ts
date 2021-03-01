import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

import { ProductModel } from './../../products/models/product.model';

@Injectable({
  providedIn: 'any'
})
export class AdminResolveGuard implements Resolve<ProductModel> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const message = of(null).pipe(mapTo('Resolver works with delay 1s'), delay(1000));
    return message.subscribe(val => alert(val));
  }
}
