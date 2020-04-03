import { Directive,ElementRef } from '@angular/core';
import {Quote } from '../app/quote'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='underline overline dotted black'
    this.elem.nativeElement.style.fontSize ='20px'
  }
}
