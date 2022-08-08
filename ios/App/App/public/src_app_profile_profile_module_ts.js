"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ 94430);




const routes = [
    {
        path: '',
        component: _profile__WEBPACK_IMPORTED_MODULE_0__.Profile
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ 94430);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);







let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule
        ],
        declarations: [_profile__WEBPACK_IMPORTED_MODULE_0__.Profile]
    })
], ProfileModule);



/***/ }),

/***/ 94430:
/*!************************************!*\
  !*** ./src/app/profile/profile.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.html?ngResource */ 73050);
/* harmony import */ var _profile_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.scss?ngResource */ 34184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ 65783);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/methods.service */ 25812);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 71188);













let Profile = class Profile {
  constructor(modalS, storageService, router, methodsService, navController) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.methodsService = methodsService;
    this.navController = navController;
    this.profileExist = 'NO';
    this.bgImage = '/src/assets/worksiteBackground.png';
    this.formProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
      mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
      tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
      iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(''),
      bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('')
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
    console.log('Module profil');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('nginit profil ', _this.storageService.get('MyProfile'));

      _this.storageService.init();

      let profile = yield _this.storageService.get('MyProfile');

      if (profile != null) {
        _this.myAccount = profile;
        _this.profileExist = 'YES';

        _this.formProfile.setValue({
          firstName: profile.firstName,
          lastName: profile.lastName,
          address: profile.address,
          phone: profile.phone,
          mail: profile.mail,
          tva: profile.tva,
          iban: profile.iban,
          bic: profile.bic
        });
      } else {
        _this.profileExist = 'NO';

        _this.formProfile.setValue({
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          mail: '',
          tva: '',
          iban: '',
          bic: ''
        });
      }
    })();
  }

  UpdateProfile() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this2.formProfile.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'firstName') nom = 'Prénom';
          if (name === 'lastName') nom = 'Nom';
          invalid.push(nom);
        }
      }

      if (!_this2.formProfile.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      _this2.storageService.init();

      _this2.myAccount = new _models_user__WEBPACK_IMPORTED_MODULE_4__.User('17', _this2.formProfile.get('firstName').value, _this2.formProfile.get('lastName').value, _this2.formProfile.get('address').value, _this2.formProfile.get('phone').value, _this2.formProfile.get('mail').value, null, _this2.formProfile.get('tva').value, _this2.formProfile.get('iban').value, _this2.formProfile.get('bic').value);

      _this2.storageService.setProfile(_this2.myAccount);

      console.log('Profil actualisé, redirection...');

      _this2.navController.navigateBack(['/tb-home']);
    })();
  }

  GoBack() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;

      if (_this3.profileExist === 'NO') {
        let cpt = 0;
        Object.keys(_this3.formProfile.controls).forEach(key => {
          if (!_this3.methodsService.isNullOrEmpty(_this3.formProfile.controls[key].value)) {
            cpt++;
          }
        });
        console.log(cpt, _this3.formProfile);

        if (cpt > 0) {
          result = yield _this3.GoBackModal();
        }
      } else {
        if (!_this3.methodsService.equals(_this3.myAccount.firstName, _this3.formProfile.get('firstName').value) || !_this3.methodsService.equals(_this3.myAccount.lastName, _this3.formProfile.get('lastName').value) || !_this3.methodsService.equals(_this3.myAccount.address.toString(), _this3.formProfile.get('address').value) || !_this3.methodsService.equals(_this3.myAccount.mail.toString(), _this3.formProfile.get('mail').value) || !_this3.methodsService.equals(_this3.myAccount.tva.toString(), _this3.formProfile.get('tva').value) || !_this3.methodsService.equals(_this3.myAccount.iban.toString(), _this3.formProfile.get('iban').value) || !_this3.methodsService.equals(_this3.myAccount.bic.toString(), _this3.formProfile.get('bic').value) || !_this3.methodsService.equals(_this3.myAccount.phone, _this3.formProfile.get('phone').value)) {
          result = yield _this3.GoBackModal();
        }
      }

      console.log(result);
      if (result !== null) _this3.navController.navigateBack(['tb-home'], {
        replaceUrl: true
      });
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

Profile.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_5__.MethodsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}];

Profile = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-profile',
  template: _profile_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_profile_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Profile);


/***/ }),

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

