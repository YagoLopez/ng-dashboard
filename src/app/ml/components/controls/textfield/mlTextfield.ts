//todo: probar a usar @Input('model') = _model. De esta forma podrían funcionar template forms
//todo: intentar implementar ml-textfield como el componente mdl-slider
//todo: he visto que en algun ejemplo usan ngControl en template-driven forms. investigarlo
//todo: revisar algunos @Inputs, pueden sobrar al no usar model-driven forms (ej: name)
//todo: que solo haya que usar una vez el input de form-control [control] -> pasarselo al componente hijo que muestra
//los errores.
//todo: para posteriores versiones tratar de evitar el js de los ficheros Class.js
//es posible que se puedan sustituir por logica de templates en component
//todo: intentar simplificar tomando como referencia MlSelectfield, aunque igual no funcionan template forms

import {Component, ViewEncapsulation, ElementRef, Renderer2, Input, forwardRef, ChangeDetectionStrategy, ViewChild}
  from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import MdlTextfield from "./mdlTextfieldClass";
import * as ml from "../../../lib/mlLib";

// @Input.type must be restricted to the following values:
const ML_TEXTFIELD_TYPES = ['text', 'password', 'date', 'datetime-local', 'month', 'time', 'week', 'url', 'tel',
  'color', 'number'];

@Component({
selector: 'ml-textfield',
moduleId: module.id,
host: {class: 'mdl-textfield'},
styleUrls: ['./mlTextfield.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlTextfield), multi: true}],
template:`

<label class="mdl-textfield__label" [attr.for]="id"><ng-content select="ml-textfield-label"></ng-content></label>
<input [type]="type" class="mdl-textfield__input" [attr.id]="id" [name]="name" [(ngModel)]="model" 
(focus)="onFocus()" (keyup)="onKeyup()" (blur)="onBlur()">
<div *ngIf="showError" class="mdl-textfield__error"><ng-content select="ml-error"></ng-content></div>

`//template
}) export class MlTextfield implements ControlValueAccessor{

  @Input() type: string = 'text';
  @Input() errors: any;
  @Input() disabled: string;
  @Input() name: string;
  @Input('floating-label') floatingLabel: string;
  @Input() elevated: string;
  @Input() id: string;
  @Input() formControl: FormControl;

  private _model: any;
  private mdlTextfield: MdlTextfield;
  public showError: boolean;
  private onTouch = () => {};
  private onChange = (_: any) => {};
  constructor(private host: ElementRef, private ren: Renderer2){}

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
    this.formControl && this.formControl.markAsTouched(true);
    this.checkValidity();
  }

  onKeyup(){ this.checkValidity() }
  onBlur(){ this.checkValidity() }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }

  ngOnInit() {
    if( !ml.isAttributeValid(this.type.toLowerCase(), ML_TEXTFIELD_TYPES) ){
        console.warn(`<ml-textfield> Wrong attribute: type="${this.type}"`);
    }
    !this.id && (this.id = ml.randomStr());
    ml.isDefined(this.floatingLabel) && ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren);
    this.disabled === 'true' && this.mdlTextfield.disable();
    this.mdlTextfield = new MdlTextfield(this.host.nativeElement);
  }
  ngAfterViewInit(){
    this.type === 'number' && this.mdlTextfield.input_.classList.remove('mdl-textfield__input');
  }
  get model() {
    return this._model;
  }
  set model(value: any) {
    this._model = value;
    this.onChange(value);
    this.checkValidity();
  }
  writeValue(value: any): void {
    this._model = value;
    if (value)
      this.mdlTextfield.change(value);
  }
}
