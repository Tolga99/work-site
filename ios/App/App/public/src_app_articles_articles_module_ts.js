"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_articles_articles_module_ts"],{

/***/ 90643:
/*!*****************************************************!*\
  !*** ./src/app/articles/articles-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesRoutingModule": () => (/* binding */ ArticlesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles */ 17163);




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

/***/ 20350:
/*!*********************************************!*\
  !*** ./src/app/articles/articles.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesModule": () => (/* binding */ ArticlesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _articles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles-routing.module */ 90643);
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles */ 17163);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);








let ArticlesModule = class ArticlesModule {
};
ArticlesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _articles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticlesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_articles__WEBPACK_IMPORTED_MODULE_1__.Articles]
    })
], ArticlesModule);



/***/ }),

/***/ 17163:
/*!**************************************!*\
  !*** ./src/app/articles/articles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Articles": () => (/* binding */ Articles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articles_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./articles.html */ 70496);
/* harmony import */ var _articles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.scss */ 59056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 99900);








let Articles = class Articles {
    constructor(modalS, storageService, router, route) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.headElementsArt = ['Nom article', 'Description', 'Prix HTVA', 'Catégorie'];
        this.artList = [];
        this.catList = [];
        this.actualCat = null;
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__.NgbdModalFocus(this.modalS);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.catList = yield this.storageService.get('Categories');
            this.actualCat = this.catList.find(a => a.categoryId === this.route.snapshot.paramMap.get('actualCat'));
            this.EnterCategory(this.actualCat);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storageService.init();
            this.artList = yield this.storageService.get('Articles');
            this.catList = yield this.storageService.get('Categories');
            if (this.catList != null)
                this.catList = this.catList.filter(a => a.categoryParent == null);
            this.catList.forEach(element => {
                if (element.categoryImage == null)
                    element.categoryImage = '..//resources//White-square.jpg';
            });
        });
    }
    CreateCategory() {
        console.log('Bouton nv cat');
        if (this.actualCat != null)
            this.router.navigate(['category-form', { actualCat: this.actualCat.categoryId }], { replaceUrl: true });
        else
            this.router.navigate(['category-form']);
    }
    ModifyCategory(c) {
        var _a;
        console.log(c);
        if (c != null)
            this.router.navigate(['category-form',
                { actualCat: (_a = this.actualCat) === null || _a === void 0 ? void 0 : _a.categoryId, modifCat: c === null || c === void 0 ? void 0 : c.categoryId, modif: 'YES' }], { replaceUrl: true });
        else
            this.router.navigate(['category-form', { modif: 'YES' }], { replaceUrl: true });
    }
    EnterCategory(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.actualCat = c;
            this.artList = yield this.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée
            if (this.actualCat == null) {
                this.catList = yield this.storageService.get('Categories');
                if (this.catList != null)
                    this.catList = this.catList.filter(a => a.categoryParent == null);
            }
            else {
                this.catList = this.actualCat.subCategories;
                if (this.artList != null)
                    this.artList = this.artList.filter(a => a.categoryId === this.actualCat.categoryId);
            }
            // + refresh la liste en dessous avec les articles filtrés AUSSI
        });
    }
    BackCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.actualCat == null)
                this.EnterCategory(null);
            else
                this.EnterCategory(this.actualCat.categoryParent);
            // REfresh articles
        });
    }
    CreateProduct() {
        if (this.actualCat != null)
            this.router.navigate(['article-form', { actualCat: this.actualCat.categoryId }], { replaceUrl: true });
        else
            this.router.navigate(['article-form']);
    }
    ModifyProduct(p) {
        console.log(p);
        if (p != null)
            this.router.navigate(['article-form', { modifArt: p.productId, modif: 'YES' }], { replaceUrl: true });
        else
            this.router.navigate(['article-form', { modif: 'YES' }], { replaceUrl: true });
    }
    DeleteProduct(p) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let res = null;
            yield this.modal.open('delArt', p.productName)
                .then(result => result.result
                .then((data) => {
                res = 'OK';
            }, (reason) => {
                res = 'DISMISS';
            }));
            if (res === 'DISMISS')
                return;
        });
    }
    DeleteCategory(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let res = null;
            yield this.modal.open('delCat', c.categoryName)
                .then(result => result.result
                .then((data) => {
                res = 'OK';
            }, (reason) => {
                res = 'DISMISS';
            }));
            if (res === 'DISMISS')
                return;
        });
    }
    GoBack() {
        this.router.navigate(['tb-settings'], { replaceUrl: true });
    }
};
Articles.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
Articles = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-articles',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articles_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_articles_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Articles);



/***/ }),

/***/ 70496:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/articles/articles.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"GoBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-label>Retour</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<div style=\"overflow-y: auto;\">\n\n  <div class=\"container\" style=\"overflow-y: auto;\">\n    <div class=\"row\">\n      <mat-card class=\"example-card col-4\" *ngFor=\"let el of catList\">\n        <mat-card-title-group (click)=\"EnterCategory(el)\">\n          <mat-card-title>{{el.categoryName}}</mat-card-title>\n          <mat-card-subtitle>{{el.description}}</mat-card-subtitle>\n          <img class=\"img-fluid\" mat-card-lg-image src=\"{{el.categoryImage}}\" style='width:100%;' [border]=\"0\" alt=\"Null\"\n            onerror=\"this.onerror=null; this.src=null\">\n        </mat-card-title-group>\n        <button type=\"button\" (click)=\"ModifyCategory(el)\">...</button>\n\n        <!-- <mat-card-content>\n        {{longText}}\n      </mat-card-content> -->\n      </mat-card>\n    </div>\n\n    <div class=\"card-footer text-muted\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"BackCategory()\">Go back</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateCategory()\">Nouvelle catégorie</button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"card-header\">\n    Mes articles\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of artList\">\n          <!-- <th scope=\"row\">{{el.id}}</th> -->\n          <td>{{p.productName}}</td>\n          <td>{{p.description}}</td>\n          <td>{{p.priceHtva}}</td>\n          <!-- <td>{{p.categoryId}}</td> -->\n          <td (click)=\"$event.stopPropagation()\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\n              <mat-icon>more_horiz</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\" type=\"button\">\n                <mat-icon>edit</mat-icon>\n                <span>Modifier</span>\n              </button>\n              <button mat-menu-item (click)=\"DeleteProduct(p)\" type=\"button\">\n                <mat-icon>delete</mat-icon>\n                <span>Supprimer</span>\n              </button>\n            </mat-menu>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"card-footer text-muted\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateProduct()\">Nouvelle article</button>\n  </div>\n</div>");

/***/ }),

/***/ 59056:
/*!****************************************!*\
  !*** ./src/app/articles/articles.scss ***!
  \****************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.example-card {\n  max-width: 400px;\n  margin: 30px;\n  padding: 20px;\n}\n.container {\n  /* On ajoute une marge sur les cotés de l'écran */\n  padding-right: 15px;\n  padding-left: 15px;\n  /* Et on centre */\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0U7RUFDRSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJhcnRpY2xlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIC8qIE9uIGFqb3V0ZSB1bmUgbWFyZ2Ugc3VyIGxlcyBjb3TDqXMgZGUgbCfDqWNyYW4gKi9cbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAvKiBFdCBvbiBjZW50cmUgKi9cbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_articles_articles_module_ts.js.map