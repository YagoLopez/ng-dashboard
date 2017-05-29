//todo: (global) probar a sacar factor comun en una factoria a los constructores para evitar repetir tanto codigo
import {Component, ElementRef, Input, Renderer2, ViewEncapsulation} from "@angular/core";
import MdlProgress from "./mdlPprogressClass"
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-progressbar',
styleUrls: ['./mlProgressbar.css'],
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-progress'},
template: '',
moduleId: module.id
})
export class MlProgressbar {

  @Input('progress') progressValue: string = '0';
  @Input('buffer') bufferValue: string; // BUFFER must be greater than PROGRESS to be visible
  @Input() indeterminate: string;
  mdlProgress: MdlProgress;
  constructor(private host: ElementRef, private ren: Renderer2){}

  setProgress(value: string){
    this.progressValue = value;
    this.mdlProgress.setProgress(value);
  }
  setBuffer(value: string){
    this.bufferValue = value;
    this.mdlProgress.setBuffer(value);
  }
  ngOnInit() {
    this.mdlProgress = new MdlProgress(this.host.nativeElement);
    this.progressValue && this.setProgress(this.progressValue);
    this.bufferValue && this.setBuffer(this.bufferValue);
    ml.isDefined(this.indeterminate) && ml.setClass(this.host, 'mdl-progress__indeterminate', this.ren);
  }
}
