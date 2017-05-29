import {NgModule} from "@angular/core";
import {MlButtonMod} from "../controls/button/mlButtonMod";
import {MlMenu, MlMenuItem} from "./mlMenu";
@NgModule({imports:[MlButtonMod], declarations:[MlMenu, MlMenuItem], exports:[MlButtonMod, MlMenu, MlMenuItem]})
export class MlMenuMod{}
