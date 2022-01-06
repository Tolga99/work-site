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


  actualCat : string = "";
  tmpCat : Category = null;
  i : number = 0;
  public redirectTo: string;
  constructor(private storageService:StorageService, private router:Router,private route:ActivatedRoute) 
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  async ionViewDidEnter(){
    this.storageService.init();
    this.catList =await this.storageService.get('Categories');
    this.artList =await this.storageService.get('Articles');

    //this.actualCat = this.route.snapshot.paramMap.get('actualCat');
    // if(this.tmpCat!=null)
    //   this.EnterCategory(this.tmpCat);
    // else 
    console.log(this.actualCat,"ou",this.tmpCat);
    if(this.actualCat!=null)
    {
      if(this.actualCat!="null")
      {
        this.catList = this.catList.filter(a => a.categoryParent == this.actualCat);
        this.artList = this.artList.filter(a => a.categoryId == this.actualCat);
      }
    }
    else
    {
      console.log("vaut nul");
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.categoryParent == "");
    }    
  }

  async ngOnInit() {
    this.i++;
    this.storageService.init();
    this.catList = await this.storageService.get("Categories");
    if(this.catList!=null)
      this.catList = this.catList.filter(a => a.categoryParent == "");
  }
  CreateCategory()
  {
    console.log("Bouton nv cat");
    if(this.tmpCat!=null)
      this.router.navigate(['category-form',{actualCat : this.actualCat}],{replaceUrl:true});
    else this.router.navigate(['category-form']);
  }
  async EnterCategory(c : Category)
  {
    this.tmpCat = c;
    this.actualCat= this.tmpCat.categoryId;
    this.catList = await this.storageService.get("Categories");
    this.catList = this.catList.filter(a => a.categoryParent == this.tmpCat.categoryId);
    this.artList = await this.storageService.get("Articles");
    if(this.artList!=null)
    {
      this.artList = this.artList.filter(a => a.categoryId == this.tmpCat.categoryId);
      // let PARENTOK : number = 1;
      // this.artListComplete = await this.storageService.get("Articles");
      // this.artList = this.artListComplete.filter(a => a.categoryId == this.tmpCat.categoryId);
      // let tmpCatId=this.tmpCat.categoryId;
      // while(PARENTOK>0)
      // {
      //   let parentIds : Category[] = this.catListComplete.filter(a => a.categoryParent == tmpCatId); //JE RECUPERE LES SOUS CAT, de la CAT ACTUELLE
      //   parentIds.forEach(element => {
      //     this.artList = this.artListComplete.filter(a => a.categoryId == element.categoryParent); //JE RECUPERE TOUS LES ARTICLES QUI SONT AUX SOUS CAT
          
      //   });
      //   if(parentIds==null)
      //     PARENTOK=0
      // }
    }
    console.log("Catégorie actuelle : ",this.tmpCat.categoryName);
    console.log("Catégorie parent : ",this.actualCat);

    //+ refresh la liste en dessous avec les articles filtrés AUSSI
  }
  async BackCategory()
  {
    this.catList = await this.storageService.get("Categories");
    this.artList = await this.storageService.get("Articles");
    //if(this.actualCat==null || this.actualCat=="null") // QUAND IL VEUT GOBACK alors que ya rien
    if(this.catList.find(a => a.categoryId == this.actualCat)?.categoryParent == null)
    {
      this.tmpCat=null;
      if(this.catList!=null)
        this.catList = this.catList.filter(a => a.categoryParent == ""); 
     // return;
    }
    //La liste des categories
    let tmpParent = this.catList.find(a => a.categoryId == this.actualCat).categoryParent;
    this.catList = this.catList.filter(a => a.categoryParent == this.actualCat);
    this.actualCat= tmpParent; //Je retourne en arriere

    this.tmpCat= this.catList.find(a => a.categoryId == tmpParent);

    //RECUPERATION DES ARTICLES OK
    if(this.artList!=null) 
    {
      if(this.actualCat!=null)
        this.artList = this.artList.filter(a => a.categoryId == this.actualCat); //Je recupere juste les articles de la catégorie 

    }
  }
  CreateProduct()
  {
    console.log("Bouton nv art");
    console.log("[navigating]Category of product",this.tmpCat);

    if(this.tmpCat!=null)
      this.router.navigate(['article-form',{actualCat : this.actualCat}],{replaceUrl:true});
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
