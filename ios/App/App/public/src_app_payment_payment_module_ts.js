"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 40109:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRoutingModule": () => (/* binding */ PaymentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment */ 56890);




const routes = [
    {
        path: '',
        component: _payment__WEBPACK_IMPORTED_MODULE_0__.Payment
    }
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentRoutingModule);



/***/ }),

/***/ 15052:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 40109);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment */ 56890);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);








let PaymentModule = class PaymentModule {
};
PaymentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_payment__WEBPACK_IMPORTED_MODULE_1__.Payment]
    })
], PaymentModule);



/***/ }),

/***/ 56890:
/*!************************************!*\
  !*** ./src/app/payment/payment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.html */ 59440);
/* harmony import */ var _payment_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.scss */ 75583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 99900);









let Payment = class Payment {
    constructor(modalS, router, route, storageService) {
        this.modalS = modalS;
        this.router = router;
        this.route = route;
        this.storageService = storageService;
        this.formPay = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            chantierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
        this.headElementsInv = ['Nom facture', 'Total', 'Reste à payer', 'Date'];
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__.NgbdModalFocus(this.modalS);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const nowDate = new Date();
            this.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
            this.chantierId = this.route.snapshot.paramMap.get('chantierId');
            this.storageService.init();
            this.chantierList = yield this.storageService.get('Chantiers');
            this.chantierIndex = this.chantierList.findIndex(a => a.chantierId === this.chantierId);
            this.chantier = this.chantierList.find(a => a.chantierId === this.chantierId);
            // console.log(this.invList);
        });
    }
    SelectInvoice(f) {
        this.selectedInv = f;
        if (this.selectedInv.receivedMoney == null)
            this.selectedInv.receivedMoney = new Array();
        this.ReceivedMoney = 0;
        this.selectedInv.receivedMoney.forEach(element => {
            this.ReceivedMoney = element.price + this.ReceivedMoney;
        });
    }
    GetAllReceivedMoney(f) {
        let total = 0;
        if (f.receivedMoney == null)
            f.receivedMoney = new Array();
        f.receivedMoney.forEach(element => {
            total = element.price + total;
        });
        total = Math.round(total * 100) / 100; // arrondi
        return total;
    }
    GoBack() {
        this.router.navigate(['worksite', { chantierId: this.chantierId }], { replaceUrl: true });
    }
    SavePay() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const invalid = [];
            const controls = this.formPay.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    let nom = '';
                    if (name === 'payment')
                        nom = 'Paiement';
                    invalid.push(nom);
                }
            }
            if (this.selectedInv == null)
                invalid.push('Facture non selectionné');
            if (!this.formPay.valid || this.selectedInv == null) {
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
            const pay = this.formPay.get('payment').value;
            if (Number.parseFloat(pay) == null)
                return;
            if (this.selectedInv == null)
                return;
            if (Number.parseFloat(pay) > (((_a = this.selectedInv) === null || _a === void 0 ? void 0 : _a.totalPrice) - this.GetAllReceivedMoney(this.selectedInv))) {
                let res = null;
                yield this.modal.open('field', 'Argent encodé plus grand que le reste à payer')
                    .then(result => result.result
                    .then((data) => {
                    res = 'OK';
                }, (reason) => {
                    res = 'DISMISS';
                }));
                return;
            }
            this.selectedInv.receivedMoney.push({ price: Number.parseFloat(pay), date: this.date });
            const index = this.chantier.factures.findIndex(a => a.factureId === this.selectedInv.factureId);
            this.chantier.factures[index] = this.selectedInv;
            this.chantierList[this.chantierIndex] = this.chantier;
            this.storageService.set('Chantiers', this.chantierList);
        });
    }
    Terminer() {
        this.router.navigate(['/worksite', { chantierId: this.chantierId }], { replaceUrl: true });
    }
};
Payment.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
Payment = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Payment);



/***/ }),

/***/ 59440:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/payment/payment.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"GoBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-label>Retour</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\" style=\"overflow-y: auto;\">\n\n  <form [formGroup]=\"formPay\" (ngSubmit)=\"SavePay()\">\n    <div class=\"card-header\">\n      Selectionnez la facture concernée :\n    </div>\n    <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n      <table class=\"table table-bordered table-striped mb-0\">\n\n        <thead>\n          <tr>\n            <th *ngFor=\"let head of headElementsInv\" scope=\"col\">{{head}} </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr mdbTableCol *ngFor=\"let inv of this.chantier?.factures\" (click)=\"SelectInvoice(inv)\" [ngClass]=\"{'class_name': inv === selectedInv}\" >\n            <!-- [ngClass]=\"{ 'selectedInv' : inv }\"> -->\n            <!-- <th scope=\"row\">{{el.id}}</th> -->\n            <td>{{inv.factureName}}</td>\n            <td>{{inv.totalPrice}}</td>\n            <td>{{inv?.totalPrice - GetAllReceivedMoney(inv) | number : '1.2'}}</td>\n            <td>{{inv.date}}</td>\n        </tbody>\n\n      </table>\n\n    </div>\n    <!-- <div>\n      <label for=\"\">Reste à payer : {{selectedInv?.totalPrice - ReceivedMoney }}</label>\n    </div> -->\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"floating\">Paiement</ion-label>\n      <ion-input type=\"number\" id=\"payment\" name=\"payment\" formControlName=\"payment\" placeholder=\"...\" required=\"required\"></ion-input>\n    </ion-item>\n    <button class=\"btn btn-danger\"> Enregistrer paiement</button>\n  </form>\n  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Terminer()\"> Terminer paiement</button>\n\n</div>");

/***/ }),

/***/ 75583:
/*!**************************************!*\
  !*** ./src/app/payment/payment.scss ***!
  \**************************************/
/***/ ((module) => {

module.exports = ".class_name {\n  background-color: yellow !important;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLG1DQUFBO0FBRWI7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQUFFO0VBQ0UscUJBQUE7QUFHSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBR0o7O0FBQUUscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFFSiIsImZpbGUiOiJwYXltZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NfbmFtZXsgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93IWltcG9ydGFudDsgfVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdpdGggb25seSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlICovXHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGxhYmVsOmFmdGVyIHsgXHJcbiAgICBjb250ZW50OlwiICpcIjsgXHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map