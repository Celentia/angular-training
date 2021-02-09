import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {  }

  @Input('appFontSize') fontSize: string;

  @HostListener('click') onClick(): void {
    this.changeFontSize(this.fontSize || '16px');
  }

  private changeFontSize(fontSize: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', fontSize);
  }
}
