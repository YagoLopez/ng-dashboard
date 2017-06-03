import {Component} from '@angular/core';
import {IMGConfig} from "../../mg/metricsGraphicsCmp";

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css'],
template:`

<div class="page-scaleUpDown">
  <h5>Bars Charts</h5>
  <ml-card shadow="3">
    <ml-card-text>
      <div class="chart-title">Histogram</div>  
      <mg-graphic [config]="config1" [urlData]="urlData1"></mg-graphic>
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

  urlData1 = 'assets/data/ufo-sightings-bars.json';
  urlData2 = 'assets/data/fake_users1.json';

  config1: IMGConfig = {
    chart_type: 'histogram',
    x_accessor: 'year',
    y_accessor: 'sightings',
    x_label: 'years',
    animate_on_load: true,
    buffer: 0,
    height: 200,
    binned: true,
  };

  config2: IMGConfig = {
    chart_type: 'histogram',
    height: 180,
    binned: true,
  };

}
