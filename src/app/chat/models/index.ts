export interface ChatInfo {
  channelId?: string
  popupMessage?: PopupMessage
  settings?: Settings
  externalTriggers?: ExternalTriggers
  initiateSocketConnection?: boolean
  session?: Session
  subscriptionChannel?: string
  user?: User
}

export interface PopupMessage {
  message?: string
  info?: boolean
}

export interface Settings {
  widgetSound?: boolean
  showPoweredByInsentText?: boolean
  bot?: Bot
  color?: Color
  widget?: ViewProperty
  popupMessage?: ViewProperty
}

export interface Bot {
  name?: string
  company?: string
  description?: string
  img?: string
  widgetIcon?: string
  s3ImagePath?: string
}

export interface Color {
  headerBackgroundColor?: string
  headerTextColor?: string
  chatBackgroundColor?: string
  chatTextColor?: string
}

export interface ViewProperty {
  show?: boolean
  delayTime?: number
}


export interface ExternalTriggers {
  forms?: any[]
  elements?: Element[]
}

export interface Element {
  key?: string
  clickUrl?: string
  elementId?: string
  elementName?: string
  cssSelectors?: string
}

export interface Session {
  id?: string
  updateInterval?: number
}

export interface User {
  firstName?: string
  phone?: string
  id?: string
}

export interface PusherAuth {
  channel_data ?: ChannelData
  auth?: string
}

export interface ChannelData {
  user_id?: string
  user_info?: UserInfo
}

export interface UserInfo {
  userType?: string 
}

export interface PrevMessage {
  provider?: string;
  mentions?: any[];
  userId?: string;
  newSession?: boolean;
  time?: number;
  lead?: boolean;
  slackMessages?: any[];
  msteamsMessages?: any[];
  name?: string;
  img?: string;
  text?: string;
  _id?: string;
  event?: string;
  category?: string;
  keyValues?: string[];
}

export interface Slack {
  channelId?: string;
}

export interface Alert {
  slack?: Slack;
}

export interface Input {
  key?: string;
  name?: string;
  type?: string;
}

export interface Message {
  alert?: Alert;
  type?: string;
  input?: Input[];
  pause?: number;
  validateDomains?: boolean;
  id?: string;
}

export interface Sender {
  id?: string;
  name?: string;
  img?: string;
  timestamp?: number;
}

export interface Member {
  id?: string;
  name?: string;
  email?: string;
}

export interface Channel {
  channelId?: string;
  prevMessages?: PrevMessage[];
  unread?: boolean;
  messages?: Message[];
  end?: boolean;
  showTypingIndicator?: boolean;
  sender?: Sender;
  input?: boolean;
  botActive?: boolean;
  messageTimestamp?: number;
  members?: Member[];
  delivered?: boolean;
}