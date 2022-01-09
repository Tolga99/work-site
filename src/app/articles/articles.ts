import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isThursday } from 'date-fns';
import { threadId } from 'worker_threads';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss'],
})
export class Articles implements OnInit {

  headElementsArt = ['Nom article', 'Description','Prix HTVA', 'Catégorie'];
  artList : Array<Product> = [];
  catList : Array<Category> = [];
  actualCat : Category = null;

  public redirectTo: string;
  constructor(private storageService:StorageService, private router:Router,private route:ActivatedRoute) 
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  async ionViewDidEnter(){
    this.catList = await this.storageService.get("Categories");
    this.actualCat =this.catList.find(a => a.categoryId== this.route.snapshot.paramMap.get('actualCat'));

    this.EnterCategory(this.actualCat);
   
  }

  async ngOnInit() {
    this.storageService.init();
    this.artList = await this.storageService.get("Articles");
    this.catList = await this.storageService.get("Categories");
    if(this.catList!=null)
      this.catList = this.catList.filter(a => a.categoryParent == null);
  }
  CreateCategory()
  {
    console.log("Bouton nv cat");
    if(this.actualCat!=null)
      this.router.navigate(['category-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.router.navigate(['category-form']);
  }
  async EnterCategory(c : Category)
  {
    this.actualCat = c;
    this.artList = await this.storageService.get("Articles"); // Dans les 2 cas on a besoin de la liste complete et actualisée
    if(this.actualCat==null)
    {
      this.catList = await this.storageService.get("Categories"); 
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.categoryParent == null);
    }else
    {
      this.catList = this.actualCat.subCategories;
      if(this.artList!=null)
        this.artList = this.artList.filter(a => a.categoryId == this.actualCat.categoryId);
    }
    //+ refresh la liste en dessous avec les articles filtrés AUSSI
  }
  async BackCategory()
  {
    if(this.actualCat==null)
      this.EnterCategory(null);
    else this.EnterCategory(this.actualCat.categoryParent);
    //REfresh articles
  }
  CreateProduct()
  {
    if(this.actualCat!=null)
      this.router.navigate(['article-form',{actualCat : this.actualCat.categoryId}],{replaceUrl:true});
    else this.router.navigate(['article-form']);
  }
  DeleteProduct(p : Product)
  {

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
}