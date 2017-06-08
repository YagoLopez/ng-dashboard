<!-- <p align="center"><img src="src/assets/img/about9.jpg" style="margin: auto; width: 90px"></p> -->
<p align="center"><img src="src/assets/img/about9.jpg" style="width: 580px; height: 325px"></p>

<h1><p align="center">NG Dashboard</p></h1>
<h2><p align="center">Dashboard for Angular (versions 4 +)</p></h2>

<p align="center"><b>If you find this project useful and are going to use it, please give a star in the repo and credits to the author.</b></p>

## Features

- MG Chart Component based on <a href="http://metricsgraphicsjs.org" target="_blank">Metrics Graphics JS</a>
- LMap Directive based on <a href="http://leafletjs.com" target="_blank">Leaflet JS</a>
- UI components based on <a href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a>
- ChartJS Component will be added soon. <a href="http://www.chartjs.org/" target="_blank">(ChartJS Website)</a>

## Demo

- <a href="http://mobt.me/ZPt4" target="_blank">Mobile Simulator (For Desktop).</a>
<b style="color: red"> Warning:</b> Content in iframes may have javascript restrictions for
security reasons (i. e. alert dialogs). Run the full screen version for unrestricted features.

- <a href="https://yagolopez.github.io/ng-dashboard/dist" target="_blank">Full Screen (For Mobile)</a>

## Requierements

- Latest versions of node and npm (or yarn)
- Latest versions of Angular-CLI

## Insallation and Use

1 - Using Node:
- Install: `npm install --save YagoLopez/ng-dashboard`
- Go to project directory: `cd ng-dashboard`
- Run: `npm install`
- Run: `ng serve` from directory project
- Metrics Graphics Chart Component is located in `mg` folder. If you want to use this component,
copy this folder to your `app` folder and import `MetricsGraphicsMod` in your own module or import it directily from
`/node_modules/ng-dashboard/src/app/mg/metricsGraphicsMod.ts`. IMPORTANT: `d3.js` must be in your root app directory. 
This is where metricsgraphics.js search for this file. (Not due to this project design).
- Leaflet Map Directive is located in `leaflet` folder. If you want to use this directive, copy this folder to your `app`
folder and import `NgLMapDir` in your own component.

2 - Whitout node:
- Clone or download the repository and follow the same steps as before

## MetricsGraphics Chart Component API

```HTML5
<mg-graphic [urlData]="urlDataString" [config]="configObject [preprocess-fn]="preprocessFn"></mg-graphic>
```

- <b>urlData:</b> ulr pointing to a local/remote json file with data (pay attention to CORS restrictions)
- <b>config:</b> Javascript object with configuration values for MetricsGraphics. 
(Check their <a href="https://github.com/mozilla/metrics-graphics/wiki/List-of-Options" target="_blank">webpage</a> for more information)
- <b>preprocess-Fn:</b> Applies Javascript transformations to incoming data (for example format dates, etc.)
- For using MetricsGraphics global object in your component class use `declare var MG: any`

## Leaflet Map Directive API

```HTML5
<div l-map [l-center]="center" [l-zoom]="zoom" [l-options]="options"></div>
```

- <b>l-center:</b> Tuple with type `[number, number]` with the coordinates of the map center (latitude and longitude)
- <b>l-zoom:</b> Number with initial zoom
- <b>l-options:</b> (Optional) Javascript object with other configuration options. Check Leaflet documentation for more information on map options

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

<a href="#">Back to top</a>
