import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-messeges',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() message;
  @Input() toggle;
  // tslint:disable-next-line:no-output-rename
  @Output('messageToChange') messageToChange: EventEmitter<any> = new EventEmitter<any>();
  username = localStorage.getItem('username');
  active = false;

  ngOnInit(): void {
  }

  changeMessage(): void {
    if (this.message.author !== this.username) {
      return;
    }

    if (!this.active) {
      this.messageToChange.emit(this.message);
    } else {
      this.messageToChange.emit(this.message.id);
    }

    this.active = !this.active;
}
}
