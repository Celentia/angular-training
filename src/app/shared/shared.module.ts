import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontSizeDirective } from './directives/font-size.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, FontSizeDirective, OrderByPipe],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    FontSizeDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