/***/ 34184:
/*!*************************************************!*\
  !*** ./src/app/profile/profile.scss?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n:host-context(.theme-light) h2 {\n  background-color: #eef;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n\n.form-style {\n  background-color: white;\n  margin: 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUE7O0FBQUE7RUFDQSxjQUFBO0FBR0E7O0FBQUEsNERBQUE7O0FBQ0E7Ozs7O0NBQUE7O0FBTUMsaUVBQUE7O0FBQ0Q7RUFDRSxXQUFBO0VBQWEsZUFBQTtFQUNiLGFBQUE7RUFBZSxpQkFBQTtFQUNmLHNCQUFBO0VBQXdCLGdCQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLHNCQUFBO0VBQXdCLG9EQUFBO0VBQ3hCLGVBQUE7RUFBaUIscUJBQUE7RUFDakIsbUJBQUE7RUFBcUIsa0JBQUE7RUFDckIsZ0JBQUE7QUFVRjs7QUFQQSxpRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVBBLDJFQUFBOztBQUNBO0VBQ0UseUJBQUE7QUFVRjs7QUFQQTtFQUNFLHVCQUFBO0FBVUY7O0FBUEE7RUFDRSxxQkFBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFVRjs7QUFQQSxxQ0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVNGOztBQU5BO0VBQ0Usc0JBQUE7QUFTRjs7QUFQQTtFQUVFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDRixrQkFBQTtBQVNBOztBQU5BO0VBRUUsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRRiIsImZpbGUiOiJwcm9maWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJzLWNlbnRlci14IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiAyMDBweDtcclxub3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBwYWRkaW5nIGFyb3VuZCB0aGUgZm9ybSAqL1xyXG4vKi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn0gXHJcbiovXHJcbiAvKiBTdHlsZSBpbnB1dHMgd2l0aCB0eXBlPVwidGV4dFwiLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7IC8qIFNvbWUgcGFkZGluZyAqLyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogTWFrZSBzdXJlIHRoYXQgcGFkZGluZyBhbmQgd2lkdGggc3RheXMgaW4gcGxhY2UgKi9cclxuICBtYXJnaW4tdG9wOiA2cHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXHJcbiAgcmVzaXplOiB2ZXJ0aWNhbCAvKiBBbGxvdyB0aGUgdXNlciB0byB2ZXJ0aWNhbGx5IHJlc2l6ZSB0aGUgdGV4dGFyZWEgKG5vdCBob3Jpem9udGFsbHkpICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uIHdpdGggYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGV0YyAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogV2hlbiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIHN1Ym1pdCBidXR0b24sIGFkZCBhIGRhcmtlciBncmVlbiBjb2xvciAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIGgyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmO1xyXG59XHJcbi50YWJIZWFkZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZm9ybS1zdHlsZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 73050:
/*!*************************************************!*\
  !*** ./src/app/profile/profile.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{'profile' | translate}}</ion-title>\r\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\r\n    </dx-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-image: url('/assets/worksiteBackground.png');\">\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"formProfile\" (ngSubmit)=\"UpdateProfile()\">\r\n      <ion-item class=\"form-group form-style\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'fName' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"firstName\" [placeholder]=\"'fName' | translate\" formControlName=\"firstName\" required=\"required\"\r\n        maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group form-style\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'name' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"lastName\" [placeholder]=\"'name' | translate\" formControlName=\"lastName\" required=\"required\"\r\n        maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form-group form-style\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'address' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"address\" [placeholder]=\"'address' | translate\" formControlName=\"address\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item class=\"form-group form-style\">\r\n        <ion-label position=\"stacked\">{{'phone' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"phone\" [placeholder]=\"'phone' | translate\" formControlName=\"phone\" maxlength=\"20\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group form-style\">\r\n        <ion-label position=\"stacked\">{{'mail' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"mail\" [placeholder]=\"'mail' | translate\" formControlName=\"mail\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group form-style\">\r\n        <ion-label position=\"stacked\">{{'tva' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"tva\" [placeholder]=\"'tva' | translate\" formControlName=\"tva\" maxlength=\"12\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group form-style\">\r\n        <ion-label position=\"stacked\">{{'iban' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"iban\" [placeholder]=\"'iban' | translate\" formControlName=\"iban\" maxlength=\"25\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group form-style\">\r\n        <ion-label position=\"stacked\">{{'bic' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"bic\" [placeholder]=\"'bic' | translate\" formControlName=\"bic\" maxlength=\"20\"></ion-input>\r\n      </ion-item>\r\n      \r\n      <dx-button [useSubmitBehavior]=\"true\" class=\"btn btn-secondary\" type=\"submit\" style=\"background-color:orange;\" [text]=\"'updateProfile' | translate\"></dx-button>\r\n    </form>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map