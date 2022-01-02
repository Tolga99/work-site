import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-worksite',
  templateUrl: 'worksite.page.html',
  styleUrls: ['worksite.page.scss']
})
export class Worksite implements OnInit {

  chantierId: string;
  images = [];
  indexFind: number;

  chantier : Chantier;
  invList : Array<Facture>;
  hoursList : Array<Hour>;
  chantierList: Array<Chantier>;

  formChantier = new FormGroup({
   chantierName: new FormControl('', [Validators.required]),
   //imgChantier: new FormControl('', [Validators.required]),
   description: new FormControl('', [Validators.required])
 });

 headElementsInv = ['Nom facture', 'Total HTVA','Date'];
 headElementsHour = ['Description', 'Heure travail','Date'];



  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute) 
  {
  }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.hoursList =await this.storageService.get('Hours='+this.chantierId);
    this.invList =await this.storageService.get('Invoices='+this.chantierId);
    //this.chantierId = this.route.snapshot.paramMap.get('chantierId');


  }

  async ngOnInit() {
    const existId = this.route.snapshot.paramMap.get('chantierId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();
    this.hoursList =await this.storageService.get('Hours='+this.chantierId);
    this.invList =await this.storageService.get('Invoices='+this.chantierId);
    this.chantierList =await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList = new Array<Chantier>();

    if(existId!=null)
    {
      console.log('modification',existId);
      this.storageService.get("Chantiers");
      this.indexFind =this.chantierList.findIndex(x => x.chantierId == existId);
      if(this.indexFind>=0)
      {
        //this.chantierId= this.chantierList[this.indexFind].chantierId;
        this.chantier = new Chantier(
          this.chantierList[this.indexFind].chantierId,
          this.chantierList[this.indexFind].worksiteName,
          this.chantierList[this.indexFind].clientLastName,
          this.chantierList[this.indexFind].clientId,
          this.chantierList[this.indexFind].description,
          this.chantierList[this.indexFind].dateStart,
          this.chantierList[this.indexFind].imagesChantier,
        )
        this.formChantier.setValue({
          chantierName: this.chantierList[this.indexFind].worksiteName,
          description:  this.chantierList[this.indexFind].description,
        });
        this.images=this.chantierList[this.indexFind].imagesChantier;
      }
    }else console.log('creation',existId);
  }

  get f(){
    return this.formChantier.controls;
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
          this.formChantier.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  resetImages()
  {
    this.images=[];
  //   this.formChantier.patchValue({
  //     file: new FormControl('', [Validators.required]),
  //     fileSource: new FormControl('', [Validators.required])})
  // 
  }
  createInvoice()
  {
    console.log("Bouton nv facture");
    this.router.navigate(['invoice',{chantierId: this.chantierId}]);
  }
  openInvoice(inv : Facture)
  {
    console.log("Bouton open facture",inv.factureId,this.chantierId);
    this.router.navigate(['invoice',{factureId: inv.factureId,chantierId: this.chantierId}]);
  }
  deleteInvoice(inv:Facture){
    //this.invList = this.invList.filter(a => a. != inv.);
    this.storageService.set("Invoices="+this.chantierId, this.invList);
  }

  AddHour()
  {
    console.log("Bouton nv heure");
    this.router.navigate(['hours',{chantierId: this.chantierId}]);
  }
  openHour(h : Hour)
  {
    console.log("Bouton open hour",h.hourId,this.chantierId);
    this.router.navigate(['hours',{hourId: h.hourId,chantierId: this.chantierId}]);
  }
  deleteHour(hour:Hour){
    this.hoursList = this.hoursList.filter(a => a.hourId != hour.hourId);
    this.storageService.set("Hours="+this.chantierId, this.hoursList);
  }
  
  SaveChantier()
  {
    console.log('form status',this.formChantier);
    if (!this.formChantier.valid)
      return;

    this.chantier = new Chantier(
      this.chantier.chantierId,
      this.formChantier.get('chantierName').value,
      this.chantier.clientLastName,
      this.chantier.clientId,
      this.formChantier.get('description').value,
      this.chantier.dateStart,
      this.images,
    )
    if(this.indexFind>=0)
    {
      this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  
    console.log("chantiers saved", this.chantierList);
    this.router.navigate(['tb-home']);
  }
  FinishChantier()
  {}
}
