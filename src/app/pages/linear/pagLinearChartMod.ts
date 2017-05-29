import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MetricsGraphicsMod} from "../../mg/metricsGraphicsMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {PagLinearChart} from "./pagLinearChart";
@NgModule({
imports: [CommonModule, MetricsGraphicsMod, MlButtonMod, MlCardMod, MlMenuMod,
  RouterModule.forChild( [{path: '', component: PagLinearChart}] )],
declarations: [PagLinearChart]}) export class PagLinearChartMod{}
