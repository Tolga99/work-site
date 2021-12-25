import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCalendarPage } from './tb-calendar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { TabCalendarPageRoutingModule } from './tb-calendar-routing.module';
import { DemoUtilsModule } from '../tb-calendar/demo-utils/module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabCalendarPageRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
  ],
  declarations: [TabCalendarPage]
})
export class TabCalendarPageModule {}

