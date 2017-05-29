import {NgModule} from "@angular/core";
import {MlSelectfield, MlSelectfieldItem} from "./mlSelectfield";
import {MlIconMod} from "../../icon/mlIconMod";
import {MlButtonMod} from "../button/mlButtonMod";
@NgModule({imports: [MlIconMod, MlButtonMod], declarations: [MlSelectfield, MlSelectfieldItem],
exports: [MlSelectfield, MlSelectfieldItem]})
export class MlSelectfieldMod{}
