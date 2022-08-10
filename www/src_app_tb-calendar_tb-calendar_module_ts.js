"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-calendar_tb-calendar_module_ts"],{

/***/ 48321:
/*!***********************************************************!*\
  !*** ./src/app/tb-calendar/tb-calendar-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabCalendarRoutingModule": () => (/* binding */ TabCalendarRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-calendar */ 89637);




const routes = [
    {
        path: '',
        component: _tb_calendar__WEBPACK_IMPORTED_MODULE_0__.TabCalendar,
    }
];
let TabCalendarRoutingModule = class TabCalendarRoutingModule {
};
TabCalendarRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabCalendarRoutingModule);



/***/ }),

/***/ 45263:
/*!***************************************************!*\
  !*** ./src/app/tb-calendar/tb-calendar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabCalendarModule": () => (/* binding */ TabCalendarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-calendar */ 89637);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 58617);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _tb_calendar_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-calendar-routing.module */ 48321);
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/module */ 16382);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/fr */ 58384);
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/tr */ 55763);















(0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_6__["default"]);
let TabCalendarModule = class TabCalendarModule {
};
TabCalendarModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _tb_calendar_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabCalendarRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__.IonicSelectableModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_12__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__.adapterFactory,
            }),
            _utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule
        ],
        declarations: [_tb_calendar__WEBPACK_IMPORTED_MODULE_0__.TabCalendar],
        exports: [_tb_calendar__WEBPACK_IMPORTED_MODULE_0__.TabCalendar],
    })
], TabCalendarModule);



/***/ }),

/***/ 89637:
/*!********************************************!*\
  !*** ./src/app/tb-calendar/tb-calendar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabCalendar": () => (/* binding */ TabCalendar)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_src_app_tb_calendar_tb_calendar_ts_css_ngResource_C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgaDMgewogICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDsKICAgICAgICB9CgogICAgICAgIHByZSB7CiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OwogICAgICAgICAgcGFkZGluZzogMTVweDsKICAgICAgICB9CiAgICAgIA_3D_3D_C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_src_app_tb_calendar_tb_calendar_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/tb-calendar/tb-calendar.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgaDMgewogICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDsKICAgICAgICB9CgogICAgICAgIHByZSB7CiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OwogICAgICAgICAgcGFkZGluZzogMTVweDsKICAgICAgICB9CiAgICAgIA%3D%3D!./src/app/tb-calendar/tb-calendar.ts */ 80576);
/* harmony import */ var _tb_calendar_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tb-calendar.html?ngResource */ 14756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 51618);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 10913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/colors */ 60097);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);














let TabCalendar = class TabCalendar {
  constructor(modalS, modal, router, storageService, cd, navController) {
    this.modalS = modalS;
    this.modal = modal;
    this.router = router;
    this.storageService = storageService;
    this.cd = cd;
    this.navController = navController;
    this.locale = 'fr';
    this.clientList = [];
    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView.Month;
    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView;
    this.viewDate = new Date();
    this.actions = [{
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({
        event
      }) => {
        this.handleEvent('Edited', event);
      }
    }, {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({
        event
      }) => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }];
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.events = [];
    this.activeDayIsOpen = true;
    this.modalTolg = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__.NgbdModalFocus(this.modalS);
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storageService.init();

      _this.clientList = yield _this.storageService.get('Contacts');
      _this.events = yield _this.storageService.get('Events');
      if (!_this.events) _this.events = [];
      console.log(_this.events); //this.fetchEvents();

      _this.events = Object.assign([], _this.events);

      _this.cd.detectChanges();
    })();
  }

  ionViewDidEnter() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.storageService.init();

      _this2.clientList = yield _this2.storageService.get('Contacts');
      _this2.events = yield _this2.storageService.get('Events');
      if (!_this2.events) _this2.events = [];
      console.log(_this2.events);
      _this2.events = Object.assign([], _this2.events);

      _this2.cd.detectChanges();
    })();
  }

  fetchEvents() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const getStart = {
        month: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
        day: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"]
      }[_this3.view];
      const getEnd = {
        month: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"],
        day: date_fns__WEBPACK_IMPORTED_MODULE_13__["default"]
      }[_this3.view];
      const list = yield _this3.storageService.get('Events');
      list.forEach(element => {
        _this3.events.push(element);
      }); // for(let i = 0; i<list.length; i++)
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
    })();
  }

  dayClicked({
    date,
    events
  }) {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(date, this.viewDate)) {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
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
    newEnd
  }) {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return { ...event,
          start: newStart,
          end: newEnd
        };
      }

      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
    this.storageService.set('Events', this.events);
  }

  handleEvent(action, event) {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.storageService.set('Events', _this4.events);

      let res = null;
      const start = event.start.toLocaleTimeString() + ' - ' + event.start.getDate() + '/' + (event.start.getMonth() + 1) + '/' + event.start.getFullYear();
      const end = event.end.toLocaleTimeString() + ' - ' + event.end.getDate() + '/' + (event.end.getMonth() + 1) + '/' + event.end.getFullYear();
      const client = _this4.clientList.find(a => a.userId === event.client)?.lastName?.toUpperCase() + ' ' + _this4.clientList.find(a => a.userId === event.client)?.firstName;
      const infos = event.title + '|' + client + '|' + event.description + '|' + start + '|' + end;
      yield _this4.modalTolg.open('calendar', infos).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      return;
    })();
  }

  addEvent() {
    this.events = [...this.events, {
      title: '',
      client: null,
      description: null,
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date()),
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_3__.colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }];
    this.storageService.set('Events', this.events);
  }

  deleteEvent(eventToDelete) {
    this.events = this.events.filter(event => event !== eventToDelete);
    this.storageService.set('Events', this.events);
  }

  LoadEvents() {
    this.addEvent();
    this.deleteEvent(this.events[this.events.length]);
  }

  setView(view) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  NewClient() {
    console.log('create client');
    this.navController.navigateBack(['new-contact', {
      tag: 'chantier'
    }], {
      replaceUrl: true
    });
  }

  GoBack() {
    this.storageService.set('Events', this.events);
    this.navController.navigateBack(['tb-contacts'], {
      replaceUrl: true
    });
  }

  clientChange(event) {
    console.log('client:', event.value);
  }

};

