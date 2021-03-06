import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSettings } from './tb-settings';

import { TabSettingsRoutingModule } from './tb-settings-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,SharedModule,
    RouterModule.forChild([{ path: '', component: TabSettings }]),
    TabSettingsRoutingModule,
  ],
  declarations: [TabSettings]
})
export class TabSettingsModule {}
