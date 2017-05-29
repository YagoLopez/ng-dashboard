import {Component, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import MdlSlider from "./mdlSliderClass";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'input.[ml-slider]',
styleUrls: ['./mlSlider.css'],
host: {class: 'mdl-slider'},
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
template:'', // no template
moduleId: module.id
})
export class MlSlider{

  private mdlSlider: MdlSlider;

  constructor(private host: ElementRef, private ren: Renderer2){}

  change(value: number): void {
    this.mdlSlider.change(value)
  }

  ngOnInit(){
    ml.setAttribute(this.host, 'type', 'range', this.ren);
    this.mdlSlider = new MdlSlider(this.host.nativeElement);
  }
}
