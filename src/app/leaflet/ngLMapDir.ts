import {Directive, Input, ElementRef} from "@angular/core";
require('./leaflet.js');

interface ILeafletMapConfig {
  maxZoom?: number,
  attribution?: string,
  id?: string,
  accessToken?: string,
  [otherArgs: string]: any
}

@Directive({
selector: '[l-map]',
}) export class NgLMapDir{

  @Input('l-center') center: [number, number] = [51.505, -0.09];
  @Input('l-zoom') zoom: number = 13;
  @Input('l-options') options: Object;
  map: any;

  ACCESS_TOKEN = 'pk.eyJ1IjoieWFnb2xvcGV6IiwiYSI6ImNqMzdud2pidjAwczMzM3RsbmlzNm4ycGcifQ.fa75kDq4gqxpRLgT-zT9NA';

  urlTemplate = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.ACCESS_TOKEN}`;
  config: ILeafletMapConfig = {
    maxZoom: 19,
    attribution: 'LMap, Angular Directive by <a href="https://yagolopez.github.io" target="_blank">Yago López</a>',
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoieWFnb2xvcGV6IiwiYSI6ImNqMzdud2pidjAwczMzM3RsbmlzNm4ycGcifQ.fa75kDq4gqxpRLgT-zT9NA'
  };

  constructor(public host: ElementRef){}

  ngOnInit(){
    this.map = L.map(this.host.nativeElement).setView(this.center, this.zoom);
    L.tileLayer(this.urlTemplate, this.config).addTo(this.map);
  }
}
