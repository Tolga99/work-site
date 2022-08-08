"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsRoutingModule": () => (/* binding */ TabsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ 1178);




const routes = [
    {
        path: '',
        component: _tabs__WEBPACK_IMPORTED_MODULE_0__.Tabs,
        children: [
            // {
            //   path: 'login',
            //   loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
            // },
            // CHANTIER
            {
                path: 'tb-home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("default-src_app_services_pdf_service_ts-node_modules_angular2-uuid_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tb-home_tb-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-home/tb-home.module */ 33589)).then(m => m.TabHomeModule)
            },
            {
                path: 'articles',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_articles_articles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../articles/articles.module */ 77565)).then(m => m.ArticlesModule)
            },
            {
                path: 'tb-calendar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("src_app_tb-calendar_tb-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-calendar/tb-calendar.module */ 45263)).then(m => m.TabCalendarModule)
            },
            // CONTACTS
            {
                path: 'tb-contacts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_tb-contacts_tb-contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-contacts/tb-contacts.module */ 13407)).then(m => m.TabContactsModule)
            },
            {
                path: '',
                redirectTo: 'tb-home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tb-home',
        pathMatch: 'full'
    }
];
let TabsRoutingModule = class TabsRoutingModule {
};
TabsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ 1178);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs]
    })
], TabsPageModule);



/***/ }),

/***/ 1178:
/*!******************************!*\
  !*** ./src/app/tabs/tabs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.html?ngResource */ 49281);
/* harmony import */ var _tabs_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.scss?ngResource */ 54302);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







let Tabs = class Tabs {
  constructor(_translate, http) {
    this._translate = _translate;
    this.http = http;
  }

  ionViewDidEnter() {
    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

};

Tabs.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}];

Tabs = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tabs',
  template: _tabs_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tabs_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tabs);


/***/ }),

/***/ 54302:
/*!*******************************************!*\
  !*** ./src/app/tabs/tabs.scss?ngResource ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnNjc3MifQ== */";

/***/ }),

/***/ 49281:
/*!*******************************************!*\
  !*** ./src/app/tabs/tabs.html?ngResource ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<ion-tabs style=\"justify-content: start;\">\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tb-home\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>{{'home' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tb-calendar\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>{{'calendar' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tb-contacts\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>{{'contacts' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"articles\">\r\n      <ion-icon name=\"cart\"></ion-icon>\r\n      <ion-label>{{'myArticles' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map