TabCalendar.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal
}, {
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController
}];

TabCalendar.propDecorators = {
  modalContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild,
    args: ['modalContent', {
      static: true
    }]
  }]
};
TabCalendar = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'mwl-demo-component',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectionStrategy.OnPush,
  template: _tb_calendar_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_src_app_tb_calendar_tb_calendar_ts_css_ngResource_C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgaDMgewogICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDsKICAgICAgICB9CgogICAgICAgIHByZSB7CiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OwogICAgICAgICAgcGFkZGluZzogMTVweDsKICAgICAgICB9CiAgICAgIA_3D_3D_C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_src_app_tb_calendar_tb_calendar_ts__WEBPACK_IMPORTED_MODULE_1__]
})], TabCalendar);


/***/ }),

/***/ 58316:
/*!*****************************************************!*\
  !*** ./src/app/utils/calendar-header.component..ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarHeaderComponent": () => (/* binding */ CalendarHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 65610);



let CalendarHeaderComponent = class CalendarHeaderComponent {
    constructor() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
    }
};
CalendarHeaderComponent.propDecorators = {
    view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    viewChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
CalendarHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'mwl-demo-utils-calendar-header',
        template: `
    <div class="row text-center">
      <div class="col-md-4">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Previous
          </div>
          <div
            class="btn btn-outline-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Today
          </div>
          <div
            class="btn btn-primary"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Next
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>
      </div>
      <div class="col-md-4">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Month)"
            [class.active]="view === CalendarView.Month"
          >
            Month
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Week)"
            [class.active]="view === CalendarView.Week"
          >
            Week
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Day)"
            [class.active]="view === CalendarView.Day"
          >
            Day
          </div>
        </div>
      </div>
    </div>
    <br />
  `,
    })
], CalendarHeaderComponent);



/***/ }),

/***/ 60097:
/*!*********************************!*\
  !*** ./src/app/utils/colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};


/***/ }),

/***/ 16382:
/*!*********************************!*\
  !*** ./src/app/utils/module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsModule": () => (/* binding */ UtilsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var _calendar_header_component___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-header.component. */ 58316);






let UtilsModule = class UtilsModule {
};
UtilsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule],
        declarations: [_calendar_header_component___WEBPACK_IMPORTED_MODULE_0__.CalendarHeaderComponent],
        exports: [_calendar_header_component___WEBPACK_IMPORTED_MODULE_0__.CalendarHeaderComponent],
    })
], UtilsModule);



/***/ }),

/***/ 81988:
/*!*************************************************************************************!*\
  !*** ./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatpickrDefaults": () => (/* binding */ FlatpickrDefaults),
/* harmony export */   "FlatpickrDirective": () => (/* binding */ FlatpickrDirective),
/* harmony export */   "FlatpickrModule": () => (/* binding */ FlatpickrModule),
/* harmony export */   "USER_DEFAULTS": () => (/* binding */ USER_DEFAULTS),
/* harmony export */   "defaultsFactory": () => (/* binding */ defaultsFactory),
/* harmony export */   "ɵa": () => (/* binding */ FLATPICKR_CONTROL_VALUE_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ 59282);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



class FlatpickrDefaults {
  constructor() {
    /**
     * Exactly the same as date format, but for the altInput field.
     */
    this.altFormat = 'F j, Y';
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     */

    this.altInput = false;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     */

    this.altInputClass = '';
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     */

    this.allowInput = false;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     */

    this.appendTo = undefined;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     */

    this.ariaDateFormat = 'F j, Y';
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     */

    this.clickOpens = true;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     */

    this.dateFormat = 'Y-m-d';
    /**
     * Initial value of the hour element.
     */

    this.defaultHour = 12;
    /**
     * Initial value of the minute element.
     */

    this.defaultMinute = 0;
    /**
     * Initial value of the seconds element.
     */

    this.defaultSeconds = 0;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     */

    this.disable = [];
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     */

    this.disableMobile = false;
    /**
     * Enables time picker.
     */

    this.enableTime = false;
    /**
     * Enables seconds in the time picker.
     */

    this.enableSeconds = false;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     */

    this.formatDate = undefined;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     */

    this.hourIncrement = 1;
    /**
     * Displays the calendar inline.
     */

    this.inline = false;
    /**
     * The maximum date that a user can pick to (inclusive).
     */

    this.maxDate = undefined;
    /**
     * The minimum date that a user can start picking from (inclusive).
     */

    this.minDate = undefined;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     */

    this.minuteIncrement = 5;
    /**
     * Select a single date, multiple dates or a date range.
     */

    this.mode = 'single';
    /**
     * HTML for the arrow icon, used to switch months.
     */

    this.nextArrow = '>';
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     */

    this.noCalendar = false;
    /**
     * Default now to the current date
     */

    this.now = new Date();
    /**
     * HTML for the left arrow icon.
     */

    this.prevArrow = '<';
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     */

    this.shorthandCurrentMonth = false;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     */

    this.static = false;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     */

    this.time24hr = false;
    /**
     * When true, dates will parsed, formatted, and displayed in UTC.
     * It's recommended that date strings contain the timezone, but not necessary.
     */

    this.utc = false;
    /**
     * Enables display of week numbers in calendar.
     */

    this.weekNumbers = false;
    /**
     * Custom elements and input groups.
     */

    this.wrap = false;
    /**
     * Array of plugin instances to use.
     */

    this.plugins = [];
    /**
     * The locale object or string to use for the locale.
     */

    this.locale = 'default';
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     */

    this.convertModelValue = false;
    /**
     * The number of months shown.
     */

    this.showMonths = 1;
    /**
     * How the month should be displayed in the header of the calendar.
     */

    this.monthSelectorType = 'static';
  }

}

