import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabHome } from './tb-home';
import { TabHomeRoutingModule } from './tb-home-routing.module';
import { SharedModule } from '../shared/shared.module';

import {MaterialModule} from '../material.module';
// import {TableOverviewExample} from './table-overview-example';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DxModule } from '../Dx.module';
import { ReactiveFormsModule } from '@angular/forms';




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
