import { Directive } from '@angular/core';
//directives can be used as an attribute on an html element
@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {

  constructor() { }

}
