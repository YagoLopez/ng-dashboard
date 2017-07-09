//todo: crear un servicio para los mensajes
//todo: directiva ellipsis, sacar de ml-list y exponer
//todo: cambiar nombre de css animations

import {Component, ViewChild, ElementRef} from "@angular/core";
import {Http} from "@angular/http";
import {IConfigSnackbar, MlSnackbar} from "../../ml/components/snackbar/mlSnackbar";

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css', './pagMailbox.css'],
template: `

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
            <ml-icon class="blue" title="Delete message">delete</ml-icon>
          </ml-item-action>
        </ml-item>
      </ml-list>
      <div *ngIf="messages?.length === 0" class="mbox-empty">Mailbox is empty</div>
    </ml-card-text>
  </ml-card>
  
  <div #modal class="w3-modal modal-container">
    <div class="w3-modal-content page-scaleUpDown w3-card-4">
      <header class="w3-container w3-indigo modal-header"> 
        <span (click)="closeModal()" class="w3-button w3-display-topright"><ml-icon>highlight_off</ml-icon></span>
        <div>&bull; From: {{ message?.from }}</div>
        <div>&bull; Subject: {{ message?.subject }}</div>
        <div>&bull; Sender email: {{ message?.email }}</div>
      </header>
      <div class="w3-container" class="msg-body">{{ message?.body }}<br></div>
    </div>
  </div>
  
  <p class="centered footer">Operations on data are not persistent</p>
  
  <ml-snackbar #snackBar [config]="configSnackBar" class="snackbar"></ml-snackbar>

</div>

`//template
}) export class PagMailbox{

  @ViewChild('modal') modal: ElementRef;
  @ViewChild(MlSnackbar) snackBar: MlSnackbar;

  messages: any[];
  message: any;
  mlBadge: HTMLElement = document.querySelector('ml-badge') as HTMLElement;
  configSnackBar: IConfigSnackbar = {
    message: 'Message Deleted',
    actionText: 'Close',
    timeout: 1500
  };

  constructor(private http: Http){}

  ngOnInit(){
    if(!this.messages){
      this.http.get('assets/data/mail-messages.json').subscribe( (response) => {
        this.messages = response.json();
        this.setBadgeValue(this.messages.length);
      });
    }
  }

  findMessageById(index: number): Object {
    return this.messages.indexOf(index, 0);
  }

  deleteMsg(index: number, event: Event | any): void {
    const liElement: HTMLElement = event.target.parentElement.parentElement;
    liElement.style.background = 'lightgrey';
    if (this.messages && this.messages.length) {
      setTimeout( () => {
        if ( window.confirm(`Confirm: delete message from ${this.messages[index].from}`) ){
          this.messages.splice(index, 1);
          this.setBadgeValue(this.messages.length);
          this.snackBar.show();
        } else {
          liElement.style.background = 'white';
        }
      }, 50)
    }
  }

  getBadgeValue(): string | null {
    return this.mlBadge && this.mlBadge.getAttribute('value');
  }

  setBadgeValue(value: any): void {
    this.mlBadge && this.mlBadge.setAttribute('data-badge', value);
  }

  openModal(message: any): void {
    this.modal.nativeElement.style.display = 'block';
    this.message = message;
  }

  closeModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }
}
