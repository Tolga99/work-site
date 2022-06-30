import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.html',
  styleUrls: ['./category-form.scss'],
})
export class CategoryForm implements OnInit,OnDestroy {

  selectedCategory : Category;
  uuidValue: string;
  images = '';
  // chantierId: string;
  catId: string;
  ActualCat : string;
  modif : string;
  modifCat : Category;
  cat : Category;
  parentCat : Category;
  // indexFind: number;
  catList : Array<Category> = [];
  formCat = new UntypedFormGroup({
    categoryName: new UntypedFormControl('',Validators.required),
    description: new UntypedFormControl(''),
    categoryPar: new UntypedFormControl(''),
  });
  selectedCat : string;

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Cleared');
}
  async ngOnInit() {

    this.catList =await this.storageService.get('Categories');
    if(this.catList==null)
      this.catList = new Array<Category>();

    this.modif = this.route.snapshot.paramMap.get('modif');
    this.modifCat = this.catList.find(a => a.categoryId === this.route.snapshot.paramMap.get('modifCat'));
    // this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    this.ActualCat = this.route.snapshot.paramMap.get('actualCat');



    if(this.modif === 'YES' && this.modifCat !== null)
    {
      console.log('modification',this.modif);
      // if(this.indexFind>=0)
      // {
      let catParentId :string;
        if(this.modifCat.categoryParent!=null)
          catParentId = this.modifCat.categoryParent.categoryId;
        else catParentId='';
        this.catId= this.modifCat.categoryId;
        this.formCat.setValue({
          categoryName: this.modifCat.categoryName,
          description:  this.modifCat.description,
          categoryPar:  catParentId,
        });
        if(this.modifCat.categoryImage!=null)
          this.images=this.modifCat?.categoryImage;
      // }
    }else {
      this.modif= 'NO';
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
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++)
      {
        const reader = new FileReader();
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
  async onSubmit()
  {
    let parent = true;
    const invalid = [];
    const controls = this.formCat.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='productName')
            nom='Nom catégorie';
          if(name === 'categoryPar')
          {
            console.log('Pas de categorie parent');
            parent=false;
          }
          invalid.push(nom);
      }
    }
    if (!this.formCat.valid)
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
  if(parent === false)
  {
    this.parentCat = null;
  }else
  {
    this.parentCat = this.catList.find(a => a.categoryId === this.formCat.get('categoryPar').value);
  }
  if(this.modif === 'YES')
  {
    // RETRAIT DE LA CATEGORIE PARENT si il y'en a
    if (this.modifCat.categoryParent)
    {
      const subCats=this.modifCat.categoryParent.subCategories;
      subCats.splice(subCats.findIndex(a => a.categoryId === this.modifCat.categoryId),1);
      this.catList[this.catList.findIndex(a => a.categoryId === this.modifCat.categoryParent.categoryId)].subCategories=subCats;
    }

    this.cat = new Category(
      this.catId,
      this.formCat.get('categoryName').value,
      this.formCat.get('description').value,
      this.parentCat,
      this.catList.find(a => a.categoryId === this.modifCat.categoryId).subCategories,
      this.images,
    );
  }else
  {
      this.cat = new Category(
      this.catId,
      this.formCat.get('categoryName').value,
      this.formCat.get('description').value,
      this.parentCat,
      null,
      this.images,
    );
  }

    if(parent === true)
    {
      // AJOUT DE LA CATEGORIE PARENT
      if(this.parentCat!=null)
      {
        if(this.parentCat.subCategories==null)
          this.parentCat.subCategories = new Array<Category>();
        this.parentCat.subCategories.push(this.cat);
        this.catList[this.catList.findIndex(a => a.categoryId === this.parentCat.categoryId)] = this.parentCat;

      }

    }
    if(this.modif==='YES')
    {
      const indexFind = this.catList.findIndex(x => x.categoryId === this.cat.categoryId);
      // this.catList.splice(indexFind,1);
      this.catList[indexFind] = this.cat;
      this.catList.forEach(element => {
        if(element.categoryParent!=null)
        {
          if(element.categoryParent.categoryId === this.cat.categoryId)
          {
            element.categoryParent= this.cat;
          }
        }
        if(element.subCategories!=null)
        {
          element.subCategories.forEach(element => {
            if(element.categoryId === this.cat.categoryId)
            {
              element = this.cat;
            }
          });
        }
      });
    }else this.catList.push(this.cat);

    this.storageService.set('Categories',this.catList);

    console.log('cat saved', this.catList);
    this.router.navigate(['/articles',{actualCat: this.ActualCat}],{replaceUrl:true});
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  resetImages()
  {
    this.images='';
    return null;
  }
  async GoBack()
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
        return;
    this.router.navigate(['articles',{actualCat: this.ActualCat}],{replaceUrl:true});
  }

  changePar(e) {
    this.formCat.get('categoryPar').setValue(e.target.value, {
      onlySelf: true
    })
  }
}