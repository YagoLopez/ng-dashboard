import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {NgLMapDir} from "../../leaflet/ngLMapDir";
import {PagMaps} from "./pagMaps";
@NgModule({
imports: [MlMenuMod, MlCardMod, RouterModule.forChild( [{path: '', component: PagMaps}] )],
declarations: [NgLMapDir, PagMaps]}) export class PagMapsMod{}
