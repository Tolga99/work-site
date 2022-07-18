"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_category-form_category-form_module_ts"],{

/***/ 54026:
/*!***************************************************************!*\
  !*** ./src/app/category-form/category-form-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryFormRoutingModule": () => (/* binding */ CategoryFormRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-form */ 86825);




const routes = [
    {
        path: '',
        component: _category_form__WEBPACK_IMPORTED_MODULE_0__.CategoryForm
    }
];
let CategoryFormRoutingModule = class CategoryFormRoutingModule {
};
CategoryFormRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryFormRoutingModule);



/***/ }),

/***/ 67561:
/*!*******************************************************!*\
  !*** ./src/app/category-form/category-form.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryFormModule": () => (/* binding */ CategoryFormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _category_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-form-routing.module */ 54026);
/* harmony import */ var _category_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-form */ 86825);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 25073);









let CategoryFormModule = class CategoryFormModule {
};
CategoryFormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryFormRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule
        ],
        declarations: [_category_form__WEBPACK_IMPORTED_MODULE_1__.CategoryForm]
    })
], CategoryFormModule);



/***/ }),

/***/ 86825:
/*!************************************************!*\
  !*** ./src/app/category-form/category-form.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryForm": () => (/* binding */ CategoryForm)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_form_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-form.html?ngResource */ 24773);
/* harmony import */ var _category_form_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-form.scss?ngResource */ 47486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/category */ 14465);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/methods.service */ 25812);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ 71188);













let CategoryForm = class CategoryForm {
  constructor(modalS, storageService, router, route, methodsService) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.methodsService = methodsService;
    this.images = ''; // indexFind: number;

    this.catList = [];
    this.formCat = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      categoryPar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('')
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_4__.NgbdModalFocus(this.modalS);
  }

  ngOnDestroy() {
    console.log('Cleared');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.catList = yield _this.storageService.get('Categories');
      if (_this.catList == null) _this.catList = new Array();
      _this.modif = _this.route.snapshot.paramMap.get('modif');
      _this.modifCat = _this.catList.find(a => a.categoryId === _this.route.snapshot.paramMap.get('modifCat')); // this.chantierId = this.route.snapshot.paramMap.get('chantierId');

      _this.ActualCat = _this.route.snapshot.paramMap.get('actualCat');

      if (_this.modif === 'YES' && _this.modifCat !== null) {
        console.log('modification', _this.modif); // if(this.indexFind>=0)
        // {

        let catParentId;
        if (_this.modifCat.categoryParent != null) catParentId = _this.modifCat.categoryParent.categoryId;else catParentId = '';
        _this.catId = _this.modifCat.categoryId;

        _this.formCat.setValue({
          categoryName: _this.modifCat.categoryName,
          description: _this.modifCat.description,
          categoryPar: catParentId
        });

        if (_this.modifCat.categoryImage != null) _this.images = _this.modifCat?.categoryImage; // }
      } else {
        _this.modif = 'NO';
        console.log('creation', _this.modif);
        _this.catId = _this.generateUUID();
        if (_this.ActualCat != null) _this.formCat.get('categoryPar').setValue(_this.ActualCat);
      }
    })();
  }

  CreateWorksite() {
    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  get f() {
    return this.formCat.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = event => {
          console.log(event.target.result);
          this.images = event.target.result;
          this.formCat.patchValue({
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
      let parent = true;
      const invalid = [];
      const controls = _this2.formCat.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'productName') nom = 'Nom catégorie';

          if (name === 'categoryPar') {
            console.log('Pas de categorie parent');
            parent = false;
          }

          invalid.push(nom);
        }
      }

      if (!_this2.formCat.valid) {
        let res = null;
        yield _this2.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      if (parent === false) {
        _this2.parentCat = null;
      } else {
        _this2.parentCat = _this2.catList.find(a => a.categoryId === _this2.formCat.get('categoryPar').value);
      }

      if (_this2.modif === 'YES') {
        // RETRAIT DE LA CATEGORIE PARENT si il y'en a
        if (_this2.modifCat.categoryParent) {
          const subCats = _this2.modifCat.categoryParent.subCategories;
          subCats.splice(subCats.findIndex(a => a.categoryId === _this2.modifCat.categoryId), 1);
          _this2.catList[_this2.catList.findIndex(a => a.categoryId === _this2.modifCat.categoryParent.categoryId)].subCategories = subCats;
        }

        _this2.cat = new _models_category__WEBPACK_IMPORTED_MODULE_5__.Category(_this2.catId, _this2.formCat.get('categoryName').value, _this2.formCat.get('description').value, _this2.parentCat, _this2.catList.find(a => a.categoryId === _this2.modifCat.categoryId).subCategories, _this2.images);
      } else {
        _this2.cat = new _models_category__WEBPACK_IMPORTED_MODULE_5__.Category(_this2.catId, _this2.formCat.get('categoryName').value, _this2.formCat.get('description').value, _this2.parentCat, null, _this2.images);
      }

      if (parent === true) {
        // AJOUT DE LA CATEGORIE PARENT
        if (_this2.parentCat != null) {
          if (_this2.parentCat.subCategories == null) _this2.parentCat.subCategories = new Array();

          _this2.parentCat.subCategories.push(_this2.cat);

          _this2.catList[_this2.catList.findIndex(a => a.categoryId === _this2.parentCat.categoryId)] = _this2.parentCat;
        }
      }

      if (_this2.modif === 'YES') {
        const indexFind = _this2.catList.findIndex(x => x.categoryId === _this2.cat.categoryId); // this.catList.splice(indexFind,1);


        _this2.catList[indexFind] = _this2.cat;

        _this2.catList.forEach(element => {
          if (element.categoryParent != null) {
            if (element.categoryParent.categoryId === _this2.cat.categoryId) {
              element.categoryParent = _this2.cat;
            }
          }

          if (element.subCategories != null) {
            element.subCategories.forEach(element => {
              if (element.categoryId === _this2.cat.categoryId) {
                element = _this2.cat;
              }
            });
          }
        });
      } else _this2.catList.push(_this2.cat);

      _this2.storageService.set('Categories', _this2.catList);

      console.log('cat saved', _this2.catList);

      _this2.router.navigate(['/articles', {
        actualCat: _this2.ActualCat
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

  GoBack() {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;
      console.log(_this3.modif);

      if (_this3.modif === 'NO' || _this3.modif === undefined) {
        let cpt = 0;
        Object.keys(_this3.formCat.controls).forEach(key => {
          if (!_this3.methodsService.isNullOrEmpty(_this3.formCat.controls[key].value)) {
            cpt++;
          }
        });
        console.log(cpt, _this3.formCat);

        if (cpt > 0) {
          result = yield _this3.GoBackModal();
        }
      } else {
        let parent = '';
        if (_this3.modifCat.categoryParent !== null && _this3.modifCat.categoryParent !== undefined) parent = _this3.modifCat.categoryParent.categoryId;

        if (!_this3.methodsService.equals(_this3.modifCat.categoryName, _this3.formCat.get('categoryName').value) || !_this3.methodsService.equals(_this3.modifCat.description, _this3.formCat.get('description').value) || !_this3.methodsService.equals(parent, _this3.formCat.get('categoryPar').value)) {
          result = yield _this3.GoBackModal();
        }
      }

      console.log(result);
      if (result !== null) _this3.router.navigate(['articles', {
        actualCat: _this3.ActualCat
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

  changePar(e) {
    this.formCat.get('categoryPar').setValue(e.target.value, {
      onlySelf: true
    });
  }

};

CategoryForm.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_6__.MethodsService
}];

CategoryForm.propDecorators = {
  ngOnDestroy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener,
    args: ['unloaded']
  }]
};
CategoryForm = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-category-form',
  template: _category_form_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_category_form_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CategoryForm);


/***/ }),

/***/ 14465:
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
    constructor(categoryId, categoryName, description, categoryParent, subCategories, categoryImage) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.categoryParent = categoryParent;
        this.subCategories = subCategories;
        this.categoryImage = categoryImage;
    }
}


