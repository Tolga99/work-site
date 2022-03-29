"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-contacts_tb-contacts_module_ts"],{

/***/ 780:
/*!***********************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsRoutingModule": () => (/* binding */ TabContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tb_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts */ 65739);




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

/***/ 63169:
/*!***************************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsModule": () => (/* binding */ TabContactsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _tb_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts */ 65739);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _tb_contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tb-contacts-routing.module */ 780);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ 93950);









let TabContactsModule = class TabContactsModule {
};
TabContactsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tb_contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabContactsRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        ],
        declarations: [_tb_contacts__WEBPACK_IMPORTED_MODULE_0__.TabContacts]
    })
], TabContactsModule);



/***/ }),

/***/ 65739:
/*!********************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContacts": () => (/* binding */ TabContacts)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tb_contacts_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tb-contacts.html */ 66233);
/* harmony import */ var _tb_contacts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts.css */ 58962);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 42706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 99900);












let TabContacts = class TabContacts {
    constructor(modalS, storageService, router, _liveAnnouncer) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this._liveAnnouncer = _liveAnnouncer;
        // headElements = ['#', 'Prenom', 'Nom', 'Adresse'];
        this.headElements = ['lastName', 'firstName', 'address', '...'];
        this.contactsList = [];
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__.NgbdModalFocus(this.modalS);
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
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('view did enter');
            this.storageService.init();
            this.contactsList = yield this.storageService.get('Contacts');
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.contactsList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storageService.init();
            this.contactsList = yield this.storageService.get('Contacts');
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.contactsList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    CreateClient() {
        console.log('create client');
        this.router.navigate(['new-contact']);
        // this.router.navigate(['tb-new-contact']);
    }
    OpenContact(user) {
        this.router.navigate(['client', { userId: user.userId }]);
    }
    EditContact(user) {
        this.router.navigate(['new-contact', { userId: user.userId }]);
        console.log('click', user.firstName);
    }
    deleteContact(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let res = null;
            yield this.modal.open('delCli', user.firstName + ' ' + user.lastName.toUpperCase())
                .then(result => result.result
                .then((data) => {
                res = 'OK';
            }, (reason) => {
                res = 'DISMISS';
            }));
            if (res === 'DISMISS')
                return;
            this.contactsList = this.contactsList.filter(a => a.userId !== user.userId);
            this.storageService.set('Contacts', this.contactsList);
        });
    }
    NewWork(us) {
        this.router.navigate(['createworksite', { userId: us.userId }], { replaceUrl: true });
    }
};
TabContacts.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.LiveAnnouncer }
];
TabContacts.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort,] }]
};
TabContacts = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tb-contacts',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tb_contacts_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tb_contacts_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabContacts);



/***/ }),

