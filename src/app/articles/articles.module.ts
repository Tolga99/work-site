import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesRoutingModule } from './articles-routing.module';

import { Articles } from './articles';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesRoutingModule
  ],
  declarations: [Articles]
})
export class ArticlesModule {}
