import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TabCalendar } from './tb-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { TabCalendarRoutingModule } from './tb-calendar-routing.module';
import { UtilsModule } from '../utils/module';
import { IonicSelectableModule } from 'ionic-selectable';


import { SharedModule } from '../shared/shared.module';
import localeFr from '@angular/common/locales/fr';
import localeTr from '@angular/common/locales/tr';

registerLocaleData(localeFr);
registerLocaleData(localeTr);


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    TabCalendarRoutingModule,
    NgbModalModule,
    IonicSelectableModule,
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
