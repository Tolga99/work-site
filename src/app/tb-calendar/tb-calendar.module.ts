import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCalendar } from './tb-calendar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { TabCalendarRoutingModule } from './tb-calendar-routing.module';
import { UtilsModule } from '../utils/module';

import { IgxCalendarModule,IgxDialogModule} from "igniteui-angular";
import { HammerModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    TabCalendarRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    UtilsModule,
    IgxCalendarModule,
    IgxDialogModule,HammerModule,
  ],
  declarations: [TabCalendar]
})
export class TabCalendarModule {}

