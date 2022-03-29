"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-contacts-client_tb-contacts-client_module_ts"],{

/***/ 40623:
/*!*************************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClientRoutingModule": () => (/* binding */ TabContactsClientRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts-client */ 78977);




const routes = [
    {
        path: '',
        component: _tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__.TabContactsClient,
    }
];
let TabContactsClientRoutingModule = class TabContactsClientRoutingModule {
};
TabContactsClientRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabContactsClientRoutingModule);



/***/ }),

/***/ 99322:
/*!*****************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClientModule": () => (/* binding */ TabContactsClientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts-client */ 78977);
/* harmony import */ var _tb_contacts_client_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts-client-routing.module */ 40623);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);





//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


let TabContactsClientModule = class TabContactsClientModule {
};
TabContactsClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _tb_contacts_client_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabContactsClientRoutingModule,
        ],
        declarations: [_tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__.TabContactsClient]
    })
], TabContactsClientModule);



/***/ }),

/***/ 78977:
/*!**********************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClient": () => (/* binding */ TabContactsClient)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tb_contacts_client_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tb-contacts-client.html */ 66554);
/* harmony import */ var _tb_contacts_client_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts-client.css */ 57173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ 55112);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 99900);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ 36033);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);











let TabContactsClient = class TabContactsClient {
    constructor(modalS, storageService, router, route) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.contactsList = [];
        this.indexFind = -5;
        this.formClient = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
        });
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__.NgbdModalFocus(this.modalS);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.storageService.init();
            this.contactsList = yield this.storageService.get('Contacts');
            if (this.contactsList == null)
                this.contactsList = new Array();
            this.modif = this.route.snapshot.paramMap.get('userId');
            this.tag = this.route.snapshot.paramMap.get('tag');
            if (this.modif != null) {
                console.log('modification', this.modif);
                this.storageService.get('Contacts');
                this.indexFind = this.contactsList.findIndex(x => x.userId === this.modif);
                if (this.indexFind >= 0) {
                    this.clientId = this.contactsList[this.indexFind].userId;
                    this.formClient.setValue({
                        firstName: this.contactsList[this.indexFind].firstName,
                        lastName: this.contactsList[this.indexFind].lastName,
                        address: this.contactsList[this.indexFind].address,
                        phone: this.contactsList[this.indexFind].phone,
                        mail: this.contactsList[this.indexFind].mail,
                        tva: this.contactsList[this.indexFind].tva,
                        iban: this.contactsList[this.indexFind].iban,
                        bic: this.contactsList[this.indexFind].bic,
                    });
                }
            }
            else {
                console.log('creation', this.modif);
                this.clientId = this.generateUUID();
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const invalid = [];
            const controls = this.formClient.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    let nom = '';
                    if (name === 'firstName')
                        nom = 'Prénom';
                    if (name === 'lastName')
                        nom = 'Nom';
                    invalid.push(nom);
                }
            }
            if (!this.formClient.valid) {
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
            this.client = new _models_user__WEBPACK_IMPORTED_MODULE_2__.User(this.clientId, this.formClient.get('firstName').value, this.formClient.get('lastName').value, this.formClient.get('address').value, this.formClient.get('phone').value, this.formClient.get('mail').value, null, this.formClient.get('tva').value, this.formClient.get('iban').value, this.formClient.get('bic').value);
            if (this.indexFind >= 0) {
                // this.contactsList.splice(this.indexFind,1);
                this.contactsList[this.indexFind] = this.client;
            }
            else
                this.contactsList.push(this.client);
            this.storageService.set('Contacts', this.contactsList);
            if (!this.tag) {
                this.router.navigate(['/tb-contacts'], { replaceUrl: true });
            }
            else if (this.tag.toLowerCase() === 'chantier') {
                this.router.navigate(['/createworksite'], { replaceUrl: true });
            }
            else if (this.tag.toLowerCase() === 'profile') {
                this.router.navigate(['/client', { userId: this.modif }], { replaceUrl: true });
            }
        });
    }
    generateUUID() {
        this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__.UUID.UUID();
        return this.uuidValue;
    }
    GoBack() {
        if (!this.tag) {
            this.router.navigate(['/tb-contacts'], { replaceUrl: true });
        }
        else if (this.tag.toLowerCase() === 'chantier') {
            this.router.navigate(['/createworksite'], { replaceUrl: true });
        }
        else if (this.tag.toLowerCase() === 'profile') {
            this.router.navigate(['/client', { userId: this.modif }], { replaceUrl: true });
        }
    }
};
TabContactsClient.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
TabContactsClient = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tb-contacts-client',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tb_contacts_client_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tb_contacts_client_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabContactsClient);



