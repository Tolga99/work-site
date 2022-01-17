import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class Shop implements OnInit {

  headElementsArt = ['Nom article', 'Description','Prix HTVA', 'Catégorie'];
  artList : Array<Product> = [];
  panierList : Array<Product> = [];
  catList : Array<Category> = [];
  actualCat : Category = null;

  invoiceId : string;
  chantierId : string;
  type : string;

  formArt = new FormGroup({
    productName: new FormControl('',Validators.required),
    description: new FormControl(''),
    priceHtva: new FormControl('', [Validators.required]),
  });

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router:Router,private route:ActivatedRoute)
  {
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
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    this.type = this.route.snapshot.paramMap.get('type');

    if(this.catList!=null)
      this.catList = this.catList.filter(a => a.categoryParent == null);
  }
  async EnterCategory(c : Category)
  {
    this.actualCat = c;
    this.artList = await this.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée
    if(this.actualCat==null)
    {
      this.catList = await this.storageService.get('Categories');
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.categoryParent == null);
    }else
    {
      this.catList = this.actualCat.subCategories;
      if(this.artList!=null)
        this.artList = this.artList.filter(a => a.categoryId === this.actualCat.categoryId);
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
      this.router.navigate(['article-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.router.navigate(['article-form']);
  }

  AddProduct(p : Product)
  {
    this.panierList.push(p);
  }
  RemoveProduct(p : Product)
  {
    this.panierList.splice(this.panierList.findIndex(a => a.productId === p.productId),1);
  }
  async SavePanier()
  {
    const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
    const chantier = chantierl.find(a => a.chantierId === this.chantierId);
    const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);
    let listInv : Array<Facture>;
    if(this.type === 'facture')
      listInv= chantier.factures;
    else listInv = chantier.devis;
    // let listInv : Array<Facture> = await this.storageService.get("Invoices="+this.chantierId);
    if(listInv!=null)
    {
      const inv = listInv.find(a => a.factureId === this.invoiceId);
      let invIndex : number;
      if(inv!=null)
      {
        invIndex= listInv.findIndex(a => a.factureId === this.invoiceId);

        inv.products= this.panierList;
        listInv[invIndex]= inv;
      }else
      {
        const newInv = new Facture(this.invoiceId,
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
      const newInv = new Facture(this.invoiceId,
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

    if(this.type === 'facture')
      chantier.factures= listInv;
    else chantier.devis= listInv;
    chantierl[chantierIndex] = chantier;
    this.storageService.set('Chantiers',chantierl);
    this.router.navigate(['/invoice',
                        {invoiceId: this.invoiceId,type: this.type, chantierId : this.chantierId, mode:'false'}],
                        {replaceUrl:true});
  }
  GoBack()
  {
    this.router.navigate(['invoice',
                        {invoiceId: this.invoiceId,type: this.type, chantierId : this.chantierId, mode:'false'}],
                        {replaceUrl:true});
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
    if (!this.formArt.valid)
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
    let p = new Product(
      '-1',
      this.formArt.get('productName').value,
      this.formArt.get('description').value,
      this.formArt.get('priceHtva').value,
      null,
      null,
    );
    this.panierList.push(p);

  }
}