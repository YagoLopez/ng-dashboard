import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MlRippleMod} from "../../ripple/mlRippleMod";
import {MlIconMod} from "../../icon/mlIconMod";
import {MlButton} from "./mlButton";
import {MlButtonInput} from "./mlButtonInput";
@NgModule({imports: [CommonModule, FormsModule], declarations: [MlButton, MlButtonInput],
exports: [MlRippleMod, MlIconMod, MlButton, MlButtonInput]}) export class MlButtonMod{}
