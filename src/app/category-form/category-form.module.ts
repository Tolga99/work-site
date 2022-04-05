import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonIcon, IonItem } from '@ionic/angular';

import { CategoryFormRoutingModule } from './category-form-routing.module';

import { CategoryForm } from './category-form';
import { SharedModule } from '../shared/shared.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFormRoutingModule,
    SharedModule,
    IonicSelectableModule
  ],
  declarations: [CategoryForm]
})
export class CategoryFormModule {}
