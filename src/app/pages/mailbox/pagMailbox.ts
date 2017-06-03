//todo: crear un servicio para los mensajes
//todo: directiva ellipsis, sacar de ml-list y exponer
//todo: cambiar nombre de css animations
import {Component, ViewChild, ElementRef, ViewRef, TemplateRef} from "@angular/core";
import {Http} from "@angular/http";

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css', 'w3.css'],
template: `

<style>
  .blue {color: cornflowerblue; cursor: pointer; padding-left: 5px}
  .item-subtitle {color: grey; font-size: small}
  .footer {padding: 20px; color: grey}
  .msg-body {padding: 10px 10px 30px}
  :host /deep/ ml-item > li {border-bottom: 1px solid lightgrey}
  :host /deep/ ml-item > li:hover {background: lightgrey}
  ml-item-title {cursor: pointer}
  @media (min-width: 1028px) {.modal-container {margin-left: 240px}}
  @media (max-width: 700px) {.modal-container {margin-left: 0}}
  @media (min-width: 700px) {.w3-modal-content {width: 600px !important; right: 100px; top: 100px}}
  @media (max-width: 700px) {.w3-modal-content {top: 110px !important}}
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
        <span (click)="closeModal()" class="w3-button w3-display-topright">
          <ml-icon>highlight_off</ml-icon>
        </span>
        <div>&bull; From: {{ message?.from }}</div>
        <div>&bull; Subject: {{ message?.subject }}</div>
        <div>&bull; Sender email: {{ message?.email }}</div>
      </header>
      <div class="w3-container" class="msg-body">
        {{ message?.body }}<br>
      </div>
    </div>
  </div>
  
  <p class="centered footer">Operations on data are not persistent</p>

</div>

`//template
}) export class PagMailbox{

  @ViewChild('modal') modal: ElementRef;
  messages: any[];
  message: any;
  mlBadge: HTMLElement = document.querySelector('ml-badge') as HTMLElement;

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
