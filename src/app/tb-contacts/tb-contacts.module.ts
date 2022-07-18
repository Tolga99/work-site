import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabContacts } from './tb-contacts';
import { TabContactsRoutingModule } from './tb-contacts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    TabContactsRoutingModule,
    MaterialModule,

  ],
  declarations: [TabContacts]
})
export class TabContactsModule {}
