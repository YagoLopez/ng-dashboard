import {Component, ViewChild, ElementRef, Directive} from "@angular/core";

declare var HTMLDialogElement: any;

@Component({
selector: 'ml-dialog',
moduleId: module.id,
styleUrls: ['./mlDialog.css'],
template:`
  
<dialog #mdlDialog class="mdl-dialog">
  <h6 class="mdl-dialog__title">
    <ng-content select="ml-dialog-title"></ng-content>
  </h6>
  <div class="mdl-dialog__content">
    <ng-content select="ml-dialog-content"></ng-content>
  </div>
  <div class="mdl-dialog__actions">
    <ng-content select="ml-dialog-actions"></ng-content>
  </div>
</dialog>    
  
`//template
})
export class MlDialog{

  @ViewChild('mdlDialog') mdlDialog: ElementRef;

  open(){ this.mdlDialog.nativeElement.showModal() }

  close(){ this.mdlDialog.nativeElement.close() }

  ngOnInit(){
    if (typeof HTMLDialogElement !== 'function') {
      window.alert('HTML5 Dialog component not supported by browser');
    }
  }
}

@Directive({ selector: 'ml-dialog-title' }) export class MlDialogTitle{}
@Directive({ selector: 'ml-dialog-content' }) export class MlDialogContent{}
@Directive({ selector: 'ml-dialog-actions' }) export class MlDialogActions{}
