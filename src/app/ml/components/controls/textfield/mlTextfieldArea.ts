import {Component, ViewEncapsulation, ElementRef, Renderer2, Input, forwardRef,
  ChangeDetectionStrategy} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import MdlTextfield from "./mdlTextfieldClass";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'ml-textfield-area',
moduleId: module.id,
styleUrls: ['./mlTextfield.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlTextfieldArea), multi: true}],
template:`

<textarea type="text" class="mdl-textfield__input" [attr.rows]="rows" [attr.maxrows]="maxrows" [attr.id]="id" 
[name]="name" [(ngModel)]="model" (focus)="onFocus()" (keyup)="onKeyup()"></textarea>
<label class="mdl-textfield__label" [attr.for]="id"><ng-content select="ml-textfield-label"></ng-content></label>
<div *ngIf="showError" class="mdl-textfield__error"><ng-content select="ml-error"></ng-content></div>

`//template
})
export class MlTextfieldArea implements ControlValueAccessor{

  @Input() errors: Object | any;
  @Input() disabled: string;
  @Input() name: string;
  @Input('floating-label') floatingLabel: string;
  @Input() id: string;
  @Input() formControl: FormControl;
  @Input() rows: string;
  @Input() maxrows: string;

  private _model: any;
  private mdlTextfiel: MdlTextfield;
  public showError: boolean;
  private onTouch = () => {};
  private onChange = (_: any) => {};

  constructor (private host: ElementRef, private ren: Renderer2){}

  checkValidity(){
    if (this.formControl && this.formControl.invalid){
      ml.setClass(this.host, 'is-invalid', this.ren);
      this.showError = true;
    } else {
      this.host.nativeElement.classList.remove('is-invalid');
      this.showError = false;
    }
  }

  onFocus(){
    this.formControl.markAsTouched(true);
    this.checkValidity();
  }
  onKeyup(){
    this.formControl.markAsTouched(true);
    this.checkValidity();
  }

  ngOnInit() {
    if (!this.id){ this.id = ml.randomStr() }
    ml.setClass(this.host, 'mdl-textfield', this.ren);
    if (this.floatingLabel === ''){ ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren) }
    if (this.disabled === 'true'){ this.mdlTextfiel.disable() }
    this.mdlTextfiel = new MdlTextfield(this.host.nativeElement);
  }
  get model() { return this._model }

  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this._model = value;
    if (value)
      this.mdlTextfiel.change(value);
  }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
}
