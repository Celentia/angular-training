import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  constructor() { }

  private config: ConfigModel;

  setData(config: ConfigModel): void {
    this.config = {...this.config, ...config};
  }

  getData(): ConfigModel {
    return this.config;
  }
}
