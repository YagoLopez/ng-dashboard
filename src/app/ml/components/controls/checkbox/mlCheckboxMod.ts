import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlCheckbox} from "./mlCheckbox";
@NgModule({
imports: [CommonModule, FormsModule, ReactiveFormsModule], declarations: [MlCheckbox], exports: [MlCheckbox]})
export class MlCheckboxMod{}
