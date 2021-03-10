import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { concatMap, catchError, retry, publish, refCount, share } from 'rxjs/operators';

import { OrdersAPI } from '../orders.config';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'any'
})
export class OrdersObservableService {

  constructor(
    private http: HttpClient,
    @Inject(OrdersAPI) private ordersUrl: string
  ) {}

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.ordersUrl).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  getOrder(id: number): Observable<OrderModel> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http.get<OrderModel>(url)
      .pipe(
          retry(3),
          share(),
          catchError(this.handleError)
      );
  }

  createOrder(order: OrderModel): Observable<OrderModel> {
    const url = this.ordersUrl;
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<OrderModel>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateOrder(order: OrderModel): Observable<OrderModel> {
    const url = `${this.ordersUrl}/${order.id}`;
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
          .put<OrderModel>(url, body, options)
          .pipe(
            catchError(this.handleError)
          );
  }
  
  deleteOrder(order: OrderModel): Observable<OrderModel[]> {
    const url = `${this.ordersUrl}/${order.id}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getOrders()),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
