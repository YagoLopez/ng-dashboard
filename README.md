<p align="center">
  <img src="src/assets/img/logo-dash4.png" style="margin: auto; width: 90px">
  <h1>NG Dashboard</h1>
  **Dashboard for Angular (Versions 4 +)**
</p>
## Features

- UI components based on <a href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a>
- Chart Component based on <a href="http://metricsgraphicsjs.org" target="_blank">Metrics Graphics JS</a>
- Map Component based on <a href="http://leafletjs.com" target="_blank">Leaflet JS</a>
- ChartJS Component will be added soon. <a href="http://www.chartjs.org/" target="_blank">(ChartJS Website)</a>

## Demo

- <a href="http://mobt.me/ZPt4" target="_blank">Mobile Simulator (For Desktop)</a>
- <a href="https://yagolopez.github.io/ng-dashboard/dist/" target="_blank">Full Screen (For Mobile)</a>

**Warning**:
When cross domain content is used in iframes, some javascript features are disabled for
security reasons (i. e. alert dialogs). Run the desktop version for full features.

##  Requierements

- Latest versions of node and npm (or yarn)
- Latest versions of Angular
- Latest versions of Angular-CLI

## Insallation and Use

1- Using Node:
- Install: `npm install --save YagoLopez/ng-dashboard`
- Go to project directory: `cd /ng-dashboard`
- Run: `ng serve`
- Metrics Graphics Chart Component is located in `mg` folder. If you want to use this component in your project,
copy this folder to your `app` folder and import `MetricsGraphicsCmp` in your own component
- Leaflet Map Directive is located in `leaflet` folder. If you want to use this directive, copy this folder to your `app`
folder and import `NgLMapDir` in your own component

2- Instead of using node you can also clone or download the repository

## MetricsGraphics Chart Component API

```
<mg-graphic [urlData]="urlDataString" [config]="configObject [preprocess-fn]="preprocessFn"></mg-graphic>
```

- **urlData**: ulr pointing to a local or remote json file with data (pay attention to CORS restrictions)
- **config**: Javascript object with configuration values for MetricsGraphics. 
(Check their <a href="https://github.com/mozilla/metrics-graphics/wiki/List-of-Options" target="_blank">webpage</a> for more information)
- **preprocess-Fn**: Applies Javascript transformations to incoming data (for example format dates, etc.)


## Leaflet Map Directive API

```
<div l-map [l-center]="center" [l-zoom]="zoom"></div>
```

- **l-center**: Tuple with type `[number, number]` with the coordinates of the map center (latitude and logitude)
- **l-zoom**: Number with initial zoom
- **l-options**: Javascript object with other configuration options. Check Leaflet documentation for more information on map options

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

<a href="#">Back to top &uparrow;</a>
