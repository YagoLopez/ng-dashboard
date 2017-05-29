import {NgModule} from "@angular/core";
import {MlBadge} from "./mlBadge";
import {MlIconMod} from "../icon/mlIconMod";
@NgModule({declarations: [MlBadge], exports: [MlIconMod, MlBadge]}) export class MlBadgeMod{}
