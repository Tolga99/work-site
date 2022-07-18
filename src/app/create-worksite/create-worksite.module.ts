import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorksite } from './create-worksite';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CreateWorksiteRoutingModule } from './create-worksite-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [CreateWorksite],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    CreateWorksiteRoutingModule,
    IonicSelectableModule
  ]
})
export class CreateWorksiteModule { }
