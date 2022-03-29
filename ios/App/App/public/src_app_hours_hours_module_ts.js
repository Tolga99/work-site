"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_hours_hours_module_ts"],{

/***/ 27128:
/*!***********************************************!*\
  !*** ./src/app/hours/hours-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoursRoutingModule": () => (/* binding */ HoursRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours */ 93483);




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

/***/ 36400:
/*!***************************************!*\
  !*** ./src/app/hours/hours.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoursModule": () => (/* binding */ HoursModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _hours_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours-routing.module */ 27128);
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours */ 93483);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);








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

/***/ 93483:
/*!********************************!*\
  !*** ./src/app/hours/hours.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hours": () => (/* binding */ Hours)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hours_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./hours.html */ 83775);
/* harmony import */ var _hours_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours.scss */ 7987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ 36033);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _models_hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/hour */ 3181);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 99900);











let Hours = class Hours {
    constructor(modalS, router, storageService, route, cd) {
        this.modalS = modalS;
        this.router = router;
        this.storageService = storageService;
        this.route = route;
        this.cd = cd;
        this.formHour = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
        });
        this.hoursList = [];
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const nowDate = new Date();
            this.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
            this.chantierId = this.route.snapshot.paramMap.get('chantierId');
            this.storageService.init();
            const chantierl = yield this.storageService.get('Chantiers');
            const chantier = chantierl.find(a => a.chantierId === this.chantierId);
            this.hoursList = chantier.hours;
            if (this.hoursList == null)
                this.hoursList = new Array();
            const existId = this.route.snapshot.paramMap.get('hourId');
            this.chantierId = this.route.snapshot.paramMap.get('chantierId');
            if (existId != null) {
                // console.log('modification',existId);
                this.indexFind = this.hoursList.findIndex(x => x.hourId === existId);
                if (this.indexFind >= 0) {
                    this.hourId = this.hoursList[this.indexFind].hourId;
                    this.hour = new _models_hour__WEBPACK_IMPORTED_MODULE_4__.Hour(this.hoursList[this.indexFind].hourId, this.hoursList[this.indexFind].date, this.hoursList[this.indexFind].description, this.hoursList[this.indexFind].hour, this.hoursList[this.indexFind].minute);
                    const d = new Date();
                    // console.log(this.hour.hour, 'et ',this.hour.minute);
                    d.setUTCHours(this.hour.hour, this.hour.minute, 0, 0);
                    // d.setHours(this.hour.hour,this.hour.minute,0,0);
                    // let dd = new Date(d.toString());
                    // console.log(d.toLocaleDateString(),d.toTimeString(),d.toUTCString(),d.toLocaleTimeString());
                    console.log('dt', d.toISOString());
                    this.formHour.setValue({
                        date: d.toISOString(),
                        description: this.hoursList[this.indexFind].description,
                    });
                    this.formHour.updateValueAndValidity();
                    console.log('opening Hours');
                    this.cd.detectChanges();
                    // this.cd.detectChanges();
                    // this.formHour.get('date').setValue(d.toISOString());
                    // this.formHour.patchValue({ date : d.toISOString()});
                }
            }
            else {
                console.log('creation', existId);
                this.hourId = this.generateUUID();
            }
        });
    }
    customFormatter(value) {
        return `${value}%`;
    }
    CreateHour() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const invalid = [];
            const controls = this.formHour.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    let nom = '';
                    if (name === 'date')
                        nom = 'Heure';
                    invalid.push(nom);
                }
            }
            if (!this.formHour.valid) {
                let res = null;
                yield this.modal.open('field', invalid.toString())
                    .then(result => result.result
                    .then((data) => {
                    res = 'OK';
                }, (reason) => {
                    res = 'DISMISS';
                }));
                return;
            }
            const dd = new Date(this.formHour.get('date').value);
            console.log(dd.getHours(), ':', dd.getMinutes());
            console.log(this.generateUUID());
            console.log('form status', this.formHour);
            if (!this.formHour.valid)
                return;
            this.hour = new _models_hour__WEBPACK_IMPORTED_MODULE_4__.Hour(this.hourId, this.date, this.formHour.get('description').value, dd.getHours(), dd.getMinutes());
            if (this.indexFind >= 0) {
                // this.hoursList.splice(this.indexFind,1);
                this.hoursList[this.indexFind] = this.hour;
            }
            else
                this.hoursList.push(this.hour);
            const chantierl = yield this.storageService.get('Chantiers');
            const chantier = chantierl.find(a => a.chantierId === this.chantierId);
            const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);
            chantier.hours = this.hoursList;
            chantierl[chantierIndex] = chantier;
            this.storageService.set('Chantiers', chantierl);
            // this.storageService.set('Hours='+this.chantierId,this.hoursList);
            this.router.navigate(['/worksite', { chantierId: this.chantierId }], { replaceUrl: true });
        });
    }
    generateUUID() {
        this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_2__.UUID.UUID();
        return this.uuidValue;
    }
    GoBack() {
        this.router.navigate(['/worksite', { chantierId: this.chantierId }], { replaceUrl: true });
    }
};
Hours.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
Hours = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-hours',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_hours_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hours_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Hours);



/***/ }),

/***/ 3181:
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

/***/ 83775:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/hours/hours.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"GoBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-label>Retour</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\">\n  <form [formGroup]=\"formHour\" (ngSubmit)=\"CreateHour()\">\n\n    <ion-datetime formControlName=\"date\" presentation=\"time\"></ion-datetime>\n\n    <hr>\n    <ion-item>\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\"></ion-textarea>\n    </ion-item>\n\n    <input type=\"submit\" value=\"Ajouter préstation\">\n  </form>\n</div>");

/***/ }),

/***/ 7987:
/*!**********************************!*\
  !*** ./src/app/hours/hours.scss ***!
  \**********************************/
/***/ ((module) => {

module.exports = ".form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUUscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJob3Vycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdpdGggb25seSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlICovXHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGxhYmVsOmFmdGVyIHsgXHJcbiAgICBjb250ZW50OlwiICpcIjsgXHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_hours_hours_module_ts.js.map