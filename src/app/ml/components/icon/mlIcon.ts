// ICONS1: https://material.io/icons/
// ICONS2: http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html
// For using icons from the above url, change the middle dash (-) for lower dash (_) in the icon name
import {Component} from "@angular/core";
@Component({selector: 'ml-icon', host: {class: 'material-icons'},template:'<ng-content></ng-content>'})
export class MlIcon{}

