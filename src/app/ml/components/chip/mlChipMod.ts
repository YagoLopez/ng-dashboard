import {NgModule} from "@angular/core";
import {MlChip} from "./mlChip";
import {MlChipButton} from "./mlChipButton";
import {CommonModule} from "@angular/common";
@NgModule({imports: [CommonModule],declarations: [MlChip, MlChipButton],exports: [MlChip, MlChipButton]})
export class MlChipMod{}
