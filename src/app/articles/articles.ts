import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss'],
})
export class Articles implements OnInit {
  devise = '';
  public allowedPageSizes = [5, 10, 15];
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;
  
  artList : Array<Product> = [];
  catList : Array<Category> = [];
  actualCat : Category = null;
  actualCatLevel = 0;
  openCatAccordion = '';
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS : NgbModal,private storageService:StorageService, private router:Router,private route:ActivatedRoute
    , private navController : NavController)
  {
  }

  async ionViewDidEnter(){
    this.artList = await this.storageService.get('Articles');

    this.catList = await this.storageService.get('Categories');
    this.devise = await this.storageService.get('devise');
    if(this.devise == null)
      this.devise = '';
    if(this.catList!=null)
    {
      this.actualCat =this.catList.find(a => a.categoryId === this.route.snapshot.paramMap.get('actualCat'));
      this.enterCategory(this.actualCat);
    }
    if(this.catList!=null)
    {
      this.catList = this.catList.filter(a => a.categoryParent == null);
      this.openCatAccordion = 'categories';
    }else this.openCatAccordion = '';
    // this.catList.forEach(element => {
    //   if(element.categoryImage==null)
    //     element.categoryImage='..//resources//White-square.jpg';
    // });
  }

  async ngOnInit() {
    this.storageService.init();
    this.artList = [];
    this.catList = await this.storageService.get('Categories');
    if(this.catList!=null)
    {
      this.catList = this.catList.filter(a => a.categoryParent == null);
      this.openCatAccordion = 'categories';
    }else this.openCatAccordion = '';
    this.catList.forEach(element => {
      if(element.categoryImage==null)
        element.categoryImage='..//resources//White-square.jpg';
    });
    this.devise = await this.storageService.get('devise');
    console.log(this.devise);
  }
  createCategory()
  {
    console.log('Bouton nv cat');
    if(this.actualCat!=null)
      this.navController.navigateBack(['category-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.navController.navigateBack(['category-form']);
  }
  modifyCategory(c : Category)
  {
    console.log(c);
    if(c!=null)
      this.navController.navigateBack(['category-form',
                          {actualCat : this.actualCat?.categoryId,modifCat: c?.categoryId, modif: 'YES'}],
                          {replaceUrl:true});
    else this.navController.navigateBack(['category-form',{modif: 'YES'}],{replaceUrl:true});

  }
  async enterCategory(c : Category)
  {
    this.actualCat = c;
    this.artList = await this.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée
    this.catList = await this.storageService.get('Categories');
    const completeList = this.catList;
    if(this.actualCat==null)
    {
      console.log(this.catList);
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.catLevel === 0);
      console.log('only 0 :',this.catList);
    }else
    {
      if(this.actualCat.categoryParent === null) // c'est son ID le parent
      {
        console.log('no parent');
        this.catList = this.catList.filter(a => (a.categoryParent?.categoryId ?? '') === c.categoryId && a.catLevel === c.catLevel + 1);
      }else
      {
        console.log('with parent',this.catList,c);
        this.catList = this.catList.filter(a => c.categoryParent.categoryId === (a.categoryParent?.categoryId ?? '') && a.catLevel === c.catLevel + 1);
      }
      // if(this.artList!=null)
      //   this.artList = this.artList.filter(a => a.categoryId === this.actualCat.categoryId);
    }
    if(this.artList !== null)
    {
        console.log('trying the art list',this.actualCat,this.artList);
        if(this.actualCat !== null && this.actualCat !== undefined)
        {
          console.log('actual cat not null');
          if(this.actualCat.categoryParent !== null && this.actualCat.categoryParent !== undefined)
          {
            this.artList = this.artList.filter(a => a.catLevel >= this.actualCat.catLevel && a.categoryParent.categoryId === this.actualCat.categoryParent.categoryId);
          }else
          {
            this.artList = this.artList.filter(a => a.catLevel >= this.actualCat.catLevel && a.categoryParent.categoryId === this.actualCat.categoryId);
          }
        }else this.artList = await this.storageService.get('Articles');
    }

    // + refresh la liste en dessous avec les articles filtrés AUSSI
  }
  async backCategory()
  {
    console.log(this.actualCat);
    this.artList = await this.storageService.get('Articles'); // Dans les 2 cas on a besoin de la liste complete et actualisée
    if(this.actualCat==null || this.actualCat.catLevel === 0)
    {
      console.log('null actual cat');
      this.enterCategory(null);
    }
    else
    {
      let cat = this.actualCat;
      this.catList = await this.storageService.get('Categories');
      console.log(this.catList);
      this.actualCat = this.catList.find(a => (a.categoryParent?.categoryId ?? '') === (this.actualCat.categoryParent.categoryId ?? '') &&
                                                a.catLevel === this.actualCat.catLevel -1);
      this.catList = this.catList.filter(a => (a.categoryParent?.categoryId ?? '') === (cat.categoryParent.categoryId ?? '') &&
                                                a.catLevel === cat.catLevel);
      console.log('new actualCat :', this.actualCat,cat);
      if(this.actualCat === undefined)
      {
       this.actualCat = cat.categoryParent;
       console.log('renew cat : ',this.actualCat);
      }
    }
    if(this.artList !== null)
    {
        console.log('trying the art list',this.actualCat,this.artList);
        if(this.actualCat !== null)
        {
          if(this.actualCat.categoryParent !== null)
          {
            this.artList = this.artList.filter(a => a.catLevel >= this.actualCat.catLevel && a.categoryParent.categoryId === this.actualCat.categoryParent.categoryId);
          }else
          {
            this.artList = this.artList.filter(a => a.catLevel >= this.actualCat.catLevel && a.categoryParent.categoryId === this.actualCat.categoryId);
          }
        }
    }
    // REfresh articles
  }
  createProduct()
  {
    if(this.actualCat!=null)
      this.navController.navigateBack(['article-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.navController.navigateBack(['article-form']);
  }
  modifyProduct(p : Product)
  {
    console.log(p);
    if(p!=null)
      this.navController.navigateBack(['article-form',{modifArt: p.productId, modif: 'YES'}],{replaceUrl:true});
    else this.navController.navigateBack(['article-form',{modif: 'YES'}],{replaceUrl:true});
  }
  async deleteProduct(p : Product)
  {
    let res : string =null;
    await this.modal.open('delArt',p.productName)
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.artList = this.artList.filter(a => a.productId !== p.productId);
    this.storageService.set('Articles',this.artList);
  }
  async deleteCategory(c : Category)
  {
    let res : string =null;
    await this.modal.open('delCat',c.categoryName)
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.catList = this.catList.filter(a => a.categoryId !== c.categoryId);
    this.storageService.set('Categories',this.catList);
  }
}