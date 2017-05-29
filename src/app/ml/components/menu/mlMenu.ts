import {Component, ElementRef, ViewChild, Input, Renderer2, ViewEncapsulation} from "@angular/core";
import {MlButton} from "../controls/button/mlButton";
import MdlMenu from "./mdlMenuClass";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-menu',
moduleId: module.id,
styleUrls: ['./mlMenu.css'],
encapsulation: ViewEncapsulation.None,
template:`

<ml-button #mdlButton [attr.id]="id" variant="icon"><ml-icon>{{icon}}</ml-icon></ml-button>
<ul class="mdl-menu" [attr.for]="id" #menuList>
<ng-content select="ml-menu-item"></ng-content>
</ul>         

`//template
}) export class MlMenu{

  @ViewChild('menuList') menuList: ElementRef;
  @ViewChild('mdlButton') mdlButton: MlButton;
  @Input() icon: string = 'more_vert';
  @Input() position: string;
  @Input() ripple: string;
  @Input() id: string;

  private className = {
    BOTTOM_LEFT: 'mdl-menu--bottom-left',
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT: 'mdl-menu--top-left',
    TOP_RIGHT: 'mdl-menu--top-right',
  };

  constructor(private ren: Renderer2){}

  ngOnInit(){
    !this.id && (this.id = ml.randomStr());
    if (ml.isDefined(this.ripple)){
      ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
      ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
    }
  }

  ngAfterViewInit(){
    if (this.position){
      const positionClass = this.getMenuPosition(this.position);
      ml.setClass(this.menuList, positionClass, this.ren);
    }
    new MdlMenu(this.menuList.nativeElement);
  }

  /**
   * Get menu position from @Input.position
   * @param position {string} Menu position from @Input, relative to screen corners.
   * @returns {string} Class name defining position
   *
   * Allowed values: [top-left, top-right, bottom-left, bottom, right] (in lower case)
   */
  //todo: comprobar valores permitidos como en otros casos
  private getMenuPosition(position: string): string{
    // todo: class names are wrong?
    let mdlClassName = '';
    if(position === 'top-left'){
      mdlClassName = this.className.BOTTOM_LEFT;
    }
    if(position === 'top-right'){
      mdlClassName = this.className.BOTTOM_RIGHT;
    }
    if(position === 'bottom-left'){
      mdlClassName = this.className.TOP_LEFT;
    }
    if(position === 'bottom-right'){
      mdlClassName = this.className.TOP_RIGHT;
    }
    return mdlClassName;
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-menu-item',
template: '<li class="mdl-menu__item" #menuItem><ng-content></ng-content></li>'})
export class MlMenuItem {

  @ViewChild('menuItem') menuItem: ElementRef;
  @Input('with-divider') divider: string;
  @Input() disabled: string;

  constructor(private ren: Renderer2){}

  ngOnInit() {
    ml.isDefined(this.divider) && ml.setClass(this.menuItem, 'mdl-menu__item--full-bleed-divider', this.ren);
    ml.isDefined(this.disabled) && ml.setAttribute(this.menuItem, 'disabled', '', this.ren);
  }
}
