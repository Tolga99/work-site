"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-worksite_create-worksite_module_ts"],{

/***/ 50746:
/*!*******************************************************************!*\
  !*** ./src/app/create-worksite/create-worksite-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorksiteRoutingModule": () => (/* binding */ CreateWorksiteRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _create_worksite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-worksite */ 45266);




const routes = [
    {
        path: '',
        component: _create_worksite__WEBPACK_IMPORTED_MODULE_0__.CreateWorksite,
    }
];
let CreateWorksiteRoutingModule = class CreateWorksiteRoutingModule {
};
CreateWorksiteRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CreateWorksiteRoutingModule);



/***/ }),

/***/ 78927:
/*!***********************************************************!*\
  !*** ./src/app/create-worksite/create-worksite.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorksiteModule": () => (/* binding */ CreateWorksiteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _create_worksite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-worksite */ 45266);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _create_worksite_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-worksite-routing.module */ 50746);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 25073);









let CreateWorksiteModule = class CreateWorksiteModule {
};
CreateWorksiteModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_create_worksite__WEBPACK_IMPORTED_MODULE_0__.CreateWorksite],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _create_worksite_routing_module__WEBPACK_IMPORTED_MODULE_3__.CreateWorksiteRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule
        ]
    })
], CreateWorksiteModule);



/***/ }),

/***/ 45266:
/*!****************************************************!*\
  !*** ./src/app/create-worksite/create-worksite.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorksite": () => (/* binding */ CreateWorksite)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_worksite_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-worksite.html?ngResource */ 90812);
/* harmony import */ var _create_worksite_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-worksite.scss?ngResource */ 42558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _models_chantier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/chantier */ 34780);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/methods.service */ 25812);













let CreateWorksite = class CreateWorksite {
  constructor(modalS, storageService, router, route, methodsService) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.methodsService = methodsService;
    this.chantierList = [];
    this.clientList = [];
    this.formWork = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      worksiteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      client: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('')
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__.NgbdModalFocus(this.modalS);
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('view did enter');

      _this.storageService.init();

      _this.clientList = yield _this.storageService.get('Contacts');
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nowDate = new Date();
      _this2.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
      _this2.userId = _this2.route.snapshot.paramMap.get('userId');
      console.log(_this2.userId);

      _this2.storageService.init();

      _this2.clientList = yield _this2.storageService.get('Contacts');
      console.log(_this2.clientList);

      if (_this2.userId !== null) {
        _this2.formWork.get('client').setValue(_this2.clientList.find(a => a.userId === _this2.userId).userId);
      }

      _this2.formWork.get('client').valueChanges.subscribe(value => {
        console.log('selected', value);

        _this2.formWork.get('address').setValue(_this2.clientList.find(a => a.userId === value.userId).address.toString());

        console.log(_this2.formWork.get('address'));
      });
    })();
  }

  CreateWorksite() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this3.formWork.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'worksiteName') nom = 'Nom chantier';
          if (name === 'client') nom = 'Client';
          invalid.push(nom);
        }
      }

      if (!_this3.formWork.valid) {
        let res = null;
        yield _this3.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      console.log(_this3.formWork.get('client').value);
      _this3.client = _this3.clientList.find(x => x.userId === _this3.formWork.get('client').value.userId);

      _this3.storageService.init();

      _this3.newWorksite = new _models_chantier__WEBPACK_IMPORTED_MODULE_5__.Chantier(_this3.generateUUID(), _this3.formWork.get('worksiteName').value, // this.client.lastName,
      _this3.client.userId, _this3.formWork.get('description').value, _this3.formWork.get('address').value, _this3.date, null, 'En cours', null, null, null, null, null);
      _this3.chantierList = yield _this3.storageService.get('Chantiers');
      if (_this3.chantierList == null) _this3.chantierList = [];

      _this3.chantierList.push(_this3.newWorksite);

      _this3.storageService.set('Chantiers', _this3.chantierList);

      if (_this3.client.historique == null) _this3.client.historique = new Array();

      _this3.client.historique.push(_this3.newWorksite.chantierId);

      _this3.clientList[_this3.clientList.findIndex(a => a.userId == _this3.client.userId)] = _this3.client;

      _this3.storageService.set('Contacts', _this3.clientList);

      console.log('Chantier crée, redirection...');

      _this3.router.navigate(['/tb-home'], {
        replaceUrl: true
      });
    })();
  }

  NewClient() {
    console.log('create client');
    this.router.navigate(['new-contact', {
      tag: 'chantier'
    }]);
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__.UUID.UUID();
    return this.uuidValue;
  }

  GoBack() {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;
      let cpt = 0;
      Object.keys(_this4.formWork.controls).forEach(key => {
        if (!_this4.methodsService.isNullOrEmpty(_this4.formWork.controls[key].value)) {
          cpt++;
        }
      });

      if (cpt > 0) {
        result = yield _this4.GoBackModal();
      }

      console.log(result);
      if (result !== null) _this4.router.navigate(['tb-home'], {
        replaceUrl: true
      });
    })();
  }

  GoBackModal() {
    var _this5 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this5.modal.open('exitPage', '').then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return null;
      return '';
    })();
  }

};

