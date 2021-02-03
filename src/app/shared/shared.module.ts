import { NgModule } from '@angular/core';
import { FontSizeDirective } from './directives/font-size.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [HighlightDirective, FontSizeDirective],
  exports: [
    HighlightDirective,
    FontSizeDirective
  ]
})
export class SharedModule { }
