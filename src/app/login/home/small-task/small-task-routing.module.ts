import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallTaskPage } from './small-task.page';

const routes: Routes = [
  {
    path: '',
    component: SmallTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallTaskPageRoutingModule {}
