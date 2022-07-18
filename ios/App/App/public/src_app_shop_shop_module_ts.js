"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shop_shop_module_ts"],{

/***/ 99188:
/*!****************************************!*\
  !*** ./src/app/models/shoppingCart.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCart": () => (/* binding */ ShoppingCart)
/* harmony export */ });
class ShoppingCart {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}


/***/ }),

/***/ 88098:
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopRoutingModule": () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop */ 53067);




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

/***/ 11788:
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopModule": () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 88098);
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop */ 53067);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 54217);











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

/***/ 53067:
/*!******************************!*\
  !*** ./src/app/shop/shop.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shop": () => (/* binding */ Shop)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shop_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.html?ngResource */ 29461);
/* harmony import */ var _shop_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.scss?ngResource */ 43294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);
/* harmony import */ var _models_facture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/facture */ 49371);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/product */ 60028);
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/shoppingCart */ 99188);
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/methods.service */ 25812);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ 71188);














let Shop = class Shop {
  constructor(modalS, storageService, router, route, methodsService) {
    this.modalS = modalS;
    this.storageService = storageService;
    this.router = router;
    this.route = route;
    this.methodsService = methodsService;
    this.headElementsArt = ['Nom article', 'Description', 'Prix Unitaire', ''];
    this.headElementsArtCart = ['Nom article', 'Description', 'Prix Unitaire', 'Quantité', 'Prix total', ''];
    this.artList = [];
    this.panierList = [];
    this.catList = [];
    this.actualCat = null;
    this.openCatAccordion = '';
    this.panierEmpty = 'YES';
    this.formArt = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormGroup({
      productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl(''),
      priceHtva: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.initialPanier = [];
    this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_3__.NgbdModalFocus(this.modalS);
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.catList = yield _this.storageService.get('Categories');
      _this.actualCat = _this.catList.find(a => a.categoryId === _this.route.snapshot.paramMap.get('actualCat'));

      _this.EnterCategory(_this.actualCat);
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.storageService.init();

      _this2.artList = yield _this2.storageService.get('Articles');
      _this2.catList = yield _this2.storageService.get('Categories');
      _this2.chantierId = _this2.route.snapshot.paramMap.get('chantierId');
      _this2.invoiceId = _this2.route.snapshot.paramMap.get('invoiceId');
      _this2.type = _this2.route.snapshot.paramMap.get('type');
      _this2.invName = _this2.route.snapshot.paramMap.get('factureName');
      _this2.invTva = _this2.route.snapshot.paramMap.get('tva');
      _this2.invTypePay = _this2.route.snapshot.paramMap.get('typePay');
      _this2.invRemise = _this2.route.snapshot.paramMap.get('remise');
      _this2.invDescription = _this2.route.snapshot.paramMap.get('description');

      if (_this2.chantierId != null && _this2.invoiceId != null) {
        let chantierList = yield _this2.storageService.get('Chantiers');

        if (chantierList?.find(a => a.chantierId === _this2.chantierId).factures?.find(b => b.factureId === _this2.invoiceId)?.cart != null) {
          _this2.panierList = chantierList.find(a => a.chantierId === _this2.chantierId).factures.find(b => b.factureId === _this2.invoiceId).cart;

          _this2.panierList.forEach(a => _this2.initialPanier.push(a));

          _this2.panierEmpty = 'NO';
        }
      }

      if (_this2.panierList == null) {
        _this2.panierList = new Array();
        _this2.initialPanier = new Array();
        _this2.panierEmpty = 'YES';
      }

      if (_this2.catList != null) _this2.catList = _this2.catList.filter(a => a.categoryParent == null);
      _this2.openCatAccordion = _this2.catList == null ? '' : 'categories';
    })();
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

  AddProduct(p) {
    const indexExist = this.panierList.findIndex(a => a.product.productId === p.productId);

    if (indexExist === -1) {
      this.panierList.push(new _models_shoppingCart__WEBPACK_IMPORTED_MODULE_6__.ShoppingCart(p, 1));
    } else {
      this.panierList[indexExist].quantity += 1;
    }
  }

  RemoveProduct(p) {
    const indexExist = this.panierList.findIndex(a => a.product.productId === p.product.productId);

    if (this.panierList[indexExist].quantity === 1) {
      this.panierList.splice(this.panierList.findIndex(a => a.product.productId === p.product.productId), 1);
    } else {
      this.panierList[indexExist].quantity -= 1;
    }
  }

  SavePanier() {
    var _this5 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const chantierl = yield _this5.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === _this5.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === _this5.chantierId);
      let listInv;
      if (_this5.type === 'facture') listInv = chantier.factures;else listInv = chantier.devis; // let listInv : Array<Facture> = await this.storageService.get("Invoices="+this.chantierId);

      if (listInv != null) {
        const inv = listInv.find(a => a.factureId === _this5.invoiceId);
        let invIndex;

        if (inv != null) {
          invIndex = listInv.findIndex(a => a.factureId === _this5.invoiceId);
          inv.cart = _this5.panierList;
          listInv[invIndex] = inv;
        } else {
          const newInv = new _models_facture__WEBPACK_IMPORTED_MODULE_4__.Facture(_this5.invoiceId, null, null, null, null, null, null, null, null, null, null, _this5.panierList, 'creation', _this5.type);
          listInv.push(newInv);
        }
      } else {
        listInv = new Array();
        const newInv = new _models_facture__WEBPACK_IMPORTED_MODULE_4__.Facture(_this5.invoiceId, null, null, null, null, null, null, null, null, null, null, _this5.panierList, 'creation', _this5.type);
        listInv.push(newInv);
      }

      if (_this5.type === 'facture') chantier.factures = listInv;else chantier.devis = listInv;
      chantierl[chantierIndex] = chantier;

      _this5.storageService.set('Chantiers', chantierl);

      _this5.router.navigate(['/invoice', {
        invoiceId: _this5.invoiceId,
        type: _this5.type,
        chantierId: _this5.chantierId,
        mode: 'false',
        comeFromShop: 'true',
        factureName: _this5.invName,
        remise: _this5.invRemise,
        tva: _this5.invTva,
        description: _this5.invDescription,
        typePay: _this5.invTypePay
      }], {
        replaceUrl: true
      });
    })();
  }

  GoBack() {
    var _this6 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result;

      if (_this6.panierEmpty === 'YES') {
        let cpt = 0;
        console.log(_this6.initialPanier, _this6.panierList);

        if (_this6.initialPanier.length !== _this6.panierList.length) {
          cpt++;
        }

        console.log(cpt);

        if (cpt > 0) {
          result = yield _this6.GoBackModal();
        }
      } else {
        let samePanier = true;
        console.log(_this6.initialPanier, _this6.panierList);

        _this6.panierList.forEach(a => {
          if (!_this6.initialPanier.includes(a)) {
            samePanier = false;
            console.log(a, _this6.initialPanier);
          }
        });

        if (!samePanier) {
          result = yield _this6.GoBackModal();
        }
      }

      console.log(result);
      if (result !== null) _this6.router.navigate(['invoice', {
        invoiceId: _this6.invoiceId,
        type: _this6.type,
        chantierId: _this6.chantierId,
        mode: 'false',
        comeFromShop: 'true',
        factureName: _this6.invName,
        remise: _this6.invRemise,
        tva: _this6.invTva,
        description: _this6.invDescription,
        typePay: _this6.invTypePay
      }], {
        replaceUrl: true
      });
    })();
  }

  GoBackModal() {
    var _this7 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = null;
      yield _this7.modal.open('exitPage', '').then(result => result.result.then(data => {
        res = 'OK';
      }, reason => {
        res = 'DISMISS';
      }));
      if (res === 'DISMISS') return null;
      return '';
    })();
  }

  AddFastProduct() {
    var _this8 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const invalid = [];
      const controls = _this8.formArt.controls;

      for (const name in controls) {
        if (controls[name].invalid) {
          let nom = '';
          if (name === 'productName') nom = 'Nom article';
          if (name === 'priceHtva') nom = 'Prix HTVA';
          invalid.push(nom);
        }
      }

      var priceString = _this8.formArt.get('priceHtva').value;

      while (priceString.includes(',')) {
        priceString = priceString.replace(',', '.');
      }

      _this8.formArt.get('priceHtva').setValue(priceString);

      var price = Number.parseFloat(priceString);
      console.log(price);

      if (!_this8.formArt.valid || Number.isNaN(price)) {
        let res = null;
        yield _this8.modal.open('field', invalid.toString()).then(result => result.result.then(data => {
          res = 'OK';
        }, reason => {
          res = 'DISMISS';
        }));
        return;
      } else console.log(_this8.formArt.get('priceHtva').value);

      let p = new _models_product__WEBPACK_IMPORTED_MODULE_5__.Product('-1', _this8.formArt.get('productName').value, _this8.formArt.get('description').value, _this8.formArt.get('priceHtva').value, null, null);

      _this8.panierList.push(new _models_shoppingCart__WEBPACK_IMPORTED_MODULE_6__.ShoppingCart(p, 1));
    })();
  }

};

