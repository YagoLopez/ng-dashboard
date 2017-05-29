/**
 * @ClassDesc Most of the Material Light MlComponents are based in Mdl Classes (defined in mdl*Class.ts files).
 * At the same time, all Mdl Classes inherit from this base MdlElement
 * @Class {MdlElement}
 * @params {HTMLElement} HTML Element used as base to create ML components
 */
export default class MdlElement{
  init: Function;
  element_: HTMLElement;
  Constant_: Object;
  CssClasses_: Object | any;
  updateClasses_: Function;
  constructor (el: HTMLElement) {this.element_ = el; this.init()}
}
