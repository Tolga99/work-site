"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 23509:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRoutingModule": () => (/* binding */ PaymentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment */ 28382);




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

/***/ 24068:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 23509);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment */ 28382);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








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

/***/ 28382:
/*!************************************!*\
  !*** ./src/app/payment/payment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.html?ngResource */ 67375);
/* harmony import */ var _payment_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.scss?ngResource */ 18014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);










let Payment = class Payment {
  constructor(modalS, router, route, storageService) {
    this.modalS = modalS;
    this.router = router;
    this.route = route;
    this.storageService = storageService;
    this.formPay = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      chantierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(''),
      payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('')
    });
    this.headElementsInv = ['Nom facture', 'Total', 'Reste à payer', 'Date'];
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nowDate = new Date();
      _this.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
      _this.chantierId = _this.route.snapshot.paramMap.get('chantierId');

      _this.storageService.init();

      _this.chantierList = yield _this.storageService.get('Chantiers');
      _this.chantierIndex = _this.chantierList.findIndex(a => a.chantierId === _this.chantierId);
      _this.chantier = _this.chantierList.find(a => a.chantierId === _this.chantierId); // console.log(this.invList);
    })();
  }

  SelectInvoice(f) {
    this.selectedInv = f;
    if (this.selectedInv.receivedMoney == null) this.selectedInv.receivedMoney = new Array();
    this.ReceivedMoney = 0;
    this.selectedInv.receivedMoney.forEach(element => {
      this.ReceivedMoney = element.price + this.ReceivedMoney;
    });
  }

  GetAllReceivedMoney(f) {
    let total = 0;
    if (f.receivedMoney == null) f.receivedMoney = new Array();
    f.receivedMoney.forEach(element => {
      if (element.price.toString().includes(',') === true) {
        const price = element.price.toString().replace(',', '.');
        element.price = Number.parseFloat(price);
      }

      total = element.price + total;
    });
    total = Math.round(total * 100) / 100; // arrondi

    return total;
  }

  GoBack() {
    this.router.navigate(['worksite', {
      chantierId: this.chantierId
    }], {
      replaceUrl: true
    });
  }

  SavePay() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this2.formPay.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'payment') nom = 'Paiement';
          invalid.push(nom);
        }
      }

      if (_this2.selectedInv == null) invalid.push('Facture non selectionné');

      if (!_this2.formPay.valid || _this2.selectedInv == null) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      var payString = _this2.formPay.get('payment').value;

      if (payString.toString().includes(',') === true) {
        payString.toString().replace(',', '.');
      }

      var pay = Number.parseFloat(payString);
      console.log("payString : ", payString);
      console.log("pay : ", pay);
      if (pay == null) return;
      if (_this2.selectedInv == null) return;

      if (pay > _this2.selectedInv?.totalPrice - _this2.GetAllReceivedMoney(_this2.selectedInv)) {
        let res = null;
        yield _this2.modal.open('field', 'Argent encodé plus grand que le reste à payer').then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      _this2.selectedInv.receivedMoney.push({
        price: pay,
        date: _this2.date
      });

      const index = _this2.chantier.factures.findIndex(a => a.factureId === _this2.selectedInv.factureId);

      _this2.chantier.factures[index] = _this2.selectedInv;
      _this2.chantierList[_this2.chantierIndex] = _this2.chantier;

      _this2.storageService.set('Chantiers', _this2.chantierList);
    })();
  }

  Terminer() {
    this.router.navigate(['/worksite', {
      chantierId: this.chantierId
    }], {
      replaceUrl: true
    });
  }

};

Payment.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}];

Payment = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-payment',
  template: _payment_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Payment);


/***/ }),

/***/ 18014:
/*!*************************************************!*\
  !*** ./src/app/payment/payment.scss?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".class_name {\n  background-color: yellow !important;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLG1DQUFBO0FBRWI7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQUFFO0VBQ0UscUJBQUE7QUFHSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBR0o7O0FBQUUscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBRTtFQUVBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDRixrQkFBQTtBQUVBIiwiZmlsZSI6InBheW1lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc19uYW1leyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3chaW1wb3J0YW50OyB9XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0Om5vdCgucmVxdWlyZWQpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIiAqXCI7IFxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC50YWJIZWFkZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";

/***/ }),

/***/ 67375:
/*!*************************************************!*\
  !*** ./src/app/payment/payment.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'payment' | translate}}</ion-title>\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\n    </dx-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\" style=\"overflow-y: auto; background-color: white; height: 100%; width: 100%;\">\n\n  <form [formGroup]=\"formPay\" (ngSubmit)=\"SavePay()\">\n    <div class=\"card-header tabHeader\">\n      {{'selectInvoice' | translate}}\n    </div>\n    <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n      <table class=\"table table-bordered table-striped mb-0\">\n\n        <thead>\n          <tr>\n            <th *ngFor=\"let head of headElementsInv\" scope=\"col\">{{head}} </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr mdbTableCol *ngFor=\"let inv of this.chantier?.factures\" (click)=\"SelectInvoice(inv)\" [ngClass]=\"{'class_name': inv === selectedInv}\" >\n            <!-- [ngClass]=\"{ 'selectedInv' : inv }\"> -->\n            <!-- <th scope=\"row\">{{el.id}}</th> -->\n            <td>{{inv.factureName}}</td>\n            <td>{{inv.totalPrice}}</td>\n            <td>{{inv?.totalPrice - GetAllReceivedMoney(inv) | number : '1.2'}}</td>\n            <td>{{inv.date}}</td>\n        </tbody>\n\n      </table>\n\n    </div>\n    <!-- <div>\n      <label for=\"\">Reste à payer : {{selectedInv?.totalPrice - ReceivedMoney }}</label>\n    </div> -->\n    <ion-item class=\"form-group\" style=\"margin-top: 10px\" required=\"required\">\n      <ion-label>{{'payment' | translate}}</ion-label>\n      <ion-input type=\"number\" id=\"payment\" name=\"payment\" formControlName=\"payment\" placeholder=\"123,45\" required=\"required\"\n      maxlength=\"12\"></ion-input>\n    </ion-item>\n    <div class=\"card-footer text-muted\" style=\"text-align:center; display: flex;\n  justify-content: space-evenly;\n  align-items: center;\">\n    <dx-button [useSubmitBehavior]=\"true\" icon=\"fas fa-cash-register\" class=\"btn btn-danger\" style=\"background-color:orange;\" [text]=\"'addPay' | translate\"></dx-button>\n    <!-- <dx-button [useSubmitBehavior]=\"false\" class=\"btn btn-danger\" (click)=\"Terminer()\" [text]=\"'savePay' | translate\" style=\"background-color: orange;\"></dx-button> -->\n  </div>\n  </form>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map