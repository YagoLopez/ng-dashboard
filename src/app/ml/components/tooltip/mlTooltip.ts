import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import MdlTooltip from "./mdlTooltipClass";
import * as ml from "../../lib/mlLib";

@Component({
selector: 'ml-tooltip',
styleUrls: ['./mlTooltip.css'],
template: '<span #spanTooltip [attr.for]="for" class="mdl-tooltip"><ng-content></ng-content></span>',
moduleId: module.id
})
export class MlTooltip {

  @ViewChild('spanTooltip') spanTooltip: ElementRef;
  @Input() for: string;
  @Input() position: string;  // todo: revisar valores de las posiciones: [right, left, top, bottom]
  @Input() large: string;
  constructor(private ren: Renderer2){}

  ngAfterViewInit(){
    this.position && ( this.position = this.position.toLowerCase() );
    if(this.position && !ml.isAttributeValid(this.position, ['right', 'left', 'top', 'bottom']) ){
      console.warn('Invalid position name:', this.position);
    }
    ml.isDefined(this.large) && ml.setClass(this.spanTooltip, 'mdl-tooltip--large', this.ren);
    (this.position === 'right') && ml.setClass(this.spanTooltip, 'mdl-tooltip--right', this.ren);
    (this.position === 'left') && ml.setClass(this.spanTooltip, 'mdl-tooltip--left', this.ren);
    (this.position === 'top') && ml.setClass(this.spanTooltip, 'mdl-tooltip--top', this.ren);
    (this.position === 'bottom') && ml.setClass(this.spanTooltip, 'mdl-tooltip--bottom', this.ren);

    new MdlTooltip(this.spanTooltip.nativeElement);
  }
}
