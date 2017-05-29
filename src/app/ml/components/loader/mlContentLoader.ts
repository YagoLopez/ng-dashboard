//todo: hacer componente MlLoaderProgressbar
//todo: posibilidad de sustituir ml-content-loader por gif animado para mas rendimiento
import {Component, Output, EventEmitter, ViewChild, ElementRef, Input} from "@angular/core";
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";

@Component({
selector: 'ml-content-loader',
template:`
<div #divLoader *ngIf="isLoading" style="position:absolute;width:95%;top:40%;text-align:center">
<ml-spinner *ngIf="spinner === ''" single-color></ml-spinner>
<div><ng-content></ng-content></div>
</div>
`//template
}) export class MlContentLoader {
  @ViewChild('divLoader') divLoader: ElementRef;
  @Output() onLoading: EventEmitter<boolean> = new EventEmitter();
  @Input() spinner: string;
  isLoading: boolean;
  constructor (private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        this.isLoading = true;
        this.onLoading.emit(this.isLoading);
      }
      if (event instanceof NavigationEnd){
        this.isLoading = false;
        this.onLoading.emit(this.isLoading);
      }
      if (event instanceof NavigationCancel){
        this.isLoading = false;
        this.onLoading.emit(this.isLoading);
      }
      if (event instanceof NavigationError){
        this.divLoader.nativeElement.parentNode.removeChild(this.divLoader.nativeElement);
        window.alert(`Navigation error. Couldn't load route: ${event.url}`);
        throw Error(`MlContentLoader > Navigation Error > ${event.error}`);
      }
    })
  }
}
