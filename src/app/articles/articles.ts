import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isThursday } from 'date-fns';
import { threadId } from 'worker_threads';
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
  openCatAccordion = null;
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS : NgbModal,private storageService:StorageService, private router:Router,private route:ActivatedRoute)
  {
  }

  async ionViewDidEnter(){
    this.artList = await this.storageService.get('Articles');

    this.catList = await this.storageService.get('Categories');
    this.devise = await this.storageService.get('devise');

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
    console.log(this.devise);
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
      this.router.navigate(['category-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.router.navigate(['category-form']);
  }
  modifyCategory(c : Category)
  {
    console.log(c);
    if(c!=null)
      this.router.navigate(['category-form',
                          {actualCat : this.actualCat?.categoryId,modifCat: c?.categoryId, modif: 'YES'}],
                          {replaceUrl:true});
    else this.router.navigate(['category-form',{modif: 'YES'}],{replaceUrl:true});

  }
  async enterCategory(c : Category)
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
  async backCategory()
  {
    if(this.actualCat==null)
      this.enterCategory(null);
    else this.enterCategory(this.actualCat.categoryParent);
    // REfresh articles
  }
  createProduct()
  {
    if(this.actualCat!=null)
      this.router.navigate(['article-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.router.navigate(['article-form']);
  }
  modifyProduct(p : Product)
  {
    console.log(p);
    if(p!=null)
      this.router.navigate(['article-form',{modifArt: p.productId, modif: 'YES'}],{replaceUrl:true});
    else this.router.navigate(['article-form',{modif: 'YES'}],{replaceUrl:true});
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