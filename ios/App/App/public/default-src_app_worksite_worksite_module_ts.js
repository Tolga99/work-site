(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_worksite_worksite_module_ts"],{

/***/ 15362:
/*!*********************************************!*\
  !*** ./src/app/modal/modal-focus.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdModalFocusModule": () => (/* binding */ NgbdModalFocusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _modal_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-focus */ 18857);







let NgbdModalFocusModule = class NgbdModalFocusModule {
};
NgbdModalFocusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalFocus, _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelArt,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelCat,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelCli,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelDev,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelInv,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalDelChantier,
            _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalEndChantier, _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalConfirmAutofocus, _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalAssign, _modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalExitPage],
        exports: [_modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalFocus],
        bootstrap: [_modal_focus__WEBPACK_IMPORTED_MODULE_1__.NgbdModalFocus]
    })
], NgbdModalFocusModule);



/***/ }),

/***/ 34780:
/*!************************************!*\
  !*** ./src/app/models/chantier.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chantier": () => (/* binding */ Chantier)
/* harmony export */ });
class Chantier {
    constructor(chantierId, worksiteName, 
    //  public clientLastName:string,
    clientId, description, address, dateStart, dateEnd, isFinished, imagesChantier, imagesTicket, factures, devis, hours) {
        this.chantierId = chantierId;
        this.worksiteName = worksiteName;
        this.clientId = clientId;
        this.description = description;
        this.address = address;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.isFinished = isFinished;
        this.imagesChantier = imagesChantier;
        this.imagesTicket = imagesTicket;
        this.factures = factures;
        this.devis = devis;
        this.hours = hours;
    }
}


/***/ }),

/***/ 25812:
/*!*********************************************!*\
  !*** ./src/app/services/methods.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 81727:
/*!*****************************************************!*\
  !*** ./src/app/worksite/worksite-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksiteRoutingModule": () => (/* binding */ WorksiteRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _worksite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worksite */ 82284);




const routes = [
    {
        path: '',
        component: _worksite__WEBPACK_IMPORTED_MODULE_0__.Worksite,
    }
];
let WorksiteRoutingModule = class WorksiteRoutingModule {
};
WorksiteRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], WorksiteRoutingModule);



/***/ }),

/***/ 43045:
/*!*********************************************!*\
  !*** ./src/app/worksite/worksite.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksiteModule": () => (/* binding */ WorksiteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _worksite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worksite */ 82284);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _worksite_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksite-routing.module */ 81727);
/* harmony import */ var _modal_modal_focus_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus.module */ 15362);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);










let WorksiteModule = class WorksiteModule {
};
WorksiteModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_worksite__WEBPACK_IMPORTED_MODULE_0__.Worksite],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _worksite_routing_module__WEBPACK_IMPORTED_MODULE_2__.WorksiteRoutingModule,
            _modal_modal_focus_module__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocusModule,
            _material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        ]
    })
], WorksiteModule);



/***/ }),

/***/ 82284:
/*!**************************************!*\
  !*** ./src/app/worksite/worksite.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Worksite": () => (/* binding */ Worksite)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _worksite_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worksite.html?ngResource */ 72207);
/* harmony import */ var _worksite_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksite.scss?ngResource */ 14111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ 23105);
/* harmony import */ var _models_chantier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/chantier */ 34780);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 19107);
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/pdf.service */ 81735);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/methods.service */ 25812);




















let Worksite = class Worksite {
  constructor(modalS, storageService, router, route, _liveAnnouncer, imgPicker, pdfService, methodsService) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this._liveAnnouncer = _liveAnnouncer;
    this.imgPicker = imgPicker;
    this.pdfService = pdfService;
    this.methodsService = methodsService;
    this.TabView = 'general';
    this.imagesC = [];
    this.imagesT = [];
    this.totalHours = '';
    this.formChantier = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormGroup({
      chantierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      // imgChantier: new FormControl('', [Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl(''),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('')
    });
    this.headElementsInv = ['factureName', 'totalPrice', 'date', 'IsPaid', '...'];
    this.headElementsDev = ['factureName', 'totalPrice', 'date', '...'];
    this.headElementsHour = ['description', 'workTime', 'date', '...'];
    this.headElementsRecv = ['Nom Facture', 'Argent reçu', 'Total', 'Restant', 'Date reception'];
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_7__.NgbdModalFocus(this.modalS);
  }

  applyFilterFacture(event) {
    const filterValue = event.target.value;
    this.dataSourceFacture.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceFacture.paginator) {
      this.dataSourceFacture.paginator.firstPage();
    }
  }

  applyFilterDevis(event) {
    const filterValue = event.target.value;
    this.dataSourceDevis.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDevis.paginator) {
      this.dataSourceDevis.paginator.firstPage();
    }
  }

  applyFilterHeure(event) {
    const filterValue = event.target.value;
    this.dataSourceHeure.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHeure.paginator) {
      this.dataSourceHeure.paginator.firstPage();
    }
  }

  announceSortChangeFacture(sortState) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  announceSortChangeDevis(sortState) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  announceSortChangeHeure(sortState) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  generateUUID() {
    this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID.UUID();
    return this.uuidValue;
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('view did enter');

      _this.storageService.init(); // this.hoursList =await this.storageService.get('Hours='+this.chantierId);
      // this.invList =await this.storageService.get('Invoices='+this.chantierId);
      // this.CalculTotalHour();


      _this.chantierList = yield _this.storageService.get('Chantiers');
      if (_this.chantierList == null) _this.chantierList = new Array();

      if (_this.chantierId != null) {
        if (_this.chantierList.find(a => a.chantierId === _this.chantierId).hours != null) _this.chantier.hours = _this.chantierList.find(a => a.chantierId === _this.chantierId).hours;else _this.chantier.hours = new Array();
        if (_this.chantierList.find(a => a.chantierId === _this.chantierId).factures != null) _this.chantier.factures = _this.chantierList.find(a => a.chantierId === _this.chantierId).factures;else _this.chantier.factures = new Array();
        if (_this.chantierList.find(a => a.chantierId === _this.chantierId).devis != null) _this.chantier.devis = _this.chantierList.find(a => a.chantierId === _this.chantierId).devis;else _this.chantier.devis = new Array();
        _this.dataSourceFacture = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this.chantier.factures);
        _this.dataSourceFacture.paginator = _this.paginatorFacture;
        _this.dataSourceFacture.sort = _this.sortFacture;
        _this.dataSourceDevis = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this.chantier.devis);
        _this.dataSourceDevis.paginator = _this.paginatorDevis;
        _this.dataSourceDevis.sort = _this.sortDevis;
        _this.dataSourceHeure = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this.chantier.hours);
        _this.dataSourceHeure.paginator = _this.paginatorHeure;
        _this.dataSourceHeure.sort = _this.sortHeure;

        _this.CalculTotalHour();

        _this.dataSourceFacture._filterData(_this.dataSourceFacture.data);

        _this.dataSourceFacture.paginator.nextPage();

        console.log('current tab : ', _this.TabView);

        _this.dataSourceHeure.paginator.firstPage();
      }
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const existId = _this2.route.snapshot.paramMap.get('chantierId');

      _this2.chantierId = _this2.route.snapshot.paramMap.get('chantierId');

      _this2.storageService.init(); // this.hoursList =await this.storageService.get('Hours='+this.chantierId);
      // this.invList =await this.storageService.get('Invoices='+this.chantierId);


      _this2.chantierList = yield _this2.storageService.get('Chantiers');
      if (_this2.chantierList == null) _this2.chantierList = new Array();

      if (existId != null) {
        console.log('modification', existId);
        _this2.indexFind = _this2.chantierList.findIndex(x => x.chantierId === existId);

        if (_this2.indexFind >= 0) {
          // this.chantierId= this.chantierList[this.indexFind].chantierId;
          _this2.chantier = new _models_chantier__WEBPACK_IMPORTED_MODULE_4__.Chantier(_this2.chantierList[_this2.indexFind].chantierId, _this2.chantierList[_this2.indexFind].worksiteName, //this.chantierList[this.indexFind].clientLastName,
          _this2.chantierList[_this2.indexFind].clientId, _this2.chantierList[_this2.indexFind].description, _this2.chantierList[_this2.indexFind].address, _this2.chantierList[_this2.indexFind].dateStart, _this2.chantierList[_this2.indexFind].dateEnd, _this2.chantierList[_this2.indexFind].isFinished, _this2.chantierList[_this2.indexFind].imagesChantier, _this2.chantierList[_this2.indexFind].imagesTicket, _this2.chantierList[_this2.indexFind].factures, _this2.chantierList[_this2.indexFind].devis, _this2.chantierList[_this2.indexFind].hours);

          _this2.formChantier.setValue({
            chantierName: _this2.chantierList[_this2.indexFind].worksiteName,
            description: _this2.chantierList[_this2.indexFind].description,
            address: _this2.chantierList[_this2.indexFind].address
          });

          _this2.imagesC = _this2.chantierList[_this2.indexFind].imagesChantier;
          _this2.imagesT = _this2.chantierList[_this2.indexFind].imagesTicket;
          if (!_this2.chantier.factures) _this2.chantier.factures = new Array();
          if (!_this2.chantier.devis) _this2.chantier.devis = new Array();
          if (!_this2.chantier.hours) _this2.chantier.hours = new Array();
          _this2.dataSourceFacture = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this2.chantier.factures);
          _this2.dataSourceFacture.paginator = _this2.paginatorFacture;
          _this2.dataSourceFacture.sort = _this2.sortFacture;
          _this2.dataSourceDevis = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this2.chantier.devis);
          _this2.dataSourceDevis.paginator = _this2.paginatorDevis;
          _this2.dataSourceDevis.sort = _this2.sortDevis;
          _this2.dataSourceHeure = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this2.chantier.hours);
          _this2.dataSourceHeure.paginator = _this2.paginatorHeure;
          _this2.dataSourceHeure.sort = _this2.sortHeure;
        }
      } else console.log('creation', existId);

      _this2.CalculTotalHour();

      console.log('current tab : ', _this2.TabView);
      console.log('chantier', _this2.chantier);
    })();
  }

  get f() {
    return this.formChantier.controls;
  }

  onFileChangeChantier(event) {
    if (this.imagesC == null) this.imagesC = [];

    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = event => {
          console.log(event.target.result);
          this.imagesC.push(event.target.result);
          this.formChantier.patchValue({
            fileSource: this.imagesC
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onFileChangeTicket(event) {
    if (this.imagesT == null) this.imagesT = [];

    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        reader.onload = event => {
          console.log(event.target.result);
          this.imagesT.push(event.target.result);
          this.formChantier.patchValue({
            fileSource: this.imagesT
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  resetImagesC() {
    this.imagesC = [];
  }

  resetImagesT() {
    this.imagesT = [];
  }

  createInvoice() {
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice', {
      chantierId: this.chantierId,
      type: 'facture',
      mode: 'false'
    }]);
  }

  scanInvoice() {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice', {
      chantierId: this.chantierId,
      type: 'facture',
      mode: 'true'
    }]);
  }

  openInvoice(inv) {
    console.log('Bouton open facture', inv.factureId, this.chantierId);
    this.router.navigate(['invoice', {
      factureId: inv.factureId,
      type: 'facture',
      chantierId: this.chantierId
    }]);
  }

  GeneratePDFInvoice(f) {
    this.pdfService.GeneratePDFInvoice(this.chantier, f);
  }

  deleteInvoice(inv) {
    var _this3 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this3.modal.open('delInv', inv.factureName).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;

      if (inv.receivedMoney != null) {
        inv.receivedMoney.forEach(element => {
          _this3.DeleteReceive(inv, element);
        });
      }

      _this3.chantier.factures = _this3.chantier.factures.filter(a => a.factureId !== inv.factureId);

      if (_this3.indexFind >= 0) {
        // this.chantierList.splice(this.indexFind,1);
        _this3.chantierList[_this3.indexFind] = _this3.chantier;
      } else _this3.chantierList.push(_this3.chantier);

      _this3.storageService.set('Chantiers', _this3.chantierList);

      _this3.dataSourceFacture = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this3.chantier.factures);
    })();
  }

  createDevis() {
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice', {
      chantierId: this.chantierId,
      type: 'devis',
      mode: 'false'
    }]);
  }

  scanDevis() {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice', {
      chantierId: this.chantierId,
      type: 'devis',
      mode: 'true'
    }]);
  }

  openDevis(inv) {
    console.log('Bouton open facture', inv.factureId, this.chantierId);
    this.router.navigate(['invoice', {
      factureId: inv.factureId,
      type: 'devis',
      chantierId: this.chantierId
    }]);
  }

  deleteDevis(inv) {
    var _this4 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this4.modal.open('delDev', inv.factureName).then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;
      _this4.chantier.devis = _this4.chantier.devis.filter(a => a.factureId !== inv.factureId);

      if (_this4.indexFind >= 0) {
        // this.chantierList.splice(this.indexFind,1);
        _this4.chantierList[_this4.indexFind] = _this4.chantier;
      } else _this4.chantierList.push(_this4.chantier);

      _this4.storageService.set('Chantiers', _this4.chantierList);

      _this4.dataSourceDevis = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(_this4.chantier.devis);
    })();
  }

  TransformToInvoice(d) {
    const index = this.chantier.devis.findIndex(a => a.factureId === d.factureId);
    this.generateUUID();
    d.factureId = this.uuidValue;
    this.chantier.factures.push(d); // this.chantier.devis.splice(index,1); s'il faut supprimer

    this.chantierList[this.chantierList.findIndex(a => a.chantierId === this.chantier.chantierId)] = this.chantier;
    this.storageService.set('Chantiers', this.chantierList);
    this.dataSourceFacture = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.chantier.factures);
    this.dataSourceFacture.paginator = this.paginatorFacture;
    this.dataSourceFacture.sort = this.sortFacture;
  }

  AddHour() {
    console.log('Bouton nv heure');
    this.router.navigate(['hours', {
      chantierId: this.chantierId
    }]);
    this.CalculTotalHour();
  }

  openHour(h) {
    console.log('Bouton open hour', h.hourId, this.chantierId);
    this.router.navigate(['hours', {
      hourId: h.hourId,
      chantierId: this.chantierId
    }]);
  }

  deleteHour(hour) {
    // this.hoursList = this.hoursList.filter(a => a.hourId != hour.hourId);
    // this.storageService.set("Hours="+this.chantierId, this.hoursList);
    this.chantier.hours = this.chantier.hours.filter(a => a.hourId !== hour.hourId);

    if (this.indexFind >= 0) {
      this.chantierList.splice(this.indexFind, 1);
      this.chantierList[this.indexFind] = this.chantier;
    } else this.chantierList.push(this.chantier);

    this.storageService.set('Chantiers', this.chantierList);
    this.dataSourceHeure = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.chantier.hours);
  }

  AddPayment() {
    this.router.navigate(['payment', {
      chantierId: this.chantierId
    }]);
  }

  SaveChantier() {
    var _this5 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this5.formChantier.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'chantierName') nom = 'Nom chantier';
          invalid.push(nom);
        }
      }

      if (!_this5.formChantier.valid) {
        let res = null;
        yield _this5.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      }

      _this5.chantier = new _models_chantier__WEBPACK_IMPORTED_MODULE_4__.Chantier(_this5.chantier.chantierId, _this5.formChantier.get('chantierName').value, //this.chantier.clientLastName,
      _this5.chantier.clientId, _this5.formChantier.get('description').value, _this5.formChantier.get('address').value, _this5.chantier.dateStart, null, _this5.chantier.isFinished, _this5.imagesC, _this5.imagesT, _this5.chantier.factures, _this5.chantier.devis, _this5.chantier.hours);

      if (_this5.indexFind >= 0) {
        _this5.chantierList.splice(_this5.indexFind, 1);

        _this5.chantierList[_this5.indexFind] = _this5.chantier;
      } else _this5.chantierList.push(_this5.chantier);

      _this5.storageService.set('Chantiers', _this5.chantierList);

      console.log('chantiers saved', _this5.chantierList);

      _this5.router.navigate(['tb-home'], {
        replaceUrl: true
      });
    })();
  }

  FinishChantier() {
    var _this6 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this6.modal.open('endChantier', '').then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return;
    })();
  }

  CalculTotalHour() {
    let hours = 0;
    let minutes = 0;

    if (this.chantier.hours != null) {
      this.chantier.hours.forEach(element => {
        hours += element.hour;
        minutes += element.minute;
      });
      console.log('Heures : ', hours);
      console.log('Minutes : ', minutes);

      while (minutes > 60) {
        minutes -= 60;
        hours++;
      }

      this.totalHours = hours?.toString() + 'h' + minutes?.toString();
      console.log(this.totalHours);
    }
  }

  GoBack() {
    var _this7 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;

      if (!_this7.methodsService.equals(_this7.chantier.worksiteName, _this7.formChantier.get('chantierName').value) || !_this7.methodsService.equals(_this7.chantier.description, _this7.formChantier.get('description').value) || !_this7.methodsService.equals(_this7.chantier.address, _this7.formChantier.get('address').value)) {
        result = yield _this7.GoBackModal();
      }

      console.log(result);
      if (result !== null) _this7.router.navigate(['tb-home'], {
        replaceUrl: true
      });
    })();
  }

  GoBackModal() {
    var _this8 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this8.modal.open('exitPage', '').then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return null;
      return '';
    })();
  }

  ImagePopUp(url) {
    alert(url);
  }

  GetAllReceivedMoney(f) {
    let total = 0;
    if (f.receivedMoney == null) f.receivedMoney = new Array();
    f.receivedMoney.forEach(element => {
      total = element.price + total;
    });
    total = Math.round(total * 100) / 100; // arrondi

    return total;
  }

  DeleteReceive(f, p) {
    console.log(f, p);
    const index = f.receivedMoney.findIndex(a => a.date === p.date && a.price === p.price);
    f.receivedMoney.splice(index, 1);
    this.chantier.factures[this.chantier.factures.findIndex(a => a.factureId === f.factureId)] = f;
    this.chantierList[this.chantierList.findIndex(a => a.chantierId === this.chantierId)] = this.chantier;
    this.storageService.set('Chantiers', this.chantierList);
    console.log('chantiers saved', this.chantierList);
  }

  IsInvoicePaid(f) {
    const total = f.totalPrice;
    let paid = 0;

    if (f.receivedMoney != null) {
      f.receivedMoney.forEach(element => {
        paid += element.price;
      });
    } else return 'PAS DE PAIEMENT';

    if (total > paid) return 'PAIEMENT INCOMPLET';else return 'PAYE';
  }

  SetTabView(newView) {
    console.log('new TabView');
    this.TabView = newView;
  }

  DeleteImage(url) {
    this.imagesT = this.imagesT.filter(a => a !== url);
  }

  DeleteImageChantier(url) {
    this.imagesC = this.imagesC.filter(a => a !== url);
  }

  imagePicker() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };
    this.imgRes = [];
    this.imgPicker.getPictures(this.options).then(results => {
      for (var i = 0; i < results.length; i++) {
        this.imgRes.push('data:image/jpeg;base64,' + results[i]);
      }
    }, error => {
      alert(error);
    });
  }

};

Worksite.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
}, {
  type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.LiveAnnouncer
}, {
  type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__.ImagePicker
}, {
  type: _services_pdf_service__WEBPACK_IMPORTED_MODULE_9__.PdfService
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_10__.MethodsService
}];

Worksite.propDecorators = {
  paginatorFacture: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator]
  }],
  sortFacture: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort]
  }],
  paginatorDevis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator]
  }],
  sortDevis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort]
  }],
  paginatorHeure: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator]
  }],
  sortHeure: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort]
  }]
};
Worksite = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-worksite',
  template: _worksite_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_worksite_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Worksite);


/***/ }),

/***/ 23105:
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


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

/***/ 43015:
/*!*********************************************************************!*\
  !*** ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * 
 *               jsPDF AutoTable plugin v3.5.23
 *
 *               Copyright (c) 2021 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */
!function (t, e) {
  if (true) module.exports = e(function () {
    try {
      return __webpack_require__(/*! jspdf */ 84177);
    } catch (t) {}
  }());else { var o, n; }
}(void 0 !== this ? this : window, function (t) {
  return (() => {
    "use strict";

    var e = {
      662: function (t, e) {
        var n,
            o = this && this.__extends || (n = function (t, e) {
          return (n = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
        }, function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function o() {
            this.constructor = t;
          }

          n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.CellHookData = e.HookData = void 0;

        var r = function (t, e, n) {
          this.table = e, this.pageNumber = e.pageNumber, this.pageCount = this.pageNumber, this.settings = e.settings, this.cursor = n, this.doc = t.getDocument();
        };

        e.HookData = r;

        var i = function (t) {
          function e(e, n, o, r, i, l) {
            var a = t.call(this, e, n, l) || this;
            return a.cell = o, a.row = r, a.column = i, a.section = r.section, a;
          }

          return o(e, t), e;
        }(r);

        e.CellHookData = i;
      },
      790: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var o = n(148),
            r = n(938),
            i = n(323),
            l = n(587),
            a = n(49),
            s = n(858);

        e.default = function (t) {
          t.API.autoTable = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

            1 === e.length ? t = e[0] : (console.error("Use of deprecated autoTable initiation"), (t = e[2] || {}).columns = e[0], t.body = e[1]);
            var o = (0, l.parseInput)(this, t),
                r = (0, s.createTable)(this, o);
            return (0, a.drawTable)(this, r), this;
          }, t.API.lastAutoTable = !1, t.API.previousAutoTable = !1, t.API.autoTable.previous = !1, t.API.autoTableText = function (t, e, n, o) {
            (0, r.default)(t, e, n, o, this);
          }, t.API.autoTableSetDefaults = function (t) {
            return i.DocHandler.setDefaults(t, this), this;
          }, t.autoTableSetDefaults = function (t, e) {
            i.DocHandler.setDefaults(t, e);
          }, t.API.autoTableHtmlToJson = function (t, e) {
            if (void 0 === e && (e = !1), "undefined" == typeof window) return console.error("Cannot run autoTableHtmlToJson in non browser environment"), null;
            var n = new i.DocHandler(this),
                r = (0, o.parseHtml)(n, t, window, e, !1),
                l = r.head,
                a = r.body;
            return {
              columns: l[0].map(function (t) {
                return t.content;
              }),
              rows: a,
              data: a
            };
          }, t.API.autoTableEndPosY = function () {
            console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");
            var t = this.lastAutoTable;
            return t && t.finalY ? t.finalY : 0;
          }, t.API.autoTableAddPageContent = function (e) {
            return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."), t.API.autoTable.globalDefaults || (t.API.autoTable.globalDefaults = {}), t.API.autoTable.globalDefaults.addPageContent = e, this;
          }, t.API.autoTableAddPage = function () {
            return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"), this.addPage(), this;
          };
        };
      },
      938: (t, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (t, e, n, o, r) {
          o = o || {};
          var i = 1.15,
              l = r.internal.scaleFactor,
              a = r.internal.getFontSize() / l,
              s = "",
              u = 1;

          if ("middle" !== o.valign && "bottom" !== o.valign && "center" !== o.halign && "right" !== o.halign || (u = (s = "string" == typeof t ? t.split(/\r\n|\r|\n/g) : t).length || 1), n += a * (2 - i), "middle" === o.valign ? n -= u / 2 * a * i : "bottom" === o.valign && (n -= u * a * i), "center" === o.halign || "right" === o.halign) {
            var d = a;

            if ("center" === o.halign && (d *= .5), s && u >= 1) {
              for (var h = 0; h < s.length; h++) r.text(s[h], e - r.getStringUnitWidth(s[h]) * d, n), n += a * i;

              return r;
            }

            e -= r.getStringUnitWidth(t) * d;
          }

          return "justify" === o.halign ? r.text(t, e, n, {
            maxWidth: o.maxWidth || 100,
            align: "justify"
          }) : r.text(t, e, n), r;
        };
      },
      200: (t, e) => {
        function n(t, e) {
          var n = t > 0,
              o = e || 0 === e;
          return n && o ? "DF" : n ? "S" : o ? "F" : null;
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.parseSpacing = e.getFillStyle = e.addTableBorder = e.getStringWidth = void 0, e.getStringWidth = function (t, e, n) {
          return n.applyStyles(e, !0), (Array.isArray(t) ? t : [t]).map(function (t) {
            return n.getTextWidth(t);
          }).reduce(function (t, e) {
            return Math.max(t, e);
          }, 0);
        }, e.addTableBorder = function (t, e, o, r) {
          var i = e.settings.tableLineWidth,
              l = e.settings.tableLineColor;
          t.applyStyles({
            lineWidth: i,
            lineColor: l
          });
          var a = n(i, !1);
          a && t.rect(o.x, o.y, e.getWidth(t.pageSize().width), r.y - o.y, a);
        }, e.getFillStyle = n, e.parseSpacing = function (t, e) {
          var n, o, r, i;

          if (t = t || e, Array.isArray(t)) {
            if (t.length >= 4) return {
              top: t[0],
              right: t[1],
              bottom: t[2],
              left: t[3]
            };
            if (3 === t.length) return {
              top: t[0],
              right: t[1],
              bottom: t[2],
              left: t[1]
            };
            if (2 === t.length) return {
              top: t[0],
              right: t[1],
              bottom: t[0],
              left: t[1]
            };
            t = 1 === t.length ? t[0] : e;
          }

          return "object" == typeof t ? ("number" == typeof t.vertical && (t.top = t.vertical, t.bottom = t.vertical), "number" == typeof t.horizontal && (t.right = t.horizontal, t.left = t.horizontal), {
            left: null !== (n = t.left) && void 0 !== n ? n : e,
            top: null !== (o = t.top) && void 0 !== o ? o : e,
            right: null !== (r = t.right) && void 0 !== r ? r : e,
            bottom: null !== (i = t.bottom) && void 0 !== i ? i : e
          }) : ("number" != typeof t && (t = e), {
            top: t,
            right: t,
            bottom: t,
            left: t
          });
        };
      },
      913: function (t, e) {
        var n,
            o = this && this.__extends || (n = function (t, e) {
          return (n = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
        }, function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function o() {
            this.constructor = t;
          }

          n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.getTheme = e.defaultStyles = e.HtmlRowInput = e.FONT_ROW_RATIO = void 0, e.FONT_ROW_RATIO = 1.15;

        var r = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n._element = e, n;
          }

          return o(e, t), e;
        }(Array);

        e.HtmlRowInput = r, e.defaultStyles = function (t) {
          return {
            font: "helvetica",
            fontStyle: "normal",
            overflow: "linebreak",
            fillColor: !1,
            textColor: 20,
            halign: "left",
            valign: "top",
            fontSize: 10,
            cellPadding: 5 / t,
            lineColor: 200,
            lineWidth: 0,
            cellWidth: "auto",
            minCellHeight: 0,
            minCellWidth: 0
          };
        }, e.getTheme = function (t) {
          return {
            striped: {
              table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: "normal"
              },
              head: {
                textColor: 255,
                fillColor: [41, 128, 185],
                fontStyle: "bold"
              },
              body: {},
              foot: {
                textColor: 255,
                fillColor: [41, 128, 185],
                fontStyle: "bold"
              },
              alternateRow: {
                fillColor: 245
              }
            },
            grid: {
              table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: "normal",
                lineWidth: .1
              },
              head: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: "bold",
                lineWidth: 0
              },
              body: {},
              foot: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: "bold",
                lineWidth: 0
              },
              alternateRow: {}
            },
            plain: {
              head: {
                fontStyle: "bold"
              },
              foot: {
                fontStyle: "bold"
              }
            }
          }[t];
        };
      },
      259: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.parseCss = void 0;
        var o = n(200);

        function r(t, e) {
          var n = i(t, e);
          if (!n) return null;
          var o = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
          if (!o || !Array.isArray(o)) return null;
          var r = [parseInt(o[1]), parseInt(o[2]), parseInt(o[3])];
          return 0 === parseInt(o[4]) || isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r;
        }

        function i(t, e) {
          var n = e(t);
          return "rgba(0, 0, 0, 0)" === n || "transparent" === n || "initial" === n || "inherit" === n ? null == t.parentElement ? null : i(t.parentElement, e) : n;
        }

        e.parseCss = function (t, e, n, i, l) {
          var a = {},
              s = 96 / 72,
              u = r(e, function (t) {
            return l.getComputedStyle(t).backgroundColor;
          });
          null != u && (a.fillColor = u);
          var d = r(e, function (t) {
            return l.getComputedStyle(t).color;
          });
          null != d && (a.textColor = d);
          var h = r(e, function (t) {
            return l.getComputedStyle(t).borderTopColor;
          });
          null != h && (a.lineColor = h);

          var c = function (t, e) {
            var n = [t.paddingTop, t.paddingRight, t.paddingBottom, t.paddingLeft],
                r = 96 / (72 / e),
                i = (parseInt(t.lineHeight) - parseInt(t.fontSize)) / e / 2,
                l = n.map(function (t) {
              return parseInt(t || "0") / r;
            }),
                a = (0, o.parseSpacing)(l, 0);
            i > a.top && (a.top = i);
            i > a.bottom && (a.bottom = i);
            return a;
          }(i, n);

          c && (a.cellPadding = c);
          var f = parseInt(i.borderTopWidth || "");
          (f = f / s / n) && (a.lineWidth = f);
          var p = ["left", "right", "center", "justify"];
          -1 !== p.indexOf(i.textAlign) && (a.halign = i.textAlign), -1 !== (p = ["middle", "bottom", "top"]).indexOf(i.verticalAlign) && (a.valign = i.verticalAlign);
          var g = parseInt(i.fontSize || "");
          isNaN(g) || (a.fontSize = g / s);

          var y = function (t) {
            var e = "";
            ("bold" === t.fontWeight || "bolder" === t.fontWeight || parseInt(t.fontWeight) >= 700) && (e = "bold");
            "italic" !== t.fontStyle && "oblique" !== t.fontStyle || (e += "italic");
            return e;
          }(i);

          y && (a.fontStyle = y);
          var v = (i.fontFamily || "").toLowerCase();
          return -1 !== t.indexOf(v) && (a.font = v), a;
        };
      },
      323: (t, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.DocHandler = void 0;

        var n = {},
            o = function () {
          function t(t) {
            this.jsPDFDocument = t, this.userStyles = {
              textColor: t.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
              fontSize: t.internal.getFontSize(),
              fontStyle: t.internal.getFont().fontStyle,
              font: t.internal.getFont().fontName
            };
          }

          return t.setDefaults = function (t, e) {
            void 0 === e && (e = null), e ? e.__autoTableDocumentDefaults = t : n = t;
          }, t.unifyColor = function (t) {
            return Array.isArray(t) ? t : "number" == typeof t ? [t, t, t] : "string" == typeof t ? [t] : null;
          }, t.prototype.applyStyles = function (e, n) {
            var o, r, i;
            void 0 === n && (n = !1), e.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(e.fontStyle);
            var l = this.jsPDFDocument.internal.getFont(),
                a = l.fontStyle,
                s = l.fontName;

            if (e.font && (s = e.font), e.fontStyle) {
              a = e.fontStyle;
              var u = this.getFontList()[s];
              u && -1 === u.indexOf(a) && (this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(u[0]), a = u[0]);
            }

            if (this.jsPDFDocument.setFont(s, a), e.fontSize && this.jsPDFDocument.setFontSize(e.fontSize), !n) {
              var d = t.unifyColor(e.fillColor);
              d && (o = this.jsPDFDocument).setFillColor.apply(o, d), (d = t.unifyColor(e.textColor)) && (r = this.jsPDFDocument).setTextColor.apply(r, d), (d = t.unifyColor(e.lineColor)) && (i = this.jsPDFDocument).setDrawColor.apply(i, d), "number" == typeof e.lineWidth && this.jsPDFDocument.setLineWidth(e.lineWidth);
            }
          }, t.prototype.splitTextToSize = function (t, e, n) {
            return this.jsPDFDocument.splitTextToSize(t, e, n);
          }, t.prototype.rect = function (t, e, n, o, r) {
            return this.jsPDFDocument.rect(t, e, n, o, r);
          }, t.prototype.getLastAutoTable = function () {
            return this.jsPDFDocument.lastAutoTable || null;
          }, t.prototype.getTextWidth = function (t) {
            return this.jsPDFDocument.getTextWidth(t);
          }, t.prototype.getDocument = function () {
            return this.jsPDFDocument;
          }, t.prototype.setPage = function (t) {
            this.jsPDFDocument.setPage(t);
          }, t.prototype.addPage = function () {
            return this.jsPDFDocument.addPage();
          }, t.prototype.getFontList = function () {
            return this.jsPDFDocument.getFontList();
          }, t.prototype.getGlobalOptions = function () {
            return n || {};
          }, t.prototype.getDocumentOptions = function () {
            return this.jsPDFDocument.__autoTableDocumentDefaults || {};
          }, t.prototype.pageSize = function () {
            var t = this.jsPDFDocument.internal.pageSize;
            return null == t.width && (t = {
              width: t.getWidth(),
              height: t.getHeight()
            }), t;
          }, t.prototype.scaleFactor = function () {
            return this.jsPDFDocument.internal.scaleFactor;
          }, t.prototype.pageNumber = function () {
            var t = this.jsPDFDocument.internal.getCurrentPageInfo();
            return t ? t.pageNumber : this.jsPDFDocument.internal.getNumberOfPages();
          }, t;
        }();

        e.DocHandler = o;
      },
      148: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.parseHtml = void 0;
        var o = n(259),
            r = n(913);

        function i(t, e, n, i, a, s) {
          for (var u = new r.HtmlRowInput(i), d = 0; d < i.cells.length; d++) {
            var h = i.cells[d],
                c = n.getComputedStyle(h);

            if (a || "none" !== c.display) {
              var f = void 0;
              s && (f = (0, o.parseCss)(t, h, e, c, n)), u.push({
                rowSpan: h.rowSpan,
                colSpan: h.colSpan,
                styles: f,
                _element: h,
                content: l(h)
              });
            }
          }

          var p = n.getComputedStyle(i);
          if (u.length > 0 && (a || "none" !== p.display)) return u;
        }

        function l(t) {
          var e = t.cloneNode(!0);
          return e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/ +/g, " "), e.innerHTML = e.innerHTML.split(/\<br.*?\>/).map(function (t) {
            return t.trim();
          }).join("\n"), e.innerText || e.textContent || "";
        }

        e.parseHtml = function (t, e, n, o, r) {
          var l, a, s;
          void 0 === o && (o = !1), void 0 === r && (r = !1), s = "string" == typeof e ? n.document.querySelector(e) : e;
          var u = Object.keys(t.getFontList()),
              d = t.scaleFactor(),
              h = [],
              c = [],
              f = [];
          if (!s) return console.error("Html table could not be found with input: ", e), {
            head: h,
            body: c,
            foot: f
          };

          for (var p = 0; p < s.rows.length; p++) {
            var g = s.rows[p],
                y = null === (a = null === (l = null == g ? void 0 : g.parentElement) || void 0 === l ? void 0 : l.tagName) || void 0 === a ? void 0 : a.toLowerCase(),
                v = i(u, d, n, g, o, r);
            v && ("thead" === y ? h.push(v) : "tfoot" === y ? f.push(v) : c.push(v));
          }

          return {
            head: h,
            body: c,
            foot: f
          };
        };
      },
      587: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.parseInput = void 0;
        var o = n(148),
            r = n(360),
            i = n(200),
            l = n(323),
            a = n(291);

        function s(t, e, n) {
          var o = t[0] || e[0] || n[0] || [],
              r = [];
          return Object.keys(o).filter(function (t) {
            return "_element" !== t;
          }).forEach(function (t) {
            var e,
                n = 1;
            "object" != typeof (e = Array.isArray(o) ? o[parseInt(t)] : o[t]) || Array.isArray(e) || (n = (null == e ? void 0 : e.colSpan) || 1);

            for (var i = 0; i < n; i++) {
              var l = {
                dataKey: Array.isArray(o) ? r.length : t + (i > 0 ? "_" + i : "")
              };
              r.push(l);
            }
          }), r;
        }

        e.parseInput = function (t, e) {
          var n = new l.DocHandler(t),
              u = n.getDocumentOptions(),
              d = n.getGlobalOptions();
          (0, a.default)(n, d, u, e);
          var h,
              c = (0, r.assign)({}, d, u, e);
          "undefined" != typeof window && (h = window);

          var f = function (t, e, n) {
            for (var o = {
              styles: {},
              headStyles: {},
              bodyStyles: {},
              footStyles: {},
              alternateRowStyles: {},
              columnStyles: {}
            }, i = function (i) {
              if ("columnStyles" === i) {
                var l = t[i],
                    a = e[i],
                    s = n[i];
                o.columnStyles = (0, r.assign)({}, l, a, s);
              } else {
                var u = [t, e, n].map(function (t) {
                  return t[i] || {};
                });
                o[i] = (0, r.assign)({}, u[0], u[1], u[2]);
              }
            }, l = 0, a = Object.keys(o); l < a.length; l++) {
              i(a[l]);
            }

            return o;
          }(d, u, e),
              p = function (t, e, n) {
            for (var o = {
              didParseCell: [],
              willDrawCell: [],
              didDrawCell: [],
              didDrawPage: []
            }, r = 0, i = [t, e, n]; r < i.length; r++) {
              var l = i[r];
              l.didParseCell && o.didParseCell.push(l.didParseCell), l.willDrawCell && o.willDrawCell.push(l.willDrawCell), l.didDrawCell && o.didDrawCell.push(l.didDrawCell), l.didDrawPage && o.didDrawPage.push(l.didDrawPage);
            }

            return o;
          }(d, u, e),
              g = function (t, e) {
            var n,
                o,
                r,
                l,
                a,
                s,
                u,
                d,
                h,
                c,
                f,
                p,
                g,
                y = (0, i.parseSpacing)(e.margin, 40 / t.scaleFactor()),
                v = null !== (n = function (t, e) {
              var n = t.getLastAutoTable(),
                  o = t.scaleFactor(),
                  r = t.pageNumber(),
                  i = !1;

              if (n && n.startPageNumber) {
                i = n.startPageNumber + n.pageNumber - 1 === r;
              }

              if ("number" == typeof e) return e;
              if ((null == e || !1 === e) && i && null != (null == n ? void 0 : n.finalY)) return n.finalY + 20 / o;
              return null;
            }(t, e.startY)) && void 0 !== n ? n : y.top;
            p = !0 === e.showFoot ? "everyPage" : !1 === e.showFoot ? "never" : null !== (o = e.showFoot) && void 0 !== o ? o : "everyPage";
            g = !0 === e.showHead ? "everyPage" : !1 === e.showHead ? "never" : null !== (r = e.showHead) && void 0 !== r ? r : "everyPage";
            var m = null !== (l = e.useCss) && void 0 !== l && l,
                b = e.theme || (m ? "plain" : "striped"),
                w = !!e.horizontalPageBreak,
                S = null !== (a = e.horizontalPageBreakRepeat) && void 0 !== a ? a : null;
            return {
              includeHiddenHtml: null !== (s = e.includeHiddenHtml) && void 0 !== s && s,
              useCss: m,
              theme: b,
              startY: v,
              margin: y,
              pageBreak: null !== (u = e.pageBreak) && void 0 !== u ? u : "auto",
              rowPageBreak: null !== (d = e.rowPageBreak) && void 0 !== d ? d : "auto",
              tableWidth: null !== (h = e.tableWidth) && void 0 !== h ? h : "auto",
              showHead: g,
              showFoot: p,
              tableLineWidth: null !== (c = e.tableLineWidth) && void 0 !== c ? c : 0,
              tableLineColor: null !== (f = e.tableLineColor) && void 0 !== f ? f : 200,
              horizontalPageBreak: w,
              horizontalPageBreakRepeat: S
            };
          }(n, c),
              y = function (t, e, n) {
            var r = e.head || [],
                i = e.body || [],
                l = e.foot || [];

            if (e.html) {
              var a = e.includeHiddenHtml;

              if (n) {
                var u = (0, o.parseHtml)(t, e.html, n, a, e.useCss) || {};
                r = u.head || r, i = u.body || r, l = u.foot || r;
              } else console.error("Cannot parse html in non browser environment");
            }

            return {
              columns: e.columns || s(r, i, l),
              head: r,
              body: i,
              foot: l
            };
          }(n, c, h);

          return {
            id: e.tableId,
            content: y,
            hooks: p,
            styles: f,
            settings: g
          };
        };
      },
      291: (t, e) => {
        function n(t) {
          t.rowHeight ? (console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."), t.minCellHeight || (t.minCellHeight = t.rowHeight)) : t.columnWidth && (console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."), t.cellWidth || (t.cellWidth = t.columnWidth));
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (t, e, o, r) {
          for (var i = function (e) {
            e && "object" != typeof e && console.error("The options parameter should be of type object, is: " + typeof e), void 0 !== e.extendWidth && (e.tableWidth = e.extendWidth ? "auto" : "wrap", console.error("Use of deprecated option: extendWidth, use tableWidth instead.")), void 0 !== e.margins && (void 0 === e.margin && (e.margin = e.margins), console.error("Use of deprecated option: margins, use margin instead.")), e.startY && "number" != typeof e.startY && (console.error("Invalid value for startY option", e.startY), delete e.startY), !e.didDrawPage && (e.afterPageContent || e.beforePageContent || e.afterPageAdd) && (console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"), e.didDrawPage = function (n) {
              t.applyStyles(t.userStyles), e.beforePageContent && e.beforePageContent(n), t.applyStyles(t.userStyles), e.afterPageContent && e.afterPageContent(n), t.applyStyles(t.userStyles), e.afterPageAdd && n.pageNumber > 1 && n.afterPageAdd(n), t.applyStyles(t.userStyles);
            }), ["createdHeaderCell", "drawHeaderRow", "drawRow", "drawHeaderCell"].forEach(function (t) {
              e[t] && console.error('The "' + t + '" hook has changed in version 3.0, check the changelog for how to migrate.');
            }), [["showFoot", "showFooter"], ["showHead", "showHeader"], ["didDrawPage", "addPageContent"], ["didParseCell", "createdCell"], ["headStyles", "headerStyles"]].forEach(function (t) {
              var n = t[0],
                  o = t[1];
              e[o] && (console.error("Use of deprecated option " + o + ". Use " + n + " instead"), e[n] = e[o]);
            }), [["padding", "cellPadding"], ["lineHeight", "rowHeight"], "fontSize", "overflow"].forEach(function (t) {
              var n = "string" == typeof t ? t : t[0],
                  o = "string" == typeof t ? t : t[1];
              void 0 !== e[n] && (void 0 === e.styles[o] && (e.styles[o] = e[n]), console.error("Use of deprecated option: " + n + ", use the style " + o + " instead."));
            });

            for (var o = 0, r = ["styles", "bodyStyles", "headStyles", "footStyles"]; o < r.length; o++) {
              n(e[r[o]] || {});
            }

            for (var i = e.columnStyles || {}, l = 0, a = Object.keys(i); l < a.length; l++) {
              n(i[a[l]] || {});
            }
          }, l = 0, a = [e, o, r]; l < a.length; l++) {
            i(a[l]);
          }
        };
      },
      287: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Column = e.Cell = e.Row = e.Table = void 0;

        var o = n(913),
            r = n(662),
            i = n(200),
            l = function () {
          function t(t, e) {
            this.pageNumber = 1, this.pageCount = 1, this.id = t.id, this.settings = t.settings, this.styles = t.styles, this.hooks = t.hooks, this.columns = e.columns, this.head = e.head, this.body = e.body, this.foot = e.foot;
          }

          return t.prototype.getHeadHeight = function (t) {
            return this.head.reduce(function (e, n) {
              return e + n.getMaxCellHeight(t);
            }, 0);
          }, t.prototype.getFootHeight = function (t) {
            return this.foot.reduce(function (e, n) {
              return e + n.getMaxCellHeight(t);
            }, 0);
          }, t.prototype.allRows = function () {
            return this.head.concat(this.body).concat(this.foot);
          }, t.prototype.callCellHooks = function (t, e, n, o, i, l) {
            for (var a = 0, s = e; a < s.length; a++) {
              var u = !1 === (0, s[a])(new r.CellHookData(t, this, n, o, i, l));
              if (n.text = Array.isArray(n.text) ? n.text : [n.text], u) return !1;
            }

            return !0;
          }, t.prototype.callEndPageHooks = function (t, e) {
            t.applyStyles(t.userStyles);

            for (var n = 0, o = this.hooks.didDrawPage; n < o.length; n++) {
              (0, o[n])(new r.HookData(t, this, e));
            }
          }, t.prototype.getWidth = function (t) {
            if ("number" == typeof this.settings.tableWidth) return this.settings.tableWidth;
            if ("wrap" === this.settings.tableWidth) return this.columns.reduce(function (t, e) {
              return t + e.wrappedWidth;
            }, 0);
            var e = this.settings.margin;
            return t - e.left - e.right;
          }, t;
        }();

        e.Table = l;

        var a = function () {
          function t(t, e, n, r, i) {
            void 0 === i && (i = !1), this.height = 0, this.raw = t, t instanceof o.HtmlRowInput && (this.raw = t._element, this.element = t._element), this.index = e, this.section = n, this.cells = r, this.spansMultiplePages = i;
          }

          return t.prototype.getMaxCellHeight = function (t) {
            var e = this;
            return t.reduce(function (t, n) {
              var o;
              return Math.max(t, (null === (o = e.cells[n.index]) || void 0 === o ? void 0 : o.height) || 0);
            }, 0);
          }, t.prototype.hasRowSpan = function (t) {
            var e = this;
            return t.filter(function (t) {
              var n = e.cells[t.index];
              return !!n && n.rowSpan > 1;
            }).length > 0;
          }, t.prototype.canEntireRowFit = function (t, e) {
            return this.getMaxCellHeight(e) <= t;
          }, t.prototype.getMinimumRowHeight = function (t, e) {
            var n = this;
            return t.reduce(function (t, r) {
              var i = n.cells[r.index];
              if (!i) return 0;
              var l = i.styles.fontSize / e.scaleFactor() * o.FONT_ROW_RATIO,
                  a = i.padding("vertical") + l;
              return a > t ? a : t;
            }, 0);
          }, t;
        }();

        e.Row = a;

        var s = function () {
          function t(t, e, n) {
            var o, r;
            this.contentHeight = 0, this.contentWidth = 0, this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0, this.styles = e, this.section = n, this.raw = t;
            var i = t;
            null == t || "object" != typeof t || Array.isArray(t) ? (this.rowSpan = 1, this.colSpan = 1) : (this.rowSpan = t.rowSpan || 1, this.colSpan = t.colSpan || 1, i = null !== (r = null !== (o = t.content) && void 0 !== o ? o : t.title) && void 0 !== r ? r : t, t._element && (this.raw = t._element));
            var l = null != i ? "" + i : "";
            this.text = l.split(/\r\n|\r|\n/g);
          }

          return t.prototype.getTextPos = function () {
            var t, e;
            if ("top" === this.styles.valign) t = this.y + this.padding("top");else if ("bottom" === this.styles.valign) t = this.y + this.height - this.padding("bottom");else {
              var n = this.height - this.padding("vertical");
              t = this.y + n / 2 + this.padding("top");
            }
            if ("right" === this.styles.halign) e = this.x + this.width - this.padding("right");else if ("center" === this.styles.halign) {
              var o = this.width - this.padding("horizontal");
              e = this.x + o / 2 + this.padding("left");
            } else e = this.x + this.padding("left");
            return {
              x: e,
              y: t
            };
          }, t.prototype.getContentHeight = function (t) {
            var e = (Array.isArray(this.text) ? this.text.length : 1) * (this.styles.fontSize / t * o.FONT_ROW_RATIO) + this.padding("vertical");
            return Math.max(e, this.styles.minCellHeight);
          }, t.prototype.padding = function (t) {
            var e = (0, i.parseSpacing)(this.styles.cellPadding, 0);
            return "vertical" === t ? e.top + e.bottom : "horizontal" === t ? e.left + e.right : e[t];
          }, t;
        }();

        e.Cell = s;

        var u = function () {
          function t(t, e, n) {
            this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.dataKey = t, this.raw = e, this.index = n;
          }

          return t.prototype.getMaxCustomCellWidth = function (t) {
            for (var e = 0, n = 0, o = t.allRows(); n < o.length; n++) {
              var r = o[n].cells[this.index];
              r && "number" == typeof r.styles.cellWidth && (e = Math.max(e, r.styles.cellWidth));
            }

            return e;
          }, t;
        }();

        e.Column = u;
      },
      360: (t, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.assign = void 0, e.assign = function (t, e, n, o, r) {
          if (null == t) throw new TypeError("Cannot convert undefined or null to object");

          for (var i = Object(t), l = 1; l < arguments.length; l++) {
            var a = arguments[l];
            if (null != a) for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s]);
          }

          return i;
        };
      },
      858: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.createTable = void 0;
        var o = n(323),
            r = n(287),
            i = n(189),
            l = n(913),
            a = n(360);

        function s(t, e, n, o, i, l) {
          var a = {};
          return e.map(function (e, s) {
            for (var u = 0, h = {}, c = 0, f = 0, p = 0, g = n; p < g.length; p++) {
              var y = g[p];
              if (null == a[y.index] || 0 === a[y.index].left) {
                if (0 === f) {
                  var v = void 0,
                      m = {};
                  "object" != typeof (v = Array.isArray(e) ? e[y.index - c - u] : e[y.dataKey]) || Array.isArray(v) || (m = (null == v ? void 0 : v.styles) || {});
                  var b = d(t, y, s, i, o, l, m),
                      w = new r.Cell(v, b, t);
                  h[y.dataKey] = w, h[y.index] = w, f = w.colSpan - 1, a[y.index] = {
                    left: w.rowSpan - 1,
                    times: f
                  };
                } else f--, c++;
              } else a[y.index].left--, f = a[y.index].times, u++;
            }

            return new r.Row(e, s, t, h);
          });
        }

        function u(t, e) {
          var n = {};
          return t.forEach(function (t) {
            if (null != t.raw) {
              var o = function (t, e) {
                if ("head" === t) {
                  if ("object" == typeof e) return e.header || e.title || null;
                  if ("string" == typeof e || "number" == typeof e) return e;
                } else if ("foot" === t && "object" == typeof e) return e.footer;

                return null;
              }(e, t.raw);

              null != o && (n[t.dataKey] = o);
            }
          }), Object.keys(n).length > 0 ? n : null;
        }

        function d(t, e, n, o, r, i, s) {
          var u,
              d = (0, l.getTheme)(o);
          "head" === t ? u = r.headStyles : "body" === t ? u = r.bodyStyles : "foot" === t && (u = r.footStyles);
          var h = (0, a.assign)({}, d.table, d[t], r.styles, u),
              c = r.columnStyles[e.dataKey] || r.columnStyles[e.index] || {},
              f = "body" === t ? c : {},
              p = "body" === t && n % 2 == 0 ? (0, a.assign)({}, d.alternateRow, r.alternateRowStyles) : {},
              g = (0, l.defaultStyles)(i),
              y = (0, a.assign)({}, g, h, p, f);
          return (0, a.assign)(y, s);
        }

        e.createTable = function (t, e) {
          var n = new o.DocHandler(t),
              l = function (t, e) {
            var n = t.content,
                o = function (t) {
              return t.map(function (t, e) {
                var n, o, i;
                return i = "object" == typeof t && null !== (o = null !== (n = t.dataKey) && void 0 !== n ? n : t.key) && void 0 !== o ? o : e, new r.Column(i, t, e);
              });
            }(n.columns);

            if (0 === n.head.length) {
              (i = u(o, "head")) && n.head.push(i);
            }

            if (0 === n.foot.length) {
              var i;
              (i = u(o, "foot")) && n.foot.push(i);
            }

            var l = t.settings.theme,
                a = t.styles;
            return {
              columns: o,
              head: s("head", n.head, o, a, l, e),
              body: s("body", n.body, o, a, l, e),
              foot: s("foot", n.foot, o, a, l, e)
            };
          }(e, n.scaleFactor()),
              a = new r.Table(e, l);

          return (0, i.calculateWidths)(n, a), n.applyStyles(n.userStyles), a;
        };
      },
      49: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.addPage = e.drawTable = void 0;
        var o = n(913),
            r = n(200),
            i = n(287),
            l = n(323),
            a = n(360),
            s = n(938),
            u = n(435);

        function d(t, e, n) {
          var r = t.styles.fontSize / n.scaleFactor() * o.FONT_ROW_RATIO,
              i = t.padding("vertical"),
              l = Math.floor((e - i) / r);
          return Math.max(0, l);
        }

        function h(t, e, n, o, r, l, s) {
          var u = function (t, e, n, o) {
            var r = e.settings.margin.bottom,
                i = e.settings.showFoot;
            ("everyPage" === i || "lastPage" === i && n) && (r += e.getFootHeight(e.columns));
            return t.pageSize().height - o.y - r;
          }(t, e, o, l);

          if (n.canEntireRowFit(u, s)) c(t, e, n, l, s);else if (function (t, e, n, o) {
            var r = t.pageSize().height,
                i = o.settings.margin,
                l = r - (i.top + i.bottom);
            "body" === e.section && (l -= o.getHeadHeight(o.columns) + o.getFootHeight(o.columns));
            var a = e.getMinimumRowHeight(o.columns, t),
                s = a < n;
            if (a > l) return console.error("Will not be able to print row " + e.index + " correctly since it's minimum height is larger than page height"), !0;
            if (!s) return !1;
            var u = e.hasRowSpan(o.columns);
            return e.getMaxCellHeight(o.columns) > l ? (u && console.error("The content of row " + e.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported."), !0) : !u && "avoid" !== o.settings.rowPageBreak;
          }(t, n, u, e)) {
            var f = function (t, e, n, o) {
              var r = {};
              t.spansMultiplePages = !0, t.height = 0;

              for (var l = 0, s = 0, u = n.columns; s < u.length; s++) {
                var h = u[s];

                if (m = t.cells[h.index]) {
                  Array.isArray(m.text) || (m.text = [m.text]);
                  var c = new i.Cell(m.raw, m.styles, m.section);
                  (c = (0, a.assign)(c, m)).text = [];
                  var f = d(m, e, o);
                  m.text.length > f && (c.text = m.text.splice(f, m.text.length));
                  var p = o.scaleFactor();
                  m.contentHeight = m.getContentHeight(p), m.contentHeight >= e && (m.contentHeight = e, c.styles.minCellHeight -= e), m.contentHeight > t.height && (t.height = m.contentHeight), c.contentHeight = c.getContentHeight(p), c.contentHeight > l && (l = c.contentHeight), r[h.index] = c;
                }
              }

              var g = new i.Row(t.raw, -1, t.section, r, !0);
              g.height = l;

              for (var y = 0, v = n.columns; y < v.length; y++) {
                var m;
                h = v[y], (c = g.cells[h.index]) && (c.height = g.height), (m = t.cells[h.index]) && (m.height = t.height);
              }

              return g;
            }(n, u, e, t);

            c(t, e, n, l, s), p(t, e, r, l, s), h(t, e, f, o, r, l, s);
          } else p(t, e, r, l, s), h(t, e, n, o, r, l, s);
        }

        function c(t, e, n, o, r) {
          o.x = e.settings.margin.left;

          for (var i = 0, l = r; i < l.length; i++) {
            var a = l[i],
                u = n.cells[a.index];
            if (u) {
              if (t.applyStyles(u.styles), u.x = o.x, u.y = o.y, !1 !== e.callCellHooks(t, e.hooks.willDrawCell, u, n, a, o)) {
                f(t, u, o);
                var d = u.getTextPos();
                (0, s.default)(u.text, d.x, d.y, {
                  halign: u.styles.halign,
                  valign: u.styles.valign,
                  maxWidth: Math.ceil(u.width - u.padding("left") - u.padding("right"))
                }, t.getDocument()), e.callCellHooks(t, e.hooks.didDrawCell, u, n, a, o), o.x += a.width;
              } else o.x += a.width;
            } else o.x += a.width;
          }

          o.y += n.height;
        }

        function f(t, e, n) {
          var o = e.styles;

          if (t.getDocument().setFillColor(t.getDocument().getFillColor()), "number" == typeof o.lineWidth) {
            var i = (0, r.getFillStyle)(o.lineWidth, o.fillColor);
            i && t.rect(e.x, n.y, e.width, e.height, i);
          } else if ("object" == typeof o.lineWidth) {
            t.rect(e.x, n.y, e.width, e.height, "F");
            var l = Object.keys(o.lineWidth),
                a = o.lineWidth;
            l.map(function (i) {
              var l = (0, r.getFillStyle)(a[i], o.fillColor);
              !function (t, e, n, o, r, i) {
                var l, a, s, u;

                switch (o) {
                  case "top":
                    l = n.x, a = n.y, s = n.x + e.width, u = n.y;
                    break;

                  case "left":
                    l = n.x, a = n.y, s = n.x, u = n.y + e.height;
                    break;

                  case "right":
                    l = n.x + e.width, a = n.y, s = n.x + e.width, u = n.y + e.height;
                    break;

                  default:
                    l = n.x, a = n.y + e.height - i, s = n.x + e.width, u = n.y + e.height - i;
                }

                t.getDocument().setLineWidth(i), t.getDocument().line(l, a, s, u, r);
              }(t, e, n, i, l || "S", a[i]);
            });
          }
        }

        function p(t, e, n, o, i) {
          void 0 === i && (i = []), t.applyStyles(t.userStyles), "everyPage" === e.settings.showFoot && e.foot.forEach(function (n) {
            return c(t, e, n, o, i);
          }), e.callEndPageHooks(t, o);
          var l = e.settings.margin;
          (0, r.addTableBorder)(t, e, n, o), g(t), e.pageNumber++, e.pageCount++, o.x = l.left, o.y = l.top, n.y = l.top, "everyPage" === e.settings.showHead && e.head.forEach(function (n) {
            return c(t, e, n, o, i);
          });
        }

        function g(t) {
          var e = t.pageNumber();
          t.setPage(e + 1), t.pageNumber() === e && t.addPage();
        }

        e.drawTable = function (t, e) {
          var n = e.settings,
              o = n.startY,
              i = n.margin,
              s = {
            x: i.left,
            y: o
          },
              d = e.getHeadHeight(e.columns) + e.getFootHeight(e.columns),
              f = o + i.bottom + d;
          "avoid" === n.pageBreak && (f += e.allRows().reduce(function (t, e) {
            return t + e.height;
          }, 0));
          var y = new l.DocHandler(t);
          ("always" === n.pageBreak || null != n.startY && f > y.pageSize().height) && (g(y), s.y = i.top);
          var v = (0, a.assign)({}, s);
          e.startPageNumber = y.pageNumber(), !0 === n.horizontalPageBreak ? function (t, e, n, o) {
            u.default.calculateAllColumnsCanFitInPage(t, e).map(function (r, i) {
              t.applyStyles(t.userStyles), i > 0 ? p(t, e, n, o, r.columns) : function (t, e, n, o) {
                var r = e.settings;
                t.applyStyles(t.userStyles), ("firstPage" === r.showHead || "everyPage" === r.showHead) && e.head.forEach(function (r) {
                  return c(t, e, r, n, o);
                });
              }(t, e, o, r.columns), function (t, e, n, o, r) {
                t.applyStyles(t.userStyles), e.body.forEach(function (i, l) {
                  var a = l === e.body.length - 1;
                  h(t, e, i, a, n, o, r);
                });
              }(t, e, n, o, r.columns), function (t, e, n, o) {
                var r = e.settings;
                t.applyStyles(t.userStyles), ("lastPage" === r.showFoot || "everyPage" === r.showFoot) && e.foot.forEach(function (r) {
                  return c(t, e, r, n, o);
                });
              }(t, e, o, r.columns);
            });
          }(y, e, v, s) : (y.applyStyles(y.userStyles), "firstPage" !== n.showHead && "everyPage" !== n.showHead || e.head.forEach(function (t) {
            return c(y, e, t, s, e.columns);
          }), y.applyStyles(y.userStyles), e.body.forEach(function (t, n) {
            var o = n === e.body.length - 1;
            h(y, e, t, o, v, s, e.columns);
          }), y.applyStyles(y.userStyles), "lastPage" !== n.showFoot && "everyPage" !== n.showFoot || e.foot.forEach(function (t) {
            return c(y, e, t, s, e.columns);
          })), (0, r.addTableBorder)(y, e, v, s), e.callEndPageHooks(y, s), e.finalY = s.y, t.lastAutoTable = e, t.previousAutoTable = e, t.autoTable && (t.autoTable.previous = e), y.applyStyles(y.userStyles);
        }, e.addPage = p;
      },
      435: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var o = n(200),
            r = function (t, e) {
          var n = (0, o.parseSpacing)(e.settings.margin, 0);
          return t.pageSize().width - (n.left + n.right);
        },
            i = function (t, e, n) {
          void 0 === n && (n = {});
          var o = r(t, e),
              i = e.settings.horizontalPageBreakRepeat,
              l = null,
              a = [],
              s = [],
              u = e.columns.length,
              d = n && n.start ? n.start : 0;

          for (null != i && (l = e.columns.find(function (t) {
            return t.dataKey === i || t.index === i;
          })) && (a.push(l.index), s.push(e.columns[l.index]), o -= l.wrappedWidth); d < u;) if ((null == l ? void 0 : l.index) !== d) {
            var h = e.columns[d].wrappedWidth;

            if (o < h) {
              0 !== d && d !== n.start || (a.push(d), s.push(e.columns[d]));
              break;
            }

            a.push(d), s.push(e.columns[d]), o -= h, d++;
          } else d++;

          return {
            colIndexes: a,
            columns: s,
            lastIndex: d
          };
        };

        e.default = {
          getColumnsCanFitInPage: i,
          calculateAllColumnsCanFitInPage: function (t, e) {
            for (var n = [], o = 0, r = e.columns.length; o < r;) {
              var l = i(t, e, {
                start: 0 === o ? 0 : o
              });
              l && l.columns && l.columns.length ? (o = l.lastIndex, n.push(l)) : o++;
            }

            return n;
          },
          getPageAvailableWidth: r
        };
      },
      189: (t, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ellipsize = e.resizeColumns = e.calculateWidths = void 0;
        var o = n(200),
            r = n(435);

        function i(t, e, n) {
          for (var o = e, r = t.reduce(function (t, e) {
            return t + e.wrappedWidth;
          }, 0), l = 0; l < t.length; l++) {
            var a = t[l],
                s = o * (a.wrappedWidth / r),
                u = a.width + s,
                d = n(a),
                h = u < d ? d : u;
            e -= h - a.width, a.width = h;
          }

          if (e = Math.round(1e10 * e) / 1e10) {
            var c = t.filter(function (t) {
              return !(e < 0) || t.width > n(t);
            });
            c.length && (e = i(c, e, n));
          }

          return e;
        }

        function l(t, e, n, r, i) {
          return t.map(function (t) {
            return function (t, e, n, r, i) {
              var l = 1e4 * r.scaleFactor();
              if ((e = Math.ceil(e * l) / l) >= (0, o.getStringWidth)(t, n, r)) return t;

              for (; e < (0, o.getStringWidth)(t + i, n, r) && !(t.length <= 1);) t = t.substring(0, t.length - 1);

              return t.trim() + i;
            }(t, e, n, r, i);
          });
        }

        e.calculateWidths = function (t, e) {
          !function (t, e) {
            var n = t.scaleFactor(),
                i = e.settings.horizontalPageBreak,
                l = r.default.getPageAvailableWidth(t, e);
            e.allRows().forEach(function (r) {
              for (var a = 0, s = e.columns; a < s.length; a++) {
                var u = s[a],
                    d = r.cells[u.index];

                if (d) {
                  var h = e.hooks.didParseCell;
                  e.callCellHooks(t, h, d, r, u, null);
                  var c = d.padding("horizontal");
                  d.contentWidth = (0, o.getStringWidth)(d.text, d.styles, t) + c;
                  var f = (0, o.getStringWidth)(d.text.join(" ").split(/\s+/), d.styles, t);
                  if (d.minReadableWidth = f + d.padding("horizontal"), "number" == typeof d.styles.cellWidth) d.minWidth = d.styles.cellWidth, d.wrappedWidth = d.styles.cellWidth;else if ("wrap" === d.styles.cellWidth || !0 === i) d.contentWidth > l ? (d.minWidth = l, d.wrappedWidth = l) : (d.minWidth = d.contentWidth, d.wrappedWidth = d.contentWidth);else {
                    var p = 10 / n;
                    d.minWidth = d.styles.minCellWidth || p, d.wrappedWidth = d.contentWidth, d.minWidth > d.wrappedWidth && (d.wrappedWidth = d.minWidth);
                  }
                }
              }
            }), e.allRows().forEach(function (t) {
              for (var n = 0, o = e.columns; n < o.length; n++) {
                var r = o[n],
                    i = t.cells[r.index];
                if (i && 1 === i.colSpan) r.wrappedWidth = Math.max(r.wrappedWidth, i.wrappedWidth), r.minWidth = Math.max(r.minWidth, i.minWidth), r.minReadableWidth = Math.max(r.minReadableWidth, i.minReadableWidth);else {
                  var l = e.styles.columnStyles[r.dataKey] || e.styles.columnStyles[r.index] || {},
                      a = l.cellWidth || l.minCellWidth;
                  a && "number" == typeof a && (r.minWidth = a, r.wrappedWidth = a);
                }
                i && (i.colSpan > 1 && !r.minWidth && (r.minWidth = i.minWidth), i.colSpan > 1 && !r.wrappedWidth && (r.wrappedWidth = i.minWidth));
              }
            });
          }(t, e);
          var n = [],
              a = 0;
          e.columns.forEach(function (t) {
            var o = t.getMaxCustomCellWidth(e);
            o ? t.width = o : (t.width = t.wrappedWidth, n.push(t)), a += t.width;
          });
          var s = e.getWidth(t.pageSize().width) - a;
          s && (s = i(n, s, function (t) {
            return Math.max(t.minReadableWidth, t.minWidth);
          })), s && (s = i(n, s, function (t) {
            return t.minWidth;
          })), s = Math.abs(s), !e.settings.horizontalPageBreak && s > .1 / t.scaleFactor() && (s = s < 1 ? s : Math.round(s), console.error("Of the table content, " + s + " units width could not fit page")), function (t) {
            for (var e = t.allRows(), n = 0; n < e.length; n++) for (var o = e[n], r = null, i = 0, l = 0, a = 0; a < t.columns.length; a++) {
              var s = t.columns[a];
              if ((l -= 1) > 1 && t.columns[a + 1]) i += s.width, delete o.cells[s.index];else if (r) {
                var u = r;
                delete o.cells[s.index], r = null, u.width = s.width + i;
              } else {
                if (!(u = o.cells[s.index])) continue;

                if (l = u.colSpan, i = 0, u.colSpan > 1) {
                  r = u, i += s.width;
                  continue;
                }

                u.width = s.width + i;
              }
            }
          }(e), function (t, e) {
            for (var n = {
              count: 0,
              height: 0
            }, o = 0, r = t.allRows(); o < r.length; o++) {
              for (var i = r[o], a = 0, s = t.columns; a < s.length; a++) {
                var u = s[a],
                    d = i.cells[u.index];

                if (d) {
                  e.applyStyles(d.styles, !0);
                  var h = d.width - d.padding("horizontal");
                  "linebreak" === d.styles.overflow ? d.text = e.splitTextToSize(d.text, h + 1 / e.scaleFactor(), {
                    fontSize: d.styles.fontSize
                  }) : "ellipsize" === d.styles.overflow ? d.text = l(d.text, h, d.styles, e, "...") : "hidden" === d.styles.overflow ? d.text = l(d.text, h, d.styles, e, "") : "function" == typeof d.styles.overflow && (d.text = d.styles.overflow(d.text, h)), d.contentHeight = d.getContentHeight(e.scaleFactor());
                  var c = d.contentHeight / d.rowSpan;
                  d.rowSpan > 1 && n.count * n.height < c * d.rowSpan ? n = {
                    height: c,
                    count: d.rowSpan
                  } : n && n.count > 0 && n.height > c && (c = n.height), c > i.height && (i.height = c);
                }
              }

              n.count--;
            }
          }(e, t), function (t) {
            for (var e = {}, n = 1, o = t.allRows(), r = 0; r < o.length; r++) for (var i = o[r], l = 0, a = t.columns; l < a.length; l++) {
              var s = a[l],
                  u = e[s.index];
              if (n > 1) n--, delete i.cells[s.index];else if (u) u.cell.height += i.height, n = u.cell.colSpan, delete i.cells[s.index], u.left--, u.left <= 1 && delete e[s.index];else {
                var d = i.cells[s.index];
                if (!d) continue;

                if (d.height = i.height, d.rowSpan > 1) {
                  var h = o.length - r,
                      c = d.rowSpan > h ? h : d.rowSpan;
                  e[s.index] = {
                    cell: d,
                    left: c,
                    row: i
                  };
                }
              }
            }
          }(e);
        }, e.resizeColumns = i, e.ellipsize = l;
      },
      84: e => {
        if (void 0 === t) {
          var n = new Error("Cannot find module 'undefined'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }

        e.exports = t;
      }
    },
        n = {};

    function o(t) {
      var r = n[t];
      if (void 0 !== r) return r.exports;
      var i = n[t] = {
        exports: {}
      };
      return e[t].call(i.exports, i, i.exports, o), i.exports;
    }

    var r = {};
    return (() => {
      var t = r;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Cell = t.Column = t.Row = t.Table = t.CellHookData = t.__drawTable = t.__createTable = t.applyPlugin = void 0;
      var e = o(790),
          n = o(587),
          i = o(49),
          l = o(858),
          a = o(287);
      Object.defineProperty(t, "Table", {
        enumerable: !0,
        get: function () {
          return a.Table;
        }
      });
      var s = o(662);
      Object.defineProperty(t, "CellHookData", {
        enumerable: !0,
        get: function () {
          return s.CellHookData;
        }
      });
      var u = o(287);

      function d(t) {
        (0, e.default)(t);
      }

      Object.defineProperty(t, "Cell", {
        enumerable: !0,
        get: function () {
          return u.Cell;
        }
      }), Object.defineProperty(t, "Column", {
        enumerable: !0,
        get: function () {
          return u.Column;
        }
      }), Object.defineProperty(t, "Row", {
        enumerable: !0,
        get: function () {
          return u.Row;
        }
      }), t.applyPlugin = d, t.default = function (t, e) {
        var o = (0, n.parseInput)(t, e),
            r = (0, l.createTable)(t, o);
        (0, i.drawTable)(t, r);
      }, t.__createTable = function (t, e) {
        var o = (0, n.parseInput)(t, e);
        return (0, l.createTable)(t, o);
      }, t.__drawTable = function (t, e) {
        (0, i.drawTable)(t, e);
      };

      try {
        var h = o(84);
        h.jsPDF && (h = h.jsPDF), d(h);
      } catch (t) {}
    })(), r;
  })();
});