FlatpickrDefaults.ɵfac = function FlatpickrDefaults_Factory(t) {
  return new (t || FlatpickrDefaults)();
};

FlatpickrDefaults.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FlatpickrDefaults,
  factory: FlatpickrDefaults.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrDefaults, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


const
/** @type {?} */
FLATPICKR_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FlatpickrDirective),
  //tslint:disable-line
  multi: true
};

class FlatpickrDirective {
  /**
   * @param {?} elm
   * @param {?} defaults
   * @param {?} renderer
   */
  constructor(elm, defaults, renderer) {
    this.elm = elm;
    this.defaults = defaults;
    this.renderer = renderer;
    /**
     * Object-options that can be user for multiple instances of Flatpickr.
     * Option from this object is applied only if specific option is not specified.
     * Example:
     * ```typescript
     * options: FlatpickrDefaultsInterface = {
     *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
     *      altInput: true        // will be used since specific attribute is not provided
     * };
     * ```
     * ```html
     * <input
     *   class="form-control"
     *   type="text"
     *   mwlFlatpickr
     *   [options]="options"
     *   altFormat="d/m/Y">
     * ```
     */

    this.options = {};
    /**
     * Gets triggered once the calendar is in a ready state
     */

    this.flatpickrReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the user selects a date, or changes the time on a selected date.
     */

    this.flatpickrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the input value is updated with a new date string.
     */

    this.flatpickrValueUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the calendar is opened.
     */

    this.flatpickrOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the calendar is closed.
     */

    this.flatpickrClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the month is changed, either by the user or programmatically.
     */

    this.flatpickrMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the year is changed, either by the user or programmatically.
     */

    this.flatpickrYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Take full control of every date cell with this output
     */

    this.flatpickrDayCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isDisabled = false;

    this.onChangeFn = () => {};

    this.onTouchedFn = () => {};
  }
  /**
   * @return {?}
   */


  ngAfterViewInit() {
    const
    /** @type {?} */
    options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      appendTo: this.appendTo,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      defaultSeconds: this.defaultSeconds,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      defaultDate: this.initialValue,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      noCalendar: this.noCalendar,
      now: this.now,
      parseDate: this.parseDate,
      prevArrow: this.prevArrow,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      monthSelectorType: this.monthSelectorType,
      static: this.static,
      time24hr: this.time24hr,
      weekNumbers: this.weekNumbers,
      getWeek: this.getWeek,
      wrap: this.wrap,
      plugins: this.plugins,
      locale: this.locale,
      onChange: (selectedDates, dateString, instance) => {
        this.flatpickrChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onOpen: (selectedDates, dateString, instance) => {
        this.flatpickrOpen.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onClose: (selectedDates, dateString, instance) => {
        this.flatpickrClose.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onMonthChange: (selectedDates, dateString, instance) => {
        this.flatpickrMonthChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onYearChange: (selectedDates, dateString, instance) => {
        this.flatpickrYearChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onReady: (selectedDates, dateString, instance) => {
        this.flatpickrReady.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onValueUpdate: (selectedDates, dateString, instance) => {
        this.flatpickrValueUpdate.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onDayCreate: (selectedDates, dateString, instance, dayElement) => {
        this.flatpickrDayCreate.emit({
          selectedDates,
          dateString,
          instance,
          dayElement
        });
      }
    };
    Object.keys(options).forEach(key => {
      if (typeof options[key] === 'undefined') {
        if (typeof this.options[key] !== 'undefined') {
          options[key] =
          /** @type {?} */
          this.options[key];
        } else {
          options[key] =
          /** @type {?} */
          this.defaults[key];
        }
      }
    });
    options.time_24hr = options.time24hr; // workaround bug in flatpickr 4.6 where it doesn't copy the classes across
    // TODO - remove once fix in https://github.com/flatpickr/flatpickr/issues/1860 is released

    options.altInputClass = (options.altInputClass || '') + ' ' + this.elm.nativeElement.className;

    if (!options.enable) {
      delete options.enable;
    }

    this.instance =
    /** @type {?} */
    (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(this.elm.nativeElement, options);
    this.setDisabledState(this.isDisabled);
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  ngOnChanges(changes) {
    if (this.instance) {
      Object.keys(changes).forEach(inputKey => {
        this.instance.set(
        /** @type {?} */
        inputKey,
        /** @type {?} */
        this[inputKey]);
      });
    }
  }
  /**
   * @return {?}
   */


  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */


  writeValue(value) {
    let
    /** @type {?} */
    convertedValue = value;

    if (this.convertModelValue && this.mode === 'range' && value) {
      convertedValue = [value.from, value.to];
    }

    if (this.instance) {
      this.instance.setDate(convertedValue);
    } else {
      // flatpickr hasn't been initialised yet, store the value for later use
      this.initialValue = convertedValue;
    }
  }
  /**
   * @param {?} fn
   * @return {?}
   */


  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  /**
   * @param {?} fn
   * @return {?}
   */


  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  /**
   * @param {?} isDisabled
   * @return {?}
   */


  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;

    if (this.instance) {
      if (this.isDisabled) {
        this.renderer.setProperty(this.instance._input, 'disabled', 'disabled');
      } else {
        this.renderer.removeAttribute(this.instance._input, 'disabled');
      }
    }
  }
  /**
   * @return {?}
   */


  inputChanged() {
    const
    /** @type {?} */
    value = this.elm.nativeElement.value;

    if (this.convertModelValue && typeof value === 'string') {
      switch (this.mode) {
        case 'multiple':
          const
          /** @type {?} */
          dates = value.split('; ').map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn(dates);
          break;

        case 'range':
          const [from, to] = value.split(this.instance.l10n.rangeSeparator).map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn({
            from,
            to
          });
          break;

        case 'single':
        default:
          this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
      }
    } else {
      this.onChangeFn(value);
    }
  }

}

FlatpickrDirective.ɵfac = function FlatpickrDirective_Factory(t) {
  return new (t || FlatpickrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlatpickrDefaults), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};

FlatpickrDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FlatpickrDirective,
  selectors: [["", "mwlFlatpickr", ""]],
  hostBindings: function FlatpickrDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function FlatpickrDirective_blur_HostBindingHandler() {
        return ctx.onTouchedFn();
      })("input", function FlatpickrDirective_input_HostBindingHandler() {
        return ctx.inputChanged();
      });
    }
  },
  inputs: {
    options: "options",
    altFormat: "altFormat",
    altInput: "altInput",
    altInputClass: "altInputClass",
    allowInput: "allowInput",
    appendTo: "appendTo",
    ariaDateFormat: "ariaDateFormat",
    clickOpens: "clickOpens",
    dateFormat: "dateFormat",
    defaultHour: "defaultHour",
    defaultMinute: "defaultMinute",
    defaultSeconds: "defaultSeconds",
    disable: "disable",
    disableMobile: "disableMobile",
    enable: "enable",
    enableTime: "enableTime",
    enableSeconds: "enableSeconds",
    formatDate: "formatDate",
    hourIncrement: "hourIncrement",
    inline: "inline",
    maxDate: "maxDate",
    minDate: "minDate",
    minuteIncrement: "minuteIncrement",
    mode: "mode",
    nextArrow: "nextArrow",
    noCalendar: "noCalendar",
    now: "now",
    parseDate: "parseDate",
    prevArrow: "prevArrow",
    shorthandCurrentMonth: "shorthandCurrentMonth",
    showMonths: "showMonths",
    static: "static",
    time24hr: "time24hr",
    weekNumbers: "weekNumbers",
    getWeek: "getWeek",
    wrap: "wrap",
    plugins: "plugins",
    locale: "locale",
    convertModelValue: "convertModelValue",
    monthSelectorType: "monthSelectorType"
  },
  outputs: {
    flatpickrReady: "flatpickrReady",
    flatpickrChange: "flatpickrChange",
    flatpickrValueUpdate: "flatpickrValueUpdate",
    flatpickrOpen: "flatpickrOpen",
    flatpickrClose: "flatpickrClose",
    flatpickrMonthChange: "flatpickrMonthChange",
    flatpickrYearChange: "flatpickrYearChange",
    flatpickrDayCreate: "flatpickrDayCreate"
  },
  exportAs: ["mwlFlatpickr"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FLATPICKR_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

FlatpickrDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: FlatpickrDefaults
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}];

FlatpickrDirective.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altInputClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  allowInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  ariaDateFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  clickOpens: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  dateFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultHour: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultMinute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultSeconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  disable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  disableMobile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enableTime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enableSeconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  formatDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  hourIncrement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  inline: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  minuteIncrement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  mode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  nextArrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  noCalendar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  now: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  parseDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  prevArrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  shorthandCurrentMonth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  showMonths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  static: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  time24hr: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  weekNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  getWeek: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  wrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  plugins: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  locale: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  convertModelValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  monthSelectorType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  flatpickrReady: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrValueUpdate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrMonthChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrYearChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrDayCreate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  inputChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['input']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mwlFlatpickr]',
      providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
      host: {
        // tslint:disable-line use-host-property-decorator
        '(blur)': 'onTouchedFn()'
      },
      exportAs: 'mwlFlatpickr'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: FlatpickrDefaults
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    flatpickrReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrValueUpdate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrMonthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrYearChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrDayCreate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],

