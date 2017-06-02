//todo: crear un servicio para los mensajes
import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css'],
template: `

<style>
  .blue {color: cornflowerblue; cursor: pointer; padding-left: 5px}
  .item-subtitle {color: grey; font-size: small}
  .centered {text-align: center}
  .footer {padding: 20px; color: grey}
  :host /deep/ ml-item > li {border-bottom: 1px solid lightgrey}
</style>

<h5 class="centered">Mailbox</h5>

<ml-card shadow="4">
  <ml-card-text>
    <ml-list>
      <ml-item lines="2" *ngFor="let message of messages; let index = index">
        <ml-item-content>
          <ml-item-icon list>email</ml-item-icon>
          <ml-item-title>
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

<p class="centered footer">Operations on data are simulated and non persistent</p>

`//template
}) export class PagMailbox{

  messages: any[];
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
}
