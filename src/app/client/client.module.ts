import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgApexchartsModule } from "ng-apexcharts";

import { ClientRoutingModule } from './client-routing.module';
import { Client } from './client';
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    ClientRoutingModule,SharedModule, NgApexchartsModule,CommonModule ,
  ],
  declarations: [Client]
})
export class ClientModule {}
