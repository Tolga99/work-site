import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../models/facture';

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.html',
  styleUrls: ['invoice.scss']
})
export class Invoice implements OnInit {

  uuidValue: string;
  images = [];
  chantierId: string;
  invoiceId: string;
  ScanMode: boolean; //Si = false -> on est en mode création -- donc on voit TVA REMISE PHOTO
                          // true = mode 
  date: string;
  inv : Facture;
  indexFind: number;
  invList : Array<Facture> = [];
  formInv = new FormGroup({
    factureName: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    typePay: new FormControl('', [Validators.required]),
    priceHtva: new FormControl({value:'',disabled:true}, [Validators.required]),
    tva: new FormControl('', [Validators.required]),
    remise: new FormControl('', [Validators.required]),
    totalPrice : new FormControl('', [Validators.required]),
  });
  public redirectTo: string;

  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
    console.log('create chantier..');
    this.redirectTo = route.snapshot.data.redirectTo;

  }

  async ionViewDidEnter(){
    let tmpMode : string=this.route.snapshot.paramMap.get('mode');

    if(tmpMode=="false")
    {
      this.ScanMode=false;
    }else if(tmpMode=="true")
    {
      this.ScanMode=true;
    }
  }
  async ngOnInit() {
    
    var nowDate = new Date(); 
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    const existId = this.route.snapshot.paramMap.get('factureId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    let tmpMode : string=this.route.snapshot.paramMap.get('mode');

    if(tmpMode=="false")
    {
      this.ScanMode=false;
    }else if(tmpMode=="true")
    {
      this.ScanMode=true;
    }

    if(existId!=null)
    {
      console.log('modification',existId);
      this.invList =await this.storageService.get("Invoices="+this.chantierId);
      if(this.invList==null)
        this.invList = new Array<Facture>();
      this.indexFind =this.invList.findIndex(x => x.factureId == existId);
      if(this.indexFind>=0)
      {
        this.invoiceId= this.invList[this.indexFind].factureId;
        this.formInv.setValue({
          factureName: this.invList[this.indexFind].factureName,
          description:  this.invList[this.indexFind].description,
          typePay:  this.invList[this.indexFind].typePay,
          priceHtva:  this.invList[this.indexFind].priceHtva,
          remise:  this.invList[this.indexFind].remise,
          tva: this.invList[this.indexFind].tva,
          totalPrice: this.invList[this.indexFind].totalPrice,
        });
        this.images=this.invList[this.indexFind].images;
      }
    }else {
      console.log('creation : ',existId);
      this.invoiceId= this.generateUUID();
    }
  }

  async CreateWorksite() {
   
  }

  get f(){
    return this.formInv.controls;
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
          this.images.push(event.target.result); 
          this.formInv.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSubmit()
  {
    console.log('form status',this.formInv);
    if (!this.formInv.valid)
      return;

    this.inv = new Facture(
      this.invoiceId,
      this.formInv.get('factureName').value,
      this.formInv.get('description').value,
      this.date,
      this.formInv.get('typePay').value,
      this.formInv.get('remise').value,
      this.formInv.get('priceHtva').value,
      this.formInv.get('tva').value,
      this.formInv.get('totalPrice').value,
      this.images,
      null
    );

    if(this.indexFind>=0)
    {
      this.invList.splice(this.indexFind,1);
      this.invList[this.indexFind] = this.inv;
    }else this.invList.push(this.inv);
    this.storageService.set('Invoices='+this.chantierId,this.invList);
  
    console.log("invoice saved", this.invList);
    this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  resetImages()
  {
    this.images=[];
  }
  hideInput() {
    if(this.ScanMode==true)
      this.ScanMode = false;
    else  this.ScanMode = true;
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