/***/ }),

/***/ 66554:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tb-contacts-client/tb-contacts-client.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"GoBack()\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n      <ion-label>Retour</ion-label>\r\n    </ion-button>\r\n    <ion-title>\r\n      Contacts\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"formClient\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"floating\">Prénom</ion-label>\r\n        <ion-input type=\"text\" id=\"firstName\" placeholder=\"Your name..\" formControlName=\"firstName\" required=\"required\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"floating\">Nom</ion-label>\r\n        <ion-input type=\"text\" id=\"lastName\" placeholder=\"Your last name..\" formControlName=\"lastName\"\r\n          required=\"required\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"floating\">Adresse</ion-label>\r\n        <ion-input type=\"text\" id=\"address\" placeholder=\"..\" formControlName=\"address\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"floating\">Phone</ion-label>\r\n        <ion-input type=\"text\" id=\"phone\" placeholder=\"...\" formControlName=\"phone\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"floating\">Mail</ion-label>\r\n        <ion-input type=\"text\" id=\"mail\" placeholder=\"...\" formControlName=\"mail\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"floating\">TVA</ion-label>\r\n        <ion-input type=\"text\" id=\"tva\" placeholder=\"...\" formControlName=\"tva\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"floating\">IBAN</ion-label>\r\n        <ion-input type=\"text\" id=\"iban\" placeholder=\"BE ...\" formControlName=\"iban\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"floating\">BIC</ion-label>\r\n        <ion-input type=\"text\" id=\"bic\" placeholder=\"...\" formControlName=\"bic\"></ion-input>\r\n      </ion-item>\r\n\r\n      <button type=\"submit\" class=\"btn btn-secondary\">Sauvegarder client</button>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 57173:
/*!***********************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.css ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n.my-custom-scrollbar {\r\nposition: relative;\r\nheight: 200px;\r\noverflow: auto;\r\n}\r\n.table-wrapper-scroll-y {\r\ndisplay: block;\r\n}\r\n/* Add a background color and some padding around the form */\r\n/*.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n} \r\n*/\r\n/* Style inputs with type=\"text\", select elements and textareas */\r\ninput[type=text], select, textarea {\r\n  width: 100%; /* Full width */\r\n  padding: 12px; /* Some padding */ \r\n  border: 1px solid #ccc; /* Gray border */\r\n  border-radius: 4px; /* Rounded borders */\r\n  box-sizing: border-box; /* Make sure that padding and width stays in place */\r\n  margin-top: 6px; /* Add a top margin */\r\n  margin-bottom: 16px; /* Bottom margin */\r\n  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\r\n}\r\n/* Style the submit button with a specific background color etc */\r\ninput[type=submit] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n/* When moving the mouse over the submit button, add a darker green color */\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-group[required=\"required\"] input:not(.required) {\r\n  border: 1px solid black;\r\n}\r\n.form-group[required=\"required\"] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required=\"required\"] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n/* With only the required attribute */\r\n.form-group[required] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLWNvbnRhY3RzLWNsaWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUVBLDREQUE0RDtBQUM1RDs7Ozs7Q0FLQztBQUNBLGlFQUFpRTtBQUNsRTtFQUNFLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGFBQWEsRUFBRSxpQkFBaUI7RUFDaEMsc0JBQXNCLEVBQUUsZ0JBQWdCO0VBQ3hDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4QyxzQkFBc0IsRUFBRSxvREFBb0Q7RUFDNUUsZUFBZSxFQUFFLHFCQUFxQjtFQUN0QyxtQkFBbUIsRUFBRSxrQkFBa0I7RUFDdkMsZUFBZSxFQUFFLHdFQUF3RTtBQUMzRjtBQUVBLGlFQUFpRTtBQUNqRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBLDJFQUEyRTtBQUMzRTtFQUNFLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQSxxQ0FBcUM7QUFFckM7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1oiLCJmaWxlIjoidGItY29udGFjdHMtY2xpZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnMtY2VudGVyLXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5vdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSBcclxuKi9cclxuIC8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tb-contacts-client_tb-contacts-client_module_ts.js.map