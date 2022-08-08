"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_invoice_invoice_module_ts"],{

/***/ 27546:
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceRoutingModule": () => (/* binding */ InvoiceRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice */ 24670);




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

/***/ 63277:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice */ 24670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ 27546);







let InvoiceModule = class InvoiceModule {
};
InvoiceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__.InvoiceRoutingModule
        ]
    })
], InvoiceModule);



/***/ }),

/***/ 24670:
/*!************************************!*\
  !*** ./src/app/invoice/invoice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoice_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.html?ngResource */ 34555);
/* harmony import */ var _invoice_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.scss?ngResource */ 50703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _models_facture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/facture */ 49371);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/methods.service */ 25812);














let Invoice = class Invoice {
  constructor(modalS, storageService, router, route, methodsService, navController) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.methodsService = methodsService;
    this.navController = navController;
    this.allowedPageSizes = [3, 6, 9];
    this.displayMode = 'full';
    this.showPageSizeSelector = true;
    this.showInfo = true;
    this.showNavButtons = true;
    this.images = [];
    this.invList = [];
    this.headElementsArt = ['Nom article', 'Description', 'Prix Unitaire', 'Quantité', 'Prix total', ''];
    this.panierList = [];
    this.numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    this.formInv = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      factureName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      typePay: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numericNumberReg)),
      tva: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numericNumberReg)),
      remise: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numericNumberReg)),
      totalPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numericNumberReg))
    });
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_6__.NgbdModalFocus(this.modalS);
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tmpMode = _this.route.snapshot.paramMap.get('mode');

      console.log('ionViewDidEnter');

      if (tmpMode === 'false') // creation
        {
          _this.ScanMode = false; // creation
        } else if (tmpMode === 'true') {
        _this.ScanMode = true;
      }

      _this.storageService.init();

      const factureName = _this.route.snapshot.paramMap.get('factureName');

      const description = _this.route.snapshot.paramMap.get('description');

      const tva = _this.route.snapshot.paramMap.get('tva');

      const typePay = _this.route.snapshot.paramMap.get('typePay');

      const remise = _this.route.snapshot.paramMap.get('remise');

      if (_this.methodsService.isNullOrEmpty(_this.formInv.get('factureName').value)) {
        if (!_this.methodsService.isNullOrEmpty(factureName)) _this.formInv.get('factureName').setValue(factureName);else _this.formInv.get('factureName').setValue('');
      }

      if (_this.methodsService.isNullOrEmpty(_this.formInv.get('description').value)) {
        if (!_this.methodsService.isNullOrEmpty(description)) _this.formInv.get('description').setValue(description);else _this.formInv.get('description').setValue('');
      }

      if (_this.methodsService.isNullOrEmpty(_this.formInv.get('tva').value)) {
        if (!_this.methodsService.isNullOrEmpty(tva)) _this.formInv.get('tva').setValue(tva);else _this.formInv.get('tva').setValue('');
      }

      if (_this.methodsService.isNullOrEmpty(_this.formInv.get('typePay').value)) {
        if (!_this.methodsService.isNullOrEmpty(typePay)) _this.formInv.get('typePay').setValue(typePay);else _this.formInv.get('typePay').setValue('');
      }

      if (_this.methodsService.isNullOrEmpty(_this.formInv.get('remise').value)) {
        if (!_this.methodsService.isNullOrEmpty(remise)) _this.formInv.get('remise').setValue(remise);else _this.formInv.get('remise').setValue('');
      }

      if (_this.chantierId === 'null') {
        let shopInvoice = yield _this.storageService.get('NAfactures');
        _this.panierList = shopInvoice.find(a => a.factureId === _this.invoiceId).cart;
      } else {
        let chantiers = yield _this.storageService.get('Chantiers');
        let chantier = chantiers.find(a => a.chantierId === _this.chantierId);
        console.log(_this.type);

        if (_this.type.toUpperCase() === 'DEVIS') {
          _this.panierList = chantier.devis.find(a => a.factureId === _this.invoiceId).cart;
        } else {
          _this.panierList = chantier.factures.find(a => a.factureId === _this.invoiceId).cart;
        }
      }

      let total = 0;

      _this.panierList.forEach(element => {
        console.log('total value :', total);
        total = total + Number.parseFloat(element.product.priceHtva.toString()) * element.quantity;
        total = Math.round(total * 100) / 100; // arrondi
      });

      _this.formInv.get('priceHtva').setValue(total);

      console.log('panier : ', _this.panierList, _this.chantierId);
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nowDate = new Date();
      _this2.date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();

      const existId = _this2.route.snapshot.paramMap.get('factureId');

      const invoiceId = _this2.route.snapshot.paramMap.get('invoiceId');

      _this2.chantierId = _this2.route.snapshot.paramMap.get('chantierId');

      const tmpMode = _this2.route.snapshot.paramMap.get('mode');

      _this2.type = _this2.route.snapshot.paramMap.get('type'); // devis ou facture

      const chantierl = yield _this2.storageService.get('Chantiers');

      if (_this2.chantierId != null && _this2.chantierId !== 'null') {
        if (_this2.type === 'facture') _this2.invList = chantierl.find(a => a.chantierId === _this2.chantierId).factures;else _this2.invList = chantierl.find(a => a.chantierId === _this2.chantierId).devis;
      } else _this2.invList = yield _this2.storageService.get('NAfactures');

      if (_this2.invList == null) _this2.invList = new Array();

      if (tmpMode === 'false') {
        _this2.ScanMode = false;
        _this2.mode = 'creation';
      } else if (tmpMode === 'true') {
        _this2.ScanMode = true;
        _this2.mode = 'scan';
      }

      if (existId != null) {
        console.log('modification', existId);
        _this2.indexFind = _this2.invList.findIndex(x => x.factureId === existId);
        console.log('index :', _this2.indexFind, _this2.invList);

        if (_this2.indexFind >= 0) {
          _this2.invoiceId = _this2.invList[_this2.indexFind].factureId;

          _this2.formInv.setValue({
            factureName: _this2.invList[_this2.indexFind].factureName,
            description: _this2.invList[_this2.indexFind].description,
            typePay: _this2.invList[_this2.indexFind].typePay,
            priceHtva: _this2.invList[_this2.indexFind].priceHtva,
            remise: _this2.invList[_this2.indexFind].remise,
            tva: _this2.invList[_this2.indexFind].tva,
            totalPrice: _this2.invList[_this2.indexFind].totalPrice
          });

          _this2.images = _this2.invList[_this2.indexFind].images;
          _this2.mode = _this2.invList[_this2.indexFind].mode;
          _this2.receivedMoney = _this2.invList[_this2.indexFind].receivedMoney;
          console.log('mode ', _this2.mode);
          console.log(_this2.invList[_this2.indexFind].cart);
          if (_this2.mode === 'creation') _this2.panierList = _this2.invList[_this2.indexFind].cart;
          console.log(_this2.panierList);
        }
      } else {
        console.log('creation : ', existId);
        _this2.invoiceId = _this2.generateUUID();
      }

      if (_this2.mode === 'creation') {
        _this2.ScanMode = false;
      } else if (_this2.mode === 'scan') {
        _this2.ScanMode = true;
      }

      if (invoiceId != null) {
        _this2.invoiceId = invoiceId;
        _this2.panierList = _this2.invList.find(a => a.factureId === _this2.invoiceId).cart;
        let total = 0;

        _this2.panierList.forEach(element => {
          console.log('total value :', total);
          total = total + Number.parseFloat(element.product.priceHtva.toString()) * element.quantity;
          total = Math.round(total * 100) / 100; // arrondi
        });

        console.log('total value :', total);

        _this2.formInv.get('priceHtva').setValue(total);
      }

      _this2.invSettings = yield _this2.storageService.get('MyInvoiceSettings');

      if (_this2.invSettings !== null) {
        console.log(_this2.invSettings);
        let generatedName = '';

        if (_this2.invSettings.positionApres) {
          generatedName += _this2.invSettings.factureName + _this2.invSettings.extType;
        }

        console.log(_this2.invSettings.exts, _this2.invSettings.exts.length);

        if (_this2.invSettings.exts === 'Num') {
          generatedName += _this2.invSettings.extNum;
          _this2.invSettings.extNum = Number.parseInt(_this2.invSettings.extNum.toString()) + 1;
          console.log(generatedName);
        } else if (_this2.invSettings.exts === 'Date') {
          generatedName += nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
          console.log(generatedName);
        } else if (_this2.invSettings.exts === 'NumDate') {
          generatedName += _this2.invSettings.extNum;
          generatedName += '-' + nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
          _this2.invSettings.extNum = Number.parseInt(_this2.invSettings.extNum.toString()) + 1;
          console.log(generatedName);
        } else if (_this2.invSettings.exts === 'DateNum') {
          generatedName += nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
          generatedName += '-' + _this2.invSettings.extNum;
          _this2.invSettings.extNum = Number.parseInt(_this2.invSettings.extNum.toString()) + 1;
          console.log(generatedName);
        }

        if (_this2.invSettings.positionAvant) {
          generatedName += _this2.invSettings.extType + _this2.invSettings.factureName;
        }

        _this2.formInv.get('factureName').setValue(generatedName);
      }

      console.log('panier : ', _this2.panierList);
    })();
  }

  GoShopping() {
    if (this.chantierId !== 'null') {
      this.navController.navigateBack(['shop', {
        invoiceId: this.invoiceId,
        type: this.type,
        chantierId: this.chantierId,
        factureName: this.formInv.get('factureName').value,
        remise: this.formInv.get('remise').value,
        tva: this.formInv.get('tva').value,
        description: this.formInv.get('description').value,
        typePay: this.formInv.get('typePay').value
      }]);
    } else {
      this.navController.navigateBack(['shop', {
        invoiceId: this.invoiceId,
        type: this.type,
        chantierId: 'null',
        factureName: this.formInv.get('factureName').value,
        remise: this.formInv.get('remise').value,
        tva: this.formInv.get('tva').value,
        description: this.formInv.get('description').value,
        typePay: this.formInv.get('typePay').value
      }]);
    } // this.navController.navigateBack(['shop',{invoiceId : this.invoiceId,type : this.type,chantierId : this.chantierId}],{replaceUrl:true});

  }

  CreateWorksite() {
    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  get f() {
    return this.formInv.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = event => {
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
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.formInv.get('priceHtva').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);

      _this3.formInv.get('priceHtva').updateValueAndValidity();

      _this3.formInv.get('tva').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);

      _this3.formInv.get('tva').updateValueAndValidity();

      _this3.formInv.get('remise').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);

      _this3.formInv.get('remise').updateValueAndValidity();

      if (_this3.ScanMode) {
        _this3.formInv.get('tva').setValue(0);

        _this3.formInv.get('remise').setValue(0);
      }

      console.log('form status', _this3.formInv);
      const invalid = [];
      const controls = _this3.formInv.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (_this3.ScanMode) if (name === 'factureName') nom = 'Nom facture';
          if (name === 'typePay') nom = 'Type de paiement';
          if (name === 'priceHtva') nom = 'Prix HTVA';
          if (name === 'tva') nom = 'TVA';
          if (name === 'remise') nom = 'Remise';
          if (name === 'totalPrice') nom = 'Prix total';
          invalid.push(nom);
        }
      }

      if (!_this3.formInv.valid) {
        let res = null;
        yield _this3.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      if (_this3.ScanMode === false) {
        let total = 0;
        let totalTva = 0;

        var remise = _this3.formInv.get('remise').value;

        remise = remise.toString().replace(',', '.');

        var htvaString = _this3.formInv.get('priceHtva').value;

        htvaString = htvaString.toString().replace(',', '.');
        let htva = Number.parseFloat(htvaString);

        var tvaString = _this3.formInv.get('tva').value;

        tvaString = tvaString.toString().replace(',', '.');
        var tva = Number.parseFloat(tvaString);

        if (!Number(remise.toString())) {
          console.log('pas un numeric', remise.toString());
        }

        if (!Number(htva.toString())) {
          console.log('pas un numeric', htva.toString());
        }

        if (!Number(tva.toString())) {
          console.log('pas un numeric', tva.toString());
        }

        if (Number.parseFloat(remise) !== 0) {
          htva = htva * (1 - Number.parseFloat(remise) / 100);
          htva = Math.round(htva * 100) / 100; // arrondi
        }

        totalTva = htva / 100 * Number.parseFloat(tva.toString());
        totalTva = Math.round(totalTva * 100) / 100; // arrondi

        total = Number.parseFloat(htva.toString()) + totalTva;
        total = Math.round(total * 100) / 100; // arrondi

        console.log('Tva : ', tva);
        console.log('TTva : ', totalTva);
        console.log('htva : ', htva);

        _this3.formInv.get('totalPrice').setValue(total);
      } else _this3.formInv.get('totalPrice').setValue(_this3.formInv.get('priceHtva').value);

      _this3.inv = new _models_facture__WEBPACK_IMPORTED_MODULE_5__.Facture(_this3.invoiceId, _this3.formInv.get('factureName').value, _this3.formInv.get('description').value, _this3.date, _this3.formInv.get('typePay').value, _this3.formInv.get('remise').value, _this3.formInv.get('priceHtva').value, _this3.formInv.get('tva').value, _this3.formInv.get('totalPrice').value, _this3.images, _this3.receivedMoney, _this3.panierList, _this3.mode, _this3.type);
      console.log('list avant : ', _this3.invList);

      if (_this3.indexFind >= 0) {
        // this.invList.splice(this.indexFind,1);
        _this3.invList[_this3.indexFind] = _this3.inv;
      } else {
        const index = _this3.invList.findIndex(a => a.factureId === _this3.invoiceId);

        if (index >= 0) _this3.invList[index] = _this3.inv;else _this3.invList.push(_this3.inv);
      }

      console.log('list apres : ', _this3.invList);

      _this3.storageService.set('MyInvoiceSettings', _this3.invSettings);

      if (_this3.chantierId !== 'null') {
        const chantierl = yield _this3.storageService.get('Chantiers');
        const chantier = chantierl.find(a => a.chantierId === _this3.chantierId);
        const chantierIndex = chantierl.findIndex(a => a.chantierId === _this3.chantierId);
        if (_this3.type === 'facture') chantier.factures = _this3.invList;else chantier.devis = _this3.invList;
        chantierl[chantierIndex] = chantier;

        _this3.storageService.set('Chantiers', chantierl);

        _this3.navController.navigateBack(['/worksite', {
          chantierId: _this3.chantierId
        }], {
          replaceUrl: true
        });
      } else {
        let invs = yield _this3.storageService.get('NAfactures');

        if (invs === null) {
          invs = new Array();
        }

        let existingInvoice = invs.findIndex(a => a.factureId === _this3.inv.factureId);
        invs[existingInvoice] = _this3.inv;

        _this3.storageService.set('NAfactures', invs);

        _this3.navController.navigateBack(['/tb-home'], {
          replaceUrl: true
        });
      }

      console.log('invoice saved', _this3.invList);
    })();
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__.UUID.UUID();
    return this.uuidValue;
  }

  resetImages() {
    this.images = [];
  }

  hideInput() {
    if (this.ScanMode === true) this.ScanMode = false;else this.ScanMode = true;
  }

  GoBack() {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;
      console.log(_this4.indexFind, _this4.formInv.value);

      if (_this4.indexFind === null || _this4.indexFind === undefined || _this4.indexFind < 0) {
        let cpt = 0;
        Object.keys(_this4.formInv.controls).forEach(key => {
          if (!_this4.methodsService.isNullOrEmpty(_this4.formInv.controls[key].value)) {
            cpt++;
          }
        });

        if (cpt > 0) {
          result = yield _this4.GoBackModal();
        }
      } else {
        if (!_this4.methodsService.equals(_this4.invList[_this4.indexFind].factureName, _this4.formInv.get('factureName').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].description, _this4.formInv.get('description').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].typePay, _this4.formInv.get('typePay').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].priceHtva.toString(), _this4.formInv.get('priceHtva').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].remise.toString(), _this4.formInv.get('remise').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].tva.toString(), _this4.formInv.get('tva').value) || !_this4.methodsService.equals(_this4.invList[_this4.indexFind].totalPrice.toString(), _this4.formInv.get('totalPrice').value)) {
          result = yield _this4.GoBackModal();
        }
      }

      console.log(result);

      if (result !== null) {
        _this4.cleanIncompleteInvoices();

        if (_this4.chantierId === 'null') _this4.navController.navigateBack(['/tb-home'], {
          replaceUrl: true
        });else _this4.navController.navigateBack(['worksite', {
          chantierId: _this4.chantierId
        }], {
          replaceUrl: true
        });
      }
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

  cleanIncompleteInvoices() {
    var _this6 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let indexToDelete = null;
      let invoices = yield _this6.storageService.get('NAfactures');
      console.log(invoices);
      invoices.forEach(invoice => {
        console.log(invoice);

        if (invoice.factureName == null || invoice.priceHtva == null || invoice.typePay == null || invoice.tva == null) {
          indexToDelete = invoices.findIndex(a => a === invoice);
          console.log(indexToDelete, invoice);
        }

        if (indexToDelete !== null) {
          console.log('deleting', invoices, indexToDelete);
          invoices.splice(indexToDelete, 1);
          indexToDelete = null;
        }
      });

      _this6.storageService.set('NAfactures', invoices);
    })();
  }

};

