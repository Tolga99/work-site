import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
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

  uuidValue : string;
  chantierId: string;
  imagesC = [];
  imagesT = [];
  indexFind: number;
  totalHours='';

  chantier : Chantier;
  // invList : Array<Facture>;
  // hoursList : Array<Hour>;
  chantierList: Array<Chantier>;

  formChantier = new FormGroup({
   chantierName: new FormControl('', [Validators.required]),
   // imgChantier: new FormControl('', [Validators.required]),
   description: new FormControl('', [Validators.required]),
   address : new FormControl('',Validators.required),
 });

  headElementsInv = ['Nom facture', 'Total','Date'];
  headElementsHour = ['Description', 'Heure travail','Date'];
  headElementsRecv = ['Nom Facture','Argent reçu' , 'Total','Restant','Date reception'];

  public redirectTo: string;
  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute)
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    // this.hoursList =await this.storageService.get('Hours='+this.chantierId);
    // this.invList =await this.storageService.get('Invoices='+this.chantierId);
    // this.CalculTotalHour();

    this.chantierList =await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList = new Array<Chantier>();
    if(this.chantierId!=null)
    {
      if(this.chantierList.find(a => a.chantierId === this.chantierId).hours!=null)
        this.chantier.hours = this.chantierList.find(a => a.chantierId === this.chantierId).hours;
      else this.chantier.hours = new Array<Hour>();
      if(this.chantierList.find(a => a.chantierId === this.chantierId).factures!=null)
        this.chantier.factures = this.chantierList.find(a => a.chantierId === this.chantierId).factures;
      else this.chantier.factures = new Array<Facture>();
      if(this.chantierList.find(a => a.chantierId === this.chantierId).devis!=null)
        this.chantier.devis = this.chantierList.find(a => a.chantierId === this.chantierId).devis;
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
      this.indexFind =this.chantierList.findIndex(x => x.chantierId === existId);
      if(this.indexFind>=0)
      {
        // this.chantierId= this.chantierList[this.indexFind].chantierId;
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
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++)
      {
        const reader = new FileReader();
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
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++)
      {
        const reader = new FileReader();
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
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice',{chantierId: this.chantierId, type: 'facture', mode:'false'}]);
  }
  scanInvoice()
  {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice',{chantierId: this.chantierId, type: 'facture', mode:'true'}]);
  }
  openInvoice(inv : Facture)
  {
    console.log('Bouton open facture',inv.factureId,this.chantierId);
    this.router.navigate(['invoice',{factureId: inv.factureId, type: 'facture',chantierId: this.chantierId}]);
  }
  deleteInvoice(inv:Facture){

    this.chantier.factures = this.chantier.factures.filter(a => a.factureId !== inv.factureId);
    if(this.indexFind>=0)
    {
     // this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  }


  createDevis()
  {
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice',{chantierId: this.chantierId, type: 'devis', mode:'false'}]);
  }
  scanDevis()
  {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice',{chantierId: this.chantierId, type: 'devis', mode:'true'}]);
  }
  openDevis(inv : Facture)
  {
    console.log('Bouton open facture',inv.factureId,this.chantierId);
    this.router.navigate(['invoice',{factureId: inv.factureId, type: 'devis',chantierId: this.chantierId}]);
  }
  deleteDevis(inv:Facture){

    this.chantier.devis = this.chantier.devis.filter(a => a.factureId !== inv.factureId);
    if(this.indexFind>=0)
    {
     // this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  }

  TransformToInvoice(d : Facture)
  {
    const index=this.chantier.devis.findIndex(a => a.factureId === d.factureId);
    this.generateUUID();
    d.factureId= this.uuidValue;
    this.chantier.factures.push(d);
    // this.chantier.devis.splice(index,1); s'il faut supprimer
    this.chantierList[this.chantierList.findIndex(a => a.chantierId === this.chantier.chantierId)] = this.chantier;
    this.storageService.set('Chantiers',this.chantierList);
  }
  AddHour()
  {
    console.log('Bouton nv heure');
    this.router.navigate(['hours',{chantierId: this.chantierId}]);
    this.CalculTotalHour();

  }
  openHour(h : Hour)
  {
    console.log('Bouton open hour',h.hourId,this.chantierId);
    this.router.navigate(['hours',{hourId: h.hourId,chantierId: this.chantierId}]);
  }
  deleteHour(hour:Hour){ // TESTER
    // this.hoursList = this.hoursList.filter(a => a.hourId != hour.hourId);
    // this.storageService.set("Hours="+this.chantierId, this.hoursList);
    this.chantier.hours = this.chantier.hours.filter(a => a.hourId !== hour.hourId);
    if(this.indexFind>=0)
    {
      this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);
  }
  AddPayment()
  {
    this.router.navigate(['payment',{chantierId: this.chantierId}]);
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

    console.log('chantiers saved', this.chantierList);
    this.router.navigate(['tb-home'],{replaceUrl:true});
  }
  FinishChantier()
  {}

  CalculTotalHour()
  {
    let hours=0;
    let minutes=0;
    if(this.chantier.hours!=null)
    {
      this.chantier.hours.forEach(element =>{
        hours+=element.hour;
        minutes+=element.minute;
      });
      console.log('Heures : ',hours);
      console.log('Minutes : ',minutes);
      while(minutes>60)
      {
        minutes-= 60;
        hours ++;
      }
      this.totalHours = hours?.toString() +'h'+minutes?.toString() ;
      console.log(this.totalHours);
    }

  }
  GoBack()
  {
    this.router.navigate(['tb-home'],{replaceUrl:true});
  }
  ImagePopUp(url : string)
  {
    alert(url);
  }
  public GetAllReceivedMoney(f : Facture) : number
  {
      let total= 0;
      if(f.receivedMoney==null)
        f.receivedMoney = new Array<{price: number, date : string}>();

      f.receivedMoney.forEach(element => {
          total=element.price+total;
      });

      total = Math.round(total * 100) / 100; // arrondi
      return total;
  }
  DeleteReceive( f : Facture, p : {price,date})
  {
    console.log(f,p);
    const index=f.receivedMoney.findIndex(a => a.date === p.date && a.price === p.price);
    f.receivedMoney.splice(index,1);

    this.chantier.factures[this.chantier.factures.findIndex(a => a.factureId === f.factureId)] = f;

    this.chantierList[ this.chantierList.findIndex(a=>a.chantierId === this.chantierId)] = this.chantier;

    this.storageService.set('Chantiers',this.chantierList);

    console.log('chantiers saved', this.chantierList);

  }
}
