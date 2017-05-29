import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlToggle} from "./mlToggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({imports:[CommonModule, FormsModule, ReactiveFormsModule], declarations:[MlToggle], exports:[MlToggle]})
export class MlToggleMod{}
