import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'livechat',
    loadChildren: () => import('./livechat/livechat.module').then( m => m.LivechatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
