import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallTaskPageRoutingModule } from './small-task-routing.module';

import { SmallTaskPage } from './small-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallTaskPageRoutingModule
  ],
  declarations: [SmallTaskPage]
})
export class SmallTaskPageModule {}
