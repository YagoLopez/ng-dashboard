import {Component, Directive, ElementRef, Input, Renderer2, ViewEncapsulation, ViewChild} from "@angular/core";
import * as ml from "../../lib/mlLib";

@Component({
selector: 'ml-card',
moduleId: module.id,
styleUrls: ['mlCard.css'],
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-card'},
template:`

<div #cardTitle class="mdl-card__title mdl-card--expand">
  <h2 #cardTitleHeader class="mdl-card__title-text">
    <ng-content select="ml-card-title"></ng-content>
  </h2>
</div>
<div class="mdl-card__supporting-text">
  <ng-content select="ml-card-text"></ng-content>
</div>
<div #cardActions class="mdl-card__actions mdl-card--border">
  <ng-content select="ml-card-actions"></ng-content>
</div>
<div class="mdl-card__menu">
  <ng-content select="ml-card-menu"></ng-content>
</div>

`//template
}) export class MlCard{

  @Input() shadow: string;
  @Input() img: string;
  @ViewChild('cardTitle') cardTitle: ElementRef;
  @ViewChild('cardTitleHeader') cardTitleHeader: ElementRef;
  @ViewChild('cardActions') cardActions: ElementRef;
  constructor(private host: ElementRef, private ren: Renderer2){}

  ngOnInit(){
    // If there is no <ml-card-title> content, delete it to avoid blank space in <ml-card>
    if(this.cardTitleHeader.nativeElement.children.length == 0){
      this.host.nativeElement.removeChild(this.cardTitle.nativeElement);
    }
    // If there is no <ml-card-actions> content, delete it to avoid blank space in <ml-card>
    if(this.cardActions.nativeElement.children.length == 0){
      this.host.nativeElement.removeChild(this.cardActions.nativeElement);
    }
    if(this.cardTitle){
      this.img && (this.cardTitle.nativeElement.style.background = `url('${this.img}')`);
      this.cardTitle.nativeElement.style.color= "#fff";
      this.cardTitle.nativeElement.style.backgroundSize = "cover";
    }
    if (this.shadow){
      if(isNaN(+this.shadow) ){
        console.warn('<ml-card> -> Attribute [shadow] must be a number: ', this.shadow);
        return;
      }
      this.shadow = `mdl-shadow--${this.shadow}dp`;
      ml.setClass(this.host, this.shadow, this.ren);
   }
  }
}
@Directive({selector: 'ml-card-title'}) export class MlCardTitle{}
@Directive({selector: 'ml-card-subtitle'}) export class MlCardSubtitle{}
@Directive({selector: 'ml-card-media'}) export class MlCardMedia {}
@Directive({selector: 'ml-card-text'}) export class MlCardText {}
@Directive({selector: 'ml-card-actions'}) export class MlCardActions {}
@Directive({selector: 'ml-card-menu'}) export class MlCardMenu{}