    /**
     * @return {?}
     */
    inputChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['input']
    }],
    altFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    altInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    altInputClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaDateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clickOpens: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disableMobile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formatDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hourIncrement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minuteIncrement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nextArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noCalendar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    now: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parseDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prevArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shorthandCurrentMonth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    static: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    time24hr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    weekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    getWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    convertModelValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    monthSelectorType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


const
/** @type {?} */
USER_DEFAULTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('flatpickr defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */

function defaultsFactory(userDefaults) {
  const
  /** @type {?} */
  defaults = new FlatpickrDefaults();
  Object.assign(defaults, userDefaults);
  return defaults;
}

class FlatpickrModule {
  /**
   * @param {?=} userDefaults
   * @return {?}
   */
  static forRoot(userDefaults = {}) {
    return {
      ngModule: FlatpickrModule,
      providers: [{
        provide: USER_DEFAULTS,
        useValue: userDefaults
      }, {
        provide: FlatpickrDefaults,
        useFactory: defaultsFactory,
        deps: [USER_DEFAULTS]
      }]
    };
  }

}

FlatpickrModule.ɵfac = function FlatpickrModule_Factory(t) {
  return new (t || FlatpickrModule)();
};

FlatpickrModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FlatpickrModule
});
FlatpickrModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlatpickrModule, {
    declarations: [FlatpickrDirective],
    exports: [FlatpickrDirective]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/***/ }),

/***/ 59282:
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ 43273);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ 99185);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 49354);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ 45559);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ 35606);
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ 79922);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ 2800);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);







const DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  const self = {
    config: Object.assign(Object.assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }

    };
  }

  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();

    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }

      updateValue(false);
    }

    setCalendarWidth();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!self.isMobile && isSafari) {
      positionCalendar();
    }

    triggerEvent("onReady");
  }

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    const config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      const defaultDate = self.config.minDate === undefined || (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      const defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }

    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }

    const prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();

    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }

  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
  }

  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;

      default:
        return hour % 12;
    }
  }

  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    const limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    const limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (limitMaxHours) {
      const maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
    }

    if (limitMinHours) {
      const minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    const date = dateObj || self.latestSelectedDateObj;

    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0) : hours);
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
  }

  function onYearInput(event) {
    const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
    const year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(ev => bind(element, ev, handler, options));
    if (element instanceof Array) return element.forEach(el => bind(el, event, handler, options));
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: () => element.removeEventListener(event, handler)
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(evt => {
        Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), el => bind(el, "click", self[evt]));
      });
    }

    if (self.isMobile) {
      setupMobile();
      return;
    }

    const debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
    self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", e => {
      if (self.config.mode === "range") onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
    });
    bind(window.document.body, "keydown", onKeyDown);
    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      const selText = e => (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", e => {
          updateTime(e);
          triggerChange();
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    const jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    const oldYear = self.currentYear;
    const oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    const target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    const event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }

  function build() {
    const fragment = window.document.createDocumentFragment();
    self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;

    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");

      if (self.config.weekNumbers) {
        const {
          weekWrapper,
          weekNumbers
        } = buildWeeks();
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }

      self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());

      if (!self.daysContainer) {
        self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }

      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }

    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    const customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config.static) {
        const wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, dayNumber, i) {
    const dateIsEnabled = isEnabled(date, true),
          dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }

    if (dateIsEnabled) {
      dayElement.tabIndex = -1;

      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;

        if (self.config.mode === "range") {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }

  function getFirstAvailableDay(delta) {
    const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    const endMonth = delta > 0 ? self.config.showMonths : -1;

    for (let m = startMonth; m != endMonth; m += delta) {
      const month = self.daysContainer.children[m];
      const startIndex = delta > 0 ? 0 : month.children.length - 1;
      const endIndex = delta > 0 ? month.children.length : -1;

      for (let i = startIndex; i != endIndex; i += delta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    const endMonth = delta > 0 ? self.config.showMonths : -1;
    const loopDelta = delta > 0 ? 1 : -1;

    for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      const month = self.daysContainer.children[m];
      const startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      const numMonthDays = month.children.length;

      for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    const dayFocused = isInView(document.activeElement || document.body);
    const startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    const daysInMonth = self.utils.getDaysInMonth(month, year),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    let dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }

    const dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }

  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
    if (self.weekNumbers) (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
    const frag = document.createDocumentFragment();

    for (let i = 0; i < self.config.showMonths; i++) {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }

    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;

    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }

  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    const shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (let i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      const month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;

      if (self.currentMonth === i) {
        month.selected = true;
      }

      self.monthsDropdownContainer.appendChild(month);
    }
  }

  function buildMonth() {
    const container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
    const monthNavFragment = window.document.createDocumentFragment();
    let monthElement;

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
    } else {
      self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", e => {
        const target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        const selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }

    const yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", {
      tabindex: "-1"
    });
    const yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    const currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }

  function buildMonths() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);

    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }

    for (let m = self.config.showMonths; m--;) {
      const month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }

    self.monthNav.appendChild(self.nextMonthNav);
  }

  function buildMonthNav() {
    self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: () => self.__hidePrevMonthArrow,

      set(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }

    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: () => self.__hideNextMonthArrow,

      set(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }

    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    const defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
    self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    const separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
    const hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    const minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      const secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");else (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);

    for (let i = self.config.showMonths; i--;) {
      const container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }

    updateWeekdays();
    return self.weekdayContainer;
  }

  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }

    const firstDayOfWeek = self.l10n.firstDayOfWeek;
    let weekdays = [...self.l10n.weekdays.shorthand];

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [...weekdays.splice(firstDayOfWeek, weekdays.length), ...weekdays.splice(0, firstDayOfWeek)];
    }

    for (let i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
    }
  }

  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    const weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    const weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }

  function changeMonth(value, isOffset = true) {
    const delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;

    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }

  function clear(triggerChangeEvent = true, toInitial = true) {
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      const {
        hours,
        minutes,
        seconds
      } = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }

  function close() {
    self.isOpen = false;

    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }

      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }

    triggerEvent("onClose");
  }

  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (let i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        const wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(k => {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
      const isCalendarElement = isCalendarElem(eventTarget);
      const isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      const lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      const isIgnored = !self.config.ignoredFocusElements.some(elem => elem.contains(eventTarget));

      if (lostFocus && isIgnored) {
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();

        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
          self.clear(false);
          self.redraw();
        }
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    const newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date, timeless = true) {
    var _a;

    const dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    const bool = !!self.config.enable,
          array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (let i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        const parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    const isInput = e.target === self._input;

    if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    const isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    const allowInput = self.config.allowInput;
    const allowKeydown = self.isOpen && (!allowInput || !isInput);
    const allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

          break;

        case 27:
          e.preventDefault();
          focusAndClose();
          break;

        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }

          break;

        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();

            if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              const delta = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta);else {
                e.stopPropagation();
                changeMonth(delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          const delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            const elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(x => x);
            const i = elems.indexOf(eventTarget);

            if (i !== -1) {
              const target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();

            self._input.focus();
          }

          break;

        default:
          break;
      }
    }

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;

        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }

    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }

  function onMouseOver(elem) {
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
    const hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    let containsDisabled = false;
    let minRange = 0,
        maxRange = 0;

    for (let t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    for (let m = 0; m < self.config.showMonths; m++) {
      const month = self.daysContainer.children[m];

      for (let i = 0, l = month.children.length; i < l; i++) {
        const dayElem = month.children[i],
              date = dayElem.dateObj;
        const timestamp = date.getTime();
        const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(c => {
            dayElem.classList.remove(c);
          });
          continue;
        } else if (containsDisabled && !outOfRange) continue;

        ["startRange", "inRange", "endRange", "notAllowed"].forEach(c => {
          dayElem.classList.remove(c);
        });

        if (elem !== undefined) {
          elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
        }
      }
    }
  }

  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }

  function open(e, positionElement = self._positionElement) {
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);

        if (eventTarget) {
          eventTarget.blur();
        }
      }

      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }

      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }

    const wasOpen = self.isOpen;
    self.isOpen = true;

    if (!wasOpen) {
      self.calendarContainer.classList.add("open");

      self._input.classList.add("active");

      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }

    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(() => self.hourElement.select(), 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return date => {
      const dateObj = self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat);
      const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(d => isEnabled(d));
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    const boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    const formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: () => self.config._enable,
      set: dates => {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: () => self.config._disable,
      set: dates => {
        self.config._disable = parseDateRules(dates);
      }
    });
    const timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      const defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      const defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
    }

    Object.defineProperty(self.config, "minDate", {
      get: () => self.config._minDate,
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: () => self.config._maxDate,
      set: minMaxDateSetter("max")
    });

    const minMaxTimeSetter = type => val => {
      self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
    };

    Object.defineProperty(self.config, "minTime", {
      get: () => self.config._minTime,
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: () => self.config._maxTime,
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (let i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

    _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(hook => self.config[hook] !== undefined).forEach(hook => {
      self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (let i = 0; i < self.config.plugins.length; i++) {
      const pluginConf = self.config.plugins[i](self) || {};

      for (const key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
          self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
    self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
    const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    const positionElement = customPositionElement || self._positionElement;
    const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (acc, child) => acc + child.offsetHeight, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    let left = window.pageXOffset + inputBounds.left;
    let isCenter = false;
    let isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
    const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    const rightMost = left + calendarWidth > window.document.body.offsetWidth;
    const centerMost = right + calendarWidth > window.document.body.offsetWidth;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = `${top}px`;

    if (!rightMost) {
      self.calendarContainer.style.left = `${left}px`;
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = `${right}px`;
    } else {
      const doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      const bodyWidth = window.document.body.offsetWidth;
      const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      const centerBefore = ".flatpickr-calendar.centerMost:before";
      const centerAfter = ".flatpickr-calendar.centerMost:after";
      const centerIndex = doc.cssRules.length;
      const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
      doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
      self.calendarContainer.style.left = `${centerLeft}px`;
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    let editableSheet = null;

    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];

      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }

      editableSheet = sheet;
      break;
    }

    return editableSheet != null ? editableSheet : createStyleSheet();
  }

  function createStyleSheet() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    const isSelectable = day => day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");

    const t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
    if (t === undefined) return;
    const target = t;
    const selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      const selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    setHoursFromInputs();

    if (shouldChangeMonth) {
      const isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();

      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      triggerEvent("onMonthChange");
    }

    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      const single = self.config.mode === "single" && !self.config.enableTime;
      const range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

      if (single || range) {
        focusAndClose();
      }
    }

    triggerChange();
  }

  const CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    clickOpens: [() => {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);

      for (const key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(x => x());
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(x => x());else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1) self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    let dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(d => self.parseDate(d, format));else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(date => self.parseDate(date, format));
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(date => self.parseDate(date, format));
          break;

        default:
          break;
      }
    } else self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(d => d instanceof Date && isEnabled(d, false));
    if (self.config.mode === "range") self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
  }

  function setDate(date, triggerChange = false, format = self.config.dateFormat) {
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(rule => {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(x => x);
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    const preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }

  function setupInputs() {
    self.input = getInputElem();

    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }

    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;

    if (self.config.altInput) {
      self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    const inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", e => {
      self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    const hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (let i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }

    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }

  function createEvent(name) {
    const e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }

  function isDateSelected(date) {
    for (let i = 0; i < self.selectedDates.length; i++) {
      if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.selectedDates[i], date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach((yearElement, i) => {
      const d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(format) {
    return self.selectedDates.map(dObj => self.formatDate(dObj, format)).filter((d, i, arr) => self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue(triggerChange = true) {
    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    const isPrevMonth = self.prevMonthNav.contains(eventTarget);
    const isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    const isKeyDown = e.type === "keydown",
          eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
          input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
    }

    const min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    let newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      const isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) + ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  const nodes = Array.prototype.slice.call(nodeList).filter(x => x instanceof HTMLElement);
  const instances = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  default: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};

flatpickr.localize = l10n => {
  flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};

flatpickr.setDefaults = config => {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};

flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;

if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}

Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};

if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);

/***/ }),

/***/ 99185:
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "english": () => (/* binding */ english)
/* harmony export */ });
const english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: nth => {
    const s = nth % 100;
    if (s > 3 && s < 21) return "th";

    switch (s % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);

/***/ }),

