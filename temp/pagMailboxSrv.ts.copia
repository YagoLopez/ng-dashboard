import {Injectable} from "@angular/core";

@Injectable()
export class PagMailboxSrv{
  messages: any[];
  mlBadge: HTMLElement = document.querySelector('ml-badge') as HTMLElement;

  findMsgById(index: number){

  }

  deleteMsg(index: number, event: Event | any){

  }

  getBadgeCounter(): string | null {
    return this.mlBadge && this.mlBadge.getAttribute('value');
  }

  setBadgeCounter(value: any): void {
    this.mlBadge && this.mlBadge.setAttribute('data-badge', value);
  }
}
