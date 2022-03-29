"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shop_shop_module_ts"],{

/***/ 18137:
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopRoutingModule": () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop */ 56431);




const routes = [
    {
        path: '',
        component: _shop__WEBPACK_IMPORTED_MODULE_0__.Shop
    }
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShopRoutingModule);



/***/ }),

/***/ 15270:
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopModule": () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 18137);
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop */ 56431);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 69872);











let ShopModule = class ShopModule {
};
ShopModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        ],
        declarations: [_shop__WEBPACK_IMPORTED_MODULE_1__.Shop]
    })
], ShopModule);



/***/ }),

/***/ 56431:
/*!******************************!*\
  !*** ./src/app/shop/shop.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shop": () => (/* binding */ Shop)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shop_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shop.html */ 20625);
/* harmony import */ var _shop_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.scss */ 38651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _models_facture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/facture */ 84895);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ 86325);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 99900);











let Shop = class Shop {
    constructor(modalS, storageService, router, route) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.headElementsArt = ['Nom article', 'Description', 'Prix HTVA', 'Catégorie'];
        this.artList = [];
        this.panierList = [];
        this.catList = [];
        this.actualCat = null;
        this.formArt = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        });
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__.NgbdModalFocus(this.modalS);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.catList = yield this.storageService.get('Categories');
            this.actualCat = this.catList.find(a => a.categoryId === this.route.snapshot.paramMap.get('actualCat'));
            this.EnterCategory(this.actualCat);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.storageService.init();
            this.artList = yield this.storageService.get('Articles');
            this.catList = yield this.storageService.get('Categories');
            this.chantierId = this.route.snapshot.paramMap.get('chantierId');
            this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
            this.type = this.route.snapshot.paramMap.get('type');
            if (this.catList != null)
                this.catList = this.catList.filter(a => a.categoryParent == null);
        });
    }
    EnterCategory(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    AddProduct(p) {
        this.panierList.push(p);
    }
    RemoveProduct(p) {
        this.panierList.splice(this.panierList.findIndex(a => a.productId === p.productId), 1);
    }
    SavePanier() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const chantierl = yield this.storageService.get('Chantiers');
            const chantier = chantierl.find(a => a.chantierId === this.chantierId);
            const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);
            let listInv;
            if (this.type === 'facture')
                listInv = chantier.factures;
            else
                listInv = chantier.devis;
            // let listInv : Array<Facture> = await this.storageService.get("Invoices="+this.chantierId);
            if (listInv != null) {
                const inv = listInv.find(a => a.factureId === this.invoiceId);
                let invIndex;
                if (inv != null) {
                    invIndex = listInv.findIndex(a => a.factureId === this.invoiceId);
                    inv.products = this.panierList;
                    listInv[invIndex] = inv;
                }
                else {
                    const newInv = new _models_facture__WEBPACK_IMPORTED_MODULE_3__.Facture(this.invoiceId, null, null, null, null, null, null, null, null, null, null, this.panierList, 'creation', this.type);
                    listInv.push(newInv);
                }
            }
            else {
                listInv = new Array();
                const newInv = new _models_facture__WEBPACK_IMPORTED_MODULE_3__.Facture(this.invoiceId, null, null, null, null, null, null, null, null, null, null, this.panierList, 'creation', this.type);
                listInv.push(newInv);
            }
            if (this.type === 'facture')
                chantier.factures = listInv;
            else
                chantier.devis = listInv;
            chantierl[chantierIndex] = chantier;
            this.storageService.set('Chantiers', chantierl);
            this.router.navigate(['/invoice',
                { invoiceId: this.invoiceId, type: this.type, chantierId: this.chantierId, mode: 'false' }], { replaceUrl: true });
        });
    }
    GoBack() {
        this.router.navigate(['invoice',
            { invoiceId: this.invoiceId, type: this.type, chantierId: this.chantierId, mode: 'false' }], { replaceUrl: true });
    }
    AddFastProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const invalid = [];
            const controls = this.formArt.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    let nom = '';
                    if (name === 'productName')
                        nom = 'Nom article';
                    if (name === 'priceHtva')
                        nom = 'Prix HTVA';
                    invalid.push(nom);
                }
            }
            if (!this.formArt.valid) {
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
            let p = new _models_product__WEBPACK_IMPORTED_MODULE_4__.Product('-1', this.formArt.get('productName').value, this.formArt.get('description').value, this.formArt.get('priceHtva').value, null, null);
            this.panierList.push(p);
        });
    }
};
Shop.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
Shop = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-shop',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shop_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shop_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Shop);



