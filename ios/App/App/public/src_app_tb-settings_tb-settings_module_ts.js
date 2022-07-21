"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tb-settings_tb-settings_module_ts"],{

/***/ 80685:
/*!***********************************************************!*\
  !*** ./src/app/tb-settings/tb-settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabSettingsRoutingModule": () => (/* binding */ TabSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tb_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-settings */ 68848);




const routes = [
    {
        path: '',
        component: _tb_settings__WEBPACK_IMPORTED_MODULE_0__.TabSettings,
    }
];
let TabSettingsRoutingModule = class TabSettingsRoutingModule {
};
TabSettingsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabSettingsRoutingModule);



/***/ }),

/***/ 45262:
/*!***************************************************!*\
  !*** ./src/app/tb-settings/tb-settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabSettingsModule": () => (/* binding */ TabSettingsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tb_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-settings */ 68848);
/* harmony import */ var _tb_settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-settings-routing.module */ 80685);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);









let TabSettingsModule = class TabSettingsModule {
};
TabSettingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tb_settings__WEBPACK_IMPORTED_MODULE_0__.TabSettings }]),
            _tb_settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabSettingsRoutingModule,
        ],
        declarations: [_tb_settings__WEBPACK_IMPORTED_MODULE_0__.TabSettings]
    })
], TabSettingsModule);



/***/ }),

/***/ 68848:
/*!********************************************!*\
  !*** ./src/app/tb-settings/tb-settings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabSettings": () => (/* binding */ TabSettings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tb_settings_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tb-settings.html?ngResource */ 80105);
/* harmony import */ var _tb_settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tb-settings.scss?ngResource */ 46245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal-focus */ 18857);








let TabSettings = class TabSettings {
    constructor(modalS, router, translateService) {
        this.modalS = modalS;
        this.router = router;
        this.translateService = translateService;
        this.modal = new _modal_modal_focus__WEBPACK_IMPORTED_MODULE_2__.NgbdModalFocus(this.modalS);
    }
    ngOnInit() {
    }
    MyProducts() {
        console.log('show articles');
        this.router.navigate(['articles']);
    }
};
TabSettings.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
TabSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tb-settings',
        template: _tb_settings_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tb_settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabSettings);



/***/ }),

/***/ 46245:
/*!*********************************************************!*\
  !*** ./src/app/tb-settings/tb-settings.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 200px;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n\n/* Add a background color and some padding around the form */\n\n/*.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n} \n*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.tabHeader {\n  background-color: orange;\n  color: white;\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRiLXNldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVBOztBQUFBO0VBQ0EsY0FBQTtBQUdBOztBQUFBLDREQUFBOztBQUNBOzs7OztDQUFBOztBQU1DLGlFQUFBOztBQUNEO0VBQ0UsV0FBQTtFQUFhLGVBQUE7RUFDYixhQUFBO0VBQWUsaUJBQUE7RUFDZixzQkFBQTtFQUF3QixnQkFBQTtFQUN4QixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixzQkFBQTtFQUF3QixvREFBQTtFQUN4QixlQUFBO0VBQWlCLHFCQUFBO0VBQ2pCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQ3JCLGdCQUFBO0FBVUY7O0FBUEEsaUVBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQSwyRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0FBVUY7O0FBTkE7RUFFRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFRRiIsImZpbGUiOiJ0Yi1zZXR0aW5ncy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFicy1jZW50ZXIteCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogMjAwcHg7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgYW5kIHNvbWUgcGFkZGluZyBhcm91bmQgdGhlIGZvcm0gKi9cclxuLyouY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59IFxyXG4qL1xyXG4gLyogU3R5bGUgaW5wdXRzIHdpdGggdHlwZT1cInRleHRcIiwgc2VsZWN0IGVsZW1lbnRzIGFuZCB0ZXh0YXJlYXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBwYWRkaW5nOiAxMnB4OyAvKiBTb21lIHBhZGRpbmcgKi8gXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogR3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVycyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE1ha2Ugc3VyZSB0aGF0IHBhZGRpbmcgYW5kIHdpZHRoIHN0YXlzIGluIHBsYWNlICovXHJcbiAgbWFyZ2luLXRvcDogNnB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgLyogQm90dG9tIG1hcmdpbiAqL1xyXG4gIHJlc2l6ZTogdmVydGljYWwgLyogQWxsb3cgdGhlIHVzZXIgdG8gdmVydGljYWxseSByZXNpemUgdGhlIHRleHRhcmVhIChub3QgaG9yaXpvbnRhbGx5KSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiB3aXRoIGEgc3BlY2lmaWMgYmFja2dyb3VuZCBjb2xvciBldGMgKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFdoZW4gbW92aW5nIHRoZSBtb3VzZSBvdmVyIHRoZSBzdWJtaXQgYnV0dG9uLCBhZGQgYSBkYXJrZXIgZ3JlZW4gY29sb3IgKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG5cclxuLnRhYkhlYWRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 80105:
/*!*********************************************************!*\
  !*** ./src/app/tb-settings/tb-settings.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"card text-center\" style=\"background-color: white;\">\r\n    <div class=\"card-header\">\r\n      {{'settings' | translate}}\r\n    </div>\r\n    <!-- <div style=\"margin: 3px;\">\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)='MyProfile()'>{{'myProfile' | translate}}</button>\r\n    </div>\r\n    <div style=\"margin: 3px;\">\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"MyProducts()\">{{'myArticles' | translate}}</button>\r\n    </div>\r\n    <div style=\"margin: 3px;\">\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"MySettings()\">{{'settings' | translate}}</button>\r\n</div>\r\n    <div style=\"margin: 3px;\">\r\n\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"About()\">{{'about' | translate}}</button>\r\n  </div> -->\r\n\r\n    <div class=\"card-footer text-muted\">\r\n      <dx-button type=\"button\" class=\"btn btn-danger\" [text]=\"'logout' | translate\"></dx-button>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tb-settings_tb-settings_module_ts.js.map