"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-contacts_tb-contacts_module_ts"],{

/***/ 47027:
/*!***********************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsRoutingModule": () => (/* binding */ TabContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tb_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts */ 66488);




const routes = [
    {
        path: '',
        component: _tb_contacts__WEBPACK_IMPORTED_MODULE_0__.TabContacts,
    }
];
let TabContactsRoutingModule = class TabContactsRoutingModule {
};
TabContactsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabContactsRoutingModule);



/***/ }),

/***/ 13407:
/*!***************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsModule": () => (/* binding */ TabContactsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tb_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts */ 66488);
/* harmony import */ var _tb_contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts-routing.module */ 47027);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ 63806);








let TabContactsModule = class TabContactsModule {
};
TabContactsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _tb_contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabContactsRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        ],
        declarations: [_tb_contacts__WEBPACK_IMPORTED_MODULE_0__.TabContacts]
    })
], TabContactsModule);



/***/ }),

/***/ 66488:
/*!********************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContacts": () => (/* binding */ TabContacts)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tb_contacts_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts.html?ngResource */ 92842);
/* harmony import */ var _tb_contacts_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tb-contacts.css?ngResource */ 64753);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);













let TabContacts = class TabContacts {
  constructor(modalS, storageService, router, _liveAnnouncer) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this._liveAnnouncer = _liveAnnouncer; // headElements = ['#', 'Prenom', 'Nom', 'Adresse'];

    this.headElements = ['lastName', 'firstName', 'address', '...'];
    this.contactsList = [];
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
  }

  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('view did enter');

      _this.storageService.init();

      _this.contactsList = yield _this.storageService.get('Contacts');
      _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(_this.contactsList);
      _this.dataSource.paginator = _this.paginator;
      _this.dataSource.sort = _this.sort;
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.storageService.init();

      _this2.contactsList = yield _this2.storageService.get('Contacts');
      _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(_this2.contactsList);
      _this2.dataSource.paginator = _this2.paginator;
      _this2.dataSource.sort = _this2.sort;
    })();
  }

  CreateClient() {
    console.log('create client');
    this.router.navigate(['new-contact']); // this.router.navigate(['tb-new-contact']);
  }

  OpenContact(user) {
    this.router.navigate(['client', {
      userId: user.userId
    }]);
  }

  EditContact(user) {
    this.router.navigate(['new-contact', {
      userId: user.userId
    }]);
    console.log('click', user.firstName);
  }

  deleteContact(user) {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this3.modal.open('delCli', user.firstName + ' ' + user.lastName.toUpperCase()).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;
      _this3.contactsList = _this3.contactsList.filter(a => a.userId !== user.userId);

      _this3.storageService.set('Contacts', _this3.contactsList);
    })();
  }

  NewWork(us) {
    this.router.navigate(['createworksite', {
      userId: us.userId
    }], {
      replaceUrl: true
    });
  }

};

TabContacts.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.LiveAnnouncer
}];

TabContacts.propDecorators = {
  paginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator]
  }],
  sort: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort]
  }]
};
TabContacts = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tb-contacts',
  template: _tb_contacts_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tb_contacts_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TabContacts);


/***/ }),

