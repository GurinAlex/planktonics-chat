import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {WorkChatComponent} from './work-chat/work-chat.component';
import {SpamChatComponent} from './spam-chat/spam-chat.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
      { path: 'work', component: WorkChatComponent, canActivate: [AuthGuard] },
      { path: 'spam', component: SpamChatComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginPageComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
