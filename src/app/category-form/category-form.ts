import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { MethodsService } from '../services/methods.service';
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
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router, 
              private route: ActivatedRoute,
              private methodsService : MethodsService, private navController : NavController)
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
      console.log('creation',this.modif,this.ActualCat);
      this.catId= this.generateUUID();
      if(this.ActualCat!=null)
      {
        this.formCat.get('categoryPar').setValue(this.catList.find(a => a.categoryId === this.ActualCat));
      }
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
    let catLevel = -1;
    if(this.methodsService.isNullOrEmpty(this.formCat.get('categoryPar').value))
    {
      this.parentCat = null;
      catLevel = 0;
    }else
    {
      let tmpParentCat = this.catList.find(a => a === this.formCat.get('categoryPar').value);
      if(tmpParentCat.catLevel === 0)
        this.parentCat = tmpParentCat;
      else this.parentCat = tmpParentCat.categoryParent;
      catLevel = tmpParentCat.catLevel + 1;
    }
    if(this.modif === 'YES')
    {
      this.cat = new Category(
        this.catId,
        this.formCat.get('categoryName').value,
        this.formCat.get('description').value,
        this.parentCat,
        this.images,
        catLevel
      );
    }else
    {
        this.cat = new Category(
        this.catId,
        this.formCat.get('categoryName').value,
        this.formCat.get('description').value,
        this.parentCat,
        this.images,
        catLevel,
      );
    }
    this.catList.push(this.cat);

    this.storageService.set('Categories',this.catList);

    console.log('cat saved', this.catList);
    this.navController.navigateBack(['/articles',{actualCat: this.ActualCat}],{replaceUrl:true});
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
    var result : string | undefined;
    console.log(this.modif);
    if(this.modif === 'NO' || this.modif === undefined)
    {
      let cpt = 0;
      Object.keys(this.formCat.controls).forEach(key => {
        if(!this.methodsService.isNullOrEmpty(this.formCat.controls[key].value))
        {
          cpt ++;
        }
      });
      console.log(cpt,this.formCat);
      if(cpt > 0)
      {
        result = await this.GoBackModal();
      }
    }else
    {
      let parent = '';
      if(this.modifCat.categoryParent !== null && this.modifCat.categoryParent !== undefined)
        parent = this.modifCat.categoryParent.categoryId;
      if(!this.methodsService.equals(this.modifCat.categoryName,this.formCat.get('categoryName').value) ||
      !this.methodsService.equals(this.modifCat.description,this.formCat.get('description').value) ||
      !this.methodsService.equals(parent,this.formCat.get('categoryPar').value))
      {
        result = await this.GoBackModal();
      }
    }
    console.log(result);
    if(result !== null)
    this.navController.navigateBack(['articles',{actualCat: this.ActualCat}],{replaceUrl:true});
  }
  async GoBackModal() : Promise<string>
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
        return null;
    return '';
  }
  changePar(e) {
    this.formCat.get('categoryPar').setValue(e.target.value, {
      onlySelf: true
    })
  }
}