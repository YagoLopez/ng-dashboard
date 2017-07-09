import {Component, Input, ElementRef} from "@angular/core";

@Component({
selector:  'ml-chip',
moduleId: module.id,
styleUrls: ['./mlChip.css'],
template:`

<span *ngIf="visible" class="mdl-chip" 
  [ngClass]="{'mdl-chip--contact': img || letter, 'mdl-chip--deletable': deletable}">
  <span *ngIf="letter" class="mdl-chip__contact" [style.color]="color" [style.background]="background">{{letter}}</span>
  <img *ngIf="img" class="mdl-chip__contact" [src]="img"/>
  <span class="mdl-chip__text"><ng-content></ng-content></span>
  <a *ngIf="deletable" href="#" class="mdl-chip__action" (click)="deleteChip()">
    <i class="material-icons">cancel</i>
  </a>
</span>

`//template
}) export class MlChip {

  @Input() deletable: string;
  @Input() img: string;
  @Input() letter: string;
  @Input() color: string = 'white';
  @Input() background: string = 'teal';
  @Input('delete-action') action: Function;
  visible: boolean = true;
  constructor(private host: ElementRef){}

  deleteChip(): boolean {
    this.host.nativeElement.parentNode.removeChild(this.host.nativeElement);
    this.action ? this.action() : console.log('Chip deleted. No further action defined.');
    return false;
  }
}
