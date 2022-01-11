import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-worksite',
  templateUrl: 'worksite.html',
  styleUrls: ['worksite.scss']
})
export class Worksite implements OnInit {

  chantierId: string;
  imagesC = [];
  imagesT = [];
  indexFind: number;
  totalHours:string="";

  chantier : Chantier;
  //invList : Array<Facture>;
  //hoursList : Array<Hour>;
  chantierList: Array<Chantier>;

  formChantier = new FormGroup({
   chantierName: new FormControl('', [Validators.required]),
   //imgChantier: new FormControl('', [Validators.required]),
   description: new FormControl('', [Validators.required]),
   address : new FormControl('',Validators.required),
 });

  headElementsInv = ['Nom facture', 'Total','Date'];
  headElementsHour = ['Description', 'Heure travail','Date'];
  headElementsRecv = ['Nom Facture', 'Argent à Payer / Restant','Argent reçu','Date'];

  public redirectTo: string;
  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute) 
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    // this.hoursList =await this.storageService.get('Hours='+this.chantierId);
    // this.invList =await this.storageService.get('Invoices='+this.chantierId);
    //this.CalculTotalHour();

    this.chantierList =await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList = new Array<Chantier>();
    if(this.chantierId!=null)
    {
      if(this.chantierList.find(a => a.chantierId == this.chantierId).hours!=null)
        this.chantier.hours = this.chantierList.find(a => a.chantierId == this.chantierId).hours;
      else this.chantier.hours = new Array<Hour>();
      if(this.chantierList.find(a => a.chantierId == this.chantierId).factures!=null)
        this.chantier.factures = this.chantierList.find(a => a.chantierId == this.chantierId).factures;
      else this.chantier.factures = new Array<Facture>();
      if(this.chantierList.find(a => a.chantierId == this.chantierId).devis!=null)
        this.chantier.devis = this.chantierList.find(a => a.chantierId == this.chantierId).devis;
      else this.chantier.devis = new Array<Facture>();
      this.CalculTotalHour();

    }
  }

  async ngOnInit() {
    const existId = this.route.snapshot.paramMap.get('chantierId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();
    // this.hoursList =await this.storageService.get('Hours='+this.chantierId);
    // this.invList =await this.storageService.get('Invoices='+this.chantierId);
    this.chantierList =await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList = new Array<Chantier>();

    if(existId!=null)
    {
      console.log('modification',existId);
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
          this.chantierList[this.indexFind].address,
          this.chantierList[this.indexFind].dateStart,
          this.chantierList[this.indexFind].dateEnd,
          this.chantierList[this.indexFind].isFinished,
          this.chantierList[this.indexFind].imagesChantier,
          this.chantierList[this.indexFind].imagesTicket,
          this.chantierList[this.indexFind].factures,
          this.chantierList[this.indexFind].devis,
          this.chantierList[this.indexFind].hours,
        )
        this.formChantier.setValue({
          chantierName: this.chantierList[this.indexFind].worksiteName,
          description:  this.chantierList[this.indexFind].description,
          address : this.chantierList[this.indexFind].address,
        });
        this.imagesC=this.chantierList[this.indexFind].imagesChantier;
        this.imagesT=this.chantierList[this.indexFind].imagesTicket;

        if(!this.chantier.factures)
          this.chantier.factures = new Array<Facture>();

        if(!this.chantier.devis)
          this.chantier.devis = new Array<Facture>();

        if(!this.chantier.hours)
        this.chantier.hours = new Array<Hour>();
      }
    }else console.log('creation',existId);
    this.CalculTotalHour();

  }

  get f(){
    return this.formChantier.controls;
  }

  onFileChangeChantier(event) {
    if(this.imagesC==null)
      this.imagesC=[];
    if (event.target.files && event.target.files[0]) 
    {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) 
      {
        var reader = new FileReader();
        reader.onload = (event:any) => 
        {
          console.log(event.target.result);
          this.imagesC.push(event.target.result); 
          this.formChantier.patchValue({
          fileSource: this.imagesC
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onFileChangeTicket(event) {
    if(this.imagesT==null)
    this.imagesT=[];
    if (event.target.files && event.target.files[0]) 
    {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) 
      {
        var reader = new FileReader();
        reader.onload = (event:any) => 
        {
          console.log(event.target.result);
          this.imagesT.push(event.target.result); 
          this.formChantier.patchValue({
          fileSource: this.imagesT
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  resetImagesC()
  {
    this.imagesC=[];
  }
  resetImagesT()
  {
    this.imagesT=[];
  }
  createInvoice()
  {
    console.log("Bouton nv facture (creation)");
    this.router.navigate(['invoice',{chantierId: this.chantierId, mode:"false"}]);
  }
  scanInvoice()
  {
    console.log("Bouton nv facture (scan)");
    this.router.navigate(['invoice',{chantierId: this.chantierId, mode:"true"}]);
  }
  openInvoice(inv : Facture)
  {
    console.log("Bouton open facture",inv.factureId,this.chantierId);
    this.router.navigate(['invoice',{factureId: inv.factureId,chantierId: this.chantierId}]);
  }
  deleteInvoice(inv:Facture){

    this.chantier.factures = this.chantier.factures.filter(a => a.factureId != inv.factureId);
    if(this.indexFind>=0)
    {
      this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  }

  AddHour()
  {
    console.log("Bouton nv heure");
    this.router.navigate(['hours',{chantierId: this.chantierId}]);
    this.CalculTotalHour();

  }
  openHour(h : Hour)
  {
    console.log("Bouton open hour",h.hourId,this.chantierId);
    this.router.navigate(['hours',{hourId: h.hourId,chantierId: this.chantierId}]);
  }
  deleteHour(hour:Hour){ //TESTER
    // this.hoursList = this.hoursList.filter(a => a.hourId != hour.hourId);
    // this.storageService.set("Hours="+this.chantierId, this.hoursList);
    this.chantier.hours = this.chantier.hours.filter(a => a.hourId != hour.hourId);
    if(this.indexFind>=0)
    {
      this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  }
  AddPayment()
  {
    this.router.navigate(['payment']);
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
      this.formChantier.get('address').value,
      this.chantier.dateStart,
      null,
      this.chantier.isFinished,
      this.imagesC,
      this.imagesT,
      this.chantier.factures,
      this.chantier.devis,
      this.chantier.hours,
    )
    if(this.indexFind>=0)
    {
      this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  
    console.log("chantiers saved", this.chantierList);
    this.router.navigate(['tb-home'],{replaceUrl:true});
  }
  FinishChantier()
  {}

  CalculTotalHour()
  {
    let hours : number=0;
    let minutes : number=0;
    if(this.chantier.hours!=null)
    {
      this.chantier.hours.forEach(element =>{
        hours+=element.hour;
        minutes+=element.minute;
      });
      console.log("Heures : ",hours);
      console.log("Minutes : ",minutes);
      while(minutes>60)
      {
        minutes-= 60;
        hours ++;
      }
      this.totalHours = hours?.toString() +"h"+minutes?.toString() ;
      console.log(this.totalHours);
    }

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
  ImagePopUp(url : string)
  {
    alert(url);
  }
}
