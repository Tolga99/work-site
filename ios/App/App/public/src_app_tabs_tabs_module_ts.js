"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 85257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsRoutingModule": () => (/* binding */ TabsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ 39164);




const routes = [
    {
        path: '',
        component: _tabs__WEBPACK_IMPORTED_MODULE_0__.Tabs,
        children: [
            //CHANTIER
            {
                path: 'tb-home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_explore-container_explore-container_module_ts-src_app_material_module_ts"), __webpack_require__.e("src_app_tb-home_tb-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-home/tb-home.module */ 54363)).then(m => m.TabHomeModule)
            },
            {
                path: 'worksite',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_explore-container_explore-container_module_ts-src_app_material_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_worksite_worksite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../worksite/worksite.module */ 2328)).then(m => m.WorksiteModule)
            },
            {
                path: 'createworksite',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_create-worksite_create-worksite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../create-worksite/create-worksite.module */ 41246)).then(m => m.CreateWorksiteModule)
            },
            {
                path: 'invoice',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../invoice/invoice.module */ 38819)).then(m => m.InvoiceModule)
            },
            {
                path: 'shop',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shop_shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../shop/shop.module */ 15270)).then(m => m.ShopModule)
            },
            {
                path: 'hours',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_hours_hours_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../hours/hours.module */ 36400)).then(m => m.HoursModule)
            },
            {
                path: 'payment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("src_app_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../payment/payment.module */ 15052)).then(m => m.PaymentModule)
            },
            //CALENDRIER
            {
                path: 'tb-calendar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("src_app_tb-calendar_tb-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-calendar/tb-calendar.module */ 46069)).then(m => m.TabCalendarModule)
            },
            //CONTACTS
            {
                path: 'tb-contacts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("default-src_app_explore-container_explore-container_module_ts-src_app_material_module_ts"), __webpack_require__.e("src_app_tb-contacts_tb-contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-contacts/tb-contacts.module */ 63169)).then(m => m.TabContactsModule)
            },
            {
                path: 'client',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../client/client.module */ 21164)).then(m => m.ClientModule)
            },
            {
                path: 'new-contact',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tb-contacts-client_tb-contacts-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tb-contacts-client/tb-contacts-client.module */ 99322)).then(m => m.TabContactsClientModule)
            },
            //REGLAGES
            {
                path: 'tb-settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tb-settings_tb-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tb-settings/tb-settings.module */ 44932)).then(m => m.TabSettingsModule)
            },
            {
                path: 'my-profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 44404)).then(m => m.ProfileModule)
            },
            //ARTICLES CATEGORIES
            {
                path: 'articles',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("src_app_articles_articles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../articles/articles.module */ 20350)).then(m => m.ArticlesModule)
            },
            {
                path: 'article-form',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_article-form_article-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../article-form/article-form.module */ 66147)).then(m => m.ArticleFormModule)
            },
            {
                path: 'category-form',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_modal_modal-focus_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_category-form_category-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../category-form/category-form.module */ 51423)).then(m => m.CategoryFormModule)
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

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 85257);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ 39164);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsRoutingModule
        ],
        declarations: [_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs]
    })
], TabsPageModule);



/***/ }),

/***/ 39164:
/*!******************************!*\
  !*** ./src/app/tabs/tabs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.html */ 6326);
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.scss */ 47163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let Tabs = class Tabs {
    constructor() { }
};
Tabs.ctorParameters = () => [];
Tabs = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tabs);



/***/ }),

/***/ 6326:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tb-home\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Acceuil</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tb-calendar\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Calendrier</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tb-contacts\">\r\n      <!-- <ion-icon name=\"contacts\"></ion-icon> -->\r\n      <ion-label>Contacts</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tb-settings\">\r\n      <ion-icon name=\"settings\"></ion-icon>\r\n      <ion-label>Réglages</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ 47163:
/*!********************************!*\
  !*** ./src/app/tabs/tabs.scss ***!
  \********************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map