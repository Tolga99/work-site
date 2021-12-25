import {ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { colors } from '../tb-calendar/demo-utils/colors';
@Component({
  selector: 'app-tb-calendar',
  templateUrl: 'tb-calendar.page.html',
  styleUrls: ['tb-calendar.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .cal-week-view .cal-time-events .cal-day-column {
        margin-right: 10px;
      }

      .cal-week-view .cal-hour {
        width: calc(100% + 10px);
      }
    `,
  ],
})
export class TabCalendarPage {

  constructor() {}

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'An event',
      color: colors.yellow,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'Another event',
      color: colors.blue,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 2), 2),
      end: addDays(new Date(), 2),
      title: 'And another',
      color: colors.red,
    },
  ];
}