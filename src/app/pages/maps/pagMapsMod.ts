import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlSelectfieldMod} from "../../ml/components/controls/selectfield/mlSelectfieldMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {NgLMapDir} from "../../ngleaflet/ngLMapDir";
import {PagMaps} from "./pagMaps";
@NgModule({
imports: [MlSelectfieldMod, MlMenuMod, MlCardMod, RouterModule.forChild( [{path: '', component: PagMaps}] )],
declarations: [NgLMapDir, PagMaps]}) export class PagMapsMod{}
