import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MgChartMod} from "../../mgChart/mgChartMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {PagLinearChart} from "./pagLinearChart";
@NgModule({
imports: [CommonModule, MgChartMod, MlButtonMod, MlCardMod, MlMenuMod,
  RouterModule.forChild( [{path: '', component: PagLinearChart}] )],
declarations: [PagLinearChart]}) export class PagLinearChartMod{}
