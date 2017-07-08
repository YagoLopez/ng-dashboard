//todo: fullscreen parametrizable. parametro: dom element
import {Component} from '@angular/core';

@Component({
selector: 'yago-fullscreen',
template: `

<!--
FULLSCREEN STYLES. For posible future use
<style>
html:-moz-full-screen {background: navy}
html:-webkit-full-screen {background: navy}
html:-ms-fullscreen {background: navy; width: 100% /* needed to center contents in IE */ }
html:fullscreen {background: navy}
</style>
-->

<i (click)="toggleFullScreen()" class="material-icons" style="vertical-align: text-top; cursor: pointer">settings_overscan</i>

`//template
}) export class YagoFullscreenCmp {

  goFullScreen(): void {
    if(!this.isFullScreenAvailable()){
      window.alert('Full Screen not supported by browser');
      return;
    }
    const docElm: any = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen((Element as any).ALLOW_KEYBOARD_INPUT);
    } else {
      window.alert('Full Screen not supported by browser');
    }
  }

  exitFullScreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    }
    else if ((document as any).webkitCancelFullScreen) {
      (document as any).webkitCancelFullScreen();
    }
    else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }

  toggleFullScreen(): void {
    const docElm: any = document.documentElement;
    if (docElm.msRequestFullscreen) {
      (document as any).msFullscreenElement ? this.exitFullScreen() : this.goFullScreen();
    }
    else if (docElm.mozRequestFullScreen) {
      (document as any).mozIsFullScreen ? this.exitFullScreen() : this.goFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
      document.webkitIsFullScreen ? this.exitFullScreen() : this.goFullScreen();
    } else {
      console.warn('toggleFullScreen(): operation not supported by browser');
    }
  }

  isFullScreenAvailable(): boolean {
    return document.fullscreenEnabled || (document as any).mozFullScreenEnabled ||
      (document as any).msFullscreenEnabled || document.documentElement.webkitRequestFullScreen;
  }
}
