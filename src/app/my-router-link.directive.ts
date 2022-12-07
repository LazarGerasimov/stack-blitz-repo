import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyRouterlink]',
})
export class MyRouterlinkDirective {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
  }
}
