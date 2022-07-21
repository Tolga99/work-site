"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modal_modal-focus_ts"],{

/***/ 18857:
/*!**************************************!*\
  !*** ./src/app/modal/modal-focus.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdModalAbout": () => (/* binding */ NgbdModalAbout),
/* harmony export */   "NgbdModalAssign": () => (/* binding */ NgbdModalAssign),
/* harmony export */   "NgbdModalCalendar": () => (/* binding */ NgbdModalCalendar),
/* harmony export */   "NgbdModalConfirmAutofocus": () => (/* binding */ NgbdModalConfirmAutofocus),
/* harmony export */   "NgbdModalDelArt": () => (/* binding */ NgbdModalDelArt),
/* harmony export */   "NgbdModalDelCat": () => (/* binding */ NgbdModalDelCat),
/* harmony export */   "NgbdModalDelChantier": () => (/* binding */ NgbdModalDelChantier),
/* harmony export */   "NgbdModalDelCli": () => (/* binding */ NgbdModalDelCli),
/* harmony export */   "NgbdModalDelDev": () => (/* binding */ NgbdModalDelDev),
/* harmony export */   "NgbdModalDelInv": () => (/* binding */ NgbdModalDelInv),
/* harmony export */   "NgbdModalEndChantier": () => (/* binding */ NgbdModalEndChantier),
/* harmony export */   "NgbdModalExitPage": () => (/* binding */ NgbdModalExitPage),
/* harmony export */   "NgbdModalField": () => (/* binding */ NgbdModalField),
/* harmony export */   "NgbdModalFocus": () => (/* binding */ NgbdModalFocus)
/* harmony export */ });
/* harmony import */ var C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_focus_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-focus.scss?ngResource */ 39845);
/* harmony import */ var _modal_focus_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-focus.html?ngResource */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);

var NgbdModalFocus_1;








let NgbdModalDelInv = class NgbdModalDelInv {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalDelInv.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelInv = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-inv',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingInvoice' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingInvoiceTxt1' | translate}}<span class="text-primary">{{label}}</span>  </strong></p>
      <p>{{'deletingInvoiceTxt2' | translate}}
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelInv);

