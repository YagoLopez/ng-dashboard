import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MgChartMod} from "../../mgChart/mgChartMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
import {MlMenuMod} from "../../ml/components/menu/mlMenuMod";
import {PagBarsChart} from "./pagBarsChart";
@NgModule({
imports: [MlMenuMod, MlCardMod, MgChartMod, RouterModule.forChild( [{path: '', component: PagBarsChart}] )],
declarations: [PagBarsChart]}) export class PagBarsChartMod{}
