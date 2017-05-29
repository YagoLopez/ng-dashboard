import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlIconMod} from "../../icon/mlIconMod";
import {MlTextfield} from "./mlTextfield";
import {MlTextfieldExpand} from "./mlTextfieldExpand";
import {MlTextfieldArea} from "./mlTextfieldArea";
import {MlTextfieldLabel} from "./mlTextfieldLabel";
@NgModule({
imports: [CommonModule, FormsModule, ReactiveFormsModule, MlIconMod],
declarations: [MlTextfield, MlTextfieldExpand, MlTextfieldArea, MlTextfieldLabel],
exports: [MlTextfield, MlTextfieldExpand, MlTextfieldArea, MlTextfieldLabel]})
export class MlTextfieldMod{}
