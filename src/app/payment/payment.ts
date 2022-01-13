import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss'],
})
export class Payment implements OnInit {

  date : string;
  chantier : Chantier;
  chantierList : Array<Chantier>;
  chantierIndex : number;
  chantierId : string;
  selectedInv : Facture;
  ReceivedMoney : number;
  formPay = new FormGroup({
   chantierName: new FormControl('', [Validators.required]),
   payment: new FormControl('', [Validators.required]),
   address : new FormControl('',Validators.required),
 });

  headElementsInv = ['Nom facture', 'Total','Reste à payer','Date'];
  redirectTo='';
  constructor(private router: Router,private route:ActivatedRoute, private storageService :StorageService)
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  async ngOnInit() {

    const nowDate = new Date();
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();
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
          total=element.price+total;
      });
      console.log(total);

      total = Math.round(total * 100) / 100; // arrondi
      return total;
  }
  GoBack()
  {
    this.router.navigateByUrl(
			this.redirectTo,
			{
				replaceUrl: true
			}
		);
  }
  SavePay()
  {
    const pay=this.formPay.get('payment').value;
    if(Number.parseFloat(pay)==null)
      return;
    if(this.selectedInv==null)
      return;

    this.selectedInv.receivedMoney.push({price : Number.parseFloat(pay),date : this.date});
    const index= this.chantier.factures.findIndex(a => a.factureId === this.selectedInv.factureId);
    this.chantier.factures[index] = this.selectedInv;

    this.chantierList[this.chantierIndex] = this.chantier;

    this.storageService.set('Chantiers', this.chantierList);


  }
  Terminer()
  {
    this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});

  }

}
