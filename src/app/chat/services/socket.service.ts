import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
declare const Pusher: any;

@Injectable()
export class SocketService {
  pusher: any;
  channel: any;
  incomingMessage$: Observable<any> = new Subject<any>();
  constructor() {}

  connectToSocket(channel?: string) {
    this.pusher = new Pusher(
      '340185.25514423',
      {
        cluster: channel,
        encrypted: true,
        auth: {
          headers: { Authorization: 'Bearer V9WxVwHha8pFPNCMz2PK' }
        }
      }
    );
    this.channel = this.pusher.subscribe(channel);
    this.registerForEvent();
  }

  registerForEvent() {
    this.channel.bind('server-message', (data: any) => {
      const serverMessage = JSON.stringify(data);
      // Handle recieved data.
      console.log('message recieved >>', JSON.stringify(serverMessage));
    });
  }

  sentMessage() {

  }
}
