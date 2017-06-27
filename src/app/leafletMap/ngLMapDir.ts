//todo: gestionar mejor las capas
import {Directive, Input, ElementRef, NgZone} from "@angular/core";
import {ILeafletMapConfig} from './ngLMapConfig';
import '../../../node_modules/leaflet/dist/leaflet.js';
declare var L: any;

@Directive({
selector: '[l-map]',
}) export class NgLMapDir{

  @Input('l-center') center: [number, number] = [51.505, -0.09];
  @Input('l-zoom') zoom: number = 13;
  @Input('l-options') options: Object;
  @Input('l-token') accessToken: string;

  map: any;
  urlTemplate = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png';
  config: ILeafletMapConfig = {
    maxZoom: 19,
    attribution: 'LMap, Angular Directive by <a href="https://yagolopez.js.org" target="_blank">Yago López</a>',
    id: 'mapbox.satellite',
    accessToken: this.accessToken
  };
  constructor(private host: ElementRef, private zone: NgZone){}

  ngOnInit(){
    this.zone.runOutsideAngular( () => {
      this.urlTemplate += `?access_token=${this.accessToken}`;
      this.config = Object.assign({}, this.config, this.options);
      this.map = L.map(this.host.nativeElement).setView(this.center, this.zoom);
      L.tileLayer(this.urlTemplate, this.config).addTo(this.map);
    });
  }
}
