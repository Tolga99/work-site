import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentRoutingModule } from './payment-routing.module';

import { Payment } from './payment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentRoutingModule,
    SharedModule,
  ],
  declarations: [Payment]
})
export class PaymentModule {}
