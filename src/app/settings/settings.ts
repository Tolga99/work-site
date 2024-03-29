import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { isThisSecond } from 'date-fns';
import { NgbdModalFocus } from '../modal/modal-focus';
import { InvoiceSettings } from '../models/Settings/invoiceSettings';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.html',
  styleUrls: ['settings.scss']
})
export class Settings implements OnInit{
  deviseList = ['€','$','£'];
  langs : string[] = [];
  devise='';
  ext = '';
  extTypes = ['Numéro (Ex: 34)', 'Date (Ex: JJ/MM/AAAA)','Numéro-Date','Date-Numero'];
  formGeneral = new UntypedFormGroup({
    devise: new UntypedFormControl('')
  });
  formLang = new UntypedFormGroup({
    lang: new UntypedFormControl('')
  });
  formInvoice = new UntypedFormGroup({
    factureName: new UntypedFormControl('',Validators.required),
    exts: new UntypedFormControl('',Validators.required),
    extType: new UntypedFormControl(''),
    extNum: new UntypedFormControl(''),
    positionAvant: new UntypedFormControl(''),
    positionApres: new UntypedFormControl(''),
  });
  currentLang = 'en';
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService: StorageService,private router: Router
    , private navController : NavController, private toastController : ToastController, private translateService : TranslateService) {
    console.log('Module settings');
  }

  async ngOnInit(): Promise<void>
  {
    this.storageService.init();
        //Init 
        var langs = await this.storageService.get('languages');
        if(langs == null || langs == undefined)
        {
          var newLangs = ['fr','en','tr'];
          this.storageService.set('languages',newLangs);
        }
    this.currentLang = await this.storageService.get('currentLang'); 
    this.langs = await this.storageService.get('languages');
    let invoiceSettings : InvoiceSettings = await this.storageService.get('MyInvoiceSettings');
    console.log(invoiceSettings);

    if(invoiceSettings!=null)
    {
      let selectedExt : number;
      if(invoiceSettings.exts === 'Num')
      {
        selectedExt = 0;
      }else if(invoiceSettings.exts === 'Date')
      {
        selectedExt = 1;
      }else if(invoiceSettings.exts === 'NumDate')
      {
        selectedExt = 2;
      }else if(invoiceSettings.exts === 'DateNum')
      {
        selectedExt = 3;
      }else selectedExt = 0;

        this.formInvoice.setValue({
          factureName: invoiceSettings.factureName,
          exts: this.extTypes[selectedExt],
          extType: invoiceSettings.extType,
          extNum: invoiceSettings.extNum,
          positionAvant: invoiceSettings.positionAvant,
          positionApres: invoiceSettings.positionApres,
        });
    }else
    {
      this.formInvoice.setValue({
        factureName: '',
        exts: '',
        extType: '',
        extNum: '0',
        positionAvant: false,
        positionApres: false,
      });
    }
  }

  async UpdateInvoiceSettings() {
    const invalid = [];
    const controls = this.formInvoice.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='firstName')
            nom='Prénom';
          if(name==='lastName')
            nom='Nom';
          invalid.push(nom);
      }
    }
    if (!this.formInvoice.valid)
    {
      let res : string =null;
      await this.modal.open('field',invalid.toString())
      .then(result => result.result
        .then((data) => {
          res='OK';
        }, (reason) => {
        res='DISMISS' }
        ));
        return;
    }
    console.log(this.ext, this.ext.length);

    let selectedExt = '';
    if(this.ext === 'Numéro (Ex: 34)')
    {
      selectedExt = 'Num';
    }else if(this.ext === 'Date (Ex: JJ/MM/AAAA)')
    {
      selectedExt = 'Date';
    }else if(this.ext === 'Numéro-Date')
    {
      selectedExt = 'NumDate';
    }else if(this.ext === 'Date-Numero')
    {
      selectedExt = 'DateNum';
    }
    this.storageService.init();
    this.storageService.set('MyInvoiceSettings',new InvoiceSettings(
      this.formInvoice.get('factureName').value,
      selectedExt,
      this.formInvoice.get('extType').value,
      this.formInvoice.get('extNum').value,
      this.formInvoice.get('positionAvant').value,
      this.formInvoice.get('positionApres').value,
    ));
    this.devise=this.formGeneral.get('devise').value;
    console.log('Parametres de facture actualisé, redirection...');
    const toast = await this.toastController.create({
      message: this.translateService.instant('settings') + ' ' + this.translateService.instant('saved'),
      duration: 2000
    });
    toast.present();
    this.navController.navigateBack(['tb-home'],{replaceUrl:true});

  }
  selectExtType(event) {
    console.log('select', event);
    this.ext = (event.target as HTMLSelectElement).value;
  }
  selectDevise(event)
  {
    this.devise = (event.target as HTMLSelectElement).value;
  }
  async saveLang(event)
  {
    var newLang = (event.target as HTMLSelectElement).value;
    console.log(newLang);
    if(newLang !== null)
    {
      this.storageService.set('currentLang',newLang);
      this.currentLang = newLang;
      this.translateService.setDefaultLang(newLang);
      this.translateService.use(newLang);
      const toast = await this.toastController.create({
        message: this.translateService.instant('lang') + ' ' + this.translateService.instant('saved'),
        duration: 2000
      });
      toast.present();
    }
  }
  async updateGeneralSettings()
  {
    if(this.devise !== null)
    {
      this.storageService.set('devise',this.devise);
      const toast = await this.toastController.create({
        message: this.translateService.instant('devise') + ' ' + this.translateService.instant('saved'),
        duration: 2000
      });
      toast.present();
    }
  }
  async GoBack()
  {
    this.navController.navigateBack(['tb-home'],{replaceUrl:true});
  }
}