/***/ }),

/***/ 20625:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shop/shop.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"GoBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-label>Retour</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<div style=\"overflow-y: auto;\">\n\n  <div class=\"container\" style=\"overflow-y: auto;\">\n    <div class=\"row\">\n      <mat-card class=\"example-card col-4\" *ngFor=\"let el of catList\">\n        <mat-card-title-group (click)=\"EnterCategory(el)\">\n          <mat-card-title>{{el.categoryName}}</mat-card-title>\n          <mat-card-subtitle>{{el.description}}</mat-card-subtitle>\n          <img mat-card-lg-image src=\"{{el.categoryImage}}\">\n        </mat-card-title-group>\n      </mat-card>\n    </div>\n\n    <div class=\"card-footer text-muted\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"BackCategory()\">Go back</button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"card-header\">\n    Mes articles\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of artList\">\n          <!-- <th scope=\"row\">{{el.id}}</th> -->\n          <td>{{p.productName}}</td>\n          <td>{{p.description}}</td>\n          <td>{{p.priceHtva}}</td>\n          <td>\n            <button mat-menu-item type=\"button\" (click)=\"AddProduct(p)\">\n              <mat-icon>add</mat-icon>\n              <span>Ajouter au panier</span>\n            </button>\n          </td>\n          <!-- <td>{{p.categoryId}}</td> -->\n          <!-- <td>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_horiz</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\">\n                <mat-icon>edit</mat-icon>\n                <span>Modifier</span>\n              </button>\n              <button mat-menu-item (click)=\"DeleteProduct(p)\">\n                <mat-icon>delete</mat-icon>\n                <span>Supprimer</span>\n              </button>\n            </mat-menu>\n          </td> -->\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <hr>\n\n  <form [formGroup]=\"formArt\" (ngSubmit)=\"AddFastProduct()\">\n\n    <div class=\"card-header\">\n      Création rapide d'article\n    </div>\n    <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n      <label for=\"productName\">Nom article</label>\n      <input type=\"text\" id=\"productName\" name=\"productName\" formControlName=\"productName\" placeholder=\"...\"\n        required=\"required\">\n\n      <label for=\"description\">Description</label>\n      <textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\"></textarea>\n\n      <label for=\"priceHtva\">Prix HTVA</label>\n      <input type=\"text\" id=\"priceHtva\" name=\"priceHtva\" formControlName=\"priceHtva\" placeholder=\"...\"\n        required=\"required\">\n    </div>\n    <div class=\"card-footer text-muted\">\n      <button type=\"submit\" class=\"btn btn-secondary\">Ajouter article au panier</button>\n    </div>\n  </form>\n  <hr>\n  <div class=\"card-header\">\n    Panier\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of panierList\">\n          <!-- <th scope=\"row\">{{el.id}}</th> -->\n          <td>{{p.productName}}</td>\n          <td>{{p.description}}</td>\n          <td>{{p.priceHtva}}</td>\n          <!-- <td>{{p.categoryId}}</td> -->\n          <td>\n            <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_horiz</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\">\n                <mat-icon>edit</mat-icon>\n                <span>Modifier</span>\n              </button> -->\n            <button mat-menu-item (click)=\"RemoveProduct(p)\">\n              <mat-icon>delete</mat-icon>\n              <span>Supprimer</span>\n            </button>\n            <!-- </mat-menu> -->\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"card-footer text-muted\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateProduct()\">Ajouter article au panier</button>\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"SavePanier()\">Finaliser</button>\n  </div>\n</div>");

/***/ }),

/***/ 38651:
/*!********************************!*\
  !*** ./src/app/shop/shop.scss ***!
  \********************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.example-card {\n  max-width: 400px;\n  margin: 30px;\n  padding: 20px;\n}\n.container {\n  /* On ajoute une marge sur les cotés de l'écran */\n  padding-right: 15px;\n  padding-left: 15px;\n  /* Et on centre */\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Auc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFDRTtFQUNFLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNob3Auc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAvKiBPbiBham91dGUgdW5lIG1hcmdlIHN1ciBsZXMgY290w6lzIGRlIGwnw6ljcmFuICovXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgLyogRXQgb24gY2VudHJlICovXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_shop_shop_module_ts.js.map