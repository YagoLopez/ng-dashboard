import {Component, ElementRef, ViewChild, Input, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as ml from "../../../lib/mlLib";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-radio',
moduleId: module.id,
styleUrls: ['./mlRadio.css'],
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef( ()=>MlRadio ), multi: true}],
template:`

<label #label [attr.for]="id+'mdl'" class="mdl-radio is-upgraded" [ngClass]="{'is-checked': isChecked()}" [attr.ripple]>
  <input #input type="radio" class="mdl-radio__button"
    [attr.id]="id+'mdl'" 
    [attr.disabled] 
    [name]="formControlName"
    [value]="value"
    [checked]="checked"
    (click)="onClick($event)">
  <span class="mdl-radio__label"><ng-content></ng-content></span>
  <span class="mdl-radio__outer-circle"></span>
  <span class="mdl-radio__inner-circle"></span>
  <span class="mdl-radio__ripple-container mdl-ripple--center">
    <span class="mdl-ripple"></span>
  </span>  
</label>

`//template
}) export class MlRadio implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @ViewChild('input') input: ElementRef;
  @Input() id: string = this.id || ml.randomStr();
  @Input() name: string;
  @Input() value: string;
  @Input() disabled: string;
  @Input() formControlName: string;
  @Input() checked: boolean;

  ngOnInit(){
    if (ml.isDefined(this.disabled)){
      this.input.nativeElement.disabled= 'true';
      this.label.nativeElement.classList.add('is-disabled');
    }
  }

  onClick($event) { this.onChanged($event.target.value) }

  isChecked(): boolean { return this.input.nativeElement.checked }

  setChecked(status: 'true' | ''): void { this.input.nativeElement.checked = status }

  setDisabled(){
    this.input.nativeElement.disabled= 'true';
    this.label.nativeElement.classList.add('is-disabled');
  }
  setEnabled(){
    this.input.nativeElement.disabled= '';
    this.label.nativeElement.classList.remove('is-disabled');
  }
  writeValue(value: any): void {
    if (value === this.value){
      this.value = value;
      this.checked = true;
      this.input.nativeElement.checked = true;
    }
  }
  private onTouched = () => {};
  private onChanged = (_: any) => {};
  registerOnChange(fn: any): void {this.onChanged = fn}
  registerOnTouched(fn: any): void {this.onTouched = fn}
}
