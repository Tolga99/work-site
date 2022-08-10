"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 97616:
/*!****************************************************!*\
  !*** ./src/app/models/Settings/invoiceSettings.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceSettings": () => (/* binding */ InvoiceSettings)
/* harmony export */ });
class InvoiceSettings {
    constructor(factureName, exts, extType, extNum, positionAvant, positionApres) {
        this.factureName = factureName;
        this.exts = exts;
        this.extType = extType;
        this.extNum = extNum;
        this.positionAvant = positionAvant;
        this.positionApres = positionApres;
    }
}


/***/ }),

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 1962);




const routes = [
    {
        path: '',
        component: _settings__WEBPACK_IMPORTED_MODULE_0__.Settings
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ 1962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








let SettingsModule = class SettingsModule {
};
SettingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ],
        declarations: [_settings__WEBPACK_IMPORTED_MODULE_2__.Settings]
    })
], SettingsModule);



/***/ }),

/***/ 1962:
/*!**************************************!*\
  !*** ./src/app/settings/settings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.html?ngResource */ 66900);
/* harmony import */ var _settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.scss?ngResource */ 67526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_Settings_invoiceSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Settings/invoiceSettings */ 97616);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 71188);












let Settings = class Settings {
  constructor(modalS, storageService, router, navController) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.navController = navController;
    this.deviseList = ['€', '$', '£'];
    this.devise = '';
    this.ext = '';
    this.extTypes = ['Numéro (Ex: 34)', 'Date (Ex: JJ/MM/AAAA)', 'Numéro-Date', 'Date-Numero'];
    this.formGeneral = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      devise: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('')
    });
    this.formInvoice = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      factureName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      exts: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      extType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(''),
      extNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(''),
      positionAvant: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(''),
      positionApres: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('')
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
    console.log('Module settings');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storageService.init();

      let invoiceSettings = yield _this.storageService.get('MyInvoiceSettings');
      console.log(invoiceSettings);

      if (invoiceSettings != null) {
        let selectedExt;

        if (invoiceSettings.exts === 'Num') {
          selectedExt = 0;
        } else if (invoiceSettings.exts === 'Date') {
          selectedExt = 1;
        } else if (invoiceSettings.exts === 'NumDate') {
          selectedExt = 2;
        } else if (invoiceSettings.exts === 'DateNum') {
          selectedExt = 3;
        } else selectedExt = 0;

        _this.formInvoice.setValue({
          factureName: invoiceSettings.factureName,
          exts: _this.extTypes[selectedExt],
          extType: invoiceSettings.extType,
          extNum: invoiceSettings.extNum,
          positionAvant: invoiceSettings.positionAvant,
          positionApres: invoiceSettings.positionApres
        });
      } else {
        _this.formInvoice.setValue({
          factureName: '',
          exts: '',
          extType: '',
          extNum: '0',
          positionAvant: false,
          positionApres: false
        });
      }
    })();
  }

  UpdateInvoiceSettings() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this2.formInvoice.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'firstName') nom = 'Prénom';
          if (name === 'lastName') nom = 'Nom';
          invalid.push(nom);
        }
      }

      if (!_this2.formInvoice.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      console.log(_this2.ext, _this2.ext.length);
      let selectedExt = '';

      if (_this2.ext === 'Numéro (Ex: 34)') {
        selectedExt = 'Num';
      } else if (_this2.ext === 'Date (Ex: JJ/MM/AAAA)') {
        selectedExt = 'Date';
      } else if (_this2.ext === 'Numéro-Date') {
        selectedExt = 'NumDate';
      } else if (_this2.ext === 'Date-Numero') {
        selectedExt = 'DateNum';
      }

      _this2.storageService.init();

      _this2.storageService.set('MyInvoiceSettings', new _models_Settings_invoiceSettings__WEBPACK_IMPORTED_MODULE_4__.InvoiceSettings(_this2.formInvoice.get('factureName').value, selectedExt, _this2.formInvoice.get('extType').value, _this2.formInvoice.get('extNum').value, _this2.formInvoice.get('positionAvant').value, _this2.formInvoice.get('positionApres').value));

      _this2.devise = _this2.formGeneral.get('devise').value;
      console.log('Parametres de facture actualisé, redirection...');

      _this2.navController.navigateBack(['tb-home'], {
        replaceUrl: true
      });
    })();
  }

  selectExtType(event) {
    console.log('select', event);
    this.ext = event.target.value;
  }

  selectDevise(event) {
    this.devise = event.target.value;
  }

  updateGeneralSettings() {
    if (this.devise !== null) {
      this.storageService.set('devise', this.devise);
    }
  }

  GoBack() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.navController.navigateBack(['tb-home'], {
        replaceUrl: true
      });
    })();
  }

};

Settings.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}];

Settings = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-settings',
  template: _settings_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Settings);


/***/ }),

/***/ 67526:
/*!***************************************************!*\
  !*** ./src/app/settings/settings.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVBOztBQUFBO0VBQ0EsY0FBQTtBQUdBOztBQUFBLDREQUFBOztBQUNBOzs7OztDQUFBOztBQU1DLGlFQUFBOztBQUNEO0VBQ0UsV0FBQTtFQUFhLGVBQUE7RUFDYixhQUFBO0VBQWUsaUJBQUE7RUFDZixzQkFBQTtFQUF3QixnQkFBQTtFQUN4QixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixzQkFBQTtFQUF3QixvREFBQTtFQUN4QixlQUFBO0VBQWlCLHFCQUFBO0VBQ2pCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQ3JCLGdCQUFBO0FBVUY7O0FBUEEsaUVBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQSwyRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0FBVUY7O0FBUEE7RUFDRSx1QkFBQTtBQVVGOztBQVBBO0VBQ0UscUJBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBVUY7O0FBUEEscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFTRjs7QUFOQTtFQUVFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUYiLCJmaWxlIjoic2V0dGluZ3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnMtY2VudGVyLXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5vdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSBcclxuKi9cclxuIC8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBXaXRoIG9ubHkgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSAqL1xyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udGFiSGVhZGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 66900:
/*!***************************************************!*\
  !*** ./src/app/settings/settings.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-text-center\">{{'settings' | translate}}</ion-title>\r\n      <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\r\n      </dx-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  \r\n  <ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n    <div>\r\n      <form [formGroup]=\"formGeneral\" (ngSubmit)=\"updateGeneralSettings()\">\r\n        <div class=\"jumbotron text-center\">\r\n          <div class=\"card-header\">\r\n            {{'general' | translate}}\r\n          </div>\r\n          <ion-item class=\"form-group\">\r\n            <ion-label position=\"stacked\">{{'devise' | translate}}</ion-label>\r\n            <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"devise\" \r\n              (ionChange)=\"selectDevise($event)\">\r\n              <ion-select-option></ion-select-option>\r\n              <ion-select-option *ngFor=\"let c of deviseList\" [value]=\"c\">\r\n                {{c}}  \r\n              </ion-select-option>\r\n            </ion-select>          </ion-item>\r\n            <dx-button [useSubmitBehavior]=\"true\" class=\"btn btn-secondary\" type=\"submit\" style=\"background-color:orange;\" [text]=\"'saveGenSettings' | translate\"></dx-button>\r\n        </div>\r\n        </form>\r\n      <form [formGroup]=\"formInvoice\" (ngSubmit)=\"UpdateInvoiceSettings()\">\r\n        <div class=\"jumbotron text-center\">\r\n          <div class=\"card-header\">\r\n            {{'invoices' | translate}}\r\n          </div>\r\n          <ion-item class=\"form-group\">\r\n            <ion-label position=\"stacked\">{{'invoiceName' | translate}}</ion-label>\r\n            <ion-input type=\"text\" id=\"factureName\" placeholder=\"FactureVente\" formControlName=\"factureName\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">{{'extType' | translate}}</ion-label>\r\n            <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"exts\" \r\n              (ionChange)=\"selectExtType($event)\">\r\n              <ion-select-option></ion-select-option>\r\n              <ion-select-option *ngFor=\"let c of extTypes\" [value]=\"c\">\r\n                {{c}}  \r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item class=\"form-group\">\r\n            <ion-label position=\"stacked\" style=\"font-size: medium;\">{{'extPos' | translate}}</ion-label>\r\n            <ion-item>\r\n              <ion-label position=\"fixed\" style=\"font-size: smaller;\">{{'beforeName' | translate}}</ion-label>\r\n              <ion-checkbox id=\"avant\" name=\"avant\" formControlName=\"positionAvant\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"fixed\" style=\"font-size: smaller;\">{{'afterName' | translate}}</ion-label>\r\n              <ion-checkbox name=\"apres\" id=\"apres\" formControlName=\"positionApres\"></ion-checkbox>\r\n            </ion-item>          \r\n          </ion-item>\r\n          <ion-item class=\"form-group\">\r\n            <ion-label position=\"stacked\">{{'extSeparator' | translate}}</ion-label>\r\n            <ion-input type=\"text\" id=\"ext\" placeholder=\"- / ; _ #\" formControlName=\"extType\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"form-group\">\r\n            <ion-label position=\"stacked\">{{'extVal' | translate}}</ion-label>\r\n            <ion-input type=\"text\" id=\"ext\" placeholder=\"1\" formControlName=\"extNum\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"form-group\"> \r\n            <ion-label position=\"fixed\" style=\"font-size: smaller;\">{{'OpenPdfAfterGenerate' | translate}}</ion-label>\r\n            <ion-checkbox id=\"openPdf\" name=\"openPdf\" formControlName=\"openPdf\"></ion-checkbox>\r\n          </ion-item>\r\n          <dx-button [useSubmitBehavior]=\"true\" class=\"btn btn-secondary\" type=\"submit\" style=\"background-color:orange;\" [text]=\"'saveInvSettings' | translate\"></dx-button>\r\n  </div>\r\n</form>\r\n  </div>\r\n  </ion-content>\r\n  \r\n      <!-- <form [formGroup]=\"formProfile\" (ngSubmit)=\"UpdateProfile()\">\r\n        <ion-item class=\"form-group\" required=\"required\">\r\n          <ion-label position=\"stacked\">Prénom</ion-label>\r\n          <ion-input type=\"text\" id=\"firstName\" placeholder=\"Your name..\" formControlName=\"firstName\" required=\"required\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"form-group\" required=\"required\">\r\n          <ion-label position=\"stacked\">Nom</ion-label>\r\n          <ion-input type=\"text\" id=\"lastName\" placeholder=\"Your last name..\" formControlName=\"lastName\" required=\"required\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"form-group\" required=\"required\">\r\n          <ion-label position=\"stacked\">Adresse</ion-label>\r\n          <ion-input type=\"text\" id=\"address\" placeholder=\"..\" formControlName=\"address\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"form-group\">\r\n          <ion-label position=\"stacked\">Phone</ion-label>\r\n          <ion-input type=\"text\" id=\"phone\" placeholder=\"...\" formControlName=\"phone\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"form-group\">\r\n          <ion-label position=\"stacked\">Mail</ion-label>\r\n          <ion-input type=\"text\" id=\"mail\" placeholder=\"...\" formControlName=\"mail\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"form-group\">\r\n          <ion-label position=\"stacked\">TVA</ion-label>\r\n          <ion-input type=\"text\" id=\"tva\" placeholder=\"...\" formControlName=\"tva\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"form-group\">\r\n          <ion-label position=\"stacked\">IBAN</ion-label>\r\n          <ion-input type=\"text\" id=\"iban\" placeholder=\"BE ...\" formControlName=\"iban\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"form-group\">\r\n          <ion-label position=\"stacked\">BIC</ion-label>\r\n          <ion-input type=\"text\" id=\"bic\" placeholder=\"...\" formControlName=\"bic\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <button class=\"btn btn-secondary\" type=\"submit\">Actualiser profil</button>\r\n      </form> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map