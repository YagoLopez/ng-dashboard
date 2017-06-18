import {Component} from "@angular/core";
import {IMGConfig} from "../../mgChart/MgChartCmp";

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css'],
template:`

<div class="page-scaleUpDown">
  <h5>Bars Charts</h5>
  <ml-card shadow="4">
    <ml-card-text>
      <div class="chart-title">Histogram</div>  
      <mg-chart [config]="config1" [urlData]="urlData1" [delay]="500"></mg-chart>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item>item 1</ml-menu-item>
          <ml-menu-item>item 2</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>  
  </ml-card>
  <br>
  <ml-card shadow="4">
    <ml-card-text>
      <div class="chart-title">Bars</div>  
      <mg-chart [config]="config2" [urlData]="urlData2" delay="1000"></mg-chart>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item>item 1</ml-menu-item>
          <ml-menu-item>item 2</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>  
  </ml-card>
  <br>
</div>

`//template
}) export class PagBarsChart {

  urlData1 = 'assets/data/ufo-sightings.json';

  config1: IMGConfig = {
    chart_type: 'histogram',
    x_accessor: 'year',
    y_accessor: 'sightings',
    x_label: 'years',
    buffer: 5,
    height: 200,
    binned: true,
  };

  urlData2 = 'assets/data/ufo-sightings-bars.json';

  config2: IMGConfig = {
    chart_type: 'bar',
    x_accessor: 'year',
    y_accessor: 'sightings',
    buffer: 10,
    height: 200,
    rotate_x_labels: 90,
    binned: false,
  }
}
