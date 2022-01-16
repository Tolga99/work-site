import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Worksite } from './worksite';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module';
import { WorksiteRoutingModule } from './worksite-routing.module';
import { NgbdModalFocusModule } from '../modal/modal-focus.module';

@NgModule({
  declarations: [Worksite],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    WorksiteRoutingModule,
    NgbdModalFocusModule,
  ]
})
export class WorksiteModule { }
