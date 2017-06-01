import {Component, Renderer2, ElementRef, Input, ViewEncapsulation} from '@angular/core';
import * as ml from "../../lib/mlLib";

@Component({
selector: 'ml-grid',
moduleId: module.id,
styleUrls: ['./mlGrid.css'],
host: {class: 'mdl-grid'},
encapsulation: ViewEncapsulation.None,
template:'<ng-content></ng-content>'
})
/**
 * @classDescription Responsive grid based on grid cells
 * @arg {string} no-space There will not be space between cells
 */
export class MlGrid {

  @Input('no-space') noSpace: string;
  constructor (private host: ElementRef, private ren: Renderer2){}

  ngOnInit(){
    ml.isDefined(this.noSpace) && ml.setClass(this.host, 'mdl-grid--no-spacing', this.ren);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-grid-cell',
host: {class: 'mdl-cell'},
template: '<ng-content></ng-content>'
})
/**
* @classDescription Grid Cell
*
* @arg {string} width With of the cell
*   A cell can have several widths depending on the device.
*   For example:
*   width = 1 => the cell will have one column width.
*   width = 12 (maximum) => full screen width
*
* @arg {string} phone-width Width of the cell in phone devices
* @arg {string} tablet-width Width of the cell in tablet devices
* @arg {string} desktop-width Width of the cell in desktop devices
*
* More CSS classes can be added directly to the <ml-cell>: https://getmdl.io/components/index.html#layout-section/grid
*/
export class MlGridCell{

  @Input() width: string;
  @Input('phone-width') phoneWidth: string;
  @Input('tablet-width') tabletWidth: string;
  @Input('desktop-width') desktopWidth: string;

  constructor (private host: ElementRef, private ren: Renderer2){}

  ngOnInit(){
    const widthClass = 'mdl-cell--'+this.width+'-col';
    const phoneWidthClass = 'mdl-cell--'+this.phoneWidth+'-col-phone';
    const tabletWidthClass = 'mdl-cell--'+this.tabletWidth+'-col-tablet';
    const desktopWidthClass = 'mdl-cell--'+this.desktopWidth+'-col-desktop';
    const host = this.host;

    this.width && ml.setClass(host, widthClass, this.ren);
    this.phoneWidth && ml.setClass(host, phoneWidthClass, this.ren);
    this.tabletWidth && ml.setClass(host, tabletWidthClass, this.ren);
    this.desktopWidth && ml.setClass(host, desktopWidthClass, this.ren);
  }
}
