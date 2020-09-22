import {Injectable} from '@angular/core';

export interface Message {
  id: any;
  message: string;
  author: string;
  date: Date;
  changed?: boolean;
}

@Injectable({providedIn: 'root'})
export class MessageService {
  messages: Message[] = [];

  init(messages: Message[]): void {
    this.messages = messages;
  }

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  removeMessage(id: string | number): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }

  changeMessage(changedMessage: Message): void {
    this.messages.forEach(message => {
      if (message.id === changedMessage.id) {
        message.message = changedMessage.message;
        message.changed = true;
        message.date = new Date();
      }
    });
  }
}
