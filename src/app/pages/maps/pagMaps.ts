import {Component, ViewChild} from '@angular/core';
import {NgLMapDir} from "../../ngleaflet/ngLMapDir";

@Component({
moduleId: module.id,
styleUrls: ['../pagesStyles.css'],
template:`

<style>
  :host /deep/ .map-popup .leaflet-popup-content-wrapper {border-radius: 3px}
  .map-popup {width: 100%; height: 300px}
</style>

<h5>Maps</h5>

<ml-card shadow="3">
  <ml-card-title>
    <div class="chart-title">Leaflet Map Directive</div>  
  </ml-card-title>
  <ml-card-text>
    <div l-map [l-center]="center" [l-zoom]="zoom" class="map-popup"></div>
  </ml-card-text>
  <ml-card-actions>card actions</ml-card-actions>
  <ml-card-menu>
    <ml-card-menu>
      <ml-menu position="top-right" class="menu-btn">
        <ml-menu-item>item 1</ml-menu-item>
        <ml-menu-item>item 2</ml-menu-item>
      </ml-menu>
    </ml-card-menu>
  </ml-card-menu>  
</ml-card>

<ml-selectfield label="Choose Layer..." style="color:darkslategrey" ripple>
  <ml-sf-item ripple>item 1</ml-sf-item>
  <ml-sf-item ripple>item 2</ml-sf-item>
</ml-selectfield>

`//template
}) export class PagMaps {

  //todo: pasar objeto de configuracion 'options'
  //todo: que pasa con el loader
  @ViewChild(NgLMapDir) ngLMapDir: NgLMapDir; // Used to get reference to Leaflet Map
  center = [43.43578958, -4.8247093] as [number, number];
  zoom = 15;
  urlWebcam = 'http://www.wewebcams.com/get_imagen_ws.php?id=64';

  ngAfterViewInit() {
    const marker = L.marker(this.center).addTo(this.ngLMapDir.map);

    const popup = `
      <style scoped>
        .popup-img {width: 100px; height: 100px; margin: auto; display: block}
        .popup-footer {font-size: smaller; text-align: center; padding-top: 5px}
      </style>
      <a href="${this.urlWebcam}" target="_blank"><img src="${this.urlWebcam}" class="popup-img" /></a>
      <div class="popup-footer">Realtime image</div>
    `; // end popup

    marker.bindPopup(popup).addTo(this.ngLMapDir.map);
  }

}
