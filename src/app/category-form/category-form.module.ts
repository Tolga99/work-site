import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFormRoutingModule } from './category-form-routing.module';

import { CategoryForm } from './category-form';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFormRoutingModule,
    SharedModule
  ],
  declarations: [CategoryForm]
})
export class CategoryFormModule {}
