//todo: en vez de renderer usar @HostBinding(class.classname) para poner clases en el host de una directiva
import {Component, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef, Renderer2} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlSwitch from "./mdlSwitchClass";

@Component({
selector: 'ml-switch',
moduleId: module.id,
styleUrls: ['./mlSwitch.css'],
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSwitch), multi: true}],
template:`

<label #label [attr.for]="id+'mdl'" class="mdl-switch" [ngClass]="{'is-checked': isChecked()}">
  <input type="checkbox" class="mdl-switch__input" 
    [attr.id]="id+'mdl'"
    [(ngModel)]="model" 
    [disabled]="disabled">
  <span class="mdl-switch__label"><ng-content></ng-content></span>
  <span class="mdl-switch__ripple-container mdl-ripple--center"><span class="mdl-ripple"></span></span>
</label>

`//template
}) export class MlSwitch implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() disabled: string;
  @Input() ripple: string;

  mdlSwitch: MdlSwitch;
  _model: any;

  constructor(private host: ElementRef, private ren: Renderer2){}

  ngOnInit() {
    this.mdlSwitch = new MdlSwitch(this.label.nativeElement);
    if(this.disabled && (this.disabled.toLowerCase() === 'true')){
      this.mdlSwitch.disable();
    }
  };

  get model() {
    return this._model;
  }

  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.model = value;
  }

  private onTouch = () => {};
  private onChange = (_: any) => {};

  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }

  isChecked(){ return this.model == true }
  on(){ this.mdlSwitch.on() }
  off(){ this.mdlSwitch.off() }
}