Shop.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _services_methods_service__WEBPACK_IMPORTED_MODULE_7__.MethodsService
}];

Shop = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-shop',
  template: _shop_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_shop_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Shop);


/***/ }),

/***/ 43294:
/*!*******************************************!*\
  !*** ./src/app/shop/shop.scss?ngResource ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.example-card {\n  max-width: 400px;\n  margin: 30px;\n  padding: 20px;\n}\n.container {\n  /* On ajoute une marge sur les cotés de l'écran */\n  padding-right: 15px;\n  padding-left: 15px;\n  /* Et on centre */\n  margin-right: auto;\n  margin-left: auto;\n}\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Auc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFDRTtFQUNFLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0E7RUFFRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Ysa0JBQUE7QUFDQSIsImZpbGUiOiJzaG9wLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46MzBweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgLyogT24gYWpvdXRlIHVuZSBtYXJnZSBzdXIgbGVzIGNvdMOpcyBkZSBsJ8OpY3JhbiAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgICAvKiBFdCBvbiBjZW50cmUgKi9cclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi50YWJIZWFkZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";

/***/ }),

/***/ 29461:
/*!*******************************************!*\
  !*** ./src/app/shop/shop.html?ngResource ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'shop' | translate}}</ion-title>\n    <dx-button slot=\"start\" (click)=\"GoBack()\" icon=\"fas fa-arrow-left\" style=\"background-color: orange;\">\n    </dx-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"justify-content: start;\">\n\n<div style=\"overflow-y: auto;\">\n\n  <ion-accordion-group [value]=\"this.openCatAccordion\">\n    <ion-accordion value=\"categories\">\n      <ion-item slot=\"header\" class=\"tabHeader\" style=\"text-align: left;\">\n        <ion-label>{{'Categories' | translate}}</ion-label>\n      </ion-item>\n  \n      <ion-list slot=\"content\">\n        <ion-item>\n        <ion-label [hidden]=\"this.catList!=null\">    {{'noCategories' | translate}}\n        </ion-label>  \n          <div class=\"container\" style=\"overflow-y: auto;\">\n            <div class=\"row\">\n              <mat-card class=\"example-card col-4\" *ngFor=\"let el of catList\">\n                <mat-card-title-group (click)=\"EnterCategory(el)\">\n                  <mat-card-title>{{el.categoryName}}</mat-card-title>\n                  <mat-card-subtitle>{{el.description}}</mat-card-subtitle>\n                  <img class=\"img-fluid\" mat-card-lg-image src=\"{{el.categoryImage}}\" \n                       style='max-width: 70px; max-height: 70px;' [border]=\"0\" alt=\"Null\"\n                       onerror=\"this.onerror=null; this.src='assets/icon/White-square.jpg'\">\n                </mat-card-title-group>\n              </mat-card>\n            </div>\n        \n            <div class=\"card-footer text-muted\">\n              <dx-button [hidden]=\"this.actualCat==null\" icon=\"fas fa-arrow-left\" type=\"button\" class=\"btn btn-secondary\" (click)=\"BackCategory()\"\n              style=\"background-color:orange;\" [text]=\"'back' | translate\"></dx-button>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-accordion>\n  </ion-accordion-group>\n  <div class=\"card-header tabHeader\">\n    {{'myArticles' | translate}}\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArt\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of artList\">\n          <!-- <th scope=\"row\">{{el.id}}</th> -->\n          <td>{{p.productName}}</td>\n          <td>{{p.description}}</td>\n          <td>{{p.priceHtva}}</td>\n          <td>\n            <dx-button icon=\"fas fa-cart-plus\" type=\"button\" (click)=\"AddProduct(p)\" [text]=\"'addProductToCart' | translate\" style=\"background-color: orange;\">\n            </dx-button>\n          </td>\n          <!-- <td>{{p.categoryId}}</td> -->\n          <!-- <td>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n               <ion-icon name=\"list\"></ion-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\">\n                <ion-icon name=\"create\"></ion-icon>\n                <span>Modifier</span>\n              </button>\n              <button mat-menu-item (click)=\"DeleteProduct(p)\">\n                <ion-icon name=\"trash\"></ion-icon>\n                <span>Supprimer</span>\n              </button>\n            </mat-menu>\n          </td> -->\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <hr>\n\n  <form [formGroup]=\"formArt\" (ngSubmit)=\"AddFastProduct()\">\n\n    <div class=\"card-header tabHeader\">\n      {{'fastProduct' | translate}}\n    </div>\n    <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\">\n      <ion-item>\n      <ion-input type=\"text\" id=\"productName\" name=\"productName\" formControlName=\"productName\" [placeholder]=\"'productName' | translate\"\n        required=\"required\" maxlength=\"50\"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-textarea title=\"test\" id=\"description\" name=\"description\" formControlName=\"description\" [placeholder]=\"'description' | translate\"\n        style=\"height:100px;\" maxlength=\"50\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n      <ion-input type=\"text\" id=\"priceHtva\" name=\"priceHtva\" formControlName=\"priceHtva\" [placeholder]=\"'unitPrice' | translate\"\n        required=\"required\" maxlength=\"12\"></ion-input>\n        </ion-item>\n    </div>\n    <div class=\"card-footer text-muted\" style=\"text-align: center;\">\n      <dx-button [useSubmitBehavior]=\"true\" type=\"submit\" class=\"btn btn-secondary\" icon=\"fas fa-cart-plus\" style=\"background-color:orange;\" [text]=\"'addProductToCart' | translate\"></dx-button>\n    </div>\n  </form>\n  <hr>\n  <div class=\"card-header tabHeader\">\n    {{'cart' | translate}}\n  </div>\n  <div [hidden]=\"panierList.length>0\">\n    {{'noData' | translate}}\n  </div>\n  <div class=\"col-auto table-wrapper-scroll-y my-custom-scrollbar\" [hidden]=\"panierList.length==0\">\n    <table class=\"table table-bordered table-striped mb-0\">\n\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headElementsArtCart\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let p of panierList\">\n          <!-- <th scope=\"row\">{{el.id}}</th> -->\n          <td>{{p.product.productName}}</td>\n          <td>{{p.product.description}}</td>\n          <td>{{p.product.priceHtva}}</td>\n          <td>{{p.quantity}}</td>\n          <td>{{p.product.priceHtva * p.quantity}}</td>\n\n          <!-- <td>{{p.categoryId}}</td> -->\n          <td>\n            <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n               <ion-icon name=\"list\"></ion-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"ModifyProduct(p)\">\n                <ion-icon name=\"create\"></ion-icon>\n                <span>Modifier</span>\n              </button> -->\n            <dx-button icon=\"fas fa-trash\" (click)=\"RemoveProduct(p)\" [text]=\"'delete' | translate\">\n            </dx-button>\n            <!-- </mat-menu> -->\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <!-- <div class=\"card-footer text-muted\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"CreateProduct()\" style=\"background-color:orange;\">{{'addProductToCart' | translate}}</button>\n  </div> -->\n  <div class=\"card-footer text-muted\" style=\"text-align: center;\">\n    <dx-button type=\"button\" class=\"btn btn-danger\" (click)=\"SavePanier()\" style=\"background-color:orange;\" [text]=\"'finalize' | translate\"></dx-button>\n  </div>\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_shop_shop_module_ts.js.map