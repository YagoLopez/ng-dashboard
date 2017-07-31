<p align="center"><img src="src/assets/img/about9.jpg" style="width: 580px; height: 325px"></p>

<h1><p align="center">NG Dashboard</p></h1>
<b><p align="center">Dashboard for Angular (versions 4 +)</p></b>

<p align="center">
<b>If you find this project useful and are going to use it, please give a star in the repo and credits to the author.</b>
</p>

## Features

- Use of asynchrony for responsiveness and fast rendering. Data loading is executed 
  in **asynchronous** and **sequential** code blocks. This frees the main thread for rendering the user interface 
  without blocking it, and allows fast TTI (Time To Interactive)
- Includes **MG Chart**. An Angular component based on <a href="http://metricsgraphicsjs.org" target="_blank">Metrics Graphics JS</a>
- Includes **LMap**. An Angular Directive based on <a href="http://leafletjs.com" target="_blank">Leaflet JS</a>
- UI was quickly assembled based on this component library: <a href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a>
- ChartJS Component will be added soon. <a href="http://www.chartjs.org/" target="_blank">(ChartJS Website)</a>

## Demo

- <a href="https://yagolopez.github.io/ng-dashboard/dist" target="_blank">Full Screen (For Mobile)</a>

- <a href="http://mobiletest.me/htc_one_emulator/?u=https://yagolopez.github.io/ng-dashboard/dist" target="_blank">Mobile Simulator (For Desktop).</a>
<b style="color: red"> Warning:</b> Content in iframes may have javascript restrictions for
security reasons (i. e. alert dialogs). Run the full screen version for unrestricted features.


## Requierements

- Latest versions of node, npm/yarn
- Latest versions of Angular-CLI

## Insallation and Use

1. Using Node:

```shell
npm install --save YagoLopez/ng-dashboard
cd ng-dashboard
npm install
```
- <b>IMPORTANT</b>: Adjust the `basePath` in 
  <a href="https://github.com/YagoLopez/ng-dashboard/blob/master/src/app/ngDashboardAppMod.ts#L25" target="_blank">
  ngDashboardAppMod.ts</a> to your environment
- Run: `ng serve` from project directory
- Metrics Graphics Chart Component is located in `mgChart` folder.
  - If you want to use this component, you can copy this folder to your `app` folder and import `mgChartMod` 
  in your own module or 
  - Import it directily from `/node_modules/ng-dashboard/src/app/mgChart/mgChartMod.ts`. 
  <b>IMPORTANT</b>: `d3.js` must be in your root `/src` directory. This requirement is harcoded in `metricsgraphics.js`. 
  It doesn't depend on this project.
- Leaflet Map Directive is located in `leafletMap` folder. If you want to use this directive:
  - Copy this folder to your `app` folder and import `NgLMapDir` in your own component or 
  - Import it directily from `/node_modules/ng-dashboard/src/app/leafletMap/ngLMapDir.ts`.

2. Whitout node:
- Clone or download the repository and follow the same steps as before

## MetricsGraphics Chart Component API

```html
<mg-chart [urlData]="urlDataString" [data]="dataArray" [request-options]="requestOptionsObject" 
  [config]="configObject" [preprocess-fn]="preprocessFn" [delay]="delayNumber"></mg-chart>
```

- There are two ways to pass data into a chart and both are mutually exclusive
  1. <b>[urlData]:</b> Url pointing to a local/remote json file with data (Remote data might have CORS restrictions)
  2. <b>[data]:</b> Array of javascript objects with X and Y coordinates, typically coming from a service.
- <b>[request-options]:</b> javascript object of type: 
  <a href="https://angular.io/api/http/RequestOptions" target="_blank">RequestOptions</a> Used for customized headers, etc.
- <b>[config]:</b> Javascript object implementing 
  <a href="https://github.com/YagoLopez/ng-dashboard/blob/master/src/app/mgChart/mgConfigInterface.ts" target="_blank">
  IMGConfig interface</a>. It contains configuration values for MetricsGraphics charts. 
  (<a href="https://github.com/mozilla/metrics-graphics/wiki/List-of-Options" target="_blank">Full list of MG Chart Options</a>)
- <b>[preprocess-Fn]:</b> Applies Javascript transformations to input data (for example format dates, etc.)
- <b>[delay]:</b> Delay the loading of data (ms). It could be useful when having serveral charts in same page
- To use MetricsGraphics global object in your component class: `declare var MG: any`

## Leaflet Map Directive API

```html
<div l-map [l-token]="tokenString" [l-center]="centerTuple" [l-zoom]="zoomNumber" [l-options]="optionsObject"></div>
```

- <b>[l-token]:</b> String with access token (Get a token in Leaflet website).
- <b>[l-center]:</b> Tuple of type `[number, number]` with the coordinates of the map center (latitude and longitude)
- <b>[l-zoom]:</b> Number with initial zoom
- <b>[l-options]:</b> (Optional) Javascript object with additional configuration options. Check 
<a href="http://leafletjs.com/reference-1.0.3.html" target="_blank">Leaflet documentation</a> 
for more information on map options

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

<a href="#">Back to top</a>
