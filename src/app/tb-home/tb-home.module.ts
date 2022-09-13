import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabHome } from './tb-home';
import { TabHomeRoutingModule } from './tb-home-routing.module';
import { SharedModule } from '../shared/shared.module';

import {MaterialModule} from '../material.module';
// import {TableOverviewExample} from './table-overview-example';
import {MatNativeDateModule} from '@angular/material/core';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TabHomeRoutingModule,
    SharedModule,
    MatNativeDateModule,MaterialModule
  ],
  declarations: [TabHome]
})
export class TabHomeModule {}