/***/ 64753:
/*!********************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n.my-custom-scrollbar {\r\nposition: relative;\r\nheight: 200px;\r\noverflow: auto;\r\n}\r\n.table-wrapper-scroll-y {\r\ndisplay: block;\r\n}\r\n/* Add a background color and some padding around the form */\r\n/*.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n} \r\n*/\r\n/* Style inputs with type=\"text\", select elements and textareas */\r\ninput[type=text], select, textarea {\r\n  width: 100%; /* Full width */\r\n  padding: 12px; /* Some padding */ \r\n  border: 1px solid #ccc; /* Gray border */\r\n  border-radius: 4px; /* Rounded borders */\r\n  box-sizing: border-box; /* Make sure that padding and width stays in place */\r\n  margin-top: 6px; /* Add a top margin */\r\n  margin-bottom: 16px; /* Bottom margin */\r\n  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\r\n}\r\n/* Style the submit button with a specific background color etc */\r\ninput[type=submit] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n/* When moving the mouse over the submit button, add a darker green color */\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-group[required=\"required\"] input:not(.required) {\r\n  border: 1px solid black;\r\n}\r\n.form-group[required=\"required\"] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required=\"required\"] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n/* With only the required attribute */\r\n.form-group[required] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 25%;\r\n}\r\n.tabHeader\r\n{\r\n  background-color: orange;\r\n  color: white;\r\n  text-align: center;\r\n  border: 1px solid lightgray;\r\n  border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLWNvbnRhY3RzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBRUEsNERBQTREO0FBQzVEOzs7OztDQUtDO0FBQ0EsaUVBQWlFO0FBQ2xFO0VBQ0UsV0FBVyxFQUFFLGVBQWU7RUFDNUIsYUFBYSxFQUFFLGlCQUFpQjtFQUNoQyxzQkFBc0IsRUFBRSxnQkFBZ0I7RUFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLHNCQUFzQixFQUFFLG9EQUFvRDtFQUM1RSxlQUFlLEVBQUUscUJBQXFCO0VBQ3RDLG1CQUFtQixFQUFFLGtCQUFrQjtFQUN2QyxlQUFlLEVBQUUsd0VBQXdFO0FBQzNGO0FBRUEsaUVBQWlFO0FBQ2pFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsMkVBQTJFO0FBQzNFO0VBQ0UseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBLHFDQUFxQztBQUVyQztFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRiLWNvbnRhY3RzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnMtY2VudGVyLXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5vdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSBcclxuKi9cclxuIC8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4udGFiSGVhZGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";

/***/ }),

/***/ 92842:
/*!*********************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{'myClients' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" style=\"overflow-y: auto;\">\r\n  <div class=\"jumbotron text-center\" style=\"padding: 5px;\r\n  margin: 10px;\">\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>{{'search' | translate}}</mat-label>\r\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\r\n    </mat-form-field>\r\n\r\n    <div class=\"mat-elevation-z8\" style=\"background-color: white;\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\">\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\"> {{'name' | translate}} </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.lastName.toUpperCase()}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by firstName\"> {{'fName' | translate}} </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.firstName}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"address\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by address\"> {{'address' | translate}} </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.address}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"...\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ... </th>\r\n          <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\r\n              <mat-icon>toc</mat-icon>\r\n\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item type=\"button\" (click)=\"NewWork(row)\">\r\n                <mat-icon>add_location</mat-icon>\r\n                <span>{{'newWorksite' | translate}}</span>\r\n              </button>\r\n              <button mat-menu-item type=\"button\" (click)=\"EditContact(row)\">\r\n                <mat-icon>edit</mat-icon>\r\n                <span>{{'edit' | translate}}</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"deleteContact(row)\" type=\"button\">\r\n                <mat-icon>delete</mat-icon>\r\n                <span>{{'delete' | translate}}</span>\r\n              </button>\r\n            </mat-menu>\r\n          </td>\r\n        </ng-container>\r\n\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"headElements\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: headElements;\" (click)=\"OpenContact(row)\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <tr class=\"mat-row\" *matNoDataRow>\r\n          <td class=\"mat-cell\" colspan=\"4\">{{'noData' | translate}} \"{{input.value}}\"</td>\r\n        </tr>\r\n\r\n      </table>\r\n\r\n      <mat-paginator mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of dataSource\">\r\n      </mat-paginator>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-footer text-muted\">\r\n        <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" icon=\"fas fa-user-plus\" \r\n        (click)=\"CreateClient()\" [text]=\"'newClient' | translate\"></dx-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tb-contacts_tb-contacts_module_ts.js.map