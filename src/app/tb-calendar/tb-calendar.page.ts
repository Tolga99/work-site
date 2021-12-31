import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { IgxCalendarComponent, IgxDialogComponent, CalendarView } from 'igniteui-angular';
import { IViewDateChangeEventArgs } from 'igniteui-angular/lib/calendar/calendar-base';


@Component({
  selector: 'app-tb-calendar',
  templateUrl: 'tb-calendar.page.html',
  styleUrls: ['tb-calendar.page.scss']
})
export class TabCalendar {
  @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
  @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
  public loggerHeader = `Interact with the calendar to see the events logged here in sequence:`;

  // @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  // dateValue = '';
  // dateValue2 = '';

  // constructor() {
  //   //this.datetime.showDefaultButtons=true;
  // }
  // onChangene($event){
  //   console.log($event.detail.value);
  //   }
  // confirm() {
  //   //this.datetime;// .nativeEl.confirm();
    
  //   this.datetime.confirm();
  //   console.log('Date value',this.datetime);
  //   console.log('confirm ',this.datetime.value);
  //   //this.datetime.nativeEl.confirm();

  // }
  
  // reset() {
  //   // this.datetime.nativeEl.reset();
  // }

  // formatDate(value: string) {
  //   return format(parseISO(value), 'MMM dd yyyy');
  // }
  
  
      public onSelection(dates: Date[]) {
        const logger: HTMLElement = document.querySelector('.logger');
        logger.innerHTML = `<span> => 'onSelectionChanged': ${dates.length} dates selected.<br>${logger.innerHTML}`;
      }
  
      public viewDateChanged(event: IViewDateChangeEventArgs) {
          const logger: HTMLElement = document.querySelector('.logger');
          // eslint-disable-next-line max-len
          const eventArgs = `event.previousValue: ${this.parseDate(event.previousValue)} | event.currentValue: ${this.parseDate(event.currentValue)}`;
          logger.innerHTML = `<span> => 'viewDateChanged': ${eventArgs}</span><br>${logger.innerHTML}`;
      }
  
      public activeViewChanged(event: CalendarView) {
          const logger: HTMLElement = document.querySelector('.logger');
          logger.innerHTML = `<span> => 'activeViewChanged':. Active view is: ${CalendarView[event]}</span><br>${logger.innerHTML}`;
      }
  
      private parseDate(date: Date) {
          const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
          return `${monthFormatter.format(date)} ${date.getFullYear()}`;
      }
  }
