import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MlListMod} from "../../ml/components/list/mlListMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {PagMailbox} from "./pagMailbox";
@NgModule({
imports: [CommonModule, MlListMod, MlCardMod, MlButtonMod, RouterModule.forChild( [{path: '', component: PagMailbox}] )],
declarations: [PagMailbox]}) export class PagMailboxMod{}
