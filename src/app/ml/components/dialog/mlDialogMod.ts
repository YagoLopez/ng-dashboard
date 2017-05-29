import {NgModule} from "@angular/core";
import {MlButtonMod} from "../controls/button/mlButtonMod";
import {MlDialogTitle, MlDialog, MlDialogContent, MlDialogActions} from "./mlDialog";
@NgModule({
declarations: [MlDialog, MlDialogTitle, MlDialogContent, MlDialogActions],
exports: [MlButtonMod, MlDialog, MlDialogTitle, MlDialogContent, MlDialogActions]})
export class MlDialogMod{}