/***/ 43273:
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOOKS": () => (/* binding */ HOOKS),
/* harmony export */   "defaults": () => (/* binding */ defaults)
/* harmony export */ });
const HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
const defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: err => typeof console !== "undefined" && console.warn(err),
  getWeek: givenDate => {
    const date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),

/***/ 35606:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareDates": () => (/* binding */ compareDates),
/* harmony export */   "compareTimes": () => (/* binding */ compareTimes),
/* harmony export */   "createDateFormatter": () => (/* binding */ createDateFormatter),
/* harmony export */   "createDateParser": () => (/* binding */ createDateParser),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "getDefaultHours": () => (/* binding */ getDefaultHours),
/* harmony export */   "isBetween": () => (/* binding */ isBetween)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ 79922);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ 43273);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ 99185);



const createDateFormatter = ({
  config = _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults,
  l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english,
  isMobile = false
}) => (dateObj, frmt, overrideLocale) => {
  const locale = overrideLocale || l10n;

  if (config.formatDate !== undefined && !isMobile) {
    return config.formatDate(dateObj, frmt, locale);
  }

  return frmt.split("").map((c, i, arr) => _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config) : c !== "\\" ? c : "").join("");
};
const createDateParser = ({
  config = _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults,
  l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english
}) => (date, givenFormat, timeless, customLocale) => {
  if (date !== 0 && !date) return undefined;
  const locale = customLocale || l10n;
  let parsedDate;
  const dateOrig = date;
  if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
    const format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
    const datestr = String(date).trim();

    if (datestr === "today") {
      parsedDate = new Date();
      timeless = true;
    } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
      parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
      let matched,
          ops = [];

      for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
        const token = format[i];
        const isBackSlash = token === "\\";
        const escaped = format[i - 1] === "\\" || isBackSlash;

        if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
          regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
          const match = new RegExp(regexStr).exec(date);

          if (match && (matched = true)) {
            ops[token !== "Y" ? "push" : "unshift"]({
              fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
              val: match[++matchIndex]
            });
          }
        } else if (!isBackSlash) regexStr += ".";

        ops.forEach(({
          fn,
          val
        }) => parsedDate = fn(parsedDate, val, locale) || parsedDate);
      }

      parsedDate = matched ? parsedDate : undefined;
    }
  }

  if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
    config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
    return undefined;
  }

  if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
  return parsedDate;
};
function compareDates(date1, date2, timeless = true) {
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
const isBetween = (ts, ts1, ts2) => {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  let hours = config.defaultHour;
  let minutes = config.defaultMinute;
  let seconds = config.defaultSeconds;

  if (config.minDate !== undefined) {
    const minHour = config.minDate.getHours();
    const minMinutes = config.minDate.getMinutes();
    const minSeconds = config.minDate.getSeconds();

    if (hours < minHour) {
      hours = minHour;
    }

    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    const maxHr = config.maxDate.getHours();
    const maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours,
    minutes,
    seconds
  };
}

/***/ }),

