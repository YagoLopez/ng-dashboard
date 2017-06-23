//todo: use loader indicator for secondary charts
//todo: usar mobx para probar a ver cambios en tiempo real
//todo: arreglar lo de cargar d3.js desde el directorio /src/
//todo: intentar que funcione this.data con observables para que se actualicen los valores automaticamente
//      y poder hacer realtime
//todo: poder ejecutar funciones arbitrarias para filtrar y arreglar los datos (de forma menos restrictiva que la actual)
//todo: hacer otro grafico de tipo barras con colores

import {Component, ViewChild, ElementRef, ViewEncapsulation, HostListener, Input, NgZone} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
import {IMGConfig} from "./mgConfig";
import "../../../node_modules/metrics-graphics/dist/metricsgraphics.js";
declare var MG: any;


@Component({
selector: 'mg-chart',
moduleId: module.id,
styleUrls: ['mgChart.css'],
encapsulation: ViewEncapsulation.None,
template: `

<style>
  .loader {
    position: relative;
    top: 100px;
    display: block;
    width: 100px;
    margin: auto;
    background-color: aliceblue;
    color: dodgerblue;
    padding: 5px;
    border: 1px solid;
    border-radius: 2px;
    text-align: center;
  }
</style>

<div *ngIf="isLoading" class="loader">Loading</div>
<div #chartContainer></div>

`// template
})
export class MgChartCmp {

  @ViewChild('chartContainer') chartContainer: ElementRef;
  @ViewChild('chartWrapper') chartWrapper: ElementRef;
  @Input() urlData: string;
  @Input() config: IMGConfig;
  @Input('preprocess-fn') preprocessFn: Function;
  @Input('request-options') reqOptions: RequestOptionsArgs;
  @Input() delay: number = 0; // Amount of time the data of the chart is delayed (ms) see below

  isLoading: boolean = false;
  timerLoadData: NodeJS.Timer;
  data: any;

  @HostListener('window:resize') onWindowsResize() {
    this.isLoading = true;
    setTimeout( () => {
      this.config.width = this.chartContainer.nativeElement.clientWidth;
      this.drawMGChart(this.config);
    }, 0)
  }

  constructor(private http: Http, private zone: NgZone){}

  /** Chart drawing is run outside Angular Change Detector to avoid unnecesary operations and re-renderings */
  drawMGChart(config: IMGConfig){
    this.zone.runOutsideAngular( () => MG.data_graphic(config) );
    this.isLoading = false;
  }

  /**
   * When there are several charts on same page, could be convenient to delay the loading of data sequentially
   * (first one, then another, etc.)
   * @Input().delay offers this option (Units in miliseconds)
   */
  ngOnInit(){
    if(this.urlData){
      this.timerLoadData = setTimeout( () => {
        this.http.get(this.urlData, this.reqOptions).subscribe( response => {
          this.data = response.json();
          this.preprocessFn && this.preprocessFn(this.data);
          this.config.data = this.data;
          !this.config.width && (this.config.width = this.chartContainer.nativeElement.clientWidth);
          this.config.target = this.chartContainer.nativeElement;
          this.drawMGChart(this.config);
        });
      }, this.delay);
    }
  }

  ngOnChanges(){
    // console.log('on changes');
    if(this.config.data){
      this.drawMGChart(this.config);
    }
  }

  ngOnDestroy(){
    clearTimeout(this.timerLoadData);
  }
}
