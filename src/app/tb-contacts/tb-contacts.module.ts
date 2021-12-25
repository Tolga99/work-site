import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContactsPage } from './tb-contacts.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabContactsPageRoutingModule } from './tb-contacts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabContactsPage }]),
    TabContactsPageRoutingModule,
  ],
  declarations: [TabContactsPage]
})
export class TabContactsPageModule {}
