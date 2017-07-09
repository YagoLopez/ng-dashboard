//todo: (general) control de excepciones en angular 2
//todo: usar enums con typescript 2.4

import {Component, ElementRef, Input, Renderer2, ViewEncapsulation} from "@angular/core";
import MdlButton from "./mdlButtonClass";
import * as ml from "../../../lib/mlLib";

const ML_BUTTON_ASPECTS = ['raised, colored, accent'];
const ML_BUTTON_VARIANTS = ['fab', 'minifab', 'icon'];

/** @Input.aspect ="colored" => background blue, font-color white (by default) */
/** @Input.aspect ="accent" => background magenta, font-color white (by default) */
@Component({
selector: 'ml-button',
moduleId: module.id,
encapsulation: ViewEncapsulation.None,
styleUrls: ['./mlButton.css'],
host: {class: 'mdl-button'},
template: '<ng-content></ng-content>'
}) export class MlButton{

  @Input() aspect: string;
  @Input() variant: string;
  constructor(public host: ElementRef, private ren: Renderer2){}

  ngOnInit(){
    // @Input "aspect" -------------------------------------------------------------------------------------------------
    this.aspect && ( this.aspect = this.aspect.toLowerCase() );
    ml.isSubstring('raised', this.aspect) && ml.setClass(this.host, 'mdl-button--raised', this.ren);
    ml.isSubstring('colored', this.aspect) && ml.setClass(this.host, 'mdl-button--colored', this.ren);
    ml.isSubstring('accent', this.aspect) && ml.setClass(this.host, 'mdl-button--accent', this.ren);

   // @Input "variant" -------------------------------------------------------------------------------------------------
    this.variant && ( this.variant = this.variant.toLowerCase() );
    if( this.variant && !ml.isAttributeValid(this.variant, ML_BUTTON_VARIANTS) ){
      console.warn(`<ml-button> Wrong attribute: variant="${this.variant}"`);
    }
    if (ml.isSubstring('minifab', this.variant)){
      ml.setClass(this.host, 'mdl-button--fab', this.ren);
      ml.setClass(this.host, 'mdl-button--mini-fab', this.ren);
    }
    ml.isSubstring('fab', this.variant) && ml.setClass(this.host, 'mdl-button--fab', this.ren);
    ml.isSubstring('icon', this.variant) && ml.setClass(this.host, 'mdl-button--icon', this.ren);
    // End -------------------------------------------------------------------------------------------------------------

    new MdlButton(this.host.nativeElement);
  }
  disable(){ this.host.nativeElement.setAttribute('disabled', true); }
  enable(){ this.host.nativeElement.removeAttribute('disabled'); }
}
