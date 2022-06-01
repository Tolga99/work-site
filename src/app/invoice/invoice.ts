import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../models/facture';
import { Product } from '../models/product';
import { Chantier } from '../models/chantier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { NumericValueAccessor } from '@ionic/angular';
import { ShoppingCart } from '../models/shoppingCart';
import { InvoiceSettings } from '../models/Settings/invoiceSettings';
import { stringify } from 'querystring';
import { throws } from 'assert';

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.html',
  styleUrls: ['invoice.scss']
})
export class Invoice implements OnInit {

  uuidValue: string;
  images = [];
  chantierId: string;
  invoiceId: string;
  ScanMode: boolean; // Si = false -> on est en mode création -- donc on voit TVA REMISE PHOTO
                          // true = mode
  mode : string;
  type : string;
  date: string;
  inv : Facture;
  invSettings : InvoiceSettings;
  indexFind: number;
  invList : Array<Facture> = [];
  receivedMoney: Array<{ price: number, date: string}>;

  // productsList : Array<Product>= [];
  headElementsArt = ['Nom article', 'Description','Prix HTVA', 'Catégorie'];
  panierList : Array<ShoppingCart> = [];
  formInv = new FormGroup({
    factureName: new FormControl('',Validators.required),
    description: new FormControl(''),
    typePay: new FormControl('', [Validators.required]),
    priceHtva: new FormControl({value:'0',disabled:true}),
    tva: new FormControl('0',),
    remise: new FormControl('0',),
    totalPrice : new FormControl('0',),
  });
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
  }

  async ionViewDidEnter(){
    const tmpMode : string=this.route.snapshot.paramMap.get('mode');
    console.log('ionViewDidEnter');
    if(tmpMode === 'false') // creation
    {
      this.ScanMode=false; // creation
    }else if(tmpMode === 'true')
    {
      this.ScanMode=true;
    }
    this.storageService.init();

    const factureName : string=this.route.snapshot.paramMap.get('factureName');
    const description : string=this.route.snapshot.paramMap.get('description');
    const tva : string=this.route.snapshot.paramMap.get('tva');
    const typePay : string=this.route.snapshot.paramMap.get('typePay');
    const remise : string=this.route.snapshot.paramMap.get('remise');

    if(factureName !== null && factureName !== '')
      this.formInv.get('factureName').setValue(factureName);
    if(description !== null && description !== '')
      this.formInv.get('description').setValue(description);
    if(tva !== null && tva !== '')
      this.formInv.get('tva').setValue(tva);
    if(typePay !== null && typePay !== '')
      this.formInv.get('typePay').setValue(typePay);
    if(remise !== null && remise !== '')
      this.formInv.get('remise').setValue(remise);
  }
  async ngOnInit() {


    const nowDate = new Date();
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    const existId = this.route.snapshot.paramMap.get('factureId');
    const invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    const tmpMode : string=this.route.snapshot.paramMap.get('mode');
    this.type = this.route.snapshot.paramMap.get('type'); // devis ou facture

    const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
    
    if(this.chantierId!=null && this.chantierId !== 'null')
    {
      if(this.type === 'facture')
        this.invList = chantierl.find(a => a.chantierId === this.chantierId).factures;
      else this.invList = chantierl.find(a => a.chantierId === this.chantierId).devis;
    }
    if(this.invList==null)
      this.invList = new Array<Facture>();

    if(tmpMode === 'false')
    {
      this.ScanMode=false;
      this.mode = 'creation';
    }else if(tmpMode === 'true')
    {
      this.ScanMode=true;
      this.mode='scan';
    }
    if(existId!=null)
    {
      console.log('modification',existId);

      this.indexFind =this.invList.findIndex(x => x.factureId === existId);
      if(this.indexFind>=0)
      {
        this.invoiceId= this.invList[this.indexFind].factureId;
        this.formInv.setValue({
          factureName: this.invList[this.indexFind].factureName,
          description:  this.invList[this.indexFind].description,
          typePay:  this.invList[this.indexFind].typePay,
          priceHtva:  this.invList[this.indexFind].priceHtva,
          remise:  this.invList[this.indexFind].remise,
          tva: this.invList[this.indexFind].tva,
          totalPrice: this.invList[this.indexFind].totalPrice,
        });
        this.images=this.invList[this.indexFind].images;
        this.mode = this.invList[this.indexFind].mode;
        this.receivedMoney = this.invList[this.indexFind].receivedMoney;
        console.log('mode ',this.mode);
        console.log(this.invList[this.indexFind].cart);
        if(this.mode === 'creation')
          this.panierList = this.invList[this.indexFind].cart;
        console.log(this.panierList);
      }
    }else {
      console.log('creation : ',existId);
      this.invoiceId= this.generateUUID();
    }
    if(this.mode === 'creation')
    {
      this.ScanMode=false;

    }else if(this.mode === 'scan')
    {
      this.ScanMode=true;
    }
    if(invoiceId!=null)
    {
      this.invoiceId= invoiceId;
      this.panierList= this.invList.find(a=>a.factureId === this.invoiceId).cart;
      let total = 0;
      this.panierList.forEach(element => {
        console.log('total value :' ,total);
          total = total + (Number.parseFloat(element.product.priceHtva.toString()) * element.quantity);
          total = Math.round(total * 100) / 100; // arrondi

      })
      console.log('total value :' ,total);
      this.formInv.get('priceHtva').setValue(total);
    }
    this.invSettings = await this.storageService.get('MyInvoiceSettings');
    if(this.invSettings !== null)
    {
      console.log(this.invSettings);
      let generatedName = '';

      if(this.invSettings.positionApres)
      {
        generatedName += this.invSettings.factureName + this.invSettings.extType;
      }
      console.log(this.invSettings.exts, this.invSettings.exts.length);
      if(this.invSettings.exts === 'Num')
      {
        generatedName += this.invSettings.extNum;
        this.invSettings.extNum = Number.parseInt(this.invSettings.extNum.toString()) + 1;
        console.log(generatedName);
      }else if(this.invSettings.exts === 'Date')
      {
        generatedName += nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
        console.log(generatedName);
      }else if(this.invSettings.exts === 'NumDate')
      {
        generatedName += this.invSettings.extNum;
        generatedName += '-'+nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

        this.invSettings.extNum = Number.parseInt(this.invSettings.extNum.toString()) + 1;
        console.log(generatedName);
      }else if(this.invSettings.exts === 'DateNum')
      {
        generatedName += nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
        generatedName += '-'+this.invSettings.extNum;

        this.invSettings.extNum = Number.parseInt(this.invSettings.extNum.toString()) + 1;
        console.log(generatedName);
      }

      if(this.invSettings.positionAvant)
      {
        generatedName += this.invSettings.extType + this.invSettings.factureName;
      }
      this.formInv.get('factureName').setValue(generatedName);
    }
  }

  GoShopping()
  {
    // this.router.navigate(['shop',{invoiceId : this.invoiceId,type : this.type,chantierId : this.chantierId}],{replaceUrl:true});
    this.router.navigate(['shop',{invoiceId : this.invoiceId,type : this.type,chantierId : this.chantierId,
      factureName : this.formInv.get('factureName').value, remise : this.formInv.get('remise').value,
      tva : this.formInv.get('tva').value, description : this.formInv.get('description').value,
      typePay : this.formInv.get('typePay').value}]);
  }
  async CreateWorksite() {

  }

  get f(){
    return this.formInv.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0])
    {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++)
      {
        const reader = new FileReader();
        reader.onload = (event:any) =>
        {
          console.log(event.target.result);
          this.images.push(event.target.result);
          this.formInv.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  async onSubmit()
  {
    if(this.mode==='creation')
    {
      this.formInv.get('priceHtva').setValidators([Validators.required]);
      this.formInv.get('priceHtva').updateValueAndValidity();

      this.formInv.get('tva').setValidators([Validators.required]);
      this.formInv.get('tva').updateValueAndValidity();

      this.formInv.get('remise').setValidators([Validators.required]);
      this.formInv.get('remise').updateValueAndValidity();
    }else
    {
      this.formInv.get('totalPrice').setValidators([Validators.required]);
      this.formInv.get('totalPrice').updateValueAndValidity();
    }
    console.log('form status',this.formInv);
     const invalid = [];
    const controls = this.formInv.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        let nom='';
        if(name==='factureName')
          nom='Nom facture';
        if(name==='typePay')
          nom='Type de paiement';
        if(name==='priceHtva')
          nom='Prix HTVA';
        if(name==='tva')
          nom='TVA';
        if(name==='remise')
          nom='Remise';
        if(name==='totalPrice')
          nom='Prix total';
        invalid.push(nom);
      }
    }
    if (!this.formInv.valid)
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

    if(this.ScanMode === false)
    {
      let total=0;
      let totalTva = 0;
      var remise : string =this.formInv.get('remise').value;
      remise = remise.toString().replace(',','.');
      var htvaString : string = this.formInv.get('priceHtva').value;
      htvaString = htvaString.toString().replace(',','.');
      let htva :number = Number.parseFloat(htvaString);

      var tvaString : string = this.formInv.get('tva').value;
      tvaString = tvaString.toString().replace(',','.');
      var tva :number = Number.parseFloat(tvaString);

      if(!Number(remise.toString()))
      {
        console.log('pas un numeric',remise.toString());
      }
      if(!Number(htva.toString()))
      {
        console.log('pas un numeric',htva.toString());
      }
      if(!Number(tva.toString()))
      {
        console.log('pas un numeric',tva.toString());
      }

      if(Number.parseFloat(remise) !== 0)
      {
        htva = htva * (1 - Number.parseFloat(remise) / 100);
        htva = Math.round(htva * 100) / 100; // arrondi

      }
      totalTva = htva / 100 * Number.parseFloat(tva.toString());
      totalTva = Math.round(totalTva * 100) / 100; // arrondi

      total= Number.parseFloat(htva.toString()) + totalTva;
      total = Math.round(total * 100) / 100; // arrondi

      console.log('Tva : ',tva);
      console.log('TTva : ',totalTva);
      console.log('htva : ',htva);


      this.formInv.get('totalPrice').setValue(total);
    }
    this.inv = new Facture(
      this.invoiceId,
      this.formInv.get('factureName').value,
      this.formInv.get('description').value,
      this.date,
      this.formInv.get('typePay').value,
      this.formInv.get('remise').value,
      this.formInv.get('priceHtva').value,
      this.formInv.get('tva').value,
      this.formInv.get('totalPrice').value,
      this.images,
      this.receivedMoney,
      this.panierList,
      this.mode,
      this.type,
    );
    console.log('list avant : ', this.invList);
    if(this.indexFind>=0)
    {
      // this.invList.splice(this.indexFind,1);
      this.invList[this.indexFind] = this.inv;
    }else
    {
      const index=this.invList.findIndex(a => a.factureId === this.invoiceId);
      if(index>=0)
        this.invList[index]=this.inv;
      else this.invList.push(this.inv);
    }
    console.log('list apres : ', this.invList);
    this.storageService.set('MyInvoiceSettings',this.invSettings);
    if(this.chantierId !== 'null')
    {
      const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === this.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId); 
      if(this.type === 'facture')
        chantier.factures= this.invList;
      else chantier.devis = this.invList;
  
      chantierl[chantierIndex] = chantier;
      this.storageService.set('Chantiers',chantierl);
      this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});
    }else
    {
      let invs : Array<Facture> = await this.storageService.get('NAfactures');
      if(invs === null)
      {
        invs = new Array<Facture>();
      }
      invs.push(this.inv);
      this.storageService.set('NAfactures',invs);
      this.router.navigate(['/tb-home'],{replaceUrl:true});
    }
    console.log('invoice saved', this.invList);
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  resetImages()
  {
    this.images=[];
  }
  hideInput()
  {
    if(this.ScanMode === true)
      this.ScanMode = false;
    else  this.ScanMode = true;
  }
  GoBack()
  {
    this.router.navigate(['worksite',{chantierId: this.chantierId}],{replaceUrl:true});
  }
}
