import {Component, OnInit, Output} from '@angular/core';
import {workMessages} from '../shared/static-messages';
import { v4 as uuidv4 } from 'uuid';
import {Message, MessageService} from '../shared/message.service';

@Component({
  selector: 'app-work-chat',
  templateUrl: './work-chat.component.html',
  styleUrls: ['./work-chat.component.scss']
})
export class WorkChatComponent implements OnInit {
  message = '';
  toggle = false;
  messageToChange: Message[] = [];

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messages = workMessages;
  }

  sendMessage(): void {
    if (this.message.trim()) {
      const message: Message = {
        id: uuidv4(),
        author: localStorage.getItem('username'),
        message: this.message,
        date: new Date()
      };

      this.messageService.addMessage(message);
      this.message = '';
    }
  }

  changeMessage(message: Message | string): void {
    this.toggle = true;

    if (typeof message === 'string') {
      this.messageToChange = this.messageToChange.filter(ms => ms.id !== message);
      this.message = '';
    } else {
      this.messageToChange.push(message);
    }

    if (this.messageToChange.length === 1) {
      this.message = this.messageToChange[0].message;
    } else {
      this.message = '';
    }

    if (this.messageToChange.length === 0) {
      this.toggle = false;
    }
  }

  remove(): void {
    this.messageToChange.forEach(message => {
      this.messageService.removeMessage(message.id);
    });
    this.toggle = false;
    this.message = '';
  }

  change(): void {
    this.messageToChange[0].message = this.message;
    this.messageService.changeMessage(this.messageToChange[0]);
    this.toggle = false;
    this.message = '';
  }

  addEmoji(emoji): void{
    this.message = this.message + emoji;
  }
}