/***/ 66233:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tb-contacts/tb-contacts.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" style=\"overflow-y: auto;\">\r\n  <div class=\"jumbotron text-center\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n        Mes clients\r\n      </div>\r\n    </div>\r\n    <mat-form-field appearance=\"standard\">\r\n      <mat-label>Recherche</mat-label>\r\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\r\n    </mat-form-field>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\">\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\"> Nom </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.lastName.toUpperCase()}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by firstName\"> Prénom </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.firstName}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"address\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by address\"> Adresse </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.address}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"...\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ... </th>\r\n          <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\r\n              <mat-icon>more_horiz</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item type=\"button\" (click)=\"NewWork(row)\">\r\n                <mat-icon>add_location</mat-icon>\r\n                <span>Nouveau chantier</span>\r\n              </button>\r\n              <button mat-menu-item type=\"button\" (click)=\"EditContact(row)\">\r\n                <mat-icon>edit</mat-icon>\r\n                <span>Modifier</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"deleteContact(row)\" type=\"button\">\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Supprimer</span>\r\n              </button>\r\n            </mat-menu>\r\n          </td>\r\n        </ng-container>\r\n\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"headElements\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: headElements;\" (click)=\"OpenContact(row)\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <tr class=\"mat-row\" *matNoDataRow>\r\n          <td class=\"mat-cell\" colspan=\"4\">No data matching the Recherche \"{{input.value}}\"</td>\r\n        </tr>\r\n\r\n      </table>\r\n\r\n      <mat-paginator mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of dataSource\">\r\n      </mat-paginator>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-footer text-muted\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateClient()\">Nouveau client</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 58962:
/*!*********************************************!*\
  !*** ./src/app/tb-contacts/tb-contacts.css ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n.my-custom-scrollbar {\r\nposition: relative;\r\nheight: 200px;\r\noverflow: auto;\r\n}\r\n.table-wrapper-scroll-y {\r\ndisplay: block;\r\n}\r\n/* Add a background color and some padding around the form */\r\n/*.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n} \r\n*/\r\n/* Style inputs with type=\"text\", select elements and textareas */\r\ninput[type=text], select, textarea {\r\n  width: 100%; /* Full width */\r\n  padding: 12px; /* Some padding */ \r\n  border: 1px solid #ccc; /* Gray border */\r\n  border-radius: 4px; /* Rounded borders */\r\n  box-sizing: border-box; /* Make sure that padding and width stays in place */\r\n  margin-top: 6px; /* Add a top margin */\r\n  margin-bottom: 16px; /* Bottom margin */\r\n  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\r\n}\r\n/* Style the submit button with a specific background color etc */\r\ninput[type=submit] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n/* When moving the mouse over the submit button, add a darker green color */\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-group[required=\"required\"] input:not(.required) {\r\n  border: 1px solid black;\r\n}\r\n.form-group[required=\"required\"] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required=\"required\"] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n/* With only the required attribute */\r\n.form-group[required] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 25%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLWNvbnRhY3RzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9CO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBRUEsNERBQTREO0FBQzVEOzs7OztDQUtDO0FBQ0EsaUVBQWlFO0FBQ2xFO0VBQ0UsV0FBVyxFQUFFLGVBQWU7RUFDNUIsYUFBYSxFQUFFLGlCQUFpQjtFQUNoQyxzQkFBc0IsRUFBRSxnQkFBZ0I7RUFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLHNCQUFzQixFQUFFLG9EQUFvRDtFQUM1RSxlQUFlLEVBQUUscUJBQXFCO0VBQ3RDLG1CQUFtQixFQUFFLGtCQUFrQjtFQUN2QyxlQUFlLEVBQUUsd0VBQXdFO0FBQzNGO0FBRUEsaUVBQWlFO0FBQ2pFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsMkVBQTJFO0FBQzNFO0VBQ0UseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBLHFDQUFxQztBQUVyQztFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoidGItY29udGFjdHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFicy1jZW50ZXIteCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogMjAwcHg7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgYW5kIHNvbWUgcGFkZGluZyBhcm91bmQgdGhlIGZvcm0gKi9cclxuLyouY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59IFxyXG4qL1xyXG4gLyogU3R5bGUgaW5wdXRzIHdpdGggdHlwZT1cInRleHRcIiwgc2VsZWN0IGVsZW1lbnRzIGFuZCB0ZXh0YXJlYXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBwYWRkaW5nOiAxMnB4OyAvKiBTb21lIHBhZGRpbmcgKi8gXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogR3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVycyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE1ha2Ugc3VyZSB0aGF0IHBhZGRpbmcgYW5kIHdpZHRoIHN0YXlzIGluIHBsYWNlICovXHJcbiAgbWFyZ2luLXRvcDogNnB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgLyogQm90dG9tIG1hcmdpbiAqL1xyXG4gIHJlc2l6ZTogdmVydGljYWwgLyogQWxsb3cgdGhlIHVzZXIgdG8gdmVydGljYWxseSByZXNpemUgdGhlIHRleHRhcmVhIChub3QgaG9yaXpvbnRhbGx5KSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiB3aXRoIGEgc3BlY2lmaWMgYmFja2dyb3VuZCBjb2xvciBldGMgKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFdoZW4gbW92aW5nIHRoZSBtb3VzZSBvdmVyIHRoZSBzdWJtaXQgYnV0dG9uLCBhZGQgYSBkYXJrZXIgZ3JlZW4gY29sb3IgKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBXaXRoIG9ubHkgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSAqL1xyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tb-contacts_tb-contacts_module_ts.js.map