/***/ 45559:
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearNode": () => (/* binding */ clearNode),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createNumberInput": () => (/* binding */ createNumberInput),
/* harmony export */   "findParent": () => (/* binding */ findParent),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  const e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  const wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (const key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      return path[0];
    }

    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),

/***/ 79922:
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formats": () => (/* binding */ formats),
/* harmony export */   "monthToStr": () => (/* binding */ monthToStr),
/* harmony export */   "revFormat": () => (/* binding */ revFormat),
/* harmony export */   "tokenRegex": () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 49354);


const doNothing = () => undefined;

const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  H: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  J: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  K: (dateObj, amPM, locale) => {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
  W: function (dateObj, weekNum, locale) {
    const weekNumber = parseInt(weekNum);
    const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: (dateObj, year) => {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: (_, ISODate) => new Date(ISODate),
  d: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  h: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  i: (dateObj, minutes) => {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
  w: doNothing,
  y: (dateObj, year) => {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
const tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
const formats = {
  Z: date => date.toISOString(),
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
  },
  H: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours()),
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: (date, locale) => locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)],
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds()),
  U: date => date.getTime() / 1000,
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4),
  d: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate()),
  h: date => date.getHours() % 12 ? date.getHours() % 12 : 12,
  i: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes()),
  j: date => date.getDate(),
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: date => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1),
  n: date => date.getMonth() + 1,
  s: date => date.getSeconds(),
  u: date => date.getTime(),
  w: date => date.getDay(),
  y: date => String(date.getFullYear()).substring(2)
};

/***/ }),

/***/ 49354:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayify": () => (/* binding */ arrayify),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "int": () => (/* binding */ int),
/* harmony export */   "pad": () => (/* binding */ pad)
/* harmony export */ });
const pad = (number, length = 2) => `000${number}`.slice(length * -1);
const int = bool => bool === true ? 1 : 0;
function debounce(fn, wait) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}
const arrayify = obj => obj instanceof Array ? obj : [obj];

/***/ }),

/***/ 2800:
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {



if (typeof Object.assign !== "function") {
  Object.assign = function (target, ...args) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    for (const source of args) {
      if (source) {
        Object.keys(source).forEach(key => target[key] = source[key]);
      }
    }

    return target;
  };
}

/***/ }),

/***/ 80576:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/tb-calendar/tb-calendar.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgaDMgewogICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDsKICAgICAgICB9CgogICAgICAgIHByZSB7CiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OwogICAgICAgICAgcGFkZGluZzogMTVweDsKICAgICAgICB9CiAgICAgIA%3D%3D!./src/app/tb-calendar/tb-calendar.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n        h3 {\n          margin: 0 0 10px;\n        }\n\n        pre {\n          background-color: #f5f5f5;\n          padding: 15px;\n        }\n      \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUTtVQUNFLGdCQUFnQjtRQUNsQjs7UUFFQTtVQUNFLHlCQUF5QjtVQUN6QixhQUFhO1FBQ2YiLCJmaWxlIjoidGItY2FsZW5kYXIudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgICAgIl19 */";

/***/ }),

