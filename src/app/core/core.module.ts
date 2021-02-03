import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from './services/constant.service';
import { LocalStorageService } from './services/local-storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: LocalStorageService,
      useValue: LocalStorageService
    }
  ]
})
export class CoreModule { }