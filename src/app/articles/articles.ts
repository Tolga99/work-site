import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss'],
})
export class Articles implements OnInit {

  headElementsArt = ['Nom article', 'Description','Quantité','Prix HTVA', 'Catégorie'];
  artList : Array<Product> = [];
  catList : Array<Category> = [];

  actualCat : string = "";

  i : number = 0;
  constructor(private storageService:StorageService, private router:Router) { }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.artList =await this.storageService.get('Articles');
    if(this.i==0)
      this.catList =await this.storageService.get('Categories');
    console.log(this.i);
  }

  async ngOnInit() {
    this.i++;
    this.storageService.init();
    this.catList = await this.storageService.get("Categories");
    this.catList = this.catList.filter(a => a.categoryParent == "");
  }
  CreateCategory()
  {
    console.log("Bouton nv cat");
    this.router.navigate(['category-form']);
  }
  async EnterCategory(c : Category)
  {
    this.actualCat= c.categoryParent;
    this.catList = await this.storageService.get("Categories");
    this.catList = this.catList.filter(a => a.categoryParent == c.categoryId);
    this.artList = await this.storageService.get("Articles");
    this.artList = this.artList.filter(a => a.categoryId == c.categoryId);
    console.log("Catégorie actuelle : ",c.categoryName);
    console.log("Catégorie parent : ",this.actualCat);

    //+ refresh la liste en dessous avec les articles filtrés AUSSI
  }
  async BackCategory()
  {
    this.catList = await this.storageService.get("Categories");
    let tmpParent = this.catList.find(a => a.categoryId == this.actualCat)?.categoryParent;
    this.catList = this.catList.filter(a => a.categoryParent == this.actualCat);
    this.artList = await this.storageService.get("Articles");
    if(this.actualCat=="")
      this.artList = this.artList;
    else
    {
      this.artList = this.artList.filter(a => a.categoryId == this.actualCat);
      this.actualCat= tmpParent;
    }
   // console.log("Nouvelle Catégorie actuelle : ",this.catList[0].categoryParent);
    console.log("Nouvelle Catégorie parent : ",this.actualCat);
  }
  CreateProduct()
  {
    console.log("Bouton nv art");
    this.router.navigate(['article-form']);
  }
  DeleteProduct(p : Product)
  {

  }
}
