import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // а если тип будет string | object?
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): void {
    JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
