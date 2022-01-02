import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContacts } from './tb-contacts';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabContactsRoutingModule } from './tb-contacts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    TabContactsRoutingModule,
  ],
  declarations: [TabContacts]
})
export class TabContactsModule {}
