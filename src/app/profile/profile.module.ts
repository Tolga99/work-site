import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './profile';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ProfileRoutingModule,NgxPayPalModule
  ],
  declarations: [Profile]
})
export class ProfileModule {}
