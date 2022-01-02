import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './profile';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    ProfileRoutingModule
  ],
  declarations: [Profile]
})
export class ProfileModule {}
