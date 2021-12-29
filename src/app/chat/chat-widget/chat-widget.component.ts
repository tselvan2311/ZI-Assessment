import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { environment } from '../../../environments/environment';
import { Channel, ChatInfo, Settings, User, UserInfo } from '../models';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent implements OnInit {

  chatInfo: ChatInfo;
  settings?: Settings;
  userInfo?: User;
  channelInfo: Channel | null = null;
  @Input()
  open: boolean = false;

  textMessage: string;

  constructor(private chatService: ChatService, private socketService: SocketService) {

  }

  ngOnInit(): void {
    this.chatService.getUser().subscribe((data: ChatInfo) => {
      this.chatInfo = data;
      this.settings = data.settings;
      this.userInfo = data.user;
      this.chatService.getChannelInfo(this.chatInfo?.channelId!, this.userInfo?.id!).subscribe((data: Channel) => {
        this.channelInfo = data;
      });
    });
  }

  connectToSocket() {
    this.socketService.connectToSocket(this.chatInfo?.subscriptionChannel!);
  }
  
  sendMessage() {
    if (this.textMessage) {
      // send message
    }
  }

}
