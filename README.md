<p align="center"><img src="src/assets/img/logo-dash5.png" style="margin: auto; width: 90px"></p>

<h1><p align="center">NG Dashboard</p></h1>

**Dashboard for Angular (Versions 4 +)**

## Features

- UI components based on <a href="https://github.com/YagoLopez/material-light" target="_blank">Material Light</a>
- Charts based on <a href="http://metricsgraphicsjs.org" target="_blank">Metrics Graphics JS</a>
- Maps based on <a href="http://leafletjs.com" target="_blank">Leaflet JS</a>

## Demo

<!-- - <a href="http://mobt.me/Xf27" target="_blank">Mobile Simulator (For Desktop)</a> -->
- <a href="https://yagolopez.github.io/ng-dashboard/dist/" target="_blank">Full Screen (For Mobile)</a>

##  Requierements

- Latest versions of node and npm (or yarn)
- Latest versions of Angular
- Latest versions of Angular-CLI

## Insallation and Use

Using Node:
- Install: `npm install --save YagoLopez/ng-dashboard`
- Go to project directory: `cd /ng-dashboard`
- Run: `ng serve`
- Metrics Graphics Chart Component is located in `mg` folder. If you want to use this component in your project,
copy this folder to your `app` folder and import `MetricsGraphicsCmp` in your own component
- Leaflet Map Directive is located in `ngleaflet` folder. If you want to use this directive, copy this folder to your `app`
folder and import `NgLMapDir` in your own component

## MetricsGraphics Chart Component API

`<mg-graphic [urlData]="urlDataString" [config]="configObject [preprocess-fn]="preprocessFn"></mg-graphic>`

- [urlData]: ulr of local or remote json file with data (pay attention to CORS restrictions)
- [config]: Javascript object with configuration valuers for MetricsGraphics. (Check their webpacke for more information)
- [preprocess-Fn]: Applies Javascript transformation to incoming data (for example for format dates, etc.)


## Leaflet Map Directive API

`<div l-map [l-center]="center" [l-zoom]="zoom"></div>
`
- [l-center]: Tuple with this type `[number, number]` with the coordinates of the map center in latitude and logitude
- [l-zoom]: Number with initial zoom
- [l-options]: Javascript object with the other options configurations. Check Leaflet documentation for more information on map options

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

<a href="#">Back to top &UpArrow;</a>
