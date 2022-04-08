import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleFontSize]',
})
export class TitleFontSizeDirective {
  constructor(private element: ElementRef) {
    let style = element.nativeElement.style;
    style.fontSize = '20px';
    style.textTransform = 'uppercase';
    style.fontWeight = '600';
    style.color = '#673ab7';
  }
}
