import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import list from 'devextreme/ui/list';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shoppingCart';
import { MethodsService } from '../services/methods.service';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class Shop implements OnInit {
  uuidValue: string;

  public allowedPageSizes = [5, 10, 15];
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;

  headElementsArt = ['Nom article', 'Description','Prix Unitaire',''];
  headElementsArtCart = ['Nom article', 'Description','Prix Unitaire','Quantité','Prix total',''];
  artList : Array<Product> = [];
  panierList : Array<ShoppingCart> = [];
  catList : Array<Category> = [];
  actualCat : Category = null;
  openCatAccordion = '';
  invoiceId : string;
  chantierId : string;
  type : string;

  invName : string;
  invRemise : string;
  invTypePay : string;
  invTva : string;
  invDescription : string;
  panierEmpty = 'YES';
  numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  formArt = new UntypedFormGroup({
    productName: new UntypedFormControl('',Validators.required),
    description: new UntypedFormControl(''),
    priceHtva: new UntypedFormControl('',Validators.pattern(this.numericNumberReg)),
  });
  initialPanier :Array<ShoppingCart> = [];
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService,
    private router:Router,private route:ActivatedRoute, private methodsService : MethodsService
    , private navController : NavController)
  {
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  async ionViewDidEnter(){
    this.catList = await this.storageService.get('Categories');
    this.actualCat =this.catList.find(a => a.categoryId === this.route.snapshot.paramMap.get('actualCat'));

    this.EnterCategory(this.actualCat);

  }

  async ngOnInit() {
    this.storageService.init();
    this.artList = await this.storageService.get('Articles');
    this.catList = await this.storageService.get('Categories');

    this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    console.log(this.chantierId);
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    this.type = this.route.snapshot.paramMap.get('type');

    this.invName = this.route.snapshot.paramMap.get('factureName');
    this.invTva = this.route.snapshot.paramMap.get('tva');
    this.invTypePay = this.route.snapshot.paramMap.get('typePay');
    this.invRemise = this.route.snapshot.paramMap.get('remise');
    this.invDescription = this.route.snapshot.paramMap.get('description');

    if(this.chantierId != null && this.chantierId != 'null' && this.invoiceId != null)
    {
      let chantierList : Chantier[] = await this.storageService.get('Chantiers');
      if(chantierList?.find(a => a.chantierId === this.chantierId).factures?.find(b => b.factureId === this.invoiceId)?.cart != null)
      {
        this.panierList = chantierList.find(a => a.chantierId === this.chantierId).factures.find(b => b.factureId === this.invoiceId).cart;
        this.panierList.forEach(a => this.initialPanier.push(a));
        this.panierEmpty = 'NO';
      }
    }else if(this.chantierId === 'null')
    {
      let invoicesList : Facture[] = await this.storageService.get('NAfactures');
      if(invoicesList.find(a => a.factureId === this.invoiceId).cart != null)
      {
        this.panierList = invoicesList.find(a => a.factureId === this.invoiceId).cart;
        console.log(this.panierList, invoicesList, this.invoiceId);
        this.panierList.forEach(a => this.initialPanier.push(a));
        this.panierEmpty = 'NO';
      }
    }
    if(this.panierList == null)
    {
      this.panierList = new Array<ShoppingCart>();
      this.initialPanier = new Array<ShoppingCart>();
      this.panierEmpty = 'YES';
    }

    if(this.catList!=null)
      this.catList = this.catList.filter(a => a.categoryParent == null);
    this.openCatAccordion = this.catList == null ? '' : 'categories';
    }
  async EnterCategory(c : Category)
  {
    this.actualCat = c;
    this.artList = await this.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée
    this.catList = await this.storageService.get('Categories');
    if(this.actualCat==null)
    {
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.catLevel === 0);
    }else
    {
      this.catList = this.catList.filter(a => c.categoryParent === a.categoryParent && a.catLevel === c.catLevel + 1);
      if(this.artList!=null)
        this.artList = this.artList.filter(a => a.categoryParent.categoryId === this.actualCat.categoryId);
    }
    // + refresh la liste en dessous avec les articles filtrés AUSSI
  }
  async BackCategory()
  {
    if(this.actualCat==null)
      this.EnterCategory(null);
    else this.EnterCategory(this.actualCat.categoryParent);
    // REfresh articles
  }
  CreateProduct()
  {
    if(this.actualCat!=null)
      this.navController.navigateBack(['article-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.navController.navigateBack(['article-form']);
  }

  AddProduct(p : Product)
  {
    const indexExist = this.panierList.findIndex(a => a.product.productId === p.productId);
    if(indexExist === -1)
    {
      this.panierList.push(new ShoppingCart(this.generateUUID(),p,1));
    }else
    {
      this.panierList[indexExist].quantity += 1;
    }
  }
  RemoveProduct(p : ShoppingCart)
  {
    const indexExist = this.panierList.findIndex(a => a.product.productId === p.product.productId);
    if(this.panierList[indexExist].quantity === 1)
    {
      this.panierList.splice(this.panierList.findIndex(a => a.product.productId === p.product.productId),1);
    }else
    {
      this.panierList[indexExist].quantity -= 1;
    }
  }
  async SavePanier()
  {
    let listInv : Array<Facture>;
    console.log('ID chantier : ',this.chantierId);
    if(this.chantierId !== null && this.chantierId !== 'null')
    {
      const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === this.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);
      console.log('chantier :', chantier);
      if(this.type === 'facture')
        listInv= chantier.factures;
      else listInv = chantier.devis;
    }else
    {
      listInv = await this.storageService.get('NAfactures');
    }
    // let listInv : Array<Facture> = await this.storageService.get("Invoices="+this.chantierId);
    let newInv : Facture;
    console.log('listInv :',listInv,this.invoiceId);
    if(listInv!=null)
    {
      const inv = listInv.find(a => a.factureId === this.invoiceId);
      let invIndex : number;
      if(inv!=null)
      {
        invIndex= listInv.findIndex(a => a.factureId === this.invoiceId);
        console.log('old panier : ',inv.cart);
        console.log('new panier :', this.panierList);
        inv.cart= this.panierList;
        newInv = inv;
        listInv[invIndex]= inv;
        console.log('new ListInv',listInv,inv,invIndex);
      }else
      {
        newInv = new Facture(this.invoiceId,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  this.panierList,
                                  'creation',
                                  this.type);
        listInv.push(newInv);
      }
    }
    else
    {
      listInv = new Array<Facture>();
      newInv = new Facture(this.invoiceId,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        this.panierList,
        'creation',
        this.type);
      listInv.push(newInv);
    }
    if(this.chantierId !== null && this.chantierId !== 'null')
    {
      const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === this.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);

      if(this.type === 'facture')
        chantier.factures= listInv;
      else chantier.devis= listInv;
      chantierl[chantierIndex] = chantier;
      console.log('saving panier for chantier :',chantier,listInv);
      this.storageService.set('Chantiers',chantierl);
      this.navController.navigateBack(['/invoice',
                          {invoiceId: this.invoiceId,type: this.type, chantierId : this.chantierId, mode:'false', comeFromShop : 'true'
                          ,factureName : this.invName, remise : this.invRemise,
                          tva : this.invTva, description : this.invDescription,
                          typePay : this.invTypePay}],
                          {replaceUrl:true});
    }else
    {
      let invs : Array<Facture> = await this.storageService.get('NAfactures');
      if(invs === null)
      {
        invs = new Array<Facture>();
      }
      invs = listInv;
      console.log('saving new List :',listInv,invs);
      this.storageService.set('NAfactures',invs);
      this.navController.navigateBack(['/invoice',
                          {invoiceId: this.invoiceId,type: this.type, chantierId : this.chantierId, mode:'false', comeFromShop : 'true'
                          ,factureName : this.invName, remise : this.invRemise,
                          tva : this.invTva, description : this.invDescription,
                          typePay : this.invTypePay}],
                          {replaceUrl:true});    }
  }

  async GoBack()
  {
    var result : string | undefined;
    if(this.panierEmpty === 'YES')
    {
      let cpt = 0;
      console.log(this.initialPanier,this.panierList);
      if(this.initialPanier.length !== this.panierList.length)
      {
        cpt ++;
      }
      console.log(cpt);
      if(cpt > 0)
      {
        result = await this.GoBackModal();
      }
    }else
    {
      let samePanier = true;
      console.log(this.initialPanier,this.panierList);
      this.panierList.forEach(a =>
        {
          if(!this.initialPanier.includes(a))
          {
            samePanier = false;
            console.log(a,this.initialPanier);
          }
        });
      if(!samePanier)
      {
        result = await this.GoBackModal();
      }
    }
    console.log(result);
    if(result !== null)
      this.navController.navigateBack(['invoice',
    {invoiceId: this.invoiceId,type: this.type, chantierId : this.chantierId, mode:'false', comeFromShop : 'true'
    ,factureName : this.invName, remise : this.invRemise,
    tva : this.invTva, description : this.invDescription,
    typePay : this.invTypePay}],
    {replaceUrl:true});
}
  async GoBackModal() : Promise<string>
  {
    let res : string =null;
    await this.modal.open('exitPage','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS'; }
      ));
    if(res === 'DISMISS')
        return null;
    return '';
  }
  async AddFastProduct()
  {
    const invalid = [];
    const controls = this.formArt.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        let nom='';
        if(name==='productName')
          nom='Nom article';
        if(name==='priceHtva')
          nom='Prix HTVA';
        invalid.push(nom);
      }
    }
    var priceString : string = this.formArt.get('priceHtva').value;
    while(priceString.includes(','))
    {
      priceString = priceString.replace(',','.');
    }
    this.formArt.get('priceHtva').setValue(priceString);
    var price = Number.parseFloat(priceString);

    console.log(price);
    if (!this.formArt.valid || Number.isNaN(price))
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
    }else console.log(this.formArt.get('priceHtva').value);
    let p = new Product(
      '-1',
      this.formArt.get('productName').value,
      this.formArt.get('description').value,
      this.formArt.get('priceHtva').value,
      null,
      null,
      0
    );
    this.panierList.push(new ShoppingCart(this.generateUUID(),p,1));

  }
}