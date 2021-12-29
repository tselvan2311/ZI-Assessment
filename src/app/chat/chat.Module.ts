import { NgModule } from '@angular/core';
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ChatMessagesComponent } from "./chat-messages/chat-messages.component";
import { ChatWidgetComponent } from "./chat-widget/chat-widget.component";
import { SocketService } from './services/socket.service';
import { ChatService } from './services/chat.service';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    ChatWidgetComponent,
    ChatMessagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OverlayModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MomentModule,
  ],
  providers: [
    SocketService,
    ChatService,
  ],
  exports: [
    ChatWidgetComponent,
  ],

})
export class ChatModule { }