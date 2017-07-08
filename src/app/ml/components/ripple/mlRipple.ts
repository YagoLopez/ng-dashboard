//todo: (general) convertir mllib de namespace a module. de esta forma se pueden cargar las funciones auxiliares una a una
import {Directive, ElementRef, Renderer2} from "@angular/core";
import MdlRipple from "./mdlRippleClass";

// Internal note: in complex elements where is not enough to use one "ripple" attribute,
// a "<label>" container is used in the template
@Directive({selector: '[ripple]'})
export class MlRipple{

  constructor(private host: ElementRef, private ren: Renderer2) {}

  ngOnInit(){
    const elementWithRipple = this.host.nativeElement;
    this.ren.addClass(elementWithRipple, 'mdl-js-ripple-effect');
    setTimeout(()=> {
      new MdlRipple(elementWithRipple);
    }, 0)
  }
}
