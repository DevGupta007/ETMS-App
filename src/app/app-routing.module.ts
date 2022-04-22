import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./login/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'big-task',
    loadChildren: () => import('./login/home/big-task/big-task.module').then( m => m.BigTaskPageModule)
  },
  {
    path: 'small-task',
    loadChildren: () => import('./login/home/small-task/small-task.module').then( m => m.SmallTaskPageModule)
  },
  {
    path: 'livechat',
    loadChildren: () => import('./login/livechat/livechat.module').then( m => m.LivechatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
