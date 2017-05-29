import MdlElement from "../../element/mdl_element";

export default class MdlCheckbox extends MdlElement{
  onChange_: Function;
  onFocus_: Function;
  onBlur_: Function;
  onMouseUp_: Function;
  checkToggleState: Function;
  checkDisabled: Function;
  disable: Function;
  enable: Function;
  check: Function;
  uncheck: Function;
  updateClasses_: Function;
  blur_: Function;
  constructor(el: HTMLElement){
    super(el);
  }
}
MdlCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
MdlCheckbox.prototype.CssClasses_ = {
  INPUT: 'mdl-checkbox__input',
  BOX_OUTLINE: 'mdl-checkbox__box-outline',
  FOCUS_HELPER: 'mdl-checkbox__focus-helper',
  TICK_OUTLINE: 'mdl-checkbox__tick-outline',
  RIPPLE_EFFECT: 'mdl-js-ripple-effect',
  RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
  RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
  RIPPLE_CENTER: 'mdl-ripple--center',
  RIPPLE: 'mdl-ripple',
  IS_FOCUSED: 'is-focused',
  IS_DISABLED: 'is-disabled',
  IS_CHECKED: 'is-checked',
  IS_UPGRADED: 'is-upgraded'
};
/**
 * Handle change of state.
 * @param {Event} event The event that fired.
 */
MdlCheckbox.prototype.onChange_ = function (event: any) {
  this.updateClasses_();
};
/**
 * Handle focus of element.
 * @param {Event} event The event that fired.
 */
MdlCheckbox.prototype.onFocus_ = function (event: any) {
  this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
 * Handle lost focus of element.
 * @param {Event} event The event that fired.
 */
MdlCheckbox.prototype.onBlur_ = function (event: any) {
  this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
 * Handle mouseup.
 * @param {Event} event The event that fired.
 */
MdlCheckbox.prototype.onMouseUp_ = function (event: any) {
  this.blur_();
};
MdlCheckbox.prototype.updateClasses_ = function () {
  this.checkDisabled();
  this.checkToggleState();
};
/**
 * Add blur.
 */
MdlCheckbox.prototype.blur_ = function () {
  // TODO: figure out why there's a focus event being fired after our blur,
  // so that we can avoid this hack.
  window.setTimeout(function () {
    this.inputElement_.blur();
  }.bind(this), this.Constant_.TINY_TIMEOUT);
};
/**
 * Check the inputs toggle state and update display.
 */
MdlCheckbox.prototype.checkToggleState = function () {
  if (this.inputElement_.checked) {
    this.element_.classList.add(this.CssClasses_.IS_CHECKED);
  } else {
    this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
  }
};
/**
 * Check the inputs disabled state and update display.
 */
MdlCheckbox.prototype.checkDisabled = function () {
  if (this.inputElement_.disabled) {
    this.element_.classList.add(this.CssClasses_.IS_DISABLED);
  } else {
    this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
  }
};
/**
 * Disable checkbox.
 */
MdlCheckbox.prototype.disable = function () {
  this.inputElement_.disabled = true;
  this.updateClasses_();
};
/**
 * Enable checkbox.
 */
MdlCheckbox.prototype.enable = function () {
  this.inputElement_.disabled = false;
  this.updateClasses_();
};
/**
 * Check checkbox.
 */
MdlCheckbox.prototype.check = function () {
  this.inputElement_.checked = true;
  this.updateClasses_();
};
/**
 * Uncheck checkbox.
 */
MdlCheckbox.prototype.uncheck = function () {
  this.inputElement_.checked = false;
  this.updateClasses_();
};
MdlCheckbox.prototype.init = function () {
  if (this.element_) {
    this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
    var boxOutline = document.createElement('span');
    boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
    var tickContainer = document.createElement('span');
    tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
    var tickOutline = document.createElement('span');
    tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
    boxOutline.appendChild(tickOutline);
    this.element_.appendChild(tickContainer);
    this.element_.appendChild(boxOutline);
    if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
      this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
      this.rippleContainerElement_ = document.createElement('span');
      this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
      this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
      this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
      this.boundRippleMouseUp = this.onMouseUp_.bind(this);
      this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
      var ripple = document.createElement('span');
      ripple.classList.add(this.CssClasses_.RIPPLE);
      this.rippleContainerElement_.appendChild(ripple);
      this.element_.appendChild(this.rippleContainerElement_);
    }
    this.boundInputOnChange = this.onChange_.bind(this);
    this.boundInputOnFocus = this.onFocus_.bind(this);
    this.boundInputOnBlur = this.onBlur_.bind(this);
    this.boundElementMouseUp = this.onMouseUp_.bind(this);
    this.inputElement_.addEventListener('change', this.boundInputOnChange);
    this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
    this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
    this.element_.addEventListener('mouseup', this.boundElementMouseUp);
    this.updateClasses_();
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  }
};

