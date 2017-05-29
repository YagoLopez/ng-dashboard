import {Component} from '@angular/core';

@Component({
selector: 'ml-chip-button',
moduleId: module.id,
styleUrls: ['./mlChip.css'],
template:`
<button type="button" class="mdl-chip" style="cursor: pointer">
<span class="mdl-chip__text"><ng-content></ng-content></span>
</button>
`//template
}) export class MlChipButton {}