Invoice.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_7__.MethodsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}];

Invoice = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-invoice',
  template: _invoice_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_invoice_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Invoice);


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

/***/ 50703:
/*!*************************************************!*\
  !*** ./src/app/invoice/invoice.scss?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUE7O0FBQUE7RUFDQSxjQUFBO0FBR0E7O0FBQUEsNERBQUE7O0FBQ0E7Ozs7O0NBQUE7O0FBTUMsaUVBQUE7O0FBQ0Q7RUFDRSxXQUFBO0VBQWEsZUFBQTtFQUNiLGFBQUE7RUFBZSxpQkFBQTtFQUNmLHNCQUFBO0VBQXdCLGdCQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLHNCQUFBO0VBQXdCLG9EQUFBO0VBQ3hCLGVBQUE7RUFBaUIscUJBQUE7RUFDakIsbUJBQUE7RUFBcUIsa0JBQUE7RUFDckIsZ0JBQUE7QUFVRjs7QUFQQSxpRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVBBLDJFQUFBOztBQUNBO0VBQ0UseUJBQUE7QUFVRjs7QUFQQTtFQUNFLHVCQUFBO0FBVUY7O0FBUEE7RUFDRSxxQkFBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFVRjs7QUFQQSxxQ0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVNGOztBQU5BO0VBRUUsd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRRiIsImZpbGUiOiJpbnZvaWNlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJzLWNlbnRlci14IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiAyMDBweDtcclxub3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBwYWRkaW5nIGFyb3VuZCB0aGUgZm9ybSAqL1xyXG4vKi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn0gXHJcbiovXHJcbiAvKiBTdHlsZSBpbnB1dHMgd2l0aCB0eXBlPVwidGV4dFwiLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7IC8qIFNvbWUgcGFkZGluZyAqLyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogTWFrZSBzdXJlIHRoYXQgcGFkZGluZyBhbmQgd2lkdGggc3RheXMgaW4gcGxhY2UgKi9cclxuICBtYXJnaW4tdG9wOiA2cHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXHJcbiAgcmVzaXplOiB2ZXJ0aWNhbCAvKiBBbGxvdyB0aGUgdXNlciB0byB2ZXJ0aWNhbGx5IHJlc2l6ZSB0aGUgdGV4dGFyZWEgKG5vdCBob3Jpem9udGFsbHkpICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uIHdpdGggYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGV0YyAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogV2hlbiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIHN1Ym1pdCBidXR0b24sIGFkZCBhIGRhcmtlciBncmVlbiBjb2xvciAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 34555:
/*!*************************************************!*\
  !*** ./src/app/invoice/invoice.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{'invoices' | translate}}</ion-title>\r\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\r\n    </dx-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"container\" style=\"overflow-y: auto; background-color: white; height: 100%;\">\r\n  <form [formGroup]=\"formInv\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <ion-item class=\"form-group\" required=\"required\">\r\n      <ion-label position=\"stacked\" [hidden]=\"type=='devis'\">{{'invoiceName' | translate}}</ion-label>\r\n      <ion-label position=\"stacked\" [hidden]=\"type=='facture'\">{{'estimateName' | translate}}</ion-label>\r\n\r\n      <ion-input type=\"text\" id=\"factureName\" name=\"factureName\" formControlName=\"factureName\" placeholder=\"...\"\r\n        required=\"required\" maxlength=\"50\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"form-group\" required=\"required\">\r\n      <dx-button for=\"art\" [hidden]=\"ScanMode\" icon=\"fas fa-cart-plus\" (click)=\"GoShopping()\" type=\"button\" \r\n      [text]=\"'addProduct' | translate\" style=\"background-color: orange;\"></dx-button>\r\n    </div>\r\n    <div class=\"card-header\" [hidden]=\"ScanMode\">\r\n      {{'cart' | translate}}\r\n    </div>\r\n    <div class=\"col-auto\" [hidden]=\"ScanMode\">\r\n      <dx-data-grid\r\n  id=\"gridChantier\"\r\n  [dataSource]=\"panierList\"\r\n  keyExpr=\"cartId\"\r\n  [showBorders]=\"true\"\r\n  [title]=\"'myWorksites' | translate\"\r\n>\r\n<dxo-search-panel\r\n[visible]=\"true\"\r\n[highlightCaseSensitive]=\"false\"\r\n></dxo-search-panel>\r\n  <dxo-scrolling rowRenderingMode=\"virtual\"> </dxo-scrolling>\r\n  <dxo-paging [pageSize]=\"6\"> </dxo-paging>\r\n  <dxo-pager\r\n    [visible]=\"true\"\r\n    [allowedPageSizes]=\"allowedPageSizes\"\r\n    displayMode=\"full\"\r\n    [showPageSizeSelector]=\"showPageSizeSelector\"\r\n    [showInfo]=\"showInfo\"\r\n    [showNavigationButtons]=\"showNavButtons\"\r\n  >\r\n  </dxo-pager>\r\n  <dxi-column\r\n  dataField=\"product.productName\"\r\n  [caption]=\"'productName' | translate\"\r\n  >\r\n  </dxi-column>\r\n  <dxi-column\r\n  dataField=\"product.description\"\r\n  [caption]=\"'description' | translate\"\r\n  >\r\n  </dxi-column>\r\n  <dxi-column\r\n  dataField=\"product.priceHtva\"\r\n  [caption]=\"'htvaPrice' | translate\"\r\n  >\r\n  </dxi-column>\r\n  <dxi-column\r\n  dataField=\"quantity\"\r\n  [caption]=\"'quantity' | translate\"\r\n  >\r\n  </dxi-column>\r\n  <dxi-column\r\n  [caption]=\"'totalPrice' | translate\"\r\n  cellTemplate=\"totalTemplate\"\r\n  >\r\n\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let el of 'totalTemplate'\">\r\n    {{el.data.product.priceHtva * el.data.quantity}}\r\n  </div>\r\n</dx-data-grid>\r\n    </div>\r\n    <div [hidden]=\"type=='devis'\">\r\n      <label for=\"imgFactures\" [hidden]=\"!ScanMode\">{{'invoicePicture' | translate}}</label>\r\n    </div>\r\n    <div [hidden]=\"type=='facture'\">\r\n      <label for=\"imgFactures\" [hidden]=\"!ScanMode\">{{'estimatePicture' | translate}}</label>\r\n    </div>\r\n\r\n    <ion-item [hidden]=\"type=='devis'\">\r\n      <ion-label position=\"stacked\" [hidden]=\"!ScanMode\">{{'invoicePicture' | translate}}</ion-label>\r\n    </ion-item>\r\n    <ion-item [hidden]=\"type=='facture'\">\r\n      <ion-label position=\"stacked\" [hidden]=\"!ScanMode\">{{'estimatePicture' | translate}}</ion-label>\r\n    </ion-item>\r\n    <!-- Select File -->\r\n    <input [hidden]=\"!ScanMode\" id=\"imgFactures\" type=\"file\" class=\"form-control\" multiple=\"\"\r\n      (change)=\"onFileChange($event)\">\r\n\r\n    <div *ngFor=\"let img of images\">\r\n      <img [hidden]=\"!ScanMode\" class=\"original\" [alt]=\"img.Name\" [src]=\"img\" height=\"150\" width=\"200px\"\r\n        style=\"margin: 3px;\" />\r\n      <dx-button type=\"submit\" icon=\"fas fa-trash\"(click)=\"resetImages()\" class=\"btn btn-danger\">\r\n      </dx-button>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label>{{'paymentType' | translate}}</ion-label>\r\n      <ion-select interface=\"alert\" okText=\"Ok\" cancelText=\"Annuler\" formControlName=\"typePay\" required=\"required\">\r\n        <ion-select-option value=\"cash\">{{'byCash' | translate}}</ion-select-option>\r\n        <ion-select-option value=\"bancaire\">{{'byBank' | translate}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- articles -->\r\n\r\n    <ion-item class=\"form-group\" required=\"required\">\r\n      <ion-label position=\"stacked\" [hidden]=\"ScanMode\">{{'htvaPrice' | translate}}</ion-label>\r\n      <ion-label position=\"stacked\" [hidden]=\"!ScanMode\">{{'priceToPay' | translate}}</ion-label>\r\n      <ion-input type=\"text\" id=\"htva\" name=\"htva\" formControlName=\"priceHtva\" placeholder=\"124.5\"\r\n      required=\"required\" maxlength=\"12\" [disabled]=\"!ScanMode\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"ScanMode\">\r\n      <ion-label position=\"stacked\">{{'tva' | translate}}</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"ScanMode\" id=\"tva\" name=\"tva\" formControlName=\"tva\" placeholder=\"21.6\"\r\n      required=\"required\" maxlength=\"4\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"form-group\" required=\"required\" [hidden]=\"ScanMode\">\r\n      <ion-label position=\"stacked\">{{'discount' | translate}}</ion-label>\r\n      <ion-input type=\"text\" [hidden]=\"ScanMode\" id=\"remise\" name=\"remise\" formControlName=\"remise\" placeholder=\"10\"\r\n      required=\"required\" maxlength=\"4\"></ion-input>\r\n    </ion-item>\r\n\r\n    <hr>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\r\n      <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\"\r\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <div [hidden]=\"type=='devis'\">\r\n      <dx-button [useSubmitBehavior]=\"true\" style=\"background-color:orange;\" type=\"submit\" [hidden]=\"!ScanMode\" [text]=\"'scanInvoice' | translate\" icon=\"fas fa-paste\"></dx-button>\r\n      <dx-button [useSubmitBehavior]=\"true\" style=\"background-color:orange;\" type=\"submit\" [hidden]=\"ScanMode==true\" [text]=\"'createInvoice' | translate\" icon=\"fas fa-file-invoice\"></dx-button>\r\n    </div>\r\n    <div [hidden]=\"type!='devis'\">\r\n      <dx-button [useSubmitBehavior]=\"true\" style=\"background-color:orange;\" type=\"submit\" [hidden]=\"!ScanMode\" [text]=\"'scanEstimate' | translate\"  icon=\"fas fa-paste\"></dx-button>\r\n      <dx-button [useSubmitBehavior]=\"true\" style=\"background-color:orange;\" type=\"submit\" [hidden]=\"ScanMode==true\" [text]=\"'createEstimate' | translate\" icon=\"fas fa-file-invoice-dollar\"></dx-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_invoice_invoice_module_ts.js.map