import {Component, ViewEncapsulation, ElementRef, Renderer2, ViewChild, Input, Directive} from '@angular/core';
import * as ml from "../../lib/mlLib";

@Component({
selector: 'ml-list',
moduleId: module.id,
encapsulation: ViewEncapsulation.None,
styleUrls: ['./mlList.css'],
template: '<ul #ulElement class="mdl-list"><ng-content></ng-content></ul>'
}) export class MlList {

  @ViewChild('ulElement') ulElement: ElementRef;
  constructor(private host: ElementRef, private ren: Renderer2){}

  ngOnInit(){
    const hostCssClasses: string = this.host.nativeElement.className;
    hostCssClasses && this.ulElement.nativeElement.classList.add(hostCssClasses);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item',
template: '<li class="mdl-list__item" #liElement><ng-content></ng-content></li>'
}) export class MlItem {

  @ViewChild('liElement') liElement: ElementRef;
  @Input() lines: string = '';
  constructor(private ren: Renderer2){}

  ngOnInit(){
    (this.lines === '2') && ml.setClass(this.liElement, 'mdl-list__item--two-line', this.ren);
    (this.lines === '3') && ml.setClass(this.liElement, 'mdl-list__item--three-line', this.ren);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-content',
host: {class: 'mdl-list__item-primary-content'},
template:'<span class="mdl-list__item-primary-content"><ng-content></ng-content></span>'})
export class MlItemContent {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-action',
host: {class: 'mdl-list__item-secondary-action'},
template: '<ng-content></ng-content>'})
export class MlItemAction {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[avatar]'})
export class MlIconAvatar{
  constructor(private host: ElementRef){}
  ngOnInit(){
    const icon: HTMLElement = this.host.nativeElement.querySelector('i') as HTMLElement;
    icon.classList.add('mdl-list__item-avatar');
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[list]'})
export class MlIconItem{
  constructor(private host: ElementRef){}
  ngOnInit(){
    const icon: HTMLElement = this.host.nativeElement.querySelector('i') as HTMLElement;
    icon.classList.add('mdl-list__item-icon');
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-icon',
template: '<i class="material-icons"><ng-content></ng-content></i>'
}) export class MlItemIcon {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-item-title', template: '<span><ng-content></ng-content></span>'})
export class MlItemTitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-item-subtitle',
template: '<span class="mdl-list__item-sub-title"><ng-content></ng-content></span>'})
export class MlItemSubtitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-item-desc',
template: '<span class="mdl-list__item-text-body"><ng-content></ng-content></span>'})
export class MlItemDesc {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[ellipsis]',
  host: {style: 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis'}
}) export class MlEllipsis {}
