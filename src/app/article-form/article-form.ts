import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { isThisSecond } from 'date-fns';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.html',
  styleUrls: ['./article-form.scss'],
})
export class ArticleForm implements OnInit, OnDestroy{

  uuidValue: string;
  images = "";
  //chantierId: string;
  artId: string;
  actualCat: string;

  art : Product;
  indexFind: number;
  artList : Array<Product> = [];
  catList : Array<Category> = [];

  formArt = new FormGroup({
    productName: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    priceHtva: new FormControl('', [Validators.required]),
  });
  public redirectTo: string;

  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
    console.log('create chantier');
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Cleared');
}
  async ngOnInit() {
    this.actualCat = this.route.snapshot.paramMap.get('actualCat');
    const existId = this.route.snapshot.paramMap.get('categoryId');
    //this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    this.catList = await this.storageService.get('Categories');
    console.log("Category of product",this.actualCat);
    if(existId!=null)
    {
      console.log('modification',existId);
      this.artList =await this.storageService.get("Articles");
      if(this.artList==null)
        this.artList = new Array<Product>();
      this.indexFind =this.artList.findIndex(x => x.productId == existId);
      if(this.indexFind>=0)
      {
        this.artId= this.artList[this.indexFind].productId;
        this.formArt.setValue({
          productName : this.artList[this.indexFind].productName,
          description:  this.artList[this.indexFind].description,
          category:  this.artList[this.indexFind].categoryId,
          priceHtva:  this.artList[this.indexFind].priceHtva,
        });
        this.images=this.artList[this.indexFind].imageProduct;
      }
    }else {
      console.log('creation',existId);
      this.artId= this.generateUUID();
      if(this.actualCat!=null)
      {
        this.formArt.get("category").setValue(this.actualCat);
      }
      this.artList =await this.storageService.get("Articles");
      if(this.artList==null)
        this.artList = new Array<Product>();
    }
  }

  async CreateWorksite() {
   
  }

  get f(){
    return this.formArt.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) 
    {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) 
      {
        var reader = new FileReader();
        reader.onload = (event:any) => 
        {
          console.log(event.target.result);
          this.images=event.target.result; 
          this.formArt.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSubmit()
  {
    console.log('form status',this.formArt);
    this.art = new Product(
      this.artId,
      this.formArt.get('productName').value,
      this.formArt.get('description').value,
      this.formArt.get('priceHtva').value,
      this.formArt.get('category').value,
      this.images[0],
    );

    if(this.indexFind>=0)
    {
      this.artList.splice(this.indexFind,1);
      //this.contactsList.push(this.client);
      this.artList[this.indexFind] = this.art;
    }else this.artList.push(this.art);
    this.storageService.set('Articles',this.artList);
  
    console.log("invoice saved", this.artList);
    this.router.navigate(['/articles',{actualCat: this.actualCat}],{replaceUrl:true});
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  resetImages()
  {
    this.images="";
  }
  selectCategory(event: Event) {
    this.actualCat = (event.target as HTMLSelectElement).value;
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