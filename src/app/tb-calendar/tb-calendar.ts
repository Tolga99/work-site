import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { colors } from '../utils/colors';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { User } from '../models/user';


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
        h3 {
          margin: 0 0 10px;
        }

        pre {
          background-color: #f5f5f5;
          padding: 15px;
        }
      `,
    ],
    templateUrl: 'tb-calendar.html',
  // styleUrls: ['tb-calendar.page.scss']
})
export class TabCalendar implements OnInit {

  clientList : Array<User> = [];

  // @Component({
  //   selector: 'mwl-demo-component',
  //   changeDetection: ChangeDetectionStrategy.OnPush,
  //   styles: [
  //     `
  //       h3 {
  //         margin: 0 0 10px;
  //       }

  //       pre {
  //         background-color: #f5f5f5;
  //         padding: 15px;
  //       }
  //     `,
  //   ],
  //   templateUrl: 'template.html',
  // })
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();

    modalData: {
      action: string;
      event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: 'Edit',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edited', event);
        },
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: 'Delete',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent('Deleted', event);
        },
      },
    ];

    refresh = new Subject<void>();

    events: CalendarEvent[] = [
      // {
      //   start: subDays(startOfDay(new Date()), 1),
      //   end: addDays(new Date(), 1),
      //   title: 'A 3 day event',
      //   color: colors.red,
      //   actions: this.actions,
      //   allDay: true,
      //   resizable: {
      //     beforeStart: true,
      //     afterEnd: true,
      //   },
      //   draggable: true,
      // },
      // {
      //   start: startOfDay(new Date()),
      //   title: 'An event with no end date',
      //   color: colors.yellow,
      //   actions: this.actions,
      // },
      // {
      //   start: subDays(endOfMonth(new Date()), 3),
      //   end: addDays(endOfMonth(new Date()), 3),
      //   title: 'A long event that spans 2 months',
      //   color: colors.blue,
      //   allDay: true,
      // },
      // {
      //   start: addHours(startOfDay(new Date()), 2),
      //   end: addHours(new Date(), 2),
      //   title: 'A draggable and resizable event',
      //   color: colors.yellow,
      //   actions: this.actions,
      //   resizable: {
      //     beforeStart: true,
      //     afterEnd: true,
      //   },
      //   draggable: true,
      // },
    ];

    activeDayIsOpen: boolean = true;

    constructor(private modal: NgbModal, private router: Router,private storageService: StorageService) {}
    async ngOnInit(): Promise<void> {
      this.storageService.init();
      this.clientList = await this.storageService.get('Contacts');
    }

    async ionViewDidEnter(){
      this.storageService.init();
      this.clientList = await this.storageService.get('Contacts');
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
        this.viewDate = date;
      }
    }

    eventTimesChanged({
      event,
      newStart,
      newEnd,
    }: CalendarEventTimesChangedEvent): void {
      this.events = this.events.map((iEvent) => {
        if (iEvent === event) {
          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return iEvent;
      });
      this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
      this.events = [
        ...this.events,
        {
          title: 'New event',
          client: null,
          description: null,
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
        },
      ];
    }

    deleteEvent(eventToDelete: CalendarEvent) {
      this.events = this.events.filter((event) => event !== eventToDelete);
    }

    setView(view: CalendarView) {
      this.view = view;
    }

    closeOpenMonthViewDay() {
      this.activeDayIsOpen = false;
    }
    NewClient()
    {
      console.log('create client');
      this.router.navigate(['new-contact',{tag: 'chantier'}]);
    }
    GoBack()
    {
      this.router.navigate(['tb-contacts'],{replaceUrl:true});
    }
  }

