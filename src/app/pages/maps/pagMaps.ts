import {Component, ViewChild} from "@angular/core";
import {NgLMapDir} from "../../leafletMap/ngLMapDir";

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css'],
template:`

<style>
  :host /deep/ .map-popup .leaflet-popup-content-wrapper {border-radius: 3px}
  :host /deep/ .mdl-textfield__input {background: aliceblue}
  :host /deep/ div.mdl-card__supporting-text {padding: 0; width: 100%}
  :host /deep/ ml-card h2.mdl-card__title-text {display: block; width: 100%; text-align: center}
  /*:host /deep/ ml-icon {*/
    /*z-index: 1000;*/
    /*color: cornflowerblue;*/
    /*background: white;*/
    /*border: 1px solid cornflowerblue;*/
    /*padding: 1px*/
  /*}*/
  .map-popup {width: 100%; height: 300px}
  .map-height {height: 350px}
  .chart-title {padding: 25px}
  
  :host /deep/ ml-icon {
    z-index: 1000;
    color: white;
    padding: 1px}
</style>

<div class="page-scaleUpDown">

  <h5>Maps</h5>
  
  <ml-card shadow="3">
    <ml-card-text>
      <div l-map [l-token]="accessToken" [l-center]="center" [l-zoom]="zoom" class="map-height map-popup"></div>
      <div class="chart-title">Leaflet Map Directive</div>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu icon="layers" position="top-right" class="menu-btn">
          <ml-menu-item (click)="addMapLayer()">Street Layer</ml-menu-item>
          <ml-menu-item (click)="removeMapLayer()">Satellite Layer</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>  
  </ml-card>

</div>

`//template
}) export class PagMaps {

  //todo: pasar objeto de configuracion 'options'
  @ViewChild(NgLMapDir) LMapDir: NgLMapDir; // Used to get reference to Leaflet Map
  accessToken = 'pk.eyJ1IjoieWFnb2xvcGV6IiwiYSI6ImNqMzdud2pidjAwczMzM3RsbmlzNm4ycGcifQ.fa75kDq4gqxpRLgT-zT9NA';
  center = [43.43578958, -4.8247093] as [number, number];
  zoom = 15;
  urlWebcam = 'http://www.wewebcams.com/get_imagen_ws.php?id=64';
  mapLayer: Object;

  ngAfterViewInit() {
    const marker = L.marker(this.center).addTo(this.LMapDir.map);

    const popup = `
      <style>
        .popup-img {width: 100px; height: 100px; margin: auto; display: block}
        .popup-footer {font-size: smaller; text-align: center; padding-top: 5px}
      </style>
      <a href="${this.urlWebcam}" target="_blank"><img src="${this.urlWebcam}" class="popup-img" /></a>
      <div class="popup-footer">Realtime image <br>Spain timezone</div>
    `; // end popup

    marker.bindPopup(popup).addTo(this.LMapDir.map);
    this.mapLayer = this.createLayerStreets()
  }

  createLayerStreets(): Object {
    const urlLayerStreets = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.accessToken}`;
    return L.tileLayer(urlLayerStreets, {id: 'mapbox.streets', attribution: ''});
  }

  addMapLayer(): void {
    this.LMapDir.map.addLayer(this.mapLayer);
  }

  removeMapLayer(): void {
    this.LMapDir.map.removeLayer(this.mapLayer);
  }

}
