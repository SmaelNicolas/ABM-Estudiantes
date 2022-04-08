import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNameStudent]',
})
export class NameStudentDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.fontSize = '25px';
    element.nativeElement.style.color = '#673ab7';
    element.nativeElement.style.margin = '20px 0px';
    element.nativeElement.style.fontWeight = '500';
  }
}
