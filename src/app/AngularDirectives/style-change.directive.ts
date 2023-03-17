import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleChange]'
})
export class StyleChangeDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.color = 'red';
  }
}
