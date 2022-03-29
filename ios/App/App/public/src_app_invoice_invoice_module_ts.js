"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_invoice_invoice_module_ts"],{

/***/ 74551:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./explore-container.component.html */ 29651);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 86732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




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
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 40456:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 74551);






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

/***/ 78011:
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceRoutingModule": () => (/* binding */ InvoiceRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice */ 62251);




const routes = [
    {
        path: '',
        component: _invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice,
    }
];
let InvoiceRoutingModule = class InvoiceRoutingModule {
};
InvoiceRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], InvoiceRoutingModule);



/***/ }),

/***/ 38819:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice */ 62251);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-routing.module */ 78011);








let InvoiceModule = class InvoiceModule {
};
InvoiceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__.InvoiceRoutingModule
        ]
    })
], InvoiceModule);



/***/ }),

/***/ 62251:
/*!************************************!*\
  !*** ./src/app/invoice/invoice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invoice_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./invoice.html */ 33556);
/* harmony import */ var _invoice_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.scss */ 22200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ 99900);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ 36033);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _models_facture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/facture */ 84895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-focus */ 76342);











let Invoice = class Invoice {
    constructor(modalS, storageService, router, route) {
        this.modalS = modalS;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.images = [];
        this.invList = [];
        // productsList : Array<Product>= [];
        this.headElementsArt = ['Nom article', 'Description', 'Prix HTVA', 'Catégorie'];
        this.panierList = [];
        this.formInv = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            factureName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            typePay: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({ value: '0', disabled: true }),
            tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0'),
            remise: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0'),
            totalPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0'),
        });
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_5__.NgbdModalFocus(this.modalS);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const tmpMode = this.route.snapshot.paramMap.get('mode');
            if (tmpMode === 'false') // creation
             {
                this.ScanMode = false; // creation
            }
            else if (tmpMode === 'true') {
                this.ScanMode = true;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const nowDate = new Date();
            this.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
            const existId = this.route.snapshot.paramMap.get('factureId');
            const invoiceId = this.route.snapshot.paramMap.get('invoiceId');
            this.chantierId = this.route.snapshot.paramMap.get('chantierId');
            const tmpMode = this.route.snapshot.paramMap.get('mode');
            this.type = this.route.snapshot.paramMap.get('type'); // devis ou facture
            const chantierl = yield this.storageService.get('Chantiers');
            if (this.chantierId != null) {
                if (this.type === 'facture')
                    this.invList = chantierl.find(a => a.chantierId === this.chantierId).factures;
                else
                    this.invList = chantierl.find(a => a.chantierId === this.chantierId).devis;
            }
            if (this.invList == null)
                this.invList = new Array();
            if (tmpMode === 'false') {
                this.ScanMode = false;
                this.mode = 'creation';
            }
            else if (tmpMode === 'true') {
                this.ScanMode = true;
                this.mode = 'scan';
            }
            if (existId != null) {
                console.log('modification', existId);
                this.indexFind = this.invList.findIndex(x => x.factureId === existId);
                if (this.indexFind >= 0) {
                    this.invoiceId = this.invList[this.indexFind].factureId;
                    this.formInv.setValue({
                        factureName: this.invList[this.indexFind].factureName,
                        description: this.invList[this.indexFind].description,
                        typePay: this.invList[this.indexFind].typePay,
                        priceHtva: this.invList[this.indexFind].priceHtva,
                        remise: this.invList[this.indexFind].remise,
                        tva: this.invList[this.indexFind].tva,
                        totalPrice: this.invList[this.indexFind].totalPrice,
                    });
                    this.images = this.invList[this.indexFind].images;
                    this.mode = this.invList[this.indexFind].mode;
                    this.receivedMoney = this.invList[this.indexFind].receivedMoney;
                    console.log('mode ', this.mode);
                    console.log(this.invList[this.indexFind].products);
                    if (this.mode === 'creation')
                        this.panierList = this.invList[this.indexFind].products;
                    console.log(this.panierList);
                }
            }
            else {
                console.log('creation : ', existId);
                this.invoiceId = this.generateUUID();
            }
            if (this.mode === 'creation') {
                this.ScanMode = false;
            }
            else if (this.mode === 'scan') {
                this.ScanMode = true;
            }
            if (invoiceId != null) {
                this.invoiceId = invoiceId;
                this.panierList = this.invList.find(a => a.factureId === this.invoiceId).products;
                let total = 0;
                this.panierList.forEach(element => {
                    console.log('total value :', total);
                    total = total + Number.parseFloat(element.priceHtva.toString());
                    total = Math.round(total * 100) / 100; // arrondi
                });
                console.log('total value :', total);
                this.formInv.get('priceHtva').setValue(total);
            }
        });
    }
    GoShopping() {
        // this.router.navigate(['shop',{invoiceId : this.invoiceId,type : this.type,chantierId : this.chantierId}],{replaceUrl:true});
        this.router.navigate(['shop', { invoiceId: this.invoiceId, type: this.type, chantierId: this.chantierId }], { replaceUrl: true });
    }
    CreateWorksite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    get f() {
        return this.formInv.controls;
    }
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            const filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.images.push(event.target.result);
                    this.formInv.patchValue({
                        fileSource: this.images
                    });
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.mode === 'creation') {
                this.formInv.get('priceHtva').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                this.formInv.get('priceHtva').updateValueAndValidity();
                this.formInv.get('tva').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                this.formInv.get('tva').updateValueAndValidity();
                this.formInv.get('remise').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                this.formInv.get('remise').updateValueAndValidity();
            }
            else {
                this.formInv.get('totalPrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                this.formInv.get('totalPrice').updateValueAndValidity();
            }
            console.log('form status', this.formInv);
            const invalid = [];
            const controls = this.formInv.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    let nom = '';
                    if (name === 'factureName')
                        nom = 'Nom facture';
                    if (name === 'typePay')
                        nom = 'Type de paiement';
                    if (name === 'priceHtva')
                        nom = 'Prix HTVA';
                    if (name === 'tva')
                        nom = 'TVA';
                    if (name === 'remise')
                        nom = 'Remise';
                    if (name === 'totalPrice')
                        nom = 'Prix total';
                    invalid.push(nom);
                }
            }
            if (!this.formInv.valid) {
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
            if (this.ScanMode === false) {
                let total = 0;
                let totalTva = 0;
                const remise = this.formInv.get('remise').value;
                let htva = this.formInv.get('priceHtva').value;
                const tva = this.formInv.get('tva').value;
                if (!Number(remise.toString())) {
                    console.log('pas un numeric');
                }
                if (!Number(htva.toString())) {
                    console.log('pas un numeric');
                }
                if (!Number(tva.toString())) {
                    console.log('pas un numeric');
                }
                if (Number.parseFloat(remise) !== 0) {
                    htva = htva * (1 - Number.parseFloat(remise) / 100);
                    htva = Math.round(htva * 100) / 100; // arrondi
                }
                totalTva = htva / 100 * Number.parseFloat(tva);
                totalTva = Math.round(totalTva * 100) / 100; // arrondi
                total = Number.parseFloat(htva.toString()) + totalTva;
                total = Math.round(total * 100) / 100; // arrondi
                console.log('Tva : ', tva);
                console.log('TTva : ', totalTva);
                console.log('htva : ', htva);
                this.formInv.get('totalPrice').setValue(total);
            }
            this.inv = new _models_facture__WEBPACK_IMPORTED_MODULE_4__.Facture(this.invoiceId, this.formInv.get('factureName').value, this.formInv.get('description').value, this.date, this.formInv.get('typePay').value, this.formInv.get('remise').value, this.formInv.get('priceHtva').value, this.formInv.get('tva').value, this.formInv.get('totalPrice').value, this.images, this.receivedMoney, this.panierList, this.mode, this.type);
            console.log('list avant : ', this.invList);
            if (this.indexFind >= 0) {
                // this.invList.splice(this.indexFind,1);
                this.invList[this.indexFind] = this.inv;
            }
            else {
                const index = this.invList.findIndex(a => a.factureId === this.invoiceId);
                if (index >= 0)
                    this.invList[index] = this.inv;
                else
                    this.invList.push(this.inv);
            }
            console.log('list apres : ', this.invList);
            const chantierl = yield this.storageService.get('Chantiers');
            const chantier = chantierl.find(a => a.chantierId === this.chantierId);
            const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);
            if (this.type === 'facture')
                chantier.factures = this.invList;
            else
                chantier.devis = this.invList;
            chantierl[chantierIndex] = chantier;
            this.storageService.set('Chantiers', chantierl);
            console.log('invoice saved', this.invList);
            this.router.navigate(['/worksite', { chantierId: this.chantierId }], { replaceUrl: true });
        });
    }
    generateUUID() {
        this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID.UUID();
        return this.uuidValue;
    }
    resetImages() {
        this.images = [];
    }
    hideInput() {
        if (this.ScanMode === true)
            this.ScanMode = false;
        else
            this.ScanMode = true;
    }
    GoBack() {
        this.router.navigate(['worksite', { chantierId: this.chantierId }], { replaceUrl: true });
    }
};
Invoice.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
Invoice = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-invoice',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invoice_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_invoice_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Invoice);



