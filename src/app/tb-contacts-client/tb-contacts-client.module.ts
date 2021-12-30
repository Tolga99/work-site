import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContactsClientPage } from './tb-contacts-client.page';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabContactsClientPageRoutingModule } from './tb-contacts-client-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    TabContactsClientPageRoutingModule,
  ],
  declarations: [TabContactsClientPage]
})
export class TabContactsClientPageModule {}
