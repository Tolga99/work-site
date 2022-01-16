import {Component, Type} from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-del-inv',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion facture</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer la facture : <span class="text-primary">{{label}}</span>  </strong></p>
      <p>Toutes les informations liées a cette facture seront définitivement supprimés.
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelInv {
      label = '';
    constructor(public modal: NgbActiveModal) {
      this.label= NgbdModalFocus.label;
    }
  }

@Component({
    selector: 'ngbd-modal-del-dev',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion devis</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer le devis : <span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>Toutes les informations liées a ce devis seront définitivement supprimés.
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelDev {
    label = '';
    constructor(public modal: NgbActiveModal) {
      this.label= NgbdModalFocus.label;
    }  }

  @Component({
    selector: 'ngbd-modal-del-chan',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion chantier</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer ce chantier ?</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>Toutes les informations liées a ce chantier seront définitivement supprimés.
      <span class="text-danger">Cette action est irréversible.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelChantier {
    constructor(public modal: NgbActiveModal) {}
  }

  @Component({
    selector: 'ngbd-modal-end-chantier',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Terminer chantier</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de terminer ce chantier ?</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      <!-- </p> -->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalEndChantier {
    constructor(public modal: NgbActiveModal) {}
  }

  @Component({
    selector: 'ngbd-modal-del-cli',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion client</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer le client : <span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>Toutes les informations liées a ce client seront définitivement supprimés.
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelCli {
    label = '';
    constructor(public modal: NgbActiveModal) {
      this.label= NgbdModalFocus.label;
    }  }

  @Component({
    selector: 'ngbd-modal-del-cat',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion catégorie</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer la catégorie : <span class="text-primary">{{label}}</span>   ?</strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <p>Toutes les informations liées a cette catégorie seront définitivement supprimés.
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelCat {
    label = '';
    constructor(public modal: NgbActiveModal) {
      this.label= NgbdModalFocus.label;
    }  }

  @Component({
    selector: 'ngbd-modal-del-art',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppresion article</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Etes-vous sur de supprimer l'article : <span class="text-primary">{{label}}</span>  </strong></p> <!--<span class="text-primary">"John Doe"</span> -->
      <!-- <p>Toutes les informations liées a cette facture seront définitivement supprimés. -->
      <!-- <span class="text-danger">This operation can not be undone.</span> -->
      <!-- </p> -->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
    </div>
    `
  })
  export class NgbdModalDelArt {
    label = '';
    constructor(public modal: NgbActiveModal) {
      this.label= NgbdModalFocus.label;
    }  }

@Component({
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
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: {[name: string]: Type<any>} = {
  delChantier : NgbdModalDelChantier,
  endChantier :NgbdModalEndChantier,
  delInv : NgbdModalDelInv,
  delDev :NgbdModalDelDev,
  delCli :NgbdModalDelCli,
  delCat :NgbdModalDelCat,
  delArt :NgbdModalDelArt,
};

@Component({
  selector: 'ngbd-modal-focus',
  templateUrl: './modal-focus.html'
})
export class NgbdModalFocus {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
    public static label :string;
  constructor(private _modalService: NgbModal) {}

  async open(name: string, label:string) :Promise<NgbModalRef> {
      NgbdModalFocus.label=label;
    // this._modalService.open(MODALS[name]);
    const modalRef =  this._modalService.open(MODALS[name]);
    //modalRef.componentInstance.anyDataForm = this.anyData;

    await modalRef.result.then((data) => {
    console.log('OK OK OK');
    return modalRef;
    }, (reason) => {
    console.log('DISMISS')
    return modalRef;
    });
    return modalRef;
  }
}
