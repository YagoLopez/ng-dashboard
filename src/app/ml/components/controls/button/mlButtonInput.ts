// NOTE: for maximum compatibility between browsers, when using html5 controls it is recommended to define aditional
// validators. For example, when using <input type="date"> it is recommended to defined a validator with a regexp
// validating the date string
import {Component, ElementRef, Input, Renderer2, ViewChild, ChangeDetectionStrategy,
  HostBinding} from "@angular/core";
import MdlButton from "./mdlButtonClass";
import * as ml from "../../../lib/ml_lib";

// note: <input type="file, date, color, etc."> not cross-browser compatible
const ML_BUTTON_INPUT_TYPES = ['submit', 'reset', 'button'];
const ML_BUTTON_INPUT_ASPECTS = ['raised', 'colored', 'accent'];
const ML_BUTTON_INPUT_VARIANTS = ['fab', 'minifab', 'icon'];

@Component({
selector: 'ml-button-input',
moduleId: module.id,
styleUrls: ['./mlButton.css'],
changeDetection: ChangeDetectionStrategy.OnPush,
template:`

<label #label class="mdl-button"><ng-content></ng-content>
<span class="mdl-button__ripple-container">
<input [type]="type" style="display: none"><span class="mdl-ripple"></span></span>
</label>
<div *ngIf="showError" class="mdl-textfield__error"><ng-content select="ml-error"></ng-content></div>

`//template
}) export class MlButtonInput{

  @ViewChild('label') label: ElementRef;
  @Input() type: string = 'submit'; // default type
  @Input() aspect: string;
  @Input() variant: string;
  @Input() disabled: string;
  @HostBinding('attr.disabled') get getDisabled() {
    !this.disabled ? this.enable() : this.disable();
    return null;
  }
  showError: boolean;
  constructor(private ren: Renderer2){}

  ngOnInit(){
    // @Input "type" ---------------------------------------------------------------------------------------------------
    if( !ml.isAttributeValid(this.type.toLowerCase(), ML_BUTTON_INPUT_TYPES) ){
      console.warn(`<ml-button-input> Invalid attribute: type="${this.type}"`);
    }
    // @Input "aspect" -------------------------------------------------------------------------------------------------
    ml.isSubstring('raised', this.aspect) && ml.setClass(this.label, 'mdl-button--raised', this.ren);
    ml.isSubstring('colored', this.aspect) && ml.setClass(this.label, 'mdl-button--colored', this.ren);
    ml.isSubstring('accent', this.aspect) && ml.setClass(this.label, 'mdl-button--accent', this.ren);

    // @Input "variant" ------------------------------------------------------------------------------------------------
    if( this.variant && !ml.isAttributeValid(this.variant, ML_BUTTON_INPUT_VARIANTS) ){
      console.warn(`<ml-button> Wrong attribute: variant="${this.variant}"`);
    }
    if (ml.isSubstring('minifab', this.variant)){
      ml.setClass(this.label, 'mdl-button--fab', this.ren);
      ml.setClass(this.label, 'mdl-button--mini-fab', this.ren);
    }
    ml.isSubstring('fab', this.variant) && ml.setClass(this.label, 'mdl-button--fab', this.ren);
    ml.isSubstring('icon', this.variant) && ml.setClass(this.label, 'mdl-button--icon', this.ren);

    new MdlButton(this.label.nativeElement);
  }
  disable(){ this.label.nativeElement.setAttribute('disabled', true) }
  enable(){ this.label.nativeElement.removeAttribute('disabled') }
}
