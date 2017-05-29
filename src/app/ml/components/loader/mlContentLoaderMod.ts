import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MlSpinnerMod} from "../spinner/mlSpinnerMod";
import {MlContentLoader} from "./mlContentLoader";
@NgModule({imports: [CommonModule, MlSpinnerMod], declarations: [MlContentLoader], exports: [MlContentLoader]})
export class MlPageLoaderMod{}
