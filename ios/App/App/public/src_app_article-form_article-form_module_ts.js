"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_article-form_article-form_module_ts"],{

/***/ 53014:
/*!*************************************************************!*\
  !*** ./src/app/article-form/article-form-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFormRoutingModule": () => (/* binding */ ArticleFormRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _article_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-form */ 48974);




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

/***/ 66147:
/*!*****************************************************!*\
  !*** ./src/app/article-form/article-form.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFormModule": () => (/* binding */ ArticleFormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _article_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-form-routing.module */ 53014);
/* harmony import */ var _article_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-form */ 48974);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);








let ArticleFormModule = class ArticleFormModule {
};
ArticleFormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _article_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticleFormRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_article_form__WEBPACK_IMPORTED_MODULE_1__.ArticleForm]
    })
], ArticleFormModule);



/***/ }),

/***/ 48974:
/*!**********************************************!*\
  !*** ./src/app/article-form/article-form.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleForm": () => (/* binding */ ArticleForm)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_article_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./article-form.html */ 91793);
/* harmony import */ var _article_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-form.scss */ 28470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ 36033);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ 86325);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 99900);











let ArticleForm = class ArticleForm {
    constructor(modalS, storageService, router, route) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.images = '';
        this.artList = [];
        this.catList = [];
        this.formArt = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        });
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
    }
    ngOnDestroy() {
        console.log('Cleared');
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.artList = yield this.storageService.get('Articles');
            if (this.artList == null)
                this.artList = new Array();
            this.actualCat = this.route.snapshot.paramMap.get('actualCat');
            this.modifArt = this.artList.find(a => a.productId === this.route.snapshot.paramMap.get('modifArt'));
            this.modif = this.route.snapshot.paramMap.get('modif');
            this.catList = yield this.storageService.get('Categories');
            if (this.modif === 'YES') {
                console.log('modification', this.modif);
                // this.indexFind =this.artList.findIndex(x => x.productId == existId);
                // if(this.indexFind>=0)
                // {
                this.artId = this.modifArt.productId;
                this.actualCat = this.modifArt.categoryId;
                this.formArt.setValue({
                    productName: this.modifArt.productName,
                    description: this.modifArt.description,
                    category: this.modifArt.categoryId,
                    priceHtva: this.modifArt.priceHtva,
                });
                if (this.modifArt.imageProduct != null)
                    this.images = this.modifArt.imageProduct;
                // }
            }
            else {
                this.modif = 'NO';
                console.log('creation', this.modif);
                this.artId = this.generateUUID();
            }
            if (this.actualCat != null) {
                this.formArt.get('category').setValue(this.actualCat);
            }
        });
    }
    CreateWorksite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    get f() {
        return this.formArt.controls;
    }
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            const filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                const reader = new FileReader();
                reader.onload = (event) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('form status', this.formArt);
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
            this.art = new _models_product__WEBPACK_IMPORTED_MODULE_4__.Product(this.artId, this.formArt.get('productName').value, this.formArt.get('description').value, this.formArt.get('priceHtva').value, this.formArt.get('category').value, this.images);
            if (this.modif === 'YES') {
                const indexFind = this.artList.findIndex(x => x.productId === this.modifArt.productId);
                this.artList.splice(indexFind, 1);
                this.artList[indexFind] = this.art;
            }
            else
                this.artList.push(this.art);
            this.storageService.set('Articles', this.artList);
            console.log('invoice saved', this.artList);
            this.router.navigate(['/articles', { actualCat: this.actualCat }], { replaceUrl: true });
        });
    }
    generateUUID() {
        this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_2__.UUID.UUID();
        return this.uuidValue;
    }
    resetImages() {
        this.images = '';
    }
    selectCategory(event) {
        this.actualCat = event.target.value;
    }
    GoBack() {
        this.router.navigate(['/articles', { actualCat: this.actualCat }], { replaceUrl: true });
    }
};
ArticleForm.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
ArticleForm.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['unloaded',] }]
};
ArticleForm = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-article-form',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_article_form_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_article_form_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticleForm);



/***/ }),

/***/ 91793:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/article-form/article-form.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\" style=\"overflow-y: auto;\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-button (click)=\"GoBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n        <ion-label>Retour</ion-label>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  <form [formGroup]=\"formArt\" (ngSubmit)=\"onSubmit()\">\n\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"floating\">Nom article</ion-label>\n      <ion-input type=\"text\" id=\"productName\" name=\"productName\" formControlName=\"productName\" placeholder=\"...\"\n      required=\"required\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catégorie</ion-label>\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"category\"\n        (change)=\"selectCategory($event)\">\n        <ion-select-option></ion-select-option>\n        <ion-select-option *ngFor=\"let c of catList\" [value]=\"c.categoryId\" >\n          {{c.categoryName}}  </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <hr>\n\n    <label for=\"imgCat\">Photo de l'article</label>\n    <input id=\"imgCat\" type=\"file\" class=\"form-control\" multiple=\"\" (change)=\"onFileChange($event)\">\n    <!-- <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"resetImages()\">Réinitialiser</button>\n\n    <img *ngFor='let url of images' [src]=\"url\" height=\"150\" width=\"200px\" style=\"margin: 3px;\"> <br /> -->\n    <!-- <div *ngFor=\"let img of images\"> -->\n    <img class=\"original\" [src]=\"images\" height=\"150\" width=\"200px\" style=\"margin: 3px;\" />\n    \n    <button type=\"submit\" (click)=\"resetImages()\" class=\"btn btn-danger\">\n      <i class=\"far fa-trash-alt\"></i>\n    </button>\n    <!-- </div> -->\n\n    <ion-item class=\"form-group\" required=\"required\">\n      <ion-label position=\"floating\">Prix HTVA</ion-label>\n      <ion-input type=\"text\" id=\"priceHtva\" name=\"priceHtva\" formControlName=\"priceHtva\" placeholder=\"...\"\n      required=\"required\"></ion-input>\n    </ion-item>\n    <hr>\n    <ion-item>\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\n        style=\"height:100px;\"></ion-textarea>\n    </ion-item>\n\n    <input type=\"submit\" value=\"Ajouter article\">\n  </form>\n</div>");

/***/ }),

/***/ 28470:
/*!************************************************!*\
  !*** ./src/app/article-form/article-form.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFLHFDQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoiYXJ0aWNsZS1mb3JtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0Om5vdCgucmVxdWlyZWQpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIiAqXCI7IFxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICAgIGNvbnRlbnQ6XCIgKlwiOyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_article-form_article-form_module_ts.js.map