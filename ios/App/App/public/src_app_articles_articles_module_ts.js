"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_articles_articles_module_ts"],{

/***/ 40540:
/*!*****************************************************!*\
  !*** ./src/app/articles/articles-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesRoutingModule": () => (/* binding */ ArticlesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles */ 11632);




const routes = [
    {
        path: '',
        component: _articles__WEBPACK_IMPORTED_MODULE_0__.Articles
    }
];
let ArticlesRoutingModule = class ArticlesRoutingModule {
};
ArticlesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticlesRoutingModule);



/***/ }),

/***/ 77565:
/*!*********************************************!*\
  !*** ./src/app/articles/articles.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesModule": () => (/* binding */ ArticlesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _articles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles-routing.module */ 40540);
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles */ 11632);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ 63806);









let ArticlesModule = class ArticlesModule {
};
ArticlesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _articles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticlesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule
        ],
        declarations: [_articles__WEBPACK_IMPORTED_MODULE_1__.Articles]
    })
], ArticlesModule);



/***/ }),

/***/ 11632:
/*!**************************************!*\
  !*** ./src/app/articles/articles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Articles": () => (/* binding */ Articles)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _articles_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.html?ngResource */ 38218);
/* harmony import */ var _articles_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles.scss?ngResource */ 60035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);









let Articles = class Articles {
  constructor(modalS, storageService, router, route) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.headElementsArt = ['Nom article', 'Description', 'Prix HTVA', ''];
    this.artList = [];
    this.catList = [];
    this.actualCat = null;
    this.openCatAccordion = null;
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.artList = yield _this.storageService.get('Articles');
      _this.catList = yield _this.storageService.get('Categories');

      if (_this.catList != null) {
        _this.actualCat = _this.catList.find(a => a.categoryId === _this.route.snapshot.paramMap.get('actualCat'));

        _this.EnterCategory(_this.actualCat);
      }
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.storageService.init();

      _this2.artList = [];
      _this2.catList = yield _this2.storageService.get('Categories');

      if (_this2.catList != null) {
        _this2.catList = _this2.catList.filter(a => a.categoryParent == null);
        _this2.openCatAccordion = 'categories';
      } else _this2.openCatAccordion = '';

      _this2.catList.forEach(element => {
        if (element.categoryImage == null) element.categoryImage = '..//resources//White-square.jpg';
      });
    })();
  }

  CreateCategory() {
    console.log('Bouton nv cat');
    if (this.actualCat != null) this.router.navigate(['category-form', {
      actualCat: this.actualCat.categoryId
    }], {
      replaceUrl: true
    });else this.router.navigate(['category-form']);
  }

  ModifyCategory(c) {
    console.log(c);
    if (c != null) this.router.navigate(['category-form', {
      actualCat: this.actualCat?.categoryId,
      modifCat: c?.categoryId,
      modif: 'YES'
    }], {
      replaceUrl: true
    });else this.router.navigate(['category-form', {
      modif: 'YES'
    }], {
      replaceUrl: true
    });
  }

  EnterCategory(c) {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.actualCat = c;
      _this3.artList = yield _this3.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée

      if (_this3.actualCat == null) {
        _this3.catList = yield _this3.storageService.get('Categories');
        if (_this3.catList != null) _this3.catList = _this3.catList.filter(a => a.categoryParent == null);
      } else {
        _this3.catList = _this3.actualCat.subCategories;
        if (_this3.artList != null) _this3.artList = _this3.artList.filter(a => a.categoryId === _this3.actualCat.categoryId);
      } // + refresh la liste en dessous avec les articles filtrés AUSSI

    })();
  }

  BackCategory() {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.actualCat == null) _this4.EnterCategory(null);else _this4.EnterCategory(_this4.actualCat.categoryParent); // REfresh articles
    })();
  }

  CreateProduct() {
    if (this.actualCat != null) this.router.navigate(['article-form', {
      actualCat: this.actualCat.categoryId
    }], {
      replaceUrl: true
    });else this.router.navigate(['article-form']);
  }

  ModifyProduct(p) {
    console.log(p);
    if (p != null) this.router.navigate(['article-form', {
      modifArt: p.productId,
      modif: 'YES'
    }], {
      replaceUrl: true
    });else this.router.navigate(['article-form', {
      modif: 'YES'
    }], {
      replaceUrl: true
    });
  }

  DeleteProduct(p) {
    var _this5 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this5.modal.open('delArt', p.productName).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;
    })();
  }

  DeleteCategory(c) {
    var _this6 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this6.modal.open('delCat', c.categoryName).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;
    })();
  }

};