CreateWorksite.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_7__.MethodsService
}];

CreateWorksite = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-createworksite',
  template: _create_worksite_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_worksite_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateWorksite);


/***/ }),

/***/ 24762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 50959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 24762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 42558:
/*!*****************************************************************!*\
  !*** ./src/app/create-worksite/create-worksite.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS13b3Jrc2l0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFFQTs7QUFBQTtFQUNBLGNBQUE7QUFHQTs7QUFBQSw0REFBQTs7QUFDQTs7Ozs7Q0FBQTs7QUFNQyxpRUFBQTs7QUFDRDtFQUNFLFdBQUE7RUFBYSxlQUFBO0VBQ2IsYUFBQTtFQUFlLGlCQUFBO0VBQ2Ysc0JBQUE7RUFBd0IsZ0JBQUE7RUFDeEIsa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsc0JBQUE7RUFBd0Isb0RBQUE7RUFDeEIsZUFBQTtFQUFpQixxQkFBQTtFQUNqQixtQkFBQTtFQUFxQixrQkFBQTtFQUNyQixnQkFBQTtBQVVGOztBQVBBLGlFQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEEsMkVBQUE7O0FBQ0E7RUFDRSx5QkFBQTtBQVVGOztBQVJBO0VBQ0UsdUJBQUE7QUFXRjs7QUFSQTtFQUNFLHFCQUFBO0FBV0Y7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVdGOztBQVJBLHFDQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBVUY7O0FBUkE7RUFFRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Ysa0JBQUE7QUFVQSIsImZpbGUiOiJjcmVhdGUtd29ya3NpdGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnMtY2VudGVyLXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5vdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSBcclxuKi9cclxuIC8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0Om5vdCgucmVxdWlyZWQpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGxhYmVsOmFmdGVyIHsgXHJcbiAgY29udGVudDpcIiAqXCI7IFxyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIFdpdGggb25seSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlICovXHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGxhYmVsOmFmdGVyIHsgXHJcbiAgY29udGVudDpcIiAqXCI7IFxyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 90812:
/*!*****************************************************************!*\
  !*** ./src/app/create-worksite/create-worksite.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\" style=\"overflow-y: auto; background-color: white;\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-text-center\">{{'createWorksite' | translate}}</ion-title>\r\n      <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\r\n      </dx-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <form [formGroup]=\"formWork\" (ngSubmit)=\"CreateWorksite()\">\r\n\r\n    <ion-item class=\"form-group\" required=\"required\">\r\n      <ion-label position=\"stacked\">{{'nameWorksite' | translate}}</ion-label>\r\n      <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"worksiteName\" placeholder=\"...\" required=\"required\"\r\n        maxlength=\"50\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>{{'client' | translate}}</ion-label>\r\n      <ionic-selectable\r\n        [items]=\"clientList\"\r\n        itemValueField=\"userId\"\r\n        itemTextField=\"lastName\"\r\n        [canSearch]=\"true\"\r\n        formControlName=\"client\">\r\n      </ionic-selectable>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item>\r\n      <ion-label>{{'client' | translate}}</ion-label>\r\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"client\"\r\n        (ionChange)=\"selectClient($event)\">\r\n        <ion-select-option></ion-select-option>\r\n        <ion-select-option *ngFor=\"let name of clientList\" [value]=\"name.userId\"> {{name.lastName.toUpperCase()}}\r\n          {{name.firstName}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item> -->\r\n    <dx-button type=\"button\" icon=\"fas fa-user-plus\" (click)=\"NewClient()\" [text]=\"'newClient?' | translate\" style=\"background-color: orange;\"></dx-button>\r\n\r\n    <hr>\r\n    <ion-item class=\"form-group\" required=\"required\">\r\n      <ion-label position=\"stacked\">{{'worksiteAddress' | translate}}</ion-label>\r\n      <ion-input type=\"text\" id=\"address\" name=\"address\" formControlName=\"address\" placeholder=\"...\"\r\n      maxlength=\"50\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\r\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\r\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" [text]=\"'createWorksite' | translate\" style=\"background-color: orange;\"></dx-button>\r\n  </form>\r\n</div>";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\" style=\"background-color: white;\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_create-worksite_create-worksite_module_ts.js.map