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
  modif : string;
  modifCat : Category;
  cat : Category;
  parentCat : Category;
  //indexFind: number;
  catList : Array<Category> = [];
  formCat = new FormGroup({
    categoryName: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    categoryPar: new FormControl('', [Validators.required]),
  });
  selectedCat : string;

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

    this.catList =await this.storageService.get("Categories");
    if(this.catList==null)
      this.catList = new Array<Category>();

    this.modif = this.route.snapshot.paramMap.get('modif');
    this.modifCat = this.catList.find(a => a.categoryId == this.route.snapshot.paramMap.get('modifCat'));
    //this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    this.ActualCat = this.route.snapshot.paramMap.get('actualCat');



    if(this.modif=="YES" && this.modifCat!=null)
    {
      console.log('modification',this.modif);
      // if(this.indexFind>=0)
      // {
        this.catId= this.modifCat.categoryId;
        this.formCat.setValue({
          categoryName: this.modifCat.categoryName,
          description:  this.modifCat.description,
          categoryPar:  this.modifCat.categoryParent.categoryId,
        });
        if(this.modifCat.categoryImage!=null)
          this.images=this.modifCat?.categoryImage;
      // }
    }else {
      this.modif= "NO";
      console.log('creation',this.modif);
      this.catId= this.generateUUID();
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
  if(this.modif=="YES")
  {
    //RETRAIT DE LA CATEGORIE PARENT
    let subCats=this.modifCat.categoryParent.subCategories;
    subCats.splice(subCats.findIndex(a => a.categoryId == this.ActualCat),1);
    this.catList[this.catList.findIndex(a => a.categoryId == this.modifCat.categoryParent.categoryId)].subCategories=subCats;

    this.cat = new Category(
      this.catId,
      this.formCat.get('categoryName').value,
      this.formCat.get('description').value,
      this.parentCat,
      this.catList.find(a => a.categoryId == this.ActualCat).subCategories,
      this.images[0],
    );
  }else
  {
      this.cat = new Category(
      this.catId,
      this.formCat.get('categoryName').value,
      this.formCat.get('description').value,
      this.parentCat,
      null,
      this.images[0],
    );
  }

    if(parent==true)
    {
      //AJOUT DE LA CATEGORIE PARENT
      if(this.parentCat.subCategories==null)
        this.parentCat.subCategories = new Array<Category>();
      this.parentCat.subCategories.push(this.cat);
      this.catList[this.catList.findIndex(a => a.categoryId == this.parentCat.categoryId)] = this.parentCat;

    }
    if(this.modif=="YES")
    {
      let indexFind =this.catList.findIndex(x => x.categoryId == this.modifCat.categoryId);
      this.catList.splice(indexFind,1);
      this.catList[indexFind] = this.cat;
    }else this.catList.push(this.cat);

    this.storageService.set('Categories',this.catList);
  
    console.log("cat saved", this.catList);
    this.router.navigate(['/articles',{actualCat: this.ActualCat}],{replaceUrl:true});
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

  changePar(e) {
    this.formCat.get('categoryPar').setValue(e.target.value, {
      onlySelf: true
    })
  }
}