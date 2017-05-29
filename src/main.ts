import 'polyfills';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgDashboardMod} from "./app/ngDashboardMod";

enableProdMode();
platformBrowserDynamic().bootstrapModule(NgDashboardMod);
