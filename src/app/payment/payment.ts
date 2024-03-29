import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss'],
})
export class Payment implements OnInit {
  devise = '';
  date : string;
  chantier : Chantier;
  chantierList : Array<Chantier>;
  chantierIndex : number;
  chantierId : string;
  public selectedInv : Facture;
  ReceivedMoney : number;
  numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  formPay = new UntypedFormGroup({
   chantierName: new UntypedFormControl(''),
   payment: new UntypedFormControl('',Validators.pattern(this.numericNumberReg)),
   address : new UntypedFormControl(''),
 });

  headElementsInv = ['Nom facture', 'Total','Reste à payer','Date'];
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private router: Router,private route:ActivatedRoute, private storageService :StorageService
    , private navController : NavController, private toastController : ToastController, private translateService : TranslateService)
  {
  }

  async ngOnInit() {

    const nowDate = new Date();
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();
    this.devise = await this.storageService.get('devise');
    if(this.devise == null)
      this.devise = '';
    this.chantierList = await this.storageService.get('Chantiers');
    this.chantierIndex = this.chantierList.findIndex(a => a.chantierId === this.chantierId);
    this.chantier = this.chantierList.find(a => a.chantierId === this.chantierId);
    // console.log(this.invList);
  }
  SelectInvoice(f : Facture)
  {
    this.selectedInv=f;
    if(this.selectedInv.receivedMoney==null)
      this.selectedInv.receivedMoney = new Array<{price : number,date : string}>();

    this.ReceivedMoney=0;
    this.selectedInv.receivedMoney.forEach(element => {
      this.ReceivedMoney=element.price+this.ReceivedMoney;
    });
  }
  public GetAllReceivedMoney(f : Facture) : number
  {
      let total= 0;
      if(f.receivedMoney==null)
        f.receivedMoney = new Array<{price: number, date : string}>();

      f.receivedMoney.forEach(element => {
          if(element.price.toString().includes(',') === true)
          {
            const price = element.price.toString().replace(',','.');
            element.price = Number.parseFloat(price);
          }
          total=element.price+total;
      });

      total = Math.round(total * 100) / 100; // arrondi
      return total;
  }
  GoBack()
  {
    this.navController.navigateBack(['worksite',{chantierId: this.chantierId}],{replaceUrl:true});
  }
  async SavePay()
  {
    const invalid = [];
    const controls = this.formPay.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='payment')
            nom='Paiement';
          invalid.push(nom);
      }
    }
    if(this.selectedInv==null)
      invalid.push('Facture non selectionné');
    if (!this.formPay.valid || this.selectedInv==null)
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

    var payString : string = this.formPay.get('payment').value;
    if(payString.toString().includes(',') === true)
    {
      payString.toString().replace(',','.');
    }
    var pay : number = Number.parseFloat(payString);
    console.log("payString : ",payString);
    console.log("pay : ",pay);
    if(pay==null)
      return;
    if(this.selectedInv==null)
      return;

    if (pay>(this.selectedInv?.totalPrice - this.GetAllReceivedMoney(this.selectedInv)))
    {
      let res : string =null;
      await this.modal.open('field','Argent encodé plus grand que le reste à payer')
      .then(result => result.result
        .then((data) => {
          res='OK';
        }, (reason) => {
        res='DISMISS' }
        ));
        return;
    }
    this.selectedInv.receivedMoney.push({price : pay,date : this.date});
    const index= this.chantier.factures.findIndex(a => a.factureId === this.selectedInv.factureId);
    this.chantier.factures[index] = this.selectedInv;

    this.chantierList[this.chantierIndex] = this.chantier;

    this.storageService.set('Chantiers', this.chantierList);
    this.presentToast(this.translateService.instant('paymentAdded') +this.selectedInv.factureName);
  }
  async presentToast(text : string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
  Terminer()
  {
    this.navController.navigateBack(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});

  }

}
