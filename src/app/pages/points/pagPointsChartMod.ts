import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {MgChartMod} from "../../mgChart/mgChartMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {PagPointsChart} from "./pagPointsChart";
@NgModule({
imports: [MlMenuMod, MlButtonMod, MlCardMod, MgChartMod,
  RouterModule.forChild( [{path: '', component: PagPointsChart}] )],
declarations: [PagPointsChart]}) export class PagPointsChartMod{}
