import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleFontSize]',
})
export class TitleFontSizeDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.fontSize = '20px';
    element.nativeElement.style.textDecoration = 'underline';
  }
}