/***/ }),

/***/ 29651:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/explore-container/explore-container.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>");

/***/ }),

/***/ 33556:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/invoice/invoice.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"GoBack()\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n      <ion-label>Retour</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"container\" style=\"overflow-y: auto;\">\r\n  <form [formGroup]=\"formInv\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <ion-item class=\"form-group\" required=\"required\">\r\n      <ion-label position=\"floating\" [hidden]=\"type=='devis'\">Nom Facture</ion-label>\r\n      <ion-label position=\"floating\" [hidden]=\"type=='facture'\">Nom devis</ion-label>\r\n\r\n      <ion-input type=\"text\" id=\"factureName\" name=\"factureName\" formControlName=\"factureName\" placeholder=\"...\"\r\n        required=\"required\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"form-group\" required=\"required\">\r\n      <button for=\"art\" [hidden]=\"ScanMode\" (click)=\"GoShopping()\" type=\"button\">Ajouter articles</button>\r\n    </div>\r\n    <div class=\"card-header\" [hidden]=\"ScanMode\">\r\n      Panier\r\n    </div>\r\n    <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\" [hidden]=\"ScanMode\">\r\n      <table class=\"table table-bordered table-striped mb-0\">\r\n\r\n        <thead>\r\n          <tr>\r\n            <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr mdbTableCol *ngFor=\"let p of panierList\">\r\n            <!-- <th scope=\"row\">{{el.id}}</th> -->\r\n            <td>{{p.productName}}</td>\r\n            <td>{{p.description}}</td>\r\n            <td>{{p.priceHtva}}</td>\r\n            <!-- <td>{{p.categoryId}}</td> -->\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div [hidden]=\"type=='devis'\">\r\n      <label for=\"imgFactures\" [hidden]=\"!ScanMode\">Photos facture</label>\r\n    </div>\r\n    <div [hidden]=\"type=='facture'\">\r\n      <label for=\"imgFactures\" [hidden]=\"!ScanMode\">Photos devis</label>\r\n    </div>\r\n\r\n    <ion-item [hidden]=\"type=='devis'\">\r\n      <ion-label position=\"floating\" [hidden]=\"!ScanMode\">Photos facture</ion-label>\r\n    </ion-item>\r\n    <ion-item [hidden]=\"type=='facture'\">\r\n      <ion-label position=\"floating\" [hidden]=\"!ScanMode\">Photos devis</ion-label>\r\n    </ion-item>\r\n    <!-- Select File -->\r\n    <input [hidden]=\"!ScanMode\" id=\"imgFactures\" type=\"file\" class=\"form-control\" multiple=\"\"\r\n      (change)=\"onFileChange($event)\">\r\n\r\n    <div *ngFor=\"let img of images\">\r\n      <img [hidden]=\"!ScanMode\" class=\"original\" [alt]=\"img.Name\" [src]=\"img\" height=\"150\" width=\"200px\"\r\n        style=\"margin: 3px;\" />\r\n      <button type=\"submit\" (click)=\"resetImages()\" class=\"btn btn-danger\">\r\n        <i class=\"far fa-trash-alt\"></i>\r\n      </button>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label>Type de paiement</ion-label>\r\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"typePay\" required=\"required\">\r\n        <ion-select-option value=\"cash\"> Paiement cash </ion-select-option>\r\n        <ion-select-option value=\"bancaire\"> Virement bancaire </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- articles -->\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"ScanMode\">\r\n      <ion-label position=\"floating\">Prix HTVA</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"ScanMode\" id=\"htva\" name=\"htva\" formControlName=\"priceHtva\" placeholder=\"124.5\"\r\n      required=\"required\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"ScanMode\">\r\n      <ion-label position=\"floating\">TVA</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"ScanMode\" id=\"tva\" name=\"tva\" formControlName=\"tva\" placeholder=\"21.6\"\r\n      required=\"required\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"ScanMode\">\r\n      <ion-label position=\"floating\">Remise</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"ScanMode\" id=\"remise\" name=\"remise\" formControlName=\"remise\" placeholder=\"10\"\r\n      required=\"required\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"!ScanMode\">\r\n      <ion-label position=\"floating\">Prix à payer</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"!ScanMode\" id=\"totalPrice\" name=\"totalPrice\" formControlName=\"totalPrice\"\r\n      required=\"required\" placeholder=\"125.35\"></ion-input>\r\n    </ion-item>\r\n\r\n    <hr>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\r\n        style=\"height:100px;\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <div [hidden]=\"type=='devis'\">\r\n      <input type=\"submit\" [hidden]=\"!ScanMode\" value=\"Scanner chantier\">\r\n      <input type=\"submit\" [hidden]=\"ScanMode==true\" value=\"Créer chantier\">\r\n    </div>\r\n    <div [hidden]=\"type!='devis'\">\r\n      <input type=\"submit\" [hidden]=\"!ScanMode\" value=\"Scanner devis\">\r\n      <input type=\"submit\" [hidden]=\"ScanMode==true\" value=\"Créer devis\">\r\n    </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ 86732:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 22200:
/*!**************************************!*\
  !*** ./src/app/invoice/invoice.scss ***!
  \**************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUE7O0FBQUE7RUFDQSxjQUFBO0FBR0E7O0FBQUEsNERBQUE7O0FBQ0E7Ozs7O0NBQUE7O0FBTUMsaUVBQUE7O0FBQ0Q7RUFDRSxXQUFBO0VBQWEsZUFBQTtFQUNiLGFBQUE7RUFBZSxpQkFBQTtFQUNmLHNCQUFBO0VBQXdCLGdCQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLHNCQUFBO0VBQXdCLG9EQUFBO0VBQ3hCLGVBQUE7RUFBaUIscUJBQUE7RUFDakIsbUJBQUE7RUFBcUIsa0JBQUE7RUFDckIsZ0JBQUE7QUFVRjs7QUFQQSxpRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVBBLDJFQUFBOztBQUNBO0VBQ0UseUJBQUE7QUFVRjs7QUFQQTtFQUNFLHVCQUFBO0FBVUY7O0FBUEE7RUFDRSxxQkFBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFVRjs7QUFQQSxxQ0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVNGIiwiZmlsZSI6Imludm9pY2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnMtY2VudGVyLXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5vdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSBcclxuKi9cclxuIC8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBpbnB1dDpub3QoLnJlcXVpcmVkKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBXaXRoIG9ubHkgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSAqL1xyXG5cclxuLmZvcm0tZ3JvdXBbcmVxdWlyZWRdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBsYWJlbDphZnRlciB7IFxyXG4gIGNvbnRlbnQ6XCIgKlwiOyBcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_invoice_invoice_module_ts.js.map