/***/ }),

/***/ 47486:
/*!*************************************************************!*\
  !*** ./src/app/category-form/category-form.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWZvcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRSxxQ0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFLCtEQUFBOztBQUNGO0VBQ0UsV0FBQTtFQUVBLHVCQUFBO0FBREY7O0FBSUEsZ0VBQUE7O0FBQ0E7O0VBRUUsY0FBQTtBQURGOztBQUlBLDBDQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTs7OztFQUFBOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUEsdUJBQUE7O0FBQ0E7RUFDRSxjQUFBO0FBREY7O0FBSUEsbUNBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQURGOztBQUdBO0VBRUUsd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNGLGtCQUFBO0FBREEiLCJmaWxlIjoiY2F0ZWdvcnktZm9ybS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdpdGggb25seSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlICovXHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGxhYmVsOmFmdGVyIHsgXHJcbiAgICBjb250ZW50OlwiICpcIjsgXHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgY29sb3I6ICMyMGEwOGE7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLypcclxuICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXHJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcclxuICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cclxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgY29sb3I6ICM1NDVjYTc7XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICBjb2xvcjogIzk3MWU0OTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi50YWJIZWFkZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";

/***/ }),

/***/ 24773:
/*!*************************************************************!*\
  !*** ./src/app/category-form/category-form.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'category' | translate}}</ion-title>\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\n    </dx-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\" style=\"overflow-y: auto; background-color: white;\">\n  <form [formGroup]=\"formCat\" (ngSubmit)=\"onSubmit()\">\n\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"stacked\">{{'nameCategory' | translate}}</ion-label>\n      <ion-input type=\"text\" id=\"categoryName\" name=\"categoryName\" formControlName=\"categoryName\" placeholder=\"...\"\n        required=\"required\" maxlength=\"50\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label>{{'subCategory' | translate}}</ion-label>\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"categoryPar\"\n        (change)=\"changePar($event)\">\n        <ion-select-option></ion-select-option>\n        <ion-select-option *ngFor=\"let c of catList\" [value]=\"c.categoryId\"> {{c.categoryName}} </ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label>{{'subCategory' | translate}}</ion-label>\n      <ionic-selectable\n        [(ngModel)]=\"selectedCategory\"\n        [items]=\"catList\"\n        itemValueField=\"categoryId\"\n        itemTextField=\"categoryName\"\n        [canSearch]=\"true\"\n        formControlName=\"categoryPar\"\n        (ionChange)=\"changePar($event)\">\n      </ionic-selectable>\n    </ion-item>\n\n    <hr>\n\n    <label for=\"imgCat\">{{'picCategory' | translate}}</label>\n    <input id=\"imgCat\" type=\"file\" class=\"form-control\" multiple=\"\" (change)=\"onFileChange($event)\">\n    <!-- <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"resetImages()\">Réinitialiser</button>\n\n    <img *ngFor='let url of images' [src]=\"url\" height=\"150\" width=\"200px\" style=\"margin: 3px;\"> <br /> -->\n    <!-- <div *ngFor=\"let img of images\"> -->\n    <img class=\"original\" [src]=\"images\" height=\"150\" width=\"200px\" style=\"margin: 3px;\" />\n    <dx-button type=\"submit\" icon=\"fas fa-trash\" (click)=\"resetImages()\" class=\"btn btn-danger\">\n    </dx-button>\n    <!-- </div> -->\n\n\n    <hr>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\n    </ion-item>\n\n    <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" [text]=\"'createCategory' | translate\" style=\"background-color: orange;\"></dx-button>\n  </form>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_category-form_category-form_module_ts.js.map