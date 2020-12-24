import { Injectable } from '@angular/core';

export class Message {
  id: number;
  content: string;
  style: string;
  position: string;
  timeout: number;
  closable: boolean;
  dismissed = false;
  constructor(id, content, style?, position?, timeout?, closable?) {
    this.id = id;
    this.content = content;
    this.style = style || 'info';
    this.position = position || 'normal';
    this.timeout = timeout || 3000;
    this.closable = closable || false;
  }
}
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  messages: Message[] = [];
  constructor() {}

  getMessages(): Message[] {
    return this.messages;
  }

  sendMessage(content, style, position, timeout, closable) {
    const message = new Message(
      this.getMaxIdNumber(),
      content,
      style,
      position,
      timeout,
      closable
    );
    this.messages.push(message);
    setTimeout(() => {
      this.dismissMessage(message.id);
    }, timeout);
  }

  getMaxIdNumber() {
    if (this.messages.length > 0) {
      const ids = this.messages.map((_) => {
        return _.id;
      });
      return Math.max.apply(null, ids) + 1;
    }
    return 0;
  }

  dismissMessage(id) {
    const mensajeFiltrado = this.messages.filter((_) => {
      return _.id === id;
    })[0];
    mensajeFiltrado.dismissed = true;
  }
}
