"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_article-form_article-form_module_ts"],{

/***/ 79107:
/*!*************************************************************!*\
  !*** ./src/app/article-form/article-form-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFormRoutingModule": () => (/* binding */ ArticleFormRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _article_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-form */ 67935);




const routes = [
    {
        path: '',
        component: _article_form__WEBPACK_IMPORTED_MODULE_0__.ArticleForm
    }
];
let ArticleFormRoutingModule = class ArticleFormRoutingModule {
};
ArticleFormRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticleFormRoutingModule);



/***/ }),

/***/ 79116:
/*!*****************************************************!*\
  !*** ./src/app/article-form/article-form.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFormModule": () => (/* binding */ ArticleFormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _article_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-form-routing.module */ 79107);
/* harmony import */ var _article_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-form */ 67935);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 25073);









let ArticleFormModule = class ArticleFormModule {
};
ArticleFormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _article_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticleFormRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule
        ],
        declarations: [_article_form__WEBPACK_IMPORTED_MODULE_1__.ArticleForm]
    })
], ArticleFormModule);



/***/ }),

/***/ 67935:
/*!**********************************************!*\
  !*** ./src/app/article-form/article-form.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleForm": () => (/* binding */ ArticleForm)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _article_form_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-form.html?ngResource */ 53084);
/* harmony import */ var _article_form_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-form.scss?ngResource */ 83758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/product */ 60028);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/photo.service */ 61957);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 64587);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/methods.service */ 25812);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
















let ArticleForm = class ArticleForm {
  constructor(modalS, storageService, router, route, photoService, camera, methodsService, navController) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.photoService = photoService;
    this.camera = camera;
    this.methodsService = methodsService;
    this.navController = navController;
    this.images = '';
    this.artList = [];
    this.catList = [];
    this.numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    this.formArt = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormGroup({
      productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl(''),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl(''),
      priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.numericNumberReg))
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__.NgbdModalFocus(this.modalS);
  }

  ngOnDestroy() {
    console.log('Cleared');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.artList = yield _this.storageService.get('Articles');
      if (_this.artList == null) _this.artList = new Array();
      _this.actualCat = _this.route.snapshot.paramMap.get('actualCat');
      _this.modifArt = _this.artList.find(a => a.productId === _this.route.snapshot.paramMap.get('modifArt'));
      _this.modif = _this.route.snapshot.paramMap.get('modif');
      _this.catList = yield _this.storageService.get('Categories');

      if (_this.modif === 'YES') {
        console.log('modification', _this.modif); // this.indexFind =this.artList.findIndex(x => x.productId == existId);
        // if(this.indexFind>=0)
        // {

        _this.artId = _this.modifArt.productId;
        let cat;

        if (_this.modifArt.catLevel > 0) {
          cat = _this.catList.find(a => a.categoryParent.categoryId === _this.modifArt.categoryParent.categoryId && _this.modifArt.catLevel === a.catLevel);
        } else {
          cat = _this.catList.find(a => a.categoryId === _this.modifArt.categoryParent.categoryId && _this.modifArt.catLevel === 0);
        }

        _this.actualCat = cat.categoryId;

        _this.formArt.setValue({
          productName: _this.modifArt.productName,
          description: _this.modifArt.description,
          category: cat.categoryId,
          priceHtva: _this.modifArt.priceHtva
        });

        if (_this.modifArt.imageProduct != null) _this.images = _this.modifArt.imageProduct; // }
      } else {
        _this.modif = 'NO';
        console.log('creation', _this.modif);
        _this.artId = _this.generateUUID();
      }

      if (_this.actualCat != null) {
        _this.formArt.get('category').setValue(_this.actualCat);
      }
    })();
  }

  CreateWorksite() {
    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  get f() {
    return this.formArt.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = event => {
          console.log(event.target.result);
          this.images = event.target.result;
          this.formArt.patchValue({
            fileSource: this.images
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('form status', _this2.formArt);
      const invalid = [];
      const controls = _this2.formArt.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'productName') nom = 'Nom article';
          if (name === 'priceHtva') nom = 'Prix HTVA';
          invalid.push(nom);
        }
      }

      if (!_this2.formArt.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      if (!_this2.methodsService.isNullOrEmpty(_this2.formArt.get('category').value)) {
        let category;
        console.log(_this2.formArt.get('category').value, _this2.catList);

        let cat = _this2.catList.find(a => a === _this2.formArt.get('category').value);

        if (cat?.categoryParent == null) category = cat;else category = cat.categoryParent;
        console.log(cat, category);
        _this2.art = new _models_product__WEBPACK_IMPORTED_MODULE_5__.Product(_this2.artId, _this2.formArt.get('productName').value, _this2.formArt.get('description').value, _this2.formArt.get('priceHtva').value, category, _this2.images, cat.catLevel);
      } else {
        _this2.art = new _models_product__WEBPACK_IMPORTED_MODULE_5__.Product(_this2.artId, _this2.formArt.get('productName').value, _this2.formArt.get('description').value, _this2.formArt.get('priceHtva').value, null, _this2.images, 0);
      }

      if (_this2.modif === 'YES') {
        const indexFind = _this2.artList.findIndex(x => x.productId === _this2.modifArt.productId);

        _this2.artList.splice(indexFind, 1);

        _this2.artList[indexFind] = _this2.art;
      } else _this2.artList.push(_this2.art);

      _this2.storageService.set('Articles', _this2.artList);

      console.log('invoice saved', _this2.artList);

      _this2.navController.navigateBack(['/articles', {
        actualCat: _this2.actualCat
      }], {
        replaceUrl: true
      });
    })();
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID.UUID();
    return this.uuidValue;
  }

  resetImages() {
    this.images = '';
    return null;
  }

  selectCategory(event) {
    this.actualCat = event.target.value;
  }

  GoBack() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;
      console.log(_this3.modif);

      if (_this3.modif === 'NO') {
        let cpt = 0;
        Object.keys(_this3.formArt.controls).forEach(key => {
          if (!_this3.methodsService.isNullOrEmpty(_this3.formArt.controls[key].value)) {
            cpt++;
          }
        });
        console.log(cpt, _this3.formArt);

        if (cpt > 0) {
          result = yield _this3.GoBackModal();
        }
      } else {
        if (!_this3.methodsService.equals(_this3.modifArt.productName, _this3.formArt.get('productName').value) || !_this3.methodsService.equals(_this3.modifArt.description, _this3.formArt.get('description').value) || !_this3.methodsService.equals(_this3.modifArt.priceHtva.toString(), _this3.formArt.get('priceHtva').value) || !_this3.methodsService.equals(_this3.modifArt.categoryParent.categoryId, _this3.formArt.get('category').value) || !_this3.methodsService.equals(_this3.modifArt.imageProduct, _this3.images)) {
          result = yield _this3.GoBackModal();
        }
      }

      console.log(result);
      if (result !== null) _this3.navController.navigateBack(['/articles', {
        actualCat: _this3.actualCat
      }], {
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

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  takePicture() {
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(imageData => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, err => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

};

ArticleForm.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__.PhotoService
}, {
  type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_9__.MethodsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
}];

ArticleForm.propDecorators = {
  ngOnDestroy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostListener,
    args: ['unloaded']
  }]
};
ArticleForm = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-article-form',
  template: _article_form_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_article_form_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ArticleForm);


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

