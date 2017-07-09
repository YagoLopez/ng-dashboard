//todo: repensar lo de los atributos sin valor especifico de cara al comportamiento de angular en data-binding:
//todo: [attributo]="valor". Si no hay valor puede que haya problemas
import {Component, ElementRef, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy}  from "@angular/core";
import MdlSpinner from "./mdlSpinnerClass";
import * as ml from "../../lib/mlLib";

@Component({
selector: 'ml-spinner',
moduleId: module.id,
styleUrls: ['./mlSpinner.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
host: {class: 'mdl-spinner is-active'},
template:''
}) export class MlSpinner {

  @Input('single-color') singleColor: string;
  @Input('multicolor') multicolor: string;
  @Input('inactive') inactive: string;
  mdlSpinner: MdlSpinner;

  constructor(private host: ElementRef, private ren: Renderer2){}
  start(){ this.mdlSpinner.start() }
  stop(){ this.mdlSpinner.stop() }

  ngOnInit() {
    this.mdlSpinner = new MdlSpinner(this.host.nativeElement);
    ml.isDefined(this.singleColor) && ml.setClass(this.host, 'mdl-spinner--single-color', this.ren);
    ml.isDefined(this.inactive) && this.mdlSpinner.stop();
  }
}
