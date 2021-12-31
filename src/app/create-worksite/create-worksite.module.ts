import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorksite } from './create-worksite';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module';
import { CreateWorksiteRoutingModule } from './create-worksite-routing.module';



@NgModule({
  declarations: [CreateWorksite],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    CreateWorksiteRoutingModule
  ]
})
export class CreateWorksiteModule { }
