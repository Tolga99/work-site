import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { Settings } from './settings';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    FormsModule,
  ],
  declarations: [Settings]
})
export class SettingsModule {}
