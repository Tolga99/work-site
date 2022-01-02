import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCalendar } from './tb-calendar';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { TabCalendarRoutingModule } from './tb-calendar-routing.module';
import { UtilsModule } from '../utils/module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ExploreContainerComponentModule,
    TabCalendarRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    UtilsModule
  ],
  declarations: [TabCalendar],
  exports: [TabCalendar],

})
export class TabCalendarModule {}