Articles.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}];

Articles = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-articles',
  template: _articles_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_articles_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Articles);


/***/ }),

/***/ 60035:
/*!***************************************************!*\
  !*** ./src/app/articles/articles.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.example-card {\n  max-width: 400px;\n  margin: 30px;\n  padding: 20px;\n}\n.container {\n  /* On ajoute une marge sur les cotés de l'écran */\n  padding-right: 15px;\n  padding-left: 15px;\n  /* Et on centre */\n  margin-right: auto;\n  margin-left: auto;\n}\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0U7RUFDRSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNBO0VBRUUsd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNGLGtCQUFBO0FBQ0EiLCJmaWxlIjoiYXJ0aWNsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjozMHB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAvKiBPbiBham91dGUgdW5lIG1hcmdlIHN1ciBsZXMgY290w6lzIGRlIGwnw6ljcmFuICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgIC8qIEV0IG9uIGNlbnRyZSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 38218:
/*!***************************************************!*\
  !*** ./src/app/articles/articles.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'myArticles' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"justify-content: start;\">\n\n<div style=\"overflow-y: auto; background-color: white;\">\n <!-- Basic -->\n<ion-accordion-group [value]=\"openCatAccordion\">\n  <ion-accordion value=\"categories\">\n    <ion-item slot=\"header\" class=\"tabHeader\" style=\"text-align: left;\">\n      <ion-label>{{'Categories' | translate}}</ion-label>\n    </ion-item>\n\n    <ion-list slot=\"content\">\n      <ion-item>\n        <ion-label [hidden]=\"this.catList!=null\">    {{'noCategories' | translate}}</ion-label>\n        <div class=\"container\" style=\"overflow-y: auto;\">\n          <div class=\"row\">\n            <mat-card class=\"example-card col-4\" *ngFor=\"let el of catList\">\n              <mat-card-title-group (click)=\"EnterCategory(el)\">\n                <mat-card-title>{{el.categoryName}}</mat-card-title>\n                <mat-card-subtitle>{{el.description}}</mat-card-subtitle>\n                <img class=\"img-fluid\" mat-card-lg-image src=\"{{el.categoryImage}}\" \n                     style='max-width: 70px; max-height: 70px;' [border]=\"0\" alt=\"Null\"\n                     onerror=\"this.onerror=null; this.src='assets/icon/White-square.jpg'\">\n              </mat-card-title-group>\n              <dx-button type=\"button\" (click)=\"ModifyCategory(el)\" icon=\"fas fa-bars\"></dx-button>\n            </mat-card>\n          </div>\n      \n          <div class=\"card-footer text-muted\" style=\"text-align: center;\">\n            <dx-button [hidden]=\"this.actualCat==null\" type=\"button\" class=\"btn btn-secondary\" (click)=\"BackCategory()\" style=\"background-color:orange;\" icon=\"fas fa-angle-left\" [text]=\"'back' | translate\"></dx-button>\n            <dx-button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateCategory()\" icon=\"fas fa-plus\" style=\"background-color:orange;\" [text]=\"'newCategory' | translate\"></dx-button>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-accordion>\n</ion-accordion-group>\n<div class=\"card-header tabHeader\">\n    {{'myArticles' | translate}}\n  </div>\n  <div [hidden]=\"artList?.length>0\">\n    {{'noData' | translate}}\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\" [hidden]=\"artList?.length==0\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of artList\">\n          <td>{{p.productName}}</td>\n          <td>{{p.description}}</td>\n          <td>{{p.priceHtva}}</td>\n          <td (click)=\"$event.stopPropagation()\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\n              <mat-icon>toc</mat-icon>\n\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\" type=\"button\">\n                <mat-icon>edit</mat-icon>\n                <span>{{'edit' | translate}}</span>\n              </button>\n              <button mat-menu-item (click)=\"DeleteProduct(p)\" type=\"button\">\n                <mat-icon>delete</mat-icon>\n                <span>{{'delete' | translate}}</span>\n              </button>\n            </mat-menu>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"card-footer text-muted\" style=\"text-align: center;\">\n    <dx-button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateProduct()\" style=\"background-color:orange;\" icon=\"fas fa-plus\" [text]=\"'new product' | translate\"></dx-button>\n  </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_articles_articles_module_ts.js.map