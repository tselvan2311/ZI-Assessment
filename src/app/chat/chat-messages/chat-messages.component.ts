import { Component, Input, OnInit } from '@angular/core';
import { PrevMessage } from '../models';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  @Input()
  messages: PrevMessage[] | null = null;
  // messages: PrevMessage[] | null = sample;
  constructor() { }

  ngOnInit(): void {
    
  }

  getDateFromUnixTimeStamp(value?: number) {
    return value ? new Date(value * 1000) : null;
  }

}


const sample: PrevMessage[] = [
  {
    "provider": "bot",
    "mentions": [],
    "userId": "bot",
    "newSession": true,
    "time": 1640017520,
    "lead": false,
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Mahadevan",
    "img": "https://staging-uploads.insent.ai/insentrecruit/logo-insentrecruit-1636924693820?1636924693897"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640017530,
    "text": "Tamil",
    "lead": true,
    "_id": "61c0ae7a5e95ec001e5b2de4",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640017552,
    "text": "43435245345",
    "lead": true,
    "_id": "61c0ae905e95ec001e5b2e2e",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640017559,
    "lead": true,
    "text": "@Mahadevan",
    "_id": "61c0ae975e95ec001e5b2e57",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "app",
    "mentions": [],
    "userId": "61c074f95e95ec001e5b2579",
    "event": "tselvan2311@gmail.com joined this conversation",
    "time": 1640017637,
    "lead": false,
    "_id": "61c0aee55e95ec001e5b2f1a",
    "slackMessages": [],
    "msteamsMessages": [],
    "category": "knownUserJoined",
    "keyValues": [
      "tselvan2311@gmail.com"
    ],
    "name": "tselvan2311@gmail.com"
  },
  {
    "provider": "app",
    "mentions": [],
    "text": "Hi Tamil, Good day<br />",
    "_id": "61c0aee55e95ec001e5b2f17",
    "userId": "61c074f95e95ec001e5b2579",
    "time": 1640017637,
    "lead": false,
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "tselvan2311@gmail.com"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640021493,
    "lead": true,
    "text": "@Mahadevan",
    "_id": "61c0bdf55e95ec001e5b3195",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "bot",
    "mentions": [],
    "userId": "bot",
    "newSession": true,
    "time": 1640365199,
    "lead": false,
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Mahadevan",
    "img": "https://staging-uploads.insent.ai/insentrecruit/logo-insentrecruit-1636924693820?1636924693897"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640367135,
    "lead": true,
    "text": "@Mahadevan",
    "_id": "61c6041f406d44001ee4ca19",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640367135,
    "lead": true,
    "text": "@Mahadevan",
    "_id": "61c6041f406d44001ee4ca1b",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "bot",
    "mentions": [],
    "userId": "bot",
    "newSession": true,
    "time": 1640442836,
    "lead": false,
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Mahadevan",
    "img": "https://staging-uploads.insent.ai/insentrecruit/logo-insentrecruit-1636924693820?1636924693897"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640447751,
    "text": "tamil",
    "lead": true,
    "_id": "61c73f08a6b5a700219a192c",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "widget",
    "mentions": [],
    "userId": "HVeYOnae6QsM8oVWg1640017017812",
    "time": 1640448104,
    "text": "9983827827",
    "lead": true,
    "_id": "61c74068a6b5a700219a1a30",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Site Visitor"
  },
  {
    "provider": "bot",
    "mentions": [],
    "userId": "bot",
    "time": 1640448110,
    "text": "Thank you for using our service, we will get in touch with you shortly !<br />",
    "lead": false,
    "_id": "61c74070a6b5a700219a1a74",
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Mahadevan",
    "img": "https://staging-uploads.insent.ai/insentrecruit/logo-insentrecruit-1636924693820?1636924693897"
  },
  {
    "provider": "bot",
    "mentions": [],
    "userId": "bot",
    "newSession": true,
    "time": 1640626202,
    "lead": false,
    "slackMessages": [],
    "msteamsMessages": [],
    "name": "Mahadevan",
    "img": "https://staging-uploads.insent.ai/insentrecruit/logo-insentrecruit-1636924693820?1636924693897"
  }
];

