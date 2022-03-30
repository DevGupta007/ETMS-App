import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BigTaskPageRoutingModule } from './big-task-routing.module';

import { BigTaskPage } from './big-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BigTaskPageRoutingModule
  ],
  declarations: [BigTaskPage]
})
export class BigTaskPageModule {}
