//todo: crear un servicio para los mensajes
//todo: directiva ellipsis, sacar de ml-list y exponer
//todo: cambiar nombre de css animations
import {Component, ViewChild, ElementRef} from "@angular/core";
import {Http} from "@angular/http";
import {IConfigSnackbar, MlSnackbar} from "../../ml/components/snackbar/mlSnackbar";

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css'],
template: `

<style>
  .blue {color: cornflowerblue; cursor: pointer; padding-left: 5px}
  .item-subtitle {color: grey; font-size: small}
  .footer {padding: 20px; color: grey}
  .msg-body {padding: 10px 10px 30px}
  :host /deep/ ml-item > li {border-bottom: 1px solid lightgrey}
  :host /deep/ ml-item > li:hover {background: lightgrey}
  ml-item-title {cursor: pointer}

  .w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
  .w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
  .w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
  .w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
  .w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
  .w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
  .w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
  .w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
  .w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}
  .w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
  .w3-bar .w3-button{white-space:normal}
  .w3-button:hover{color:#000!important;background-color:#ccc!important}
  .w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}
  .w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
  .w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
  
  @media (min-width: 1028px)
    {.w3-modal-content {margin-top: 100px !important; width: 500px !important}}
  @media (max-width: 1028px)
    {.w3-modal-content {margin: auto !important; margin-top: 10px !important; width: 90% !important}}

</style>

<div class="page-scaleUpDown">

  <h5 class="centered">Mailbox</h5>
  
  <ml-card shadow="4">
    <ml-card-text>
      <ml-list>
        <ml-item lines="2" *ngFor="let message of messages; let index = index">
          <ml-item-content>
            <ml-item-icon list>email</ml-item-icon>
            <ml-item-title (click)="openModal(message)">
              <div ellipsis>{{ message.subject }}</div>
              <div ellipsis class="item-subtitle">From: {{ message.from }}</div>
            </ml-item-title>
          </ml-item-content>
          <ml-item-action (click)="deleteMsg(index, $event)">
            <ml-icon class="blue">delete</ml-icon>
          </ml-item-action>
        </ml-item>
      </ml-list>
      <div *ngIf="messages?.length == 0">Mailbox is empty</div>
    </ml-card-text>
  </ml-card>
  
  <div #modal class="w3-modal modal-container">
    <div class="w3-modal-content page-scaleUpDown w3-card-4">
      <header class="w3-container w3-indigo" style="padding-top: 15px; padding-bottom: 15px;"> 
        <span (click)="closeModal()" class="w3-button w3-display-topright"><ml-icon>highlight_off</ml-icon></span>
        <div>&bull; From: {{ message?.from }}</div>
        <div>&bull; Subject: {{ message?.subject }}</div>
        <div>&bull; Sender email: {{ message?.email }}</div>
      </header>
      <div class="w3-container" class="msg-body">{{ message?.body }}<br></div>
    </div>
  </div>
  
  <p class="centered footer">Operations on data are not persistent</p>
  
  <ml-snackbar #snackBar [config]="config" style="color: white"></ml-snackbar>

</div>

`//template
}) export class PagMailbox{

  @ViewChild('modal') modal: ElementRef;
  @ViewChild(MlSnackbar) snackBar: MlSnackbar;

  messages: any[];
  message: any;
  mlBadge: HTMLElement = document.querySelector('ml-badge') as HTMLElement;
  config: IConfigSnackbar = {
    message: 'Message Deleted',
    actionText: 'Close',
    timeout: 1000
  };

  constructor(private http: Http){}

  ngOnInit(){
    if(!this.messages){
      this.http.get('assets/data/mail-messages.json').subscribe( (response) => {
        this.messages = response.json();
        this.setBadgeCounter(this.messages.length);
      });
    }
  }

  findMessageById(index: number){
    return this.messages.indexOf(index, 0);
  }

  deleteMsg(index: number, event: Event | any){
    const liElement: HTMLElement = event.target.parentElement.parentElement;
    liElement.style.background = 'lightgrey';
    if (this.messages && this.messages.length) {
      setTimeout( () => {
        if ( window.confirm(`Confirm delete message from ${this.messages[index].from}`) ){
          this.messages.splice(index, 1);
          this.setBadgeCounter(this.messages.length);
          this.snackBar.show();
        } else {
          liElement.style.background = 'white';
        }
      }, 50)
    }
  }

  getBadgeCounter(): string | null {
    return this.mlBadge && this.mlBadge.getAttribute('value');
  }

  setBadgeCounter(value: any): void {
    this.mlBadge && this.mlBadge.setAttribute('data-badge', value);
  }

  openModal(message: any){
    this.modal.nativeElement.style.display = 'block';
    this.message = message;
  }

  closeModal(){
    this.modal.nativeElement.style.display = 'none';
  }
}
