import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Channel, ChatInfo, PusherAuth, UserInfo } from '../models/index';
import { Observable } from 'rxjs/internal/Observable';
import { URLS, WEB_APP_URL } from 'src/app/app.constants';

@Injectable()
export class ChatService {

  constructor(private httpClient: HttpClient) { }

  getUser(req: string = WEB_APP_URL): Observable<ChatInfo> {

    const url = `${URLS.getUser}?url=${req}`; 
    return this.httpClient.get<ChatInfo>(url);
  }

  getChannelInfo(channelId: string, userId: string): Observable<Channel> {
    const url = `${URLS.getChannels}/${channelId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'userId': userId
      })
    };
    return this.httpClient.get<Channel>(url, httpOptions);
  }

  delivered(channelId: string): Observable<any> {
    const url = URLS.delivered.replace(':channelId', channelId);
    return this.httpClient.post(url, {});
  }

  read(channelId: string): Observable<any> {
    const url = URLS.read.replace(':channelId', channelId);
    return this.httpClient.post(url, {});
  }


}
