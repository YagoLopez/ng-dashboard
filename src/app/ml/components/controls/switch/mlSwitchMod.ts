import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlSwitch} from "./mlSwitch";
@NgModule({imports:[CommonModule, FormsModule, ReactiveFormsModule], declarations:[MlSwitch], exports:[MlSwitch]})
export class MlSwitchMod{}
