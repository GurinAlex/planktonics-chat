import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkChatComponent } from './work-chat/work-chat.component';
import { SpamChatComponent } from './spam-chat/spam-chat.component';
import {AppRoutingModule} from './app-routing.module';
import { MessagesComponent } from './shared/components/messeges/messages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import { EmojiComponent } from './shared/components/emoji/emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    WorkChatComponent,
    SpamChatComponent,
    MessagesComponent,
    LoginPageComponent,
    EmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
