import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Category } from '../models/category';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.html',
  styleUrls: ['./category-form.scss'],
})
export class CategoryForm implements OnInit,OnDestroy {

  uuidValue: string;
  images = "";
  //chantierId: string;
  catId: string;
  ActualCat : string;

  cat : Category;
  parentCat : Category;
  indexFind: number;
  catList : Array<Category> = [];
  formCat = new FormGroup({
    categoryName: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    categoryPar: new FormControl('', [Validators.required]),
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

    const existId = this.route.snapshot.paramMap.get('categoryId');
    //this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    this.ActualCat = this.route.snapshot.paramMap.get('actualCat');


    if(existId!=null)
    {
      console.log('modification',existId);
      this.catList =await this.storageService.get("Categories");
      if(this.catList==null)
        this.catList = new Array<Category>();
      this.indexFind =this.catList.findIndex(x => x.categoryId == existId);
      if(this.indexFind>=0)
      {
        //this.catId= this.catList[this.indexFind].categoryId;
        this.formCat.setValue({
          factureName: this.catList[this.indexFind].categoryName,
          description:  this.catList[this.indexFind].description,
          categoryPar:  this.catList[this.indexFind].categoryParent,
   
        });
        this.images=this.catList[this.indexFind].categoryImage;
      }
    }else {
      console.log('creation',existId);
      this.catId= this.generateUUID();
      this.catList =await this.storageService.get("Categories");
      if(this.catList==null)
        this.catList = new Array<Category>();
      if(this.ActualCat!=null)
        this.formCat.get('categoryPar').setValue(this.ActualCat);
    }
  }

  async CreateWorksite() {
   
  }

  get f(){
    return this.formCat.controls;
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
          this.formCat.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSubmit()
  {
    console.log('form status',this.formCat);
    // if (!this.formCat.valid)
    //   return;
    let parent: boolean = true;
    const invalid = [];
    const controls = this.formCat.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          // invalid.push(name);
          if(name=="categoryPar")
          {
            console.log("Pas de categorie parent");
            parent=false;
          }
      }
  }
  if(parent==false)
  {
    this.parentCat = null;
  }else
  {
    this.parentCat= this.catList.find(a => a.categoryId ==this.formCat.get('categoryPar').value);

  }
    this.cat = new Category(
      this.catId,
      this.formCat.get('categoryName').value,
      this.formCat.get('description').value,
      this.parentCat,
      null,
      this.images[0],
    );

    if(parent==true)
    {
      if(this.parentCat.subCategories==null)
        this.parentCat.subCategories = new Array<Category>();
      this.parentCat.subCategories.push(this.cat);
      this.catList[this.catList.findIndex(a => a.categoryId == this.parentCat.categoryId)] = this.parentCat;

    }
    if(this.indexFind>=0)
    {
      //this.catList.splice(this.indexFind,1); ESSAYER SANS MAIS JSP SI CA VA
      //this.contactsList.push(this.client);
      this.catList[this.indexFind] = this.cat;
    }else this.catList.push(this.cat);

    this.storageService.set('Categories',this.catList);
  
    console.log("cat saved", this.catList);
    this.router.navigate(['/articles',{actualCat: this.ActualCat}],{replaceUrl:true});
    //this.GoBack();
    //this.ngOnDestroy();
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