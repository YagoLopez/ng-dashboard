//todo: no crear el contenedor ripple (span) cuando no se usa la directiva ripple
//todo: toggles no funionan bien en edge
import {Component, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlToggle from './mdlToggleClass';

@Component({
selector: 'ml-toggle',
moduleId: module.id,
styleUrls: ['./mlToggle.css'],
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlToggle), multi: true}],
template:`

<label #label [attr.for]="id+'mdl'" class="mdl-icon-toggle" [ngClass]="{'is-checked': isChecked()}">
<input type="checkbox"  class="mdl-icon-toggle__input" [attr.id]="id+'mdl'" [(ngModel)]="model" [disabled]="disabled">
<span class="mdl-icon-toggle__label"><ng-content></ng-content></span>
<span class="mdl-icon-toggle__ripple-container">
  <span class="mdl-ripple"></span>
</span>
</label>

`//template
}) export class MlToggle implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() disabled: string;
  private _model: any;
  private onTouch = () => {};
  private onChange = (_: any) => {};
  mdlToggle: MdlToggle;

  ngOnInit() {
    this.mdlToggle = new MdlToggle(this.label.nativeElement);
    if(this.disabled && (this.disabled.toLowerCase() === 'true'))
      this.mdlToggle.disable();
  }
  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }
  get model() { return this._model }
  writeValue(value: any): void { this.model = value }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
  isChecked(){ return this.model == true }
}
