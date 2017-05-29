import MdlElement from "../../element/mdl_element";

export default class MdlSlider extends MdlElement{
  isIE_: any;
  onChange_: Function;
  onInput_: Function;
  onMouseUp_: Function;
  updateValueStyles_: Function;
  disable: Function;
  enable: Function;
  change: Function;
  constructor(el: HTMLElement){
    super(el);
    this.isIE_ = window.navigator.msPointerEnabled;
  }
}
MdlSlider.prototype.CssClasses_ = {
    IE_CONTAINER: 'mdl-slider__ie-container',
    SLIDER_CONTAINER: 'mdl-slider__container',
    BACKGROUND_FLEX: 'mdl-slider__background-flex',
    BACKGROUND_LOWER: 'mdl-slider__background-lower',
    BACKGROUND_UPPER: 'mdl-slider__background-upper',
    IS_LOWEST_VALUE: 'is-lowest-value',
    IS_UPGRADED: 'is-upgraded'
};
/**
   * Handle input on element.
   * @param {Event} event The event that fired.
   */
MdlSlider.prototype.onInput_ = function (event: any) {
    this.updateValueStyles_();
};
/**
   * Handle change on element.
   * @param {Event} event The event that fired.
   */
MdlSlider.prototype.onChange_ = function (event: any) {
    this.updateValueStyles_();
};
/**
   * Handle mouseup on element.
   * @param {Event} event The event that fired.
   */
MdlSlider.prototype.onMouseUp_ = function (event: any) {
    event.target.blur();
};
/**
   * Handle mousedown on container element.
   * This handler is purpose is to not require the use to click
   * exactly on the 2px slider element, as FireFox seems to be very
   * strict about this.
   *
   * @param {Event} event The event that fired.
   */
// modificaciones
// MdlSlider.prototype.onContainerMouseDown_ = function (event: any) {
    // If this click is not on the parent element (but rather some child)
    // ignore. It may still bubble up.
    // if (event.target !== this.element_.parentElement) {
    //     return;
    // }
    // Discard the original event and create a new event that
    // is on the slider element.
    // event.preventDefault();

    // let MouseEvent: any;
    // let newEvent: any;
    // newEvent = MouseEvent('mousedown', {
    //     target: event.target,
    //     buttons: event.buttons,
    //     clientX: event.clientX,
    //     clientY: this.element_.getBoundingClientRect().y
    // });
    // this.element_.dispatchEvent(newEvent);
// };
// fin modificaciones
/**
   * Handle updating of values.
   */
MdlSlider.prototype.updateValueStyles_ = function () {
    // Calculate and apply percentages to div structure behind slider.
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
    if (fraction === 0) {
        this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
    }
    if (!this.isIE_) {
        this.backgroundLower_.style.flex = fraction;
        this.backgroundLower_.style.webkitFlex = fraction;
        this.backgroundUpper_.style.flex = 1 - fraction;
        this.backgroundUpper_.style.webkitFlex = 1 - fraction;
    }
};
/**
   * Disable slider.
   */
MdlSlider.prototype.disable = function () {
    this.element_.disabled = true;
};
/**
   * Enable slider.
   */
MdlSlider.prototype.enable = function () {
    this.element_.disabled = false;
};
/**
   * Update slider value.
   * @param {number} value The value to which to set the control (optional).
   */
MdlSlider.prototype.change = function (value: any) {
    if (typeof value !== 'undefined') {
        this.element_.value = value;
    }
    this.updateValueStyles_();
};
MdlSlider.prototype.init = function () {
    if (this.element_) {
        if (this.isIE_) {
            // Since we need to specify a very large height in IE due to
            // implementation limitations, we add a parent here that trims it down to
            // a reasonable size.
            var containerIE = document.createElement('div');
            containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
            this.element_.parentElement.insertBefore(containerIE, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            containerIE.appendChild(this.element_);
        } else {
            // For non-IE browsers, we need a div structure that sits behind the
            // slider and allows us to style the left and right sides of it with
            // different colors.
            var container = document.createElement('div');
            container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
            this.element_.parentElement.insertBefore(container, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            container.appendChild(this.element_);
            var backgroundFlex = document.createElement('div');
            backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
            container.appendChild(backgroundFlex);
            this.backgroundLower_ = document.createElement('div');
            this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
            backgroundFlex.appendChild(this.backgroundLower_);
            this.backgroundUpper_ = document.createElement('div');
            this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
            backgroundFlex.appendChild(this.backgroundUpper_);
        }
        this.boundInputHandler = this.onInput_.bind(this);
        this.boundChangeHandler = this.onChange_.bind(this);
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
        // this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
        this.element_.addEventListener('input', this.boundInputHandler);
        this.element_.addEventListener('change', this.boundChangeHandler);
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
        // this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
        this.updateValueStyles_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};

