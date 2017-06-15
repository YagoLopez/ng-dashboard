//todo: hacer directiva para animaciones
import {Component} from "@angular/core";

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css'],
template: `

<style>
  :host /deep/ ml-card div.mdl-card__title {height: 310px}
  .ico-title {vertical-align: sub}
  .small-font {font-size: small}
</style>

<div class="page-scaleUp">
  <ml-card shadow="4" img="assets/img/about9-min.jpg" style="height: 480px; margin-top: 40px" class="pt-page-fade">
    <ml-card-title><ml-icon class="ico-title">assessment</ml-icon> NG Dashboard</ml-card-title>
    <ml-card-text style="color: grey">
      <p style="color: black">
         Developed by Yago López <ml-icon style="vertical-align: middle; color: grey">laptop_chromebook</ml-icon>&nbsp;
        <a href="https://yagolopez.github.io" target="_blank">Website</a>
      </p>
      <div>• MG Chart component based on 
        <a class="small-font"href="http://metricsgraphicsjs.org" target="_blank">MetricsGraphics</a></div>
      <div>• LMap Directive based on <a href="http://leafletjs.com" target="_blank">LeafletJS</a></div>
      <div>• UI components based on 
        <a class="small-font" class="small-font" href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a></div> 
      <div>• ChartJS Component will be added soon. 
        <a class="small-font" href="http://www.chartjs.org/" target="_blank">ChartJS</a></div>
    </ml-card-text>
  </ml-card>
</div>  

`//template
}) export class PagAbout{}
