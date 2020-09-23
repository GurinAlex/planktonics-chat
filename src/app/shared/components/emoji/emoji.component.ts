import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('addEmoji') emoji: EventEmitter<any> = new EventEmitter<any>();
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ];
  set = 'twitter';

  ngOnInit(): void {
  }

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  addEmoji(event): void {
    this.emoji.emit(event.emoji.native);
  }
}
