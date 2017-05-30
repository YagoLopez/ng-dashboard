//todo: arreglar ml-card-actions (igual que ml-card-title)
//todo: intentar mejorar el estado 'loading' chart en pagLinearChart
//todo: añadir animaciones en transiciones de estado/pagina

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {MlPageLoaderMod} from "./ml/components/loader/mlContentLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlMenuMod} from "./ml/components/menu/mlMenuMod";
import {MlBadgeMod} from "./ml/components/badge/mlBadgeMod";
import {MlTooltipMod} from "./ml/components/tooltip/mlTooltipMod";
import {NgDashboardApp} from "./ngDashboardApp";

const getUrlParameter = (name: string) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Absolute paths for Webpack
let basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/ng-dashboard/src/app/pages/';

if(getUrlParameter('serve') === 'systemjs'){
  // Relative paths for SystemJS
  basePath = './app/pages/';
}

const APP_ROUTES: Routes = [
{path: '',           redirectTo: 'linear', pathMatch: 'full'},
{path: 'linear',     loadChildren: basePath + 'linear/pagLinearChartMod#PagLinearChartMod'},
{path: 'points',     loadChildren: basePath + 'points/pagPointsChartMod#PagPointsChartMod'},
{path: 'bars',       loadChildren: basePath + 'bars/pagBarsChartMod#PagBarsChartMod'},
{path: 'maps',       loadChildren: basePath + 'maps/pagMapsMod#PagMapsMod'},
{path: 'about',      loadChildren: basePath + 'about/pagAboutMod#PagAboutMod'},
{path: '**',         redirectTo: 'linear'}
];

@NgModule({
  imports: [BrowserModule, HttpModule, MlPageLoaderMod, MlLayoutMod, MlMenuMod, MlBadgeMod, MlTooltipMod,
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [NgDashboardApp], bootstrap: [NgDashboardApp]
})
export class NgDashboardMod {}
