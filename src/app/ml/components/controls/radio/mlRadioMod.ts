import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MlRadio} from "./mlRadio";
@NgModule({imports:[CommonModule, ReactiveFormsModule], declarations:[MlRadio], exports:[MlRadio]})
export class MlRadioMod{}
