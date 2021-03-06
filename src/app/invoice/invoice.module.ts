import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from './invoice';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';



@NgModule({
  declarations: [Invoice],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