let NgbdModalExitPage = class NgbdModalExitPage {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalExitPage.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalExitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-exit-page',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'exitPage' | translate}}</h4>
      <!-- <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button> -->
    </div>
    <div class="modal-body">
      <p><strong>{{'exitPageTxt1' | translate}}</strong></p>
      <p>{{'exitPageTxt2' | translate}}
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">{{'yes' | translate}}</button>
    </div>
    `
})], NgbdModalExitPage);

let NgbdModalDelDev = class NgbdModalDelDev {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalDelDev.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelDev = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-dev',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingEstimate' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingEstimateTxt1' | translate}}<span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>{{'deletingEstimateTxt2' | translate}}
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelDev);

let NgbdModalDelChantier = class NgbdModalDelChantier {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
  }

};

NgbdModalDelChantier.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelChantier = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-chan',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingWorksite' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingWorksiteTxt1' | translate}}</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>{{'deletingWorksiteTxt2' | translate}}
      <span class="text-danger">{{'deletingWorksiteTxt3' | translate}}</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelChantier);

let NgbdModalEndChantier = class NgbdModalEndChantier {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
  }

};

NgbdModalEndChantier.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalEndChantier = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-end-chantier',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'finishingWorksite' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'finishingWorksiteTxt1' | translate}}</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      <!-- </p> -->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalEndChantier);

let NgbdModalDelCli = class NgbdModalDelCli {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalDelCli.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelCli = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-cli',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingClient' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingClientTxt1' | translate}}<span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>{{'deletingClientTxt2' | translate}}
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelCli);

let NgbdModalDelCat = class NgbdModalDelCat {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalDelCat.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelCat = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-cat',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingCategory' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingCategoryTxt1' | translate}}<span class="text-primary">{{label}}</span>   ?</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>{{'deletingCategoryTxt2' | translate}}
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelCat);

let NgbdModalDelArt = class NgbdModalDelArt {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalDelArt.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalDelArt = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-del-art',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{'deletingProduct' | translate}}</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>{{'deletingProductTxt1' | translate}}<span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      <!-- </p> -->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">{{'cancel' | translate}}</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
})], NgbdModalDelArt);

let NgbdModalField = class NgbdModalField {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalField.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalField = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-incomplete',
  standalone: true,
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  template: `
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">{{'mandatoryFields' | translate}}</h4>
          <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><strong>{{'mandatoryFieldsTxt1' | translate}} <span class="text-primary">{{label}}</span></strong></p>
          <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
          <!-- <span class="text-danger">This operation can not be undone.</span> -->
          <!-- </p> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
        </div>
        `
})], NgbdModalField);

let NgbdModalAssign = class NgbdModalAssign {
  constructor(modal, storage, translate) {
    this.modal = modal;
    this.storage = storage;
    this.translate = translate;
    this.headElements = ['worksite', 'address', 'client'];
    this.label = '';
    this.listChantier = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storage.init();

      _this.listChantier = yield _this.storage.get('Chantiers');
      console.log("All chantiers : ", _this.listChantier);
      console.log('Facture : ', NgbdModalFocus.label);
    })();
  }

  SelectWorksite(worksite) {
    this.selectedChantier = worksite;
  }

};

NgbdModalAssign.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalAssign = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-assign',
  template: `
          <div class="modal-header">
          <div class="col-auto table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th *ngFor="let head of headElements" scope="col">{{head | translate}}</th>
          </tr>
        </thead>
        <tbody>
          <tr mdbTableCol *ngFor="let chantier of this.listChantier" (click)="SelectWorksite(chantier)" [ngClass]="{'class_name': chantier === selectedChantier}" >
            <td>{{chantier.worksiteName}}</td>
            <td>{{chantier.address}}</td>
            <td>{{chantier.clientId}}</td>
        </tbody>
      </table>
      <div class="modal-footer">
            <button type="button" class="btn btn-danger" (click)="modal.close(this.selectedChantier)">Ok</button>
          </div>
    </div>
        </div>
          `,
  styles: [_modal_focus_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], NgbdModalAssign);

let NgbdModalCalendar = class NgbdModalCalendar {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.fields = [];
    this.label = NgbdModalFocus.label;
    this.fields = this.label.split('|', 5);
    console.log(this.fields);
  }

};

NgbdModalCalendar.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalCalendar = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-calendar',
  standalone: true,
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  template: `
          <div class="modal-header">
            <h4 class="modal-title" id="modal-title">{{'infos' | translate}}</h4>
            <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>{{'title' | translate}} : <span class="text-primary">{{fields[0]}}</span></strong></p>
            <p><strong>{{'client' | translate}} : <span class="text-primary">{{fields[1]}}</span></strong></p>
            <p><strong>{{'description' | translate}} : <span class="text-primary">{{fields[2]}}</span></strong></p>
            <p><strong>{{'startDate' | translate}} : <span class="text-primary">{{fields[3]}}</span></strong></p>
            <p><strong>{{'endDate' | translate}} : <span class="text-primary">{{fields[4]}}</span></strong></p>

            <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
            <!-- <span class="text-danger">This operation can not be undone.</span> -->
            <!-- </p> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
          </div>
          `
})], NgbdModalCalendar);

let NgbdModalAbout = class NgbdModalAbout {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
    this.label = '';
    this.label = NgbdModalFocus.label;
  }

};

NgbdModalAbout.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalAbout = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-incomplete',
  standalone: true,
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  template: `
            <div class="modal-header">
              <h4 class="modal-title" id="modal-title">{{'about' | translate}}</h4>
              <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p><strong>{{'developedBy' | translate}}  <span class="text-primary">Tolga Ov</span></strong></p>
              <p><strong><span class="text-primary">JULY 2022</span></strong></p>
              <p><strong>WorkSite - <span class="text-primary">Version 0.1.2 - BETA</span></strong></p>
              <p><strong><span class="text-primary">Copyright All Rights Reserved</span></strong></p>
              <p><strong><span class="text-primary">Icon : Designed by pch.vector / Freepik</span></strong></p>
              <p><strong>Contact : </strong></p> <A HREF="mailto:Ovalit19@gmail.com">Ovalit19@gmail.com</A>
              <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
              <!-- <span class="text-danger">This operation can not be undone.</span> -->
              <!-- </p> -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
            </div>
            `
})], NgbdModalAbout);

let NgbdModalConfirmAutofocus = class NgbdModalConfirmAutofocus {
  constructor(modal, translate) {
    this.modal = modal;
    this.translate = translate;
  }

};

NgbdModalConfirmAutofocus.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

NgbdModalConfirmAutofocus = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})], NgbdModalConfirmAutofocus);

const MODALS = {
  delChantier: NgbdModalDelChantier,
  endChantier: NgbdModalEndChantier,
  delInv: NgbdModalDelInv,
  delDev: NgbdModalDelDev,
  delCli: NgbdModalDelCli,
  delCat: NgbdModalDelCat,
  delArt: NgbdModalDelArt,
  field: NgbdModalField,
  calendar: NgbdModalCalendar,
  about: NgbdModalAbout,
  assign: NgbdModalAssign,
  exitPage: NgbdModalExitPage
};
let NgbdModalFocus = NgbdModalFocus_1 = class NgbdModalFocus {
  constructor(_modalService) {
    this._modalService = _modalService;
    this.withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  }

  open(name, label) {
    var _this2 = this;

    return (0,C_Users_t_olg_Desktop_Tolga_Ov_Projets_DevisApp_work_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      NgbdModalFocus_1.label = label;

      const modalRef = _this2._modalService.open(MODALS[name]);

      yield modalRef.result.then(data => {
        console.log('OK OK OK');
        return modalRef;
      }, reason => {
        console.log('DISMISS');
        return modalRef;
      });
      return modalRef;
    })();
  }

};

NgbdModalFocus.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal
}];

NgbdModalFocus = NgbdModalFocus_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ngbd-modal-focus',
  template: _modal_focus_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], NgbdModalFocus);


/***/ }),

/***/ 39845:
/*!***************************************************!*\
  !*** ./src/app/modal/modal-focus.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".class_name {\n  background-color: yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWZvY3VzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxtQ0FBQTtBQUViIiwiZmlsZSI6Im1vZGFsLWZvY3VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NfbmFtZXsgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93IWltcG9ydGFudDsgfSJdfQ== */";

/***/ }),

/***/ 48280:
/*!***************************************************!*\
  !*** ./src/app/modal/modal-focus.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<p>First focusable element within the modal window will receive focus upon opening.\r\n    This could be configured to focus any other element by adding an <code>ngbAutofocus</code> attribute on it.</p>\r\n    \r\n    <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ngbAutofocus</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>btn btn-danger<span class=\"token punctuation\">\"</span></span>\r\n          <span class=\"token attr-name\">(click)</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>modal.close(<span class=\"token punctuation\">'</span>Ok click<span class=\"token punctuation\">'</span>)<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Ok<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\r\n    \r\n    <br />\r\n    <!-- <button class=\"btn btn-outline-primary mr-2\" (click)=\"open('focusFirst')\">\r\n      <div>Open confirm modal</div>\r\n      <div class=\"text-dark\" aria-hidden=\"true\"><small>&times; button will be focused</small></div>\r\n    </button>\r\n    \r\n    <button class=\"btn btn-outline-primary\" (click)=\"open('autofocus')\">\r\n      <div>Open confirm modal with `ngbAutofocus`</div>\r\n      <div class=\"text-dark\" aria-hidden=\"true\"><small>Ok button will be focused</small></div>\r\n    </button> -->\r\n    \r\n    ";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modal_modal-focus_ts.js.map