/***/ 14756:
/*!*********************************************************!*\
  !*** ./src/app/tb-calendar/tb-calendar.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\r\n<div style=\"overflow-y: auto; background-color: white;\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div class=\"btn btn-primary\" style=\"background-color:orange;\"\r\n             mwlCalendarPreviousView \r\n             [view]=\"view\" \r\n             [(viewDate)]=\"viewDate\"\r\n             (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n             (viewDateChange)=\"fetchEvents()\"\r\n             (viewChange)=\"fetchEvents()\">\r\n          <!-- Previous -->\r\n          {{'previous' | translate}}\r\n        </div>\r\n        <div class=\"btn btn-outline-secondary\" style=\"background-color:orange;\"\r\n             mwlCalendarToday \r\n             [(viewDate)]=\"viewDate\"\r\n             (viewDateChange)=\"fetchEvents()\"\r\n             (viewChange)=\"fetchEvents()\">\r\n          <!-- Today -->\r\n          {{'today' | translate}}\r\n        </div>\r\n        <div class=\"btn btn-primary\" style=\"background-color:orange;\"\r\n             mwlCalendarNextView \r\n             [view]=\"view\" \r\n             [(viewDate)]=\"viewDate\"\r\n             (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n             (viewDateChange)=\"fetchEvents()\"\r\n             (viewChange)=\"fetchEvents()\">\r\n          <!-- Next -->\r\n          {{'next' | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <a>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</a>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\" style=\"background-color:orange;\">\r\n        <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\" style=\"background-color:orange;\">\r\n          <!-- Month -->\r\n          {{'month' | translate}}\r\n        </div>\r\n        <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\" style=\"background-color:orange;\">\r\n          <!-- Week -->\r\n          {{'week' | translate}}\r\n        </div>\r\n        <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\" style=\"background-color:orange;\">\r\n          <!-- Day -->\r\n          {{'day' | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view [locale]=\"locale\" *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\r\n      [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view [locale]=\"locale\" *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\r\n      [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view [locale]=\"locale\" *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n\r\n  <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\r\n\r\n  <br /><br /><br />\r\n\r\n  <h3>\r\n    <!-- Edit events -->\r\n    {{'rdv' | translate}}\r\n    <button class=\"btn btn-primary float-right\" style=\"background-color:orange;\" (click)=\"addEvent()\">\r\n      <!-- Add new -->\r\n      {{'new' | translate}}\r\n    </button>\r\n    <div class=\"clearfix\"></div>\r\n  </h3>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>{{'title' | translate}}</th>\r\n          <th>{{'client' | translate}}</th>\r\n          <th>{{'description' | translate}}</th>\r\n          <!-- <th>Primary color</th>\r\n          <th>Secondary color</th> -->\r\n          <th>{{'startDate' | translate}}</th>\r\n          <th>{{'endDate' | translate}}</th>\r\n          <th>{{'delete' | translate}}</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let event of events\">\r\n          <td>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.title\" (keyup)=\"refresh.next()\" />\r\n          </td>\r\n          <td>\r\n            <ion-item>\r\n              <!-- <ion-label>{{'client' | translate}}</ion-label> -->\r\n              <ionic-selectable\r\n                [(ngModel)]=\"event.client\"\r\n                [items]=\"clientList\"\r\n                itemValueField=\"userId\"\r\n                itemTextField=\"lastName\"\r\n                [canSearch]=\"true\"\r\n                formControlName=\"client\"\r\n                (onChange)=\"clientChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n            <!-- <select [(ngModel)]=\"event.client\">\r\n              <option></option>\r\n              <option *ngFor=\"let name of clientList\" [value]=\"name.userId\"> {{name.lastName}} </option>\r\n            </select> -->\r\n            <dx-button (click)=\"NewClient()\" [text]=\"'newClient?' | translate\" icon=\"fas fa-user-plus\">\r\n            </dx-button>\r\n          </td>\r\n          <td>\r\n            <textarea id=\"description\" name=\"description\" [(ngModel)]=\"event.description\" placeholder=\"...\"\r\n              style=\"height:100px;\" maxlength=\"50\"></textarea>\r\n          </td>\r\n          <!-- <td>\r\n            <input type=\"color\" [(ngModel)]=\"event.color.primary\" (change)=\"refresh.next()\" />\r\n          </td>\r\n          <td>\r\n            <input type=\"color\" [(ngModel)]=\"event.color.secondary\" (change)=\"refresh.next()\" />\r\n          </td> -->\r\n          <td>\r\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.start\"\r\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\r\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\r\n          </td>\r\n          <td>\r\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.end\"\r\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\r\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\r\n          </td>\r\n          <td>\r\n            <dx-button (click)=\"deleteEvent(event)\" icon=\"fas fa-trash\">\r\n            </dx-button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">{{'details' | translate}}</h5>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        Action:\r\n        <pre>{{ modalData?.action }}</pre>\r\n      </div>\r\n      <div>\r\n        Event:\r\n        <pre>{{ modalData?.event | json }}</pre>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"background-color:orange;\" (click)=\"close()\">\r\n        OK\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</div>";

/***/ }),

/***/ 58384:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(val) {
  const n = val,
        i = Math.floor(Math.abs(val)),
        v = val.toString().replace(/^[^.]*\.?/, '').length,
        e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
  if (i === 0 || i === 1) return 1;
  if (e === 0 && !(i === 0) && i % 1000000 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["fr", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u, "р."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u, "¥"],
  "COP": ["$CO", "$"],
  "CYP": ["£CY"],
  "EGP": [u, "£E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["£FK", "£"],
  "FRF": ["F"],
  "GBP": ["£GB", "£"],
  "GIP": ["£GI", "£"],
  "HKD": [u, "$"],
  "IEP": ["£IE"],
  "ILP": ["£IL"],
  "ITL": ["₤IT"],
  "JPY": [u, "¥"],
  "KMF": [u, "FC"],
  "LBP": ["£LB", "£L"],
  "MTP": ["£MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u, "₱"],
  "RHD": ["$RH"],
  "RON": [u, "L"],
  "RWF": [u, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u, "Kw"]
}, "ltr", plural]);

/***/ }),

/***/ 55763:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/tr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(val) {
  const n = val;
  if (n === 1) return 1;
  return 5;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["tr", [["öö", "ös"], ["ÖÖ", "ÖS"], u], [["ÖÖ", "ÖS"], u, u], [["P", "P", "S", "Ç", "P", "C", "C"], ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], ["Pa", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"]], u, [["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]], u, [["MÖ", "MS"], u, ["Milattan Önce", "Milattan Sonra"]], 1, [6, 0], ["d.MM.y", "d MMM y", "d MMMM y", "d MMMM y EEEE"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "%#,##0", "¤#,##0.00", "#E0"], "TRY", "₺", "Türk Lirası", {
  "AUD": ["AU$", "$"],
  "BYN": [u, "р."],
  "PHP": [u, "₱"],
  "RON": [u, "L"],
  "RUR": [u, "р."],
  "THB": ["฿"],
  "TRY": ["₺"],
  "TWD": ["NT$"]
}, "ltr", plural]);

/***/ })

}]);
//# sourceMappingURL=src_app_tb-calendar_tb-calendar_module_ts.js.map