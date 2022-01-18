import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { isThisSecond } from 'date-fns';
import { NgbdModalFocus } from '../modal/modal-focus';
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
  images = '';
  // chantierId: string;
  artId: string;
  actualCat: string;

  art : Product;
  // indexFind: number;
  modif : string;
  modifArt : Product;
  artList : Array<Product> = [];
  catList : Array<Category> = [];

  formArt = new FormGroup({
    productName: new FormControl('',Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    priceHtva: new FormControl('', [Validators.required]),
  });
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Cleared');
}
  async ngOnInit() {
    this.artList =await this.storageService.get('Articles');
    if(this.artList==null)
      this.artList = new Array<Product>();

    this.actualCat = this.route.snapshot.paramMap.get('actualCat');
    this.modifArt= this.artList.find(a => a.productId === this.route.snapshot.paramMap.get('modifArt'));
    this.modif = this.route.snapshot.paramMap.get('modif');

    this.catList = await this.storageService.get('Categories');
    if(this.modif==='YES')
    {
      console.log('modification',this.modif);

      // this.indexFind =this.artList.findIndex(x => x.productId == existId);
      // if(this.indexFind>=0)
      // {
        this.artId= this.modifArt.productId;
        this.actualCat= this.modifArt.categoryId;
        this.formArt.setValue({
          productName : this.modifArt.productName,
          description:  this.modifArt.description,
          category:  this.modifArt.categoryId,
          priceHtva:  this.modifArt.priceHtva,
        });
        if(this.modifArt.imageProduct!=null)
          this.images=this.modifArt.imageProduct;
      // }
    }else {
      this.modif='NO';
      console.log('creation',this.modif);
      this.artId= this.generateUUID();

    }
    if(this.actualCat!=null)
    {
      this.formArt.get('category').setValue(this.actualCat);
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
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++)
      {
        const reader = new FileReader();
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
  async onSubmit()
  {
    console.log('form status',this.formArt);
     const invalid = [];
    const controls = this.formArt.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        let nom='';
        if(name==='productName')
          nom='Nom article';
        if(name==='priceHtva')
          nom='Prix HTVA';
        invalid.push(nom);
      }
    }
    if (!this.formArt.valid)
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
      this.art = new Product(
      this.artId,
      this.formArt.get('productName').value,
      this.formArt.get('description').value,
      this.formArt.get('priceHtva').value,
      this.formArt.get('category').value,
      this.images,
    );

    if(this.modif==='YES')
    {
      const indexFind =this.artList.findIndex(x => x.productId === this.modifArt.productId);
      this.artList.splice(indexFind,1);
      this.artList[indexFind] = this.art;
    }else this.artList.push(this.art);
    this.storageService.set('Articles',this.artList);
    console.log('invoice saved', this.artList);
    this.router.navigate(['/articles',{actualCat: this.actualCat}],{replaceUrl:true});
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  resetImages()
  {
    this.images='';
  }
  selectCategory(event: Event) {
    this.actualCat = (event.target as HTMLSelectElement).value;
  }
  GoBack()
  {
    this.router.navigate(['/articles',{actualCat: this.actualCat}],{replaceUrl:true});
  }
}