import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import { User } from '../models/user';
import { NgbdModalFocus } from '../modal/modal-focus';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ToastController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Filesystem, Directory, Encoding, FilesystemDirectory } from '@capacitor/filesystem';
@Component({
  selector: 'app-worksite',
  templateUrl: 'worksite.html',
  styleUrls: ['worksite.scss']
})
export class Worksite implements OnInit {

  TabView = 'general';
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
   description: new FormControl(''),
   address : new FormControl(''),
 });

  headElementsInv = ['factureName', 'totalPrice','date','IsPaid','...'];
  headElementsDev = ['factureName', 'totalPrice','date','...'];

  headElementsHour = ['description', 'workTime','date','...'];
  headElementsRecv = ['Nom Facture','Argent reçu' , 'Total','Restant','Date reception'];

  public modal = new NgbdModalFocus(this.modalS);


  dataSourceFacture: MatTableDataSource<Facture>;
  @ViewChild(MatPaginator) paginatorFacture: MatPaginator;
  @ViewChild(MatSort) sortFacture: MatSort;

  dataSourceDevis: MatTableDataSource<Facture>;
  @ViewChild(MatPaginator) paginatorDevis: MatPaginator;
  @ViewChild(MatSort) sortDevis: MatSort;

  dataSourceHeure: MatTableDataSource<Hour>;
  @ViewChild(MatPaginator) paginatorHeure: MatPaginator;
  @ViewChild(MatSort) sortHeure: MatSort;


  applyFilterFacture(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceFacture.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceFacture.paginator) {
      this.dataSourceFacture.paginator.firstPage();
    }
  }
  applyFilterDevis(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceDevis.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceDevis.paginator) {
      this.dataSourceDevis.paginator.firstPage();
    }
  }
  applyFilterHeure(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceHeure.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceHeure.paginator) {
      this.dataSourceHeure.paginator.firstPage();
    }
  }
  announceSortChangeFacture(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  announceSortChangeDevis(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  announceSortChangeHeure(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  constructor(private modalS :NgbModal,
              private storageService:StorageService, 
              private router: Router, 
              private route: ActivatedRoute,
              private _liveAnnouncer: LiveAnnouncer,
              private file: File, 
              private toastController: ToastController,
              private localNotifications : LocalNotifications)
  {
    
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

      this.dataSourceFacture = new MatTableDataSource(this.chantier.factures);
      this.dataSourceFacture.paginator = this.paginatorFacture;
      this.dataSourceFacture.sort = this.sortFacture;

      this.dataSourceDevis = new MatTableDataSource(this.chantier.devis);
      this.dataSourceDevis.paginator = this.paginatorDevis;
      this.dataSourceDevis.sort = this.sortDevis;

      this.dataSourceHeure = new MatTableDataSource(this.chantier.hours);
      this.dataSourceHeure.paginator = this.paginatorHeure;
      this.dataSourceHeure.sort = this.sortHeure;
      this.CalculTotalHour();
      this.dataSourceFacture._filterData(this.dataSourceFacture.data);
        this.dataSourceFacture.paginator.nextPage();

        // this.dataSourceDevis._filterData(this.dataSourceDevis.data);
        // this.dataSourceDevis.paginator.nextPage();

        // this.dataSourceHeure._filterData(this.dataSourceHeure.data);
        // this.dataSourceHeure.paginator.nextPage();
        console.log('current tab : ',this.TabView);
        this.dataSourceHeure.paginator.firstPage();


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
          //this.chantierList[this.indexFind].clientLastName,
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

        this.dataSourceFacture = new MatTableDataSource(this.chantier.factures);
        this.dataSourceFacture.paginator = this.paginatorFacture;
        this.dataSourceFacture.sort = this.sortFacture;
  
        this.dataSourceDevis = new MatTableDataSource(this.chantier.devis);
        this.dataSourceDevis.paginator = this.paginatorDevis;
        this.dataSourceDevis.sort = this.sortDevis;
  
        this.dataSourceHeure = new MatTableDataSource(this.chantier.hours);
        this.dataSourceHeure.paginator = this.paginatorHeure;
        this.dataSourceHeure.sort = this.sortHeure;
      }
    }else console.log('creation',existId);
    this.CalculTotalHour();
    console.log('current tab : ',this.TabView);

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
  async deleteInvoice(inv:Facture) : Promise<void>{
    let res : string =null;
    await this.modal.open('delInv',inv.factureName)
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    if(inv.receivedMoney!=null)
    {
      inv.receivedMoney.forEach(element => {
        this.DeleteReceive(inv,element);
      });
    }
    this.chantier.factures = this.chantier.factures.filter(a => a.factureId !== inv.factureId);
    if(this.indexFind>=0)
    {
     // this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);

    this.dataSourceFacture = new MatTableDataSource(this.chantier.factures);
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
  async deleteDevis(inv:Facture){
    let res : string =null;
    await this.modal.open('delDev',inv.factureName)
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.chantier.devis = this.chantier.devis.filter(a => a.factureId !== inv.factureId);
    if(this.indexFind>=0)
    {
     // this.chantierList.splice(this.indexFind,1);
      this.chantierList[this.indexFind] = this.chantier;
    }else this.chantierList.push(this.chantier);
    this.storageService.set('Chantiers',this.chantierList);

    this.dataSourceDevis = new MatTableDataSource(this.chantier.devis);

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

    this.dataSourceHeure = new MatTableDataSource(this.chantier.hours);

  }
  AddPayment()
  {
    this.router.navigate(['payment',{chantierId: this.chantierId}]);
  }

  async SaveChantier()
  {
    const invalid = [];
    const controls = this.formChantier.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='chantierName')
            nom='Nom chantier';
          invalid.push(nom);
      }
    }
    if (!this.formChantier.valid)
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

    this.chantier = new Chantier(
      this.chantier.chantierId,
      this.formChantier.get('chantierName').value,
      //this.chantier.clientLastName,
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
  async FinishChantier()
  {
    let res : string =null;
    await this.modal.open('endChantier','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
  }

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

  IsInvoicePaid(f : Facture) :string
  {
    const total = f.totalPrice;
    let paid=0;
    if(f.receivedMoney!=null)
    {
      f.receivedMoney.forEach(element => {
        paid += element.price;
      });
    }else return 'PAS DE PAIEMENT';
    if(total>paid)
      return 'PAIEMENT INCOMPLET';
    else return 'PAYE';
  }
  // PDF
  async GeneratePDFInvoice( f : Facture)
  {
    const profile : User =await this.storageService.get('MyProfile');
    const clientlist : Array<User> = await this.storageService.get('Contacts');
    const client : User = clientlist.find(a => a.userId === this.chantier.clientId);
    let y = 0;
    const doc = new jsPDF();
    doc.setFontSize(18);
    if(f.type==='facture')
      doc.text('Facture', 90, 8);
    else if(f.type==='devis')
      doc.text('Devis', 90, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    doc.text(profile.firstName+'\n'+profile.lastName.toUpperCase()+'\n'+profile.address, 14, 15);
    doc.text(client.firstName+'\n'+client.lastName.toUpperCase()+'\n'+client.address+'\n'+client.phone, 150, 30);

    doc.text('N° facture :'+f.factureName, 15, 50);
    doc.text('Date : '+f.date, 15, 55);
    y=60;

    let tableColumns;
    let articleRows;
    if(f.mode==='creation')
    {
      tableColumns = ['Nom article','Description','Quantité', 'Prix unitaire', 'Prix total'];
      // articleRows :[[string,string,number,number,number]];
      articleRows = [[,,,,,]];
      articleRows.splice(0,1);
      f.cart.forEach(element => {
        articleRows.push([element.product.productName,element.product.description,1,element.product.priceHtva,element.product.priceHtva]);
        y+=10;
      });
    }else
    {
      tableColumns = ['Description','Prix total'];
      // articleRows :[[string,number]];
      articleRows = [[,,]];
      articleRows.splice(0,1);
      articleRows.push([f.description,f.totalPrice]);
      var string = f.description;
      if(string.match(/\n/gi))
      {
        console.log(string.match(/\n/gi).length);
        y += string.match(/a/gi).length*5;
      }
      y+=15;
    }

    (doc as any).autoTable(tableColumns, articleRows, { startY: 60 });
    y+=5;

    let total=0;
    let totalTva = 0;
    const remise : string =f.remise.toString();
    let htva :number =f.priceHtva;
    const tva:string =f.tva.toString();

    if(Number.parseFloat(remise) !== 0)
    {
      htva = htva * (1 - Number.parseFloat(remise) / 100);
      htva = Math.round(htva * 100) / 100; // REMISE arrondi

    }
    totalTva = htva / 100 * Number.parseFloat(tva);
    totalTva = Math.round(totalTva * 100) / 100; // TVA arrondi

    total= Number.parseFloat(htva.toString()) + totalTva;
    total = Math.round(total * 100) / 100; // arrondi

    console.log('Tva : ',tva);
    console.log('TTva : ',totalTva);
    console.log('htva : ',htva);




    if(f.mode==='creation')
    {
      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('TOTAL HTVA : '+Math.round((f.priceHtva) * 100) / 100+'€', 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('Remise '+f.remise+'% : '+ Math.round((f.priceHtva-htva) * 100) / 100+'€', 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('TVA '+f.tva+'% : '+totalTva+'€', 150, y);
      y+=6;
    }

    doc.setFillColor('3333FF');
    doc.rect(150,y-5,55,5.5,'F');
    doc.setTextColor('FFFFFF');
    doc.text('Total TTC : '+f.totalPrice+'€', 150, y);
    y+=6;

    doc.setTextColor('000000');
    if(f.typePay==='bancaire')
      doc.text('Condition de réglement : Virement bancaire',25,y);
    else doc.text('Condition de réglement : Paiement cash',25,y);
    y+=6;
    doc.text('Echéance de paiement : LES FACTURES SONT PAYABLES A LA RECEPTION.',25,y);
    y+=6;

    doc.text('Tout retard de paiement à compter de 10 jours après la date de réception',25,y);
    y+=6;
    doc.text('de la facture fera l\'objet d\'une facturation d\'intérêts de retard au taux légal envigueur',25,y);
    y+=6;

    y+=10;
    doc.text('Coordonnées bancaires :',80,y);
    y+=6;
    doc.text('Titulaire du compte : '+profile.firstName+' '+profile.lastName.toUpperCase(),80,y);
    y+=6;
    doc.text('IBAN : bidonbidonbidon',80,y);
    y+=6;

    y+=10;
    doc.text('Signature du vendeur', 8, y);
    doc.text('Signature de l\'acheteur', 140, y);
    y+=6;
    var blob = doc.output('blob');



    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
      try {
        Filesystem.writeFile({
          path: f.factureName+'.pdf',
          data: doc.output('datauristring'),
          directory: Directory.Documents
        });
        this.presentToast(f.factureName+'.pdf a été généré');
        this.localNotifications.schedule({
          id: 1,
          text: f.factureName+'.pdf a été généré',
          // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
          data: { secret: 'a' }
        });
      } catch (e) {
        console.error("Unable to write file", e);
      }    
    }
    else
    {
      console.log('PC');
      doc.save(f.factureName+'.pdf');
      this.presentToast(f.factureName+'.pdf a été généré');
      this.localNotifications.schedule({
        id: 1,
        text: f.factureName+'.pdf a été généré',
        // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
        data: { secret: 'a' }
      });
    }
//     window.open(URL.createObjectURL(blob));

// function writeFile(fileEntry, dataObj) {
//   return $q(function (resolve, reject) {
//       fileEntry.createWriter(function (fileWriter) {
//           fileWriter.onwriteend = function () {
//               resolve();
//           };
//           fileWriter.onerror = function (e) {
//               reject(e);
//           };
//           fileWriter.write(dataObj);
//       });
//   });
// }

// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs)
// {


   // doc.save('exempleFacture.pdf');
  
    // var rawdata = doc.output();

    // var len = rawdata.length,
    // ab = new ArrayBuffer(len),
    // u8 = new Uint8Array(ab);

    // while(len--) u8[len] = rawdata.charCodeAt(len);

    // var blob = new Blob([ab], { type : "application/pdf" });


    // // var iframe = document.getElementById('outputPDFnormale');
    // // iframe.style.width = '60%';
    // // iframe.style.height = '650px';
    // // //iframe.src = URL.createObjectURL(blob)

    // // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, 'Ordini.pdf');
  }
  async presentToast(text : string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
  SetTabView(newView : string)
  {
    console.log('new TabView');
    this.TabView = newView;
  }
  DeleteImage(url : string)
  {
    this.imagesT = this.imagesT.filter(a => a !== url);
  }
  DeleteImageChantier(url : string)
  {
    this.imagesC = this.imagesC.filter(a => a !== url);
  }
}
