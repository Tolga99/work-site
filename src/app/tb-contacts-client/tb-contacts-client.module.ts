import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContactsClientPage } from './tb-contacts-client.page';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabContactsClientPageRoutingModule } from './tb-contacts-client-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabContactsClientPage }]),
    TabContactsClientPageRoutingModule,
  ],
  declarations: [TabContactsClientPage]
})
export class TabContactsClientPageModule {}
