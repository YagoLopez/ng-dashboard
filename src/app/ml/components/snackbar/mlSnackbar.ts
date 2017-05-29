import {Component, ElementRef, Input, ViewEncapsulation} from "@angular/core";
import MdlSnackbar from "./mdlSnackbarClass";

export interface IConfigSnackbar {
  message: string, actionHandler?: Function, actionText?: string, timeout?: number
}

@Component({
selector: 'ml-snackbar',
moduleId: module.id,
styleUrls: ['./mlSnackbar.css'],
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-snackbar'},
template:`

<div class="mdl-snackbar__text"></div>
<button class="mdl-snackbar__action" (click)="close()"></button>

`//template
})
export class MlSnackbar{
  @Input() config: IConfigSnackbar;
  mdlSnackbar: MdlSnackbar;

  constructor( private hostElm: ElementRef){}
  show(){ this.mdlSnackbar.showSnackbar(this.config) }
  close(){ this.mdlSnackbar.cleanup_() }
  ngAfterViewInit(){ this.mdlSnackbar = new MdlSnackbar(this.hostElm.nativeElement) }

}
