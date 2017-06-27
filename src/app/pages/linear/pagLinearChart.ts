import {Component} from "@angular/core";
import {IMGConfig} from "../../mgChart/mgConfig";
declare var MG: any;

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css'],
template:`

<div class="page-fade">
  <h5>Linear Chart</h5>
  
  <ml-card shadow="3">
    <ml-card-text>
      <div class="chart-title">Linear Chart with Area</div>
      <mg-chart [config]="config1" [urlData]="urlData1" [delay]="500"></mg-chart>
    </ml-card-text>
    <ml-card-actions>
      <ml-button aspect="raised" (click)="toggleTimer()" ripple>
        <div *ngIf="timerActive; else timerInactive">END SIMULATION</div>
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
      <mg-chart [config]="config2" [urlData]="urlData2" [delay]="1000" [preprocess-fn]="convertDateFn"></mg-chart>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item>item 1</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>
  </ml-card>
  <br>
</div>

`//template
}) export class PagLinearChart {

  timer: NodeJS.Timer;
  timerActive: boolean = false;
  newData: Object;
  markers = [
    {"year": "1960", "label": "Marker 1"},
    {"year": "1980", "label": "CLICK ME!!", "click": this.showVid}];

  urlData1 = 'assets/data/ufo-sightings.json';
  config1: IMGConfig = {
    height: 180,
    x_accessor: 'year',
    y_accessor: 'sightings',
    x_label: 'years',
    animate_on_load: true,
    buffer: 0
  };

  urlData2 = 'assets/data/fake_users2.json';
  config2: IMGConfig = {
    height: 180,
    animate_on_load: true,
    x_accessor: 'date',
    y_accessor: 'value'
  };

  ngOnInit(){
    this.toggleMarkers();
  }

  /**
   * Convert initial date format in data array to an apropiate format for chart representation
   * It uses MetricsGraphics date() function
   */
  convertDateFn = ( data: any[]  ): void => {
    //todo: return data?
    for (let i = 0; i < data.length; i++){
      data[i] = MG.convert.date( data[i], 'date' );
    }
  };

  showVid(){
    const windowOptions = 'menubar=no,location=no,status=no,titlebar=no,height=400,width=600';
    window.open('https://www.youtube.com/watch?v=73h_s4SAAHs', '_blank', windowOptions)
  }

  // Note: it seems Object.assign() is faster than spread operator in typescript
  toggleFillArea(){
    if(this.config1.area){
      this.config1 = Object.assign({}, this.config1, {area: false});
    } else {
      this.config1 = Object.assign({}, this.config1, {area: true})
    }
  }

  toggleMarkers(){
    if(this.config1.markers){
      this.config1 = Object.assign({}, this.config1, {markers: null});
    } else {
      this.config1 = Object.assign({}, this.config1, {markers: this.markers});
    }
  }

  /** Generates a random integer between "min" and "max". (For realtime simulation) */
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
    this.config1.markers = null; // No markers during realime simulation for better performance
    this.timerActive = true;
    this.timer = setInterval( () => {
      sightings = this.getRandomInt(1500, 5000);
      year = year + 1;
      this.newData = {line_id: 1, sightings: sightings, year: year};
      this.config1.data[0].push( this.newData );
      this.config1.min_x = this.config1.min_x + 1;
      this.config1 = Object.assign({}, this.config1);
    }, 1500);
  }

  endTimer(){
    clearInterval(this.timer);
    this.timerActive = false;
    this.config1.min_x = 1945;
    this.config1.data[0].length = 65;
    this.config1.markers = this.markers;
    this.config1 = Object.assign({}, this.config1)
  }

  ngOnDestroy(){
    this.endTimer();
  }
}
