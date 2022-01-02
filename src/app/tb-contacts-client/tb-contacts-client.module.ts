import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContactsClient } from './tb-contacts-client';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabContactsClientRoutingModule } from './tb-contacts-client-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    TabContactsClientRoutingModule,
  ],
  declarations: [TabContactsClient]
})
export class TabContactsClientModule {}
