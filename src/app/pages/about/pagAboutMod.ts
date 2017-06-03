import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {PagAbout} from "./pagAbout";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
@NgModule({
imports: [MlCardMod, MlIconMod, RouterModule.forChild( [{path: '', component: PagAbout}] )],
declarations: [PagAbout]}) export class PagAboutMod{}
