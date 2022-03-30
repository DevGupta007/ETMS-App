import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigTaskPage } from './big-task.page';

const routes: Routes = [
  {
    path: '',
    component: BigTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigTaskPageRoutingModule {}
