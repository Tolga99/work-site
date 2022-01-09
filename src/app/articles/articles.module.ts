import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesRoutingModule } from './articles-routing.module';

import { Articles } from './articles';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [Articles]
})
export class ArticlesModule {}
