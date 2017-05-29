import {ElementRef, Input, Renderer2, Component, ViewEncapsulation} from "@angular/core";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-badge',
moduleId: module.id,
styleUrls: ['mlBadge.css'],
host: {class: 'mdl-badge'},
encapsulation: ViewEncapsulation.None,
template: '<ng-content></ng-content>'
})
export class MlBadge{

  @Input() value: string = '0';
  @Input() background: string;
  @Input() overlap: string;
  @Input() icon: string;

  constructor(private host: ElementRef, private ren: Renderer2){}

  ngOnInit() {
    ml.setAttribute(this.host, 'data-badge', this.value, this.ren);
    ml.isDefined(this.background) && ml.setClass(this.host, 'mdl-badge--no-background', this.ren);
    ml.isDefined(this.overlap) && ml.setClass(this.host, 'mdl-badge--overlap', this.ren);

    if(ml.isDefined(this.icon)){
      ml.setClass(this.host, 'material-icons', this.ren);
      ml.setClass(this.host, 'mdl-badge--overlap', this.ren);
      this.host.nativeElement.querySelector('ml-icon').className = 'mdl-badge-icon';
    }
  }
}