/***/ }),

/***/ 14111:
/*!***************************************************!*\
  !*** ./src/app/worksite/worksite.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.form-group[required=required] input:not(.required) {\n  border: 1px solid black;\n}\n\n.form-group[required=required] input {\n  border: 1px solid red;\n}\n\n.form-group[required=required] label:after {\n  content: \" *\";\n  color: red;\n}\n\n/* With only the required attribute */\n\n.form-group[required] input {\n  border: 1px solid red;\n}\n\n.form-group[required] label:after {\n  content: \" *\";\n  color: red;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth {\n  position: sticky;\n}\n\n#managerTable {\n  max-height: 500px;\n  overflow: auto;\n}\n\ntd, th {\n  width: 25%;\n}\n\n.jumbotron {\n  margin-bottom: 2rem;\n  background-color: lavender;\n  border-radius: 0.3rem;\n}\n\n.image-container {\n  background-size: cover;\n  min-height: 220px;\n}\n\n@media (min-width: 0px) {\n  .images-wrapper {\n    column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images-wrapper {\n    column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images-wrapper {\n    column-count: 3;\n  }\n}\n\n.pick-single-image {\n  margin: 4px;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzaXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVBOztBQUFBO0VBQ0EsY0FBQTtBQUdBOztBQUFBLDREQUFBOztBQUNBOzs7OztDQUFBOztBQU1DLGlFQUFBOztBQUNEO0VBQ0UsV0FBQTtFQUFhLGVBQUE7RUFDYixhQUFBO0VBQWUsaUJBQUE7RUFDZixzQkFBQTtFQUF3QixnQkFBQTtFQUN4QixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixzQkFBQTtFQUF3QixvREFBQTtFQUN4QixlQUFBO0VBQWlCLHFCQUFBO0VBQ2pCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQ3JCLGdCQUFBO0FBVUY7O0FBUEEsaUVBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQSwyRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0FBVUY7O0FBUEE7RUFDRSx1QkFBQTtBQVVGOztBQVBBO0VBQ0UscUJBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBVUY7O0FBUEEscUNBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFTRjs7QUFOQTtFQUNFLFdBQUE7QUFTRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSxnQkFBQTtBQVVGOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUEE7RUFDRSxVQUFBO0FBVUY7O0FBUkE7RUFFRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFVRjs7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFO0lBQ0UsZUFBQTtFQVlGO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLGVBQUE7RUFZRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxlQUFBO0VBWUY7QUFDRjs7QUFWQTtFQUNFLFdBQUE7QUFZRjs7QUFWQTtFQUVFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVlGIiwiZmlsZSI6IndvcmtzaXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJzLWNlbnRlci14IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiAyMDBweDtcclxub3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBwYWRkaW5nIGFyb3VuZCB0aGUgZm9ybSAqL1xyXG4vKi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn0gXHJcbiovXHJcbiAvKiBTdHlsZSBpbnB1dHMgd2l0aCB0eXBlPVwidGV4dFwiLCBzZWxlY3QgZWxlbWVudHMgYW5kIHRleHRhcmVhcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7IC8qIFNvbWUgcGFkZGluZyAqLyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogTWFrZSBzdXJlIHRoYXQgcGFkZGluZyBhbmQgd2lkdGggc3RheXMgaW4gcGxhY2UgKi9cclxuICBtYXJnaW4tdG9wOiA2cHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXHJcbiAgcmVzaXplOiB2ZXJ0aWNhbCAvKiBBbGxvdyB0aGUgdXNlciB0byB2ZXJ0aWNhbGx5IHJlc2l6ZSB0aGUgdGV4dGFyZWEgKG5vdCBob3Jpem9udGFsbHkpICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uIHdpdGggYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGV0YyAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogV2hlbiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIHN1Ym1pdCBidXR0b24sIGFkZCBhIGRhcmtlciBncmVlbiBjb2xvciAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gaW5wdXQ6bm90KC5yZXF1aXJlZCkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZD1cInJlcXVpcmVkXCJdIGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkPVwicmVxdWlyZWRcIl0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogV2l0aCBvbmx5IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgKi9cclxuXHJcbi5mb3JtLWdyb3VwW3JlcXVpcmVkXSBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cFtyZXF1aXJlZF0gbGFiZWw6YWZ0ZXIgeyBcclxuICBjb250ZW50OlwiICpcIjsgXHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuI21hbmFnZXJUYWJsZSB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uanVtYm90cm9uIHtcclxuICAvLyBwYWRkaW5nOiA4cmVtIDByZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbn0gXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogMjIwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcbi5waWNrLXNpbmdsZS1pbWFnZSB7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 72207:
/*!***************************************************!*\
  !*** ./src/app/worksite/worksite.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content style=\"justify-content: start;\">\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"GoBack()\">\r\n      <ion-icon name=\"arrow-left\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"top\">\r\n        <dx-button icon=\"fas fa-arrow-left\" (click)=\"GoBack()\" style=\"background-color: orange;\">\r\n        </dx-button>\r\n        <ion-tab-button (click)=\"SetTabView('general')\">\r\n          <ion-icon name=\"information-circle\"></ion-icon>\r\n          <ion-label>{{'general' | translate}}</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"SetTabView('achats')\">\r\n          <ion-icon name=\"copy\"></ion-icon>\r\n          <ion-label>{{'achats' | translate}}</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"SetTabView('travail')\">\r\n          <ion-icon name=\"hammer\"></ion-icon>\r\n          <ion-label>{{'work' | translate}}</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"SetTabView('images')\">\r\n          <ion-icon name=\"images\"></ion-icon>\r\n          <ion-label>{{'pictures' | translate}}</ion-label>\r\n        </ion-tab-button>\r\n\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div style=\"overflow-y: auto; justify-content: start; background-color: white; overflow-x: hidden;\">\r\n  <form [formGroup]=\"formChantier\" (ngSubmit)=\"SaveChantier()\">\r\n    <div [hidden]=\"(TabView !== 'general')\" class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n      <div class=\"card-header tabHeader\">\r\n        {{'infos' | translate}}\r\n      </div>\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'nameWorksite' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"chantierName\" placeholder=\"...\"\r\n          required=\"required\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"form-group\" required=\"required\">\r\n        <ion-label position=\"stacked\">{{'worksiteAddress' | translate}}</ion-label>\r\n        <ion-input type=\"text\" id=\"address\" name=\"address\" formControlName=\"address\" placeholder=\"...\" maxlength=\"50\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{'description' | translate}}</ion-label>\r\n        <ion-textarea id=\"description\" name=\"description\" formControlName=\"description\" placeholder=\"...\" maxlength=\"50\"\r\n          style=\"height:100px;\"></ion-textarea>\r\n      </ion-item>\r\n      <hr>\r\n    </div>\r\n    <div [hidden]=\"(TabView !== 'achats')\">\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"card-header tabHeader\">\r\n          {{'invoices' | translate}}\r\n        </div>\r\n\r\n\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>{{'search' | translate}}</mat-label>\r\n          <input matInput (keyup)=\"applyFilterFacture($event)\" placeholder=\"Ex. Mia\" #input>\r\n        </mat-form-field>\r\n\r\n        <div class=\"mat-elevation-z8\">\r\n          <table mat-table [dataSource]=\"dataSourceFacture\" matSort (matSortChange)=\"announceSortChangeFacture($event)\">\r\n            <ng-container matColumnDef=\"factureName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\"> {{'invoiceName' | translate}}\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.factureName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"totalPrice\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by total\"> {{'total' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.totalPrice}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"date\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by date\"> {{'date' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.date}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"IsPaid\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by paid\"> {{'state' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\" style=\"color: red;\"> {{IsInvoicePaid(row)}} </td>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container matColumnDef=\"...\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> ... </th>\r\n              <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n                <button type=\"button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>toc</mat-icon>\r\n\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item type=\"button\" (click)=\"openInvoice(row)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>{{'editInv' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item type=\"button\" (click)=\"GeneratePDFInvoice(row)\">\r\n                    <mat-icon>picture_as_pdf</mat-icon>\r\n                    <span>{{'genPDF' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item type=\"button\" (click)=\"deleteInvoice(row)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>{{'delete' | translate}}</span>\r\n                  </button>\r\n                </mat-menu>\r\n              </td>\r\n            </ng-container>\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"headElementsInv\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: headElementsInv;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n              <td class=\"mat-cell\" colspan=\"4\">{{'noData' | translate}} \"{{input.value}}\"</td>\r\n            </tr>\r\n\r\n          </table>\r\n\r\n          <mat-paginator mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons\r\n            aria-label=\"Select page of dataSourceFacture\"></mat-paginator>\r\n        </div>\r\n        <div class=\"card-footer text-muted\" style=\"text-align:center; display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\">\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" (click)=\"scanInvoice()\" icon=\"fas fa-paste\" [text]=\"'scanInvoice' | translate\"></dx-button>\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" (click)=\"createInvoice()\" icon=\"fas fa-file-invoice\" [text]=\"'createInvoice' | translate\"></dx-button>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"card-header tabHeader\">\r\n          {{'estimate' | translate}}\r\n        </div>\r\n\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>{{'search' | translate}}</mat-label>\r\n          <input matInput (keyup)=\"applyFilterDevis($event)\" placeholder=\"Ex. Mia\" #input>\r\n        </mat-form-field>\r\n\r\n        <div class=\"mat-elevation-z8\">\r\n          <table mat-table [dataSource]=\"dataSourceDevis\" matSort (matSortChange)=\"announceSortChangeDevis($event)\">\r\n            <ng-container matColumnDef=\"factureName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\"> {{'estimateName' | translate}}\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.factureName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"totalPrice\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by total\"> {{'total' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.totalPrice}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"date\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by date\"> {{'date' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.date}} </td>\r\n            </ng-container>\r\n\r\n            <!-- <ng-container matColumnDef=\"IsPaid\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by paid\"> Etat </th>\r\n          <td mat-cell *matCellDef=\"let row\" style=\"color: red;\"> {{IsInvoicePaid(row)}} </td>\r\n        </ng-container> -->\r\n\r\n\r\n            <ng-container matColumnDef=\"...\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> ... </th>\r\n              <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n                <button type=\"button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                  <mat-icon>toc</mat-icon>\r\n\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item type=\"button\" (click)=\"openDevis(row)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>{{'editEstimate' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"TransformToInvoice(row)\" type=\"button\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>{{'transformToInv' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item type=\"button\" (click)=\"GeneratePDFInvoice(row)\">\r\n                    <mat-icon>picture_as_pdf</mat-icon>\r\n                    <span>{{'genPDF' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item type=\"button\" (click)=\"deleteDevis(row)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>{{'delete' | translate}}</span>\r\n                  </button>\r\n                </mat-menu>\r\n              </td>\r\n            </ng-container>\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"headElementsDev\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: headElementsDev;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n              <td class=\"mat-cell\" colspan=\"4\">{{'noData' | translate}} \"{{input.value}}\"</td>\r\n            </tr>\r\n\r\n          </table>\r\n\r\n          <mat-paginator mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of dataSourceDevis\">\r\n          </mat-paginator>\r\n        </div>\r\n        <div class=\"card-footer text-muted\" style=\"text-align:center; display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\">\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" (click)=\"scanDevis()\" icon=\"fas fa-paste\" [text]=\"'scanEstimate' | translate\"></dx-button>\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" (click)=\"createDevis()\" icon=\"fas fa-file-invoice-dollar\" [text]=\"'createEstimate' | translate\"></dx-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"card-header tabHeader\">\r\n          {{'receivedMoney' | translate}}\r\n        </div>\r\n        <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\" id=\"managerTable\">\r\n          <table class=\"table table-bordered table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th *ngFor=\"let head of headElementsRecv\" scope=\"col\">{{head}} </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let inv of chantier?.factures\">\r\n              <tr mdbTableCol *ngFor=\"let p of inv.receivedMoney\">\r\n                <!-- <th scope=\"row\">{{h.id}}</th> -->\r\n                <td>{{inv.factureName}}</td>\r\n                <td>{{p.price}}</td>\r\n                <td>{{inv.totalPrice}}</td>\r\n                <td>{{inv?.totalPrice - GetAllReceivedMoney(inv) | number : '1.2'}}</td>\r\n                <td>{{p.date}}</td>\r\n                <td (click)=\"$event.stopPropagation()\">\r\n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\r\n                    <mat-icon>toc</mat-icon>\r\n\r\n                  </button>\r\n                  <mat-menu #menu=\"matMenu\">\r\n                    <button mat-menu-item type=\"button\">\r\n                      <mat-icon>edit</mat-icon>\r\n                      <span>{{'edit' | translate}}</span>\r\n                    </button>\r\n                    <button mat-menu-item type=\"button\" (click)=\"DeleteReceive(inv,p)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                      <span>{{'delete' | translate}}</span>\r\n                    </button>\r\n                  </mat-menu>\r\n                </td> <!-- </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" (click)=\"AddPayment()\" \r\n          icon=\"fas fa-cart-plus\" [text]=\"'addPayment' | translate\"></dx-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\r\n          <table class=\"table table-bordered table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>{{'tickets' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr mdbTableCol *ngFor='let url of imagesT'>\r\n                <td><img src=\"{{url}}\" alt=\"\" height=100 width=100 /></td>\r\n                <td> <dx-button type=\"button\" class=\"btn btn-danger\" style=\"background-color:orange;\" (click)=\"DeleteImage(url)\" icon=\"fas fa-trash\"></dx-button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          <input id=\"imgChantier\" type=\"file\" class=\"form-control\" multiple=\"\" (change)=\"onFileChangeTicket($event)\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div [hidden]=\"(TabView !== 'travail')\">\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"card-header tabHeader\">\r\n          {{'hoursWorked' | translate}}\r\n        </div>\r\n\r\n\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>{{'search' | translate}}</mat-label>\r\n          <input matInput (keyup)=\"applyFilterHeure($event)\" placeholder=\"Ex. Mia\" #input>\r\n        </mat-form-field>\r\n\r\n        <div class=\"mat-elevation-z8\">\r\n          <table mat-table [dataSource]=\"dataSourceHeure\" matSort (matSortChange)=\"announceSortChangeHeure($event)\">\r\n            <ng-container matColumnDef=\"description\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\"> {{'description' | translate}}\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"workTime\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by total\"> {{'hourWorked' | translate}}\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.workTime}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"date\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by date\"> {{'date' | translate}} </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.date}} </td>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container matColumnDef=\"...\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> ... </th>\r\n              <td mat-cell *matCellDef=\"let row\" (click)=\"$event.stopPropagation()\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" type=\"button\">\r\n                  <mat-icon>toc</mat-icon>\r\n\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" (click)=\"$event.stopPropagation()\">\r\n                  <button mat-menu-item type=\"button\" (click)=\"openHour(row)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                    <span>{{'edit' | translate}}</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"deleteHour(row)\" type=\"button\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>{{'delete' | translate}}</span>\r\n                  </button>\r\n                </mat-menu>\r\n              </td>\r\n            </ng-container>\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"headElementsHour\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: headElementsHour;\"></tr>\r\n\r\n            <!-- Row shown when there is no matching data. -->\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n              <td class=\"mat-cell\" colspan=\"4\">{{'noData' | translate}} \"{{input.value}}\"</td>\r\n            </tr>\r\n\r\n          </table>\r\n\r\n          <mat-paginator mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of dataSourceHeure\">\r\n          </mat-paginator>\r\n        </div>\r\n\r\n        <div class=\"card-footer\">\r\n          {{'totalHours' | translate}} {{totalHours}}\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          <dx-button type=\"button\" class=\"btn btn-secondary\" style=\"background-color:orange;\" \r\n          (click)=\"AddHour()\" icon=\"fas fa-clock\" [text]=\"'addWork' | translate\" ></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"(TabView !== 'images')\">\r\n      <div class=\"jumbotron text-center\" style=\"margin-bottom: 0; padding-bottom: 1px; padding-top: 1px;\">\r\n        <div class=\"card-header tabHeader\">\r\n          {{'worksitePictures' | translate}}\r\n        </div>\r\n        <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\r\n          <table class=\"table table-bordered table-striped mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th>{{'pictures' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr mdbTableCol *ngFor='let url of imagesC'>\r\n                <!-- <th scope=\"row\">{{el.id}}</th> -->\r\n                <td><img src=\"{{url}}\" alt=\"\" height=100 width=100 /></td>\r\n                <td> <dx-button type=\"button\" class=\"btn btn-danger\" style=\"background-color:orange;\" \r\n                  (click)=\"DeleteImageChantier(url)\" icon=\"fas fa-trash\"></dx-button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          <input id=\"imgChantier\" type=\"file\" class=\"form-control\" multiple=\"\" (change)=\"onFileChangeChantier($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"card-footer text-muted\">\r\n    <div style=\"padding: 10px; margin: 5px;\">\r\n    <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" class=\"btn btn-success\" style=\"width:88%;\" [text]=\"'updateWorksite' | translate\"></dx-button>\r\n    <dx-button type=\"submit\" class=\"btn btn-danger\" (click)=\"FinishChantier()\" style=\"width: 88%;\" [text]=\"'finishWorksite' | translate\"></dx-button>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_worksite_worksite_module_ts.js.map