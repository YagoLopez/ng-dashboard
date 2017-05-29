import {Component, Renderer2, ElementRef, ViewEncapsulation, Directive, Input} from '@angular/core';
import * as ml from '../../lib/ml_lib'

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'table.[ml-table]',
styleUrls: ['./mlTable.css'],
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-data-table'},
template: '<ng-content></ng-content>',
moduleId: module.id
})
export class MlTable {

  @Input() shadow: string;
  @Input() selectable: string;
  @Input() order: string;

  constructor(private host: ElementRef, private ren: Renderer2) {}

  private shadowClassName(shadowValue: string): string {
    return `mdl-shadow--${shadowValue}dp`;
  }

  ngOnInit() {
    ml.setClass(this.host, this.shadowClassName(this.shadow), this.ren);
    ml.isDefined(this.selectable) && ml.setClass(this.host, 'mdl-data-table--selectable', this.ren);
    if (this.order === "asc"){
      ml.setClass(this.host, 'mdl-data-table__header--sorted-ascending', this.ren);
    }
    if (this.order === "desc"){
      ml.setClass(this.host, 'mdl-data-table__header--sorted-descending', this.ren);
    }
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({selector: '[text-cell]', host: {class: 'mdl-data-table__cell--non-numeric'}})
export class MlTableTextCell {}
