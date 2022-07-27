import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { isThisSecond } from 'date-fns';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { StorageService } from '../services/storage.service';
import { PhotoService } from '../services/photo.service';
import { Camera,CameraOptions  } from '@awesome-cordova-plugins/camera/ngx';
import { MethodsService } from '../services/methods.service';
import { CategoryFormRoutingModule } from '../category-form/category-form-routing.module';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.html',
  styleUrls: ['./article-form.scss'],
})
export class ArticleForm implements OnInit, OnDestroy{

  selectedCat : Category;
  uuidValue: string;
  images = '';
  // chantierId: string;
  artId: string;
  actualCat: string;
  currentImage: any;
  art : Product;
  // indexFind: number;
  modif : string;
  modifArt : Product;
  artList : Array<Product> = [];
  catList : Array<Category> = [];

  formArt = new UntypedFormGroup({
    productName: new UntypedFormControl('',Validators.required),
    description: new UntypedFormControl(''),
    category: new UntypedFormControl(''),
    priceHtva: new UntypedFormControl('', [Validators.required]),
  });
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router
    , private route: ActivatedRoute, public photoService : PhotoService
    , private camera : Camera,private methodsService : MethodsService)
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
        let cat : Category;
        if(this.modifArt.catLevel > 0)
        {
          cat = this.catList.find(a => a.categoryParent.categoryId === this.modifArt.categoryParent.categoryId 
                && this.modifArt.catLevel === a.catLevel);
        }else
        {
          cat = this.catList.find(a => a.categoryId === this.modifArt.categoryParent.categoryId 
                && this.modifArt.catLevel === 0);
        }
        this.actualCat= cat.categoryId;
        this.formArt.setValue({
          productName : this.modifArt.productName,
          description:  this.modifArt.description,
          category:  cat.categoryId,
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
      if(!this.methodsService.isNullOrEmpty(this.formArt.get('category').value))
      {
        let category : Category;
        console.log(this.formArt.get('category').value,this.catList);
        let cat = this.catList.find(a => a === this.formArt.get('category').value);
        if(cat?.categoryParent == null)
          category = cat;
        else category = cat.categoryParent;
        console.log(cat,category);
        this.art = new Product(
          this.artId,
          this.formArt.get('productName').value,
          this.formArt.get('description').value,
          this.formArt.get('priceHtva').value,
          category,
          this.images,
          cat.catLevel,
        );
      }else
      {
        this.art = new Product(
          this.artId,
          this.formArt.get('productName').value,
          this.formArt.get('description').value,
          this.formArt.get('priceHtva').value,
          null,
          this.images,
          0,
        );
      }

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
    return null;
  }
  selectCategory(event: Event) {
    this.actualCat = (event.target as HTMLSelectElement).value;
  }
  async GoBack()
  {
    var result : string | undefined;
    console.log(this.modif);
    if(this.modif === 'NO')
    {
      let cpt = 0;
      Object.keys(this.formArt.controls).forEach(key => {
        if(!this.methodsService.isNullOrEmpty(this.formArt.controls[key].value))
        {
          cpt ++;
        }
      });
      console.log(cpt,this.formArt);
      if(cpt > 0)
      {
        result = await this.GoBackModal();
      }
    }else
    {
      if(!this.methodsService.equals(this.modifArt.productName,this.formArt.get('productName').value) ||
      !this.methodsService.equals(this.modifArt.description,this.formArt.get('description').value) ||
      !this.methodsService.equals(this.modifArt.priceHtva.toString(),this.formArt.get('priceHtva').value) ||
      !this.methodsService.equals(this.modifArt.categoryParent.categoryId,this.formArt.get('category').value) ||
      !this.methodsService.equals(this.modifArt.imageProduct,this.images))
      {
        result = await this.GoBackModal();
      }
    }
    console.log(result);
    if(result !== null)
      this.router.navigate(['/articles',{actualCat: this.actualCat}],{replaceUrl:true});
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
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
