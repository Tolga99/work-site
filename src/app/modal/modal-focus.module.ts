import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NgbdModalDelArt,
  NgbdModalDelCat,
  NgbdModalDelCli,
  NgbdModalDelDev,
  NgbdModalDelInv,
  NgbdModalDelChantier,
  NgbdModalEndChantier,
  NgbdModalConfirmAutofocus,
  NgbdModalFocus
} from './modal-focus';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NgbdModalFocus,NgbdModalDelArt,
    NgbdModalDelCat,
    NgbdModalDelCli,
    NgbdModalDelDev,
    NgbdModalDelInv,
    NgbdModalDelChantier,
    NgbdModalEndChantier,NgbdModalConfirmAutofocus],
  exports: [NgbdModalFocus],
  bootstrap: [NgbdModalFocus]
})
export class NgbdModalFocusModule {}
