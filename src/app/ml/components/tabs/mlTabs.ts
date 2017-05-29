import {Component, ElementRef, Directive, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import MdlTabs from "./mdlTabsClass";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-tabs',
styleUrls: ['./mlTabs.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
host: {class: 'mdl-tabs'},
template: '<ng-content></ng-content>',
moduleId: module.id
})
export class MlTabs {
  constructor(private host: ElementRef){}
  ngAfterViewInit(){ new MdlTabs(this.host.nativeElement) }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-tabs-bar', host: {class: 'mdl-tabs__tab-bar'}, template: '<ng-content></ng-content>'})
export class MlTabsBar{}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[ml-tab]', host: {class: 'mdl-tabs__tab'}}) export class MlTab {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[ml-active]', host: {class: 'is-active'}}) export class MlActive {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-tab-panel', host: {class: 'mdl-tabs__panel'}, template: '<ng-content></ng-content>'})
export class MlTabPanel{}
