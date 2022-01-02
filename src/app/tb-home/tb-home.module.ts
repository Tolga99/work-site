import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHome } from './tb-home';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabHomeRoutingModule } from './tb-home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabHomeRoutingModule
  ],
  declarations: [TabHome]
})
export class TabHomeModule {}
