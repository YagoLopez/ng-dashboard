//todo: revisar las classes de error en IE
import {Component, ViewEncapsulation, ElementRef, Renderer2, Input, forwardRef,
  ChangeDetectionStrategy} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import MdlTextfield from "./mdlTextfieldClass";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'ml-textfield-expand',
moduleId: module.id,
styleUrls: ['./mlTextfield.css', '../button/mlButton.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlTextfieldExpand), multi: true}],
template:`

<label class="mdl-button mdl-button--icon" [attr.for]="id"><ml-icon>{{icon}}</ml-icon></label>
<div class="mdl-textfield__expandable-holder">
<input type="text" class="mdl-textfield__input" [attr.id]="id" [name]="name" [(ngModel)]="model" 
  (focus)="onFocus()" (keyup)="onKeyup()">
<label class="mdl-textfield__label" [attr.for]="id"></label>
</div>
<div *ngIf="showError" class="mdl-textfield-expand-error"><ng-content select="ml-error"></ng-content></div>

`//template
}) export class MlTextfieldExpand implements ControlValueAccessor{

  @Input() errors: any;
  @Input() disabled: string;
  @Input() name: string;
  @Input() id: string;
  @Input() formControl: FormControl;
  @Input() icon: string;

  private _model: any;
  private mlTextfield: MdlTextfield;
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

  get model() { return this._model }

  ngOnInit() {
    if (!this.id){ this.id = ml.randomStr() }
    ml.setClass(this.host, 'mdl-textfield', this.ren);
    ml.setClass(this.host, 'mdl-textfield--expandable', this.ren);
    if (this.disabled === 'true'){ this.mlTextfield.disable() }
    this.mlTextfield = new MdlTextfield(this.host.nativeElement);
  }
  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }
  writeValue(value: any): void {
    this._model = value;
    value && this.mlTextfield.change(value);
  }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
}
