import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopRoutingModule } from './shop-routing.module';

import { Shop } from './shop';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [Shop]
})
export class ShopModule {}
