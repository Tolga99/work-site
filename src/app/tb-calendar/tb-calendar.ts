import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  NgZone,
  ChangeDetectorRef,
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
  startOfMonth,
  startOfWeek,
  endOfWeek,
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
import { NgbdModalFocus } from '../modal/modal-focus';
import { MatListItem } from '@angular/material/list';


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
  locale: string = 'fr';

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

    events: CalendarEvent[] = [];

    activeDayIsOpen: boolean = true;
    public modalTolg = new NgbdModalFocus(this.modalS);
    constructor(private modalS :NgbModal,
                private modal: NgbModal,
                private router: Router,
                private storageService: StorageService,
                private cd : ChangeDetectorRef)
                {
                }
    async ngOnInit(): Promise<void> {
      this.storageService.init();
      this.clientList = await this.storageService.get('Contacts');
      this.events = await this.storageService.get('Events');
      if(!this.events)
        this.events = [];
      console.log(this.events);
      //this.fetchEvents();
      this.events = Object.assign([],this.events);
      this.cd.detectChanges();
    }

    async ionViewDidEnter(){
      this.storageService.init();
      this.clientList = await this.storageService.get('Contacts');
      this.events = await this.storageService.get('Events');
      if(!this.events)
        this.events = [];
      console.log(this.events);
      this.events = Object.assign([],this.events);
      this.cd.detectChanges();
    }

    async fetchEvents(): Promise<void> {
      const getStart: any = {
        month: startOfMonth,
        week: startOfWeek,
        day: startOfDay,
      }[this.view];
  
      const getEnd: any = {
        month: endOfMonth,
        week: endOfWeek,
        day: endOfDay,
      }[this.view];
      const list : CalendarEvent[] = await this.storageService.get('Events');
      list.forEach(element => {
        this.events.push(element);
      });
      // for(let i = 0; i<list.length; i++)
      // {
      //   this.events = [
      //     ...this.events,
      //     {
      //       title: list[i].title,
      //       client: null,
      //       description: null,
      //       start: startOfDay(new Date()),
      //       end: endOfDay(new Date()),
      //       color: colors.red,
      //       draggable: true,
      //       resizable: {
      //         beforeStart: true,
      //         afterEnd: true,
      //       },
      //     },
      //   ];
      // }
      // this.events = list;
      // this.events = list.map(({ value,index,array }: {value : CalendarEvent, index:number, array: CalendarEvent[] }) => {
      //       return array.map((film: CalendarEvent) => {
      //         return {
      //           title: '',
      //           client: null,
      //           description: null,
      //           start: startOfDay(new Date()),
      //           end: endOfDay(new Date()),
      //           color: colors.red,
      //           draggable: true,
      //           resizable: {
      //             beforeStart: true,
      //             afterEnd: true,
      //           }
      //         };
      //       });
      //     })
      //   );
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
      this.storageService.set('Events',this.events);
    }

    async handleEvent(action: string, event: CalendarEvent): Promise<void> {
      this.storageService.set('Events',this.events);
      let res : string =null;
      const start = event.start.toLocaleTimeString()+' - '
                    +event.start.getDate()+'/'
                    +(event.start.getMonth()+1)+'/'
                    +event.start.getFullYear();

      const end = event.end.toLocaleTimeString()+' - '
                  +event.end.getDate()+'/'
                  +(event.end.getMonth()+1)+'/'
                  +event.end.getFullYear();

      const client = this.clientList.find(a=>a.userId === event.client)?.lastName?.toUpperCase() +' '
                      +this.clientList.find(a=>a.userId === event.client)?.firstName;

      const infos = event.title + '|'+
                    client + '|'+ event.description + '|'+ start + '|'+ end;
      await this.modalTolg.open('calendar',infos)
      .then(result => result.result
      .then((data) => {res='OK';} , (reason) => {
        res='DISMISS' }
        ));
        return;
    }

    addEvent(): void {
      this.events = [
        ...this.events,
        {
          title: '',
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
      this.storageService.set('Events',this.events);
    }

    deleteEvent(eventToDelete: CalendarEvent) {
      this.events = this.events.filter((event) => event !== eventToDelete);
      this.storageService.set('Events',this.events);
    }

    LoadEvents()
    {
      this.addEvent();
      this.deleteEvent(this.events[this.events.length]);
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
      this.router.navigate(['new-contact',{tag: 'chantier'}],{replaceUrl:true});
    }
    GoBack()
    {
      this.storageService.set('Events',this.events);
      this.router.navigate(['tb-contacts'],{replaceUrl:true});
    }
  }

