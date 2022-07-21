"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_hours_hours_module_ts"],{

/***/ 68910:
/*!***********************************************!*\
  !*** ./src/app/hours/hours-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoursRoutingModule": () => (/* binding */ HoursRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours */ 73236);




const routes = [
    {
        path: '',
        component: _hours__WEBPACK_IMPORTED_MODULE_0__.Hours
    }
];
let HoursRoutingModule = class HoursRoutingModule {
};
HoursRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HoursRoutingModule);



/***/ }),

/***/ 97293:
/*!***************************************!*\
  !*** ./src/app/hours/hours.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoursModule": () => (/* binding */ HoursModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _hours_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours-routing.module */ 68910);
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours */ 73236);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let HoursModule = class HoursModule {
};
HoursModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _hours_routing_module__WEBPACK_IMPORTED_MODULE_0__.HoursRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_hours__WEBPACK_IMPORTED_MODULE_1__.Hours]
    })
], HoursModule);



/***/ }),

/***/ 73236:
/*!********************************!*\
  !*** ./src/app/hours/hours.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hours": () => (/* binding */ Hours)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _hours_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours.html?ngResource */ 97773);
/* harmony import */ var _hours_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hours.scss?ngResource */ 12887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/hour */ 94376);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 71188);












let Hours = class Hours {
  constructor(modalS, router, storageService, route, cd) {
    this.modalS = modalS;
    this.router = router;
    this.storageService = storageService;
    this.route = route;
    this.cd = cd;
    this.formHour = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('')
    });
    this.hoursList = [];
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__.NgbdModalFocus(this.modalS);
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nowDate = new Date();
      _this.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
      _this.chantierId = _this.route.snapshot.paramMap.get('chantierId');

      _this.storageService.init();

      const chantierl = yield _this.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === _this.chantierId);
      _this.hoursList = chantier.hours;
      if (_this.hoursList == null) _this.hoursList = new Array();

      const existId = _this.route.snapshot.paramMap.get('hourId');

      _this.chantierId = _this.route.snapshot.paramMap.get('chantierId');

      if (existId != null) {
        console.log('modification', existId);
        _this.indexFind = _this.hoursList.findIndex(x => x.hourId === existId);

        if (_this.indexFind >= 0) {
          _this.hourId = _this.hoursList[_this.indexFind].hourId;
          _this.hour = new _models_hour__WEBPACK_IMPORTED_MODULE_5__.Hour(_this.hoursList[_this.indexFind].hourId, _this.hoursList[_this.indexFind].date, _this.hoursList[_this.indexFind].description, _this.hoursList[_this.indexFind].hour, _this.hoursList[_this.indexFind].minute);
          const d = new Date();
          console.log(_this.hour.hour, 'et ', _this.hour.minute);
          d.setUTCHours(_this.hour.hour, _this.hour.minute, 0, 0);
          console.log('dt', d.toISOString());

          _this.formHour.setValue({
            date: d.toISOString(),
            description: _this.hoursList[_this.indexFind].description
          });

          _this.formHour.get('date').setValue(d.toISOString());

          console.log('result ', _this.formHour.get('date').value); // this.cd.detectChanges();
          // this.formHour.get('date').setValue(d.toISOString());
          // this.formHour.patchValue({ date : d.toISOString()});

          _this.date = d.toISOString();
        }
      } else {
        console.log('creation', existId);
        _this.hourId = _this.generateUUID();
      }
    })();
  }

  customFormatter(value) {
    return `${value}%`;
  }

  CreateHour() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this2.formHour.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'date') nom = 'Heure';
          invalid.push(nom);
        }
      }

      if (!_this2.formHour.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      const dd = new Date(_this2.formHour.get('date').value);
      console.log(dd.getHours(), ':', dd.getMinutes());
      console.log(_this2.generateUUID());
      console.log('form status', _this2.formHour);
      if (!_this2.formHour.valid) return;
      _this2.hour = new _models_hour__WEBPACK_IMPORTED_MODULE_5__.Hour(_this2.hourId, _this2.date, _this2.formHour.get('description').value, dd.getHours(), dd.getMinutes());

      if (_this2.indexFind >= 0) {
        // this.hoursList.splice(this.indexFind,1);
        _this2.hoursList[_this2.indexFind] = _this2.hour;
      } else _this2.hoursList.push(_this2.hour);

      const chantierl = yield _this2.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === _this2.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === _this2.chantierId);
      chantier.hours = _this2.hoursList;
      chantierl[chantierIndex] = chantier;

      _this2.storageService.set('Chantiers', chantierl); // this.storageService.set('Hours='+this.chantierId,this.hoursList);


      _this2.router.navigate(['/worksite', {
        chantierId: _this2.chantierId
      }], {
        replaceUrl: true
      });
    })();
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID.UUID();
    return this.uuidValue;
  }

  GoBack() {
    this.router.navigate(['/worksite', {
      chantierId: this.chantierId
    }], {
      replaceUrl: true
    });
  }

};

Hours.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
}];

Hours = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-hours',
  template: _hours_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_hours_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Hours);


/***/ }),

/***/ 94376:
/*!********************************!*\
  !*** ./src/app/models/hour.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hour": () => (/* binding */ Hour)
/* harmony export */ });
class Hour {
    constructor(hourId, date, description, hour, minute) {
        this.hourId = hourId;
        this.date = date;
        this.description = description;
        this.hour = hour;
        this.minute = minute;
        this.workTime = hour.toString() + 'h' + minute.toString();
    }
}


/***/ }),

/***/ 23105:
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {



var UUID = function () {
  function UUID() {// no-op
  }

  UUID.UUID = function () {
    if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues !== "undefined") {
      // If we have a cryptographically secure PRNG, use that
      // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
      var buf = new Uint16Array(8);
      window.crypto.getRandomValues(buf);
      return this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]);
    } else {
      // Otherwise, just use Math.random
      // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
      return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" + this.random4() + this.random4() + this.random4();
    }
  };

  UUID.pad4 = function (num) {
    var ret = num.toString(16);

    while (ret.length < 4) {
      ret = "0" + ret;
    }

    return ret;
  };

  UUID.random4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return UUID;
}();

exports.UUID = UUID;

/***/ }),

/***/ 12887:
/*!*********************************************!*\
  !*** ./src/app/hours/hours.scss?ngResource ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUUscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUVBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDRixrQkFBQTtBQURBIiwiZmlsZSI6ImhvdXJzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0Om5vdCgucmVxdWlyZWQpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIiAqXCI7IFxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAudGFiSGVhZGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 97773:
/*!*********************************************!*\
  !*** ./src/app/hours/hours.html?ngResource ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'hours' | translate}}</ion-title>\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\n    </dx-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\" style=\"background-color: white;\">\n  <form [formGroup]=\"formHour\" (ngSubmit)=\"CreateHour()\">\n\n    <ion-datetime formControlName=\"date\" presentation=\"time\" [(ngModel)]=\"dateHour\"></ion-datetime>\n\n    <hr>\n    <ion-item>\n      <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\n    </ion-item>\n\n    <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" [text]=\"'addWork' | translate\" style=\"background-color: orange;\"></dx-button>\n  </form>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_hours_hours_module_ts.js.map