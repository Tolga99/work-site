import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import {
  NgbdModalDelArt,
  NgbdModalDelCat,
  NgbdModalDelCli,
  NgbdModalDelDev,
  NgbdModalDelInv,
  NgbdModalDelChantier,
  NgbdModalEndChantier,
  NgbdModalConfirmAutofocus,
  NgbdModalFocus,
  NgbdModalAssign,
} from './modal-focus';

@NgModule({
  imports: [IonicModule,CommonModule, NgbModule,SharedModule],
  declarations: [NgbdModalFocus,NgbdModalDelArt,
    NgbdModalDelCat,
    NgbdModalDelCli,
    NgbdModalDelDev,
    NgbdModalDelInv,
    NgbdModalDelChantier,
    NgbdModalEndChantier,NgbdModalConfirmAutofocus,NgbdModalAssign],
  exports: [NgbdModalFocus],
  bootstrap: [NgbdModalFocus]
})
export class NgbdModalFocusModule {}
