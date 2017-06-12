import {Component} from "@angular/core";
import {IMGConfig} from "../../mg/metricsGraphicsCmp";
declare var MG: any;

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css'],
template:`

<div class="page-fade">
  <h5>Linear Chart</h5>
  
  <ml-card shadow="3">
    <ml-card-text>
      <div class="chart-title">Linear Chart with Area</div>
      <mg-graphic [config]="config1" [urlData]="urlData1"></mg-graphic>
    </ml-card-text>
    <ml-card-actions>
      <ml-button aspect="raised" (click)="toggleTimer()" ripple>
        <div *ngIf="timerActive; else timerInactive">End Simulation</div>
        <ng-template #timerInactive>Realtime Simulation</ng-template>
      </ml-button>
      <div *ngIf="timerActive" class="rt-data-container">
        <div class="rt-data-title">REALTIME SIMULATION</div>
        <div class="rt-data">X-value: {{ this.newData?.year }}, Y-value: {{ this.newData?.sightings }}</div>
      </div>
    </ml-card-actions>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item (click)="toggleFillArea()">Toggle Area</ml-menu-item>
          <ml-menu-item (click)="toggleMarkers()">Toggle Markers</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>
  </ml-card>
  <br>
  
  <ml-card shadow="3" class="margin-top">
    <ml-card-text>
      <div class="chart-title">Multi-linear Chart</div>
      <mg-graphic [config]="config2" [urlData]="urlData2" [preprocess-fn]="convertDateFn"></mg-graphic>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <!--<ml-menu-item (click)="test()">test</ml-menu-item>-->
          <ml-menu-item>item 2</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>
  </ml-card>
  <br>
</div>

`//template
}) export class PagLinearChart {

  urlData1 = 'assets/data/ufo-sightings.json';
  urlData2 = 'assets/data/fake_users2.json';
  timer: Function | any;
  timerActive: boolean = false;
  newData: Object;

  config1: IMGConfig = {
    height: 180,
    x_accessor: 'year',
    y_accessor: 'sightings',
    x_label: 'years',
    animate_on_load: true,
    buffer: 0
  };

  config2: IMGConfig = {
    height: 180,
    animate_on_load: true,
    x_accessor: 'date',
    y_accessor: 'value'
  };

  ngOnInit(){
    this.toggleMarkers();
  }

  //todo: return data?
  /** Convert initial date format to an apropiate format for MetricsCharts */
  convertDateFn = ( data: any[]  ): void => {
    for (let i = 0; i < data.length; i++){
      data[i] = MG.convert.date( data[i], 'date' );
    }
  };

  toggleFillArea(){
    if(this.config1.area){
      this.config1 = {...this.config1, area: false};
    } else {
      this.config1 = {...this.config1, area: true};
    }
  }

  toggleMarkers(){
    if(this.config1.markers){
      this.config1 = {...this.config1, markers: null}
    } else {
      const windowOptions = 'menubar=no,location=no,status=no,titlebar=no,height=400,width=600';
      const showVid = () => {
        window.open('https://www.youtube.com/watch?v=73h_s4SAAHs', '_blank', windowOptions);
      };
      const markers = [
        {"year": "1960", "label": "Marker 1"},
        {"year": "1980", "label": "CLICK ME!!", "click": showVid}];
      this.config1 = {...this.config1, markers: markers}
    }
  }

  test(){
    debugger
    const data = this.config2.data;
    data[0] = [];
    this.config2 = {...this.config2, data: data};
  }

  /** Generates a random integer between "min" and "max" */
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  toggleTimer(){
    this.timerActive ? this.endTimer() : this.startTimer();
  }

  startTimer(){
    let sightings = 3000;
    let year = 2012;
    this.config1.min_x = 1945;
    this.timerActive = true;
    this.timer = setInterval( () => {
      sightings = this.getRandomInt(1500, 5000);
      year = year + 1;
      this.newData = {line_id: 1, sightings: sightings, year: year};
      this.config1.data[0].push( this.newData );
      this.config1.min_x = this.config1.min_x + 1;
      //todo: borrar
      // this.config1 = Object.assign( [], this.config1 );
      this.config1 = {...this.config1}
    }, 1500);
  }

  endTimer(){
    clearInterval(this.timer);
    this.timerActive = false;
    this.config1.data[0].length = 65;
    //todo: borrar
    // this.config1 = Object.assign( [], this.config1 );
    this.config1 = {...this.config1}
  }

  ngOnDestroy(){
    this.endTimer();
  }
}
