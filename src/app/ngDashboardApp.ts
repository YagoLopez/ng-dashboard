import {Component} from '@angular/core';

@Component({
selector: 'ng-dashboard-app',
template:`

<style>
  ml-header {background: cornflowerblue}
  ml-drawer {background: lightskyblue}
  a[nav-item] {color: white !important; font-weight: 500}
  :host /deep/ ml-menu-item > li > a 
    {color: rgba(0,0,0, 0.87); text-decoration: none; font-weight: normal; display: block}
  :host /deep/ ml-menu-item.share-item-header > li
    {cursor: default; background-color: transparent !important; color: cornflowerblue; font-weight: 500}
  .active-route {background: #3193ea; color: white !important}
  .drawer-text {color: white; text-align: center; font-weight: 500; position: relative; top: 35px}
  .drawer-bg-img {background: url('assets/img/bg7-min.jpg') center; text-align: center; height: 160px}
  .drawer-logo {font-size: 52px; color: white; position: relative; top: 40px}
  .header-ico {vertical-align: text-top; color: white}
  .header-ico-menu {vertical-align: sub; padding-right: 6px}
  .drawer-menu-item-icon {padding-right: 5px}
  .pad-right {padding-right:10px}
  /*:host /deep/ .my-theme {background: cornflowerblue; color: darkblue}*/
</style>

<ml-layout> 

  <!-- Header ------------------------------------------------------------------------------------------------------ -->

  <ml-header>
    <ml-header-row>
      <ml-title><ml-icon large-screen-only class="header-ico-menu">assessment</ml-icon>NG Dashboard</ml-title>
      <ml-spacer></ml-spacer>
      <a routerLink="profile"><ml-icon class="header-ico pad-right">account_circle</ml-icon></a>
      <a routerLink="mailbox" id="tooltip">
        <ml-badge id="mybadge" value="5" overlap="true"><ml-icon class="header-ico">email</ml-icon></ml-badge></a>
      <ml-tooltip for="tooltip">New messages</ml-tooltip>
      <ml-menu icon="share" position="top-right">
        <ml-menu-item with-divider class="share-item-header">Share...</ml-menu-item>
        <ml-menu-item><a [href]="shareTwitter" target="_blank">Twitter</a></ml-menu-item>
        <ml-menu-item><a [href]="shareFB" target="_blank">Facebook</a></ml-menu-item>
        <ml-menu-item><a [href]="shareGPlus" target="_blank">Google+</a></ml-menu-item>
        <ml-menu-item><a [href]="shareLinkedIn" target="_blank">LinkedIn</a></ml-menu-item>
        <ml-menu-item><a [href]="shareEmail" target="_blank">Email</a></ml-menu-item>
      </ml-menu>
    </ml-header-row>
  </ml-header>
  
  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->
  
  <ml-drawer fixed>
    <div class="drawer-bg-img">
      <i class="material-icons drawer-logo">assessment</i>
      <p class="drawer-text">NG Dashboard</p>
    </div>
    <ml-nav>
      <a nav-item routerLink="about" routerLinkActive="active-route">
        <i class="material-icons drawer-menu-item-icon">info_outline</i> About</a>
      <a nav-item routerLink="linear" routerLinkActive="active-route">
        <i class="material-icons drawer-menu-item-icon">swap_calls</i> Linear Chart</a>
      <a nav-item routerLink="points" routerLinkActive="active-route">
        <i class="material-icons drawer-menu-item-icon">blur_off</i> Points Chart</a>
      <a nav-item routerLink="bars" routerLinkActive="active-route">
        <i class="material-icons drawer-menu-item-icon">equalizer</i> Bars Chart</a>
      <a nav-item routerLink="maps" routerLinkActive="active-route">
        <i class="material-icons drawer-menu-item-">pin_drop</i> Maps</a>
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content>
    <ml-content-loader spinner (onLoading)="onLoading($event)"></ml-content-loader>
    <router-outlet></router-outlet>
  </ml-content>
    
  <!-- /Content ---------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template
}) export class NgDashboardApp {

  isLoading = false;

  onLoading($event){
    this.isLoading = $event;
  }

  appName = `NG Dashboard for Angular`;
  msgShare = `Link of interest shared from ${this.appName}: `;
  urlApp = 'https://github.com/YagoLopez/ng-dashboard';
  shareTwitter = `http://twitter.com/share?url=${this.urlApp}&text=${this.msgShare}`;
  shareFB = `http://www.facebook.com/sharer/sharer.php?u=${this.urlApp}`;
  shareGPlus= `https://plus.google.com/share?url=${this.urlApp}`;
  shareLinkedIn= `http://www.linkedin.com/shareArticle?
    mini=true&url=${this.urlApp}&title=${this.msgShare}&source=${this.appName}`;
  shareEmail = `mailto:?subject=Shared link&body=${this.msgShare} ${this.urlApp}`;
}