/***/ 83758:
/*!***********************************************************!*\
  !*** ./src/app/article-form/article-form.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFLHFDQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUU7RUFFQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Ysa0JBQUE7QUFBQSIsImZpbGUiOiJhcnRpY2xlLWZvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGxhYmVsOmFmdGVyIHsgXHJcbiAgICBjb250ZW50OlwiICpcIjsgXHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAvKiBXaXRoIG9ubHkgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSAqL1xyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkXSBsYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIiAqXCI7IFxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 53084:
/*!***********************************************************!*\
  !*** ./src/app/article-form/article-form.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\" style=\"overflow-y: auto; background-color: white;\">\n  <ion-header>\n    <ion-toolbar>\n      <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\n      </dx-button>\n    </ion-toolbar>\n  </ion-header>\n  <form [formGroup]=\"formArt\" (ngSubmit)=\"onSubmit()\">\n\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"stacked\">{{'nameProduct' | translate}}</ion-label>\n      <ion-input type=\"text\" id=\"productName\" name=\"productName\" formControlName=\"productName\" placeholder=\"...\"\n      required=\"required\" maxlength=\"50\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label>{{'category' | translate}}</ion-label>\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"category\"\n        (change)=\"selectCategory($event)\">\n        <ion-select-option></ion-select-option>\n        <ion-select-option *ngFor=\"let c of catList\" [value]=\"c.categoryId\" >\n          {{c.categoryName}}  </ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label>{{'category' | translate}}</ion-label>\n      <ionic-selectable\n        [(ngModel)]=\"selectedCat\"\n        [items]=\"catList\"\n        itemValueField=\"categoryId\"\n        itemTextField=\"categoryName\"\n        [canSearch]=\"true\"\n        formControlName=\"category\"\n        (ionChange)=\"selectCategory($event)\">\n      </ionic-selectable>\n    </ion-item>\n    \n    <!-- <label for=\"imgCat\">{{'picProduct' | translate}}</label>\n    <input id=\"imgCat\" type=\"file\" class=\"form-control\" multiple=\"\" (change)=\"onFileChange($event)\">\n\n    <img class=\"original\" [src]=\"images\" height=\"150\" width=\"200px\" style=\"margin: 3px;\" />\n    <ion-content>\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button (click)=\"addPhotoToGallery()\">\n          <ion-icon name=\"camera\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-content>\n    <ion-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n            <ion-img [src]=\"photo.webviewPath\"></ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    \n    </ion-content>\n    <dx-button icon=\"fas fa-trash\" type=\"submit\" (click)=\"resetImages()\" class=\"btn btn-danger\">\n    </dx-button> -->\n\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"stacked\">{{'htvaPrice' | translate}}</ion-label>\n      <ion-input type=\"text\" id=\"priceHtva\" name=\"priceHtva\" formControlName=\"priceHtva\" placeholder=\"...\"\n      required=\"required\" maxlength=\"12\"></ion-input>\n    </ion-item>\n    <hr>\n    <ion-item>\n      <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\n    </ion-item>\n\n    <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" [text]=\"'addProduct' | translate\" icon=\"fas fa-cart-plus\" style=\"background-color: orange;\"></dx-button>\n  </form>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_article-form_article-form_module_ts.js.map