"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-contacts-client_tb-contacts-client_module_ts"],{

/***/ 25812:
/*!*********************************************!*\
  !*** ./src/app/services/methods.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodsService": () => (/* binding */ MethodsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let MethodsService = class MethodsService {
    constructor() { }
    isNullOrEmpty(text) {
        if (text === '' || text === null || text === undefined)
            return true;
        else
            return false;
    }
    equals(text1, text2) {
        console.log(text1, text2);
        if (text1 === '' || text1 === null || text1 === undefined) {
            if (text2 === '' || text2 === null || text2 === undefined) {
                return true;
            }
        }
        else {
            if (text1 === text2) {
                return true;
            }
        }
        return false;
    }
};
MethodsService.ctorParameters = () => [];
MethodsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], MethodsService);



/***/ }),

/***/ 19443:
/*!*************************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClientRoutingModule": () => (/* binding */ TabContactsClientRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts-client */ 96910);




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

/***/ 54564:
/*!*****************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClientModule": () => (/* binding */ TabContactsClientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tb_contacts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-contacts-client */ 96910);
/* harmony import */ var _tb_contacts_client_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts-client-routing.module */ 19443);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);





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

/***/ 96910:
/*!**********************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContactsClient": () => (/* binding */ TabContactsClient)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tb_contacts_client_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-contacts-client.html?ngResource */ 23827);
/* harmony import */ var _tb_contacts_client_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tb-contacts-client.css?ngResource */ 54248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ 65783);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/methods.service */ 25812);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);














let TabContactsClient = class TabContactsClient {
  constructor(modalS, storageService, router, route, methodsService, navController) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.methodsService = methodsService;
    this.navController = navController;
    this.contactsList = [];
    this.indexFind = -5;
    this.formClient = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('')
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__.NgbdModalFocus(this.modalS);
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storageService.init();

      _this.contactsList = yield _this.storageService.get('Contacts');
      if (_this.contactsList == null) _this.contactsList = new Array();
      _this.modif = _this.route.snapshot.paramMap.get('userId');
      _this.tag = _this.route.snapshot.paramMap.get('tag');

      if (_this.modif != null) {
        console.log('modification', _this.modif);

        _this.storageService.get('Contacts');

        _this.indexFind = _this.contactsList.findIndex(x => x.userId === _this.modif);

        if (_this.indexFind >= 0) {
          _this.clientId = _this.contactsList[_this.indexFind].userId;
          _this.client = _this.contactsList[_this.indexFind];

          _this.formClient.setValue({
            firstName: _this.contactsList[_this.indexFind].firstName,
            lastName: _this.contactsList[_this.indexFind].lastName,
            address: _this.contactsList[_this.indexFind].address,
            phone: _this.contactsList[_this.indexFind].phone,
            mail: _this.contactsList[_this.indexFind].mail,
            tva: _this.contactsList[_this.indexFind].tva,
            iban: _this.contactsList[_this.indexFind].iban,
            bic: _this.contactsList[_this.indexFind].bic
          });
        }
      } else {
        console.log('creation', _this.modif);
        _this.clientId = _this.generateUUID();
      }
    })();
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this2.formClient.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'firstName') nom = 'Prénom';
          if (name === 'lastName') nom = 'Nom';
          invalid.push(nom);
        }
      }

      if (!_this2.formClient.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      _this2.client = new _models_user__WEBPACK_IMPORTED_MODULE_3__.User(_this2.clientId, _this2.formClient.get('firstName').value, _this2.formClient.get('lastName').value, _this2.formClient.get('address').value, _this2.formClient.get('phone').value, _this2.formClient.get('mail').value, null, _this2.formClient.get('tva').value, _this2.formClient.get('iban').value, _this2.formClient.get('bic').value);

      if (_this2.indexFind >= 0) {
        // this.contactsList.splice(this.indexFind,1);
        _this2.contactsList[_this2.indexFind] = _this2.client;
      } else _this2.contactsList.push(_this2.client);

      _this2.storageService.set('Contacts', _this2.contactsList);

      if (!_this2.tag) {
        _this2.navController.navigateBack(['/tb-contacts'], {
          replaceUrl: true
        });
      } else if (_this2.tag.toLowerCase() === 'chantier') {
        _this2.navController.navigateBack(['/createworksite'], {
          replaceUrl: true
        });
      } else if (_this2.tag.toLowerCase() === 'profile') {
        _this2.navController.navigateBack(['/client', {
          userId: _this2.modif
        }], {
          replaceUrl: true
        });
      }
    })();
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_5__.UUID.UUID();
    return this.uuidValue;
  }

  GoBack() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;

      if (_this3.modif === null || _this3.modif === undefined) {
        console.log('empty form', _this3.formClient, _this3.modif);
        let cpt = 0;
        Object.keys(_this3.formClient.controls).forEach(key => {
          if (!_this3.methodsService.isNullOrEmpty(_this3.formClient.controls[key].value)) {
            cpt++;
          }
        });
        console.log(cpt, _this3.formClient);

        if (cpt > 0) {
          result = yield _this3.GoBackModal();
        }
      } else {
        console.log('exist form', _this3.formClient, _this3.client, _this3.modif);
        if (_this3.client !== null && _this3.client !== undefined) if (!_this3.methodsService.equals(_this3.client.firstName, _this3.formClient.get('firstName').value) || !_this3.methodsService.equals(_this3.client.lastName, _this3.formClient.get('lastName').value) || !_this3.methodsService.equals(_this3.client.address.toString(), _this3.formClient.get('address').value) || !_this3.methodsService.equals(_this3.client.mail.toString(), _this3.formClient.get('mail').value) || !_this3.methodsService.equals(_this3.client.tva.toString(), _this3.formClient.get('tva').value) || !_this3.methodsService.equals(_this3.client.iban.toString(), _this3.formClient.get('iban').value) || !_this3.methodsService.equals(_this3.client.bic.toString(), _this3.formClient.get('bic').value) || !_this3.methodsService.equals(_this3.client.phone, _this3.formClient.get('phone').value)) {
          result = yield _this3.GoBackModal();
        }
      }

      console.log(result);
      if (result !== null) if (!_this3.tag) {
        _this3.navController.navigateBack(['/tb-contacts'], {
          replaceUrl: true
        });
      } else if (_this3.tag.toLowerCase() === 'chantier') {
        _this3.navController.navigateBack(['/createworksite'], {
          replaceUrl: true
        });
      } else if (_this3.tag.toLowerCase() === 'profile') {
        _this3.navController.navigateBack(['/client', {
          userId: _this3.modif
        }], {
          replaceUrl: true
        });
      }
    })();
  }

  GoBackModal() {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this4.modal.open('exitPage', '').then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return null;
      return '';
    })();
  }

};

TabContactsClient.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_7__.MethodsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}];

TabContactsClient = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tb-contacts-client',
  template: _tb_contacts_client_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tb_contacts_client_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TabContactsClient);


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

/***/ 54248:
/*!**********************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n.my-custom-scrollbar {\r\nposition: relative;\r\nheight: 200px;\r\noverflow: auto;\r\n}\r\n.table-wrapper-scroll-y {\r\ndisplay: block;\r\n}\r\n/* Add a background color and some padding around the form */\r\n/*.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n} \r\n*/\r\n/* Style inputs with type=\"text\", select elements and textareas */\r\ninput[type=text], select, textarea {\r\n  width: 100%; /* Full width */\r\n  padding: 12px; /* Some padding */ \r\n  border: 1px solid #ccc; /* Gray border */\r\n  border-radius: 4px; /* Rounded borders */\r\n  box-sizing: border-box; /* Make sure that padding and width stays in place */\r\n  margin-top: 6px; /* Add a top margin */\r\n  margin-bottom: 16px; /* Bottom margin */\r\n  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\r\n}\r\n/* Style the submit button with a specific background color etc */\r\ninput[type=submit] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n/* When moving the mouse over the submit button, add a darker green color */\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-group[required=\"required\"] input:not(.required) {\r\n  border: 1px solid black;\r\n}\r\n.form-group[required=\"required\"] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required=\"required\"] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n/* With only the required attribute */\r\n.form-group[required] input {\r\n  border: 1px solid red;\r\n}\r\n.form-group[required] label:after { \r\n  content:\" *\"; \r\n  color: red;\r\n}\r\n.tabHeader\r\n{\r\n  background-color: orange;\r\n  color: white;\r\n  text-align: center;\r\n  border: 1px solid lightgray;\r\n  border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLWNvbnRhY3RzLWNsaWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUVBLDREQUE0RDtBQUM1RDs7Ozs7Q0FLQztBQUNBLGlFQUFpRTtBQUNsRTtFQUNFLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGFBQWEsRUFBRSxpQkFBaUI7RUFDaEMsc0JBQXNCLEVBQUUsZ0JBQWdCO0VBQ3hDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4QyxzQkFBc0IsRUFBRSxvREFBb0Q7RUFDNUUsZUFBZSxFQUFFLHFCQUFxQjtFQUN0QyxtQkFBbUIsRUFBRSxrQkFBa0I7RUFDdkMsZUFBZSxFQUFFLHdFQUF3RTtBQUMzRjtBQUVBLGlFQUFpRTtBQUNqRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBLDJFQUEyRTtBQUMzRTtFQUNFLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQSxxQ0FBcUM7QUFFckM7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTs7RUFFRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRiLWNvbnRhY3RzLWNsaWVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJzLWNlbnRlci14IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiAyMDBweDtcclxub3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBwYWRkaW5nIGFyb3VuZCB0aGUgZm9ybSAqL1xyXG4vKi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn0gXHJcbiovXHJcbiAvKiBTdHlsZSBpbnB1dHMgd2l0aCB0eXBlPVwidGV4dFwiLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7IC8qIFNvbWUgcGFkZGluZyAqLyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogTWFrZSBzdXJlIHRoYXQgcGFkZGluZyBhbmQgd2lkdGggc3RheXMgaW4gcGxhY2UgKi9cclxuICBtYXJnaW4tdG9wOiA2cHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXHJcbiAgcmVzaXplOiB2ZXJ0aWNhbCAvKiBBbGxvdyB0aGUgdXNlciB0byB2ZXJ0aWNhbGx5IHJlc2l6ZSB0aGUgdGV4dGFyZWEgKG5vdCBob3Jpem9udGFsbHkpICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uIHdpdGggYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGV0YyAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogV2hlbiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIHN1Ym1pdCBidXR0b24sIGFkZCBhIGRhcmtlciBncmVlbiBjb2xvciAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0Om5vdCgucmVxdWlyZWQpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGxhYmVsOmFmdGVyIHsgXHJcbiAgY29udGVudDpcIiAqXCI7IFxyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIFdpdGggb25seSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlICovXHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGxhYmVsOmFmdGVyIHsgXHJcbiAgY29udGVudDpcIiAqXCI7IFxyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 23827:
/*!***********************************************************************!*\
  !*** ./src/app/tb-contacts-client/tb-contacts-client.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\r\n    </dx-button>\r\n    <ion-title class=\"ion-text-center\">{{'contacts' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"formClient\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'fName' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"firstName\" placeholder=\"Your name..\" formControlName=\"firstName\" required=\"required\" maxlength=\"50\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'name' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"lastName\" placeholder=\"Your last name..\" formControlName=\"lastName\" maxlength=\"50\"\r\n          required=\"required\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'address' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"address\" placeholder=\"..\" formControlName=\"address\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"stacked\">{{'phone' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"phone\" placeholder=\"...\" formControlName=\"phone\" maxlength=\"20\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"stacked\">{{'mail' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"mail\" placeholder=\"...\" formControlName=\"mail\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"stacked\">{{'tva' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"tva\" placeholder=\"...\" formControlName=\"tva\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"stacked\">{{'iban' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"iban\" placeholder=\"BE ...\" formControlName=\"iban\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\">\r\n        <ion-label position=\"stacked\">{{'bic' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"bic\" placeholder=\"...\" formControlName=\"bic\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" class=\"btn btn-secondary\" icon=\"fas fa-user-plus\" \r\n      style=\"background-color:orange;\" [text]=\"'saveClient' | translate\"></dx-button>\r\n    </form>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tb-contacts-client_tb-contacts-client_module_ts.js.map