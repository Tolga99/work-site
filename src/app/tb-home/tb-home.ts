import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ContentChildren, EventEmitter, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../models/facture';
import { Storage } from '@ionic/storage';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { INestedOptionContainer, NestedOptionHost } from 'devextreme-angular';
import { PdfService } from '../services/pdf.service';
import { UUID } from 'angular2-uuid';
import { NavController } from '@ionic/angular';
import { Service } from '../services/service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.html',
  styleUrls: ['tb-home.scss'],
  providers : [NestedOptionHost]
})
export class TabHome implements OnInit, INestedOptionContainer{
  devise = '';
  deleteText = '';
  editText = '';
  uuidValue : string;
  public allowedPageSizes = [5, 10, 15];
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;

  TabView = 'enCours';
  settingsBt : any[]= [
    { value: 'settings', text: '', icon: 'fas fa-toolbox' },
    { value: 'about',text: '', icon: 'fas fa-info' },
  ];
  settingsChantier : any[]= [
    { value: 'edit', text: '', icon: 'fas fa-pencil-square-o' },
    { value: 'delete',text: '', icon: 'fas fa-trash' },
  ];
  chantierList : Array<Chantier> = [];
  invList : Array<Facture> = [];
  searchList : Array<Chantier> = [];
  clientsList : Array<User> = [];
  headElements = ['worksiteName', 'client', 'dateStart','address','...'];
  headElementsInv = ['factureName', 'totalPrice','date','...'];
  toggleChantier = false;

  public home: string;
  public calendar: string;
  public contacts: string;
  public settings: string;
  public myWorksites: string;
  public search: string;
  public newWorksite: string;
  public language: string;

  public modal = new NgbdModalFocus(this.modalS);

  name = true;
  client = false;
  date = false;
  address = false;
  state = false;
  
  dateToday = '';
  
  constructor(private modalS : NgbModal,
              private storageService:StorageService,
              private router: Router,
              private _liveAnnouncer: LiveAnnouncer,
              private http: HttpClient,
              private _translate: TranslateService, private appVersion : AppVersion,
              private appRate : AppRate,
              private library : FaIconLibrary,private optionHost: NestedOptionHost,
              private translateService : TranslateService,
              private pdfService : PdfService, private navController : NavController,
              private dbService : Service)
              {
                this.storageService.init();
                // _translate.setDefaultLang('fr');
                // _translate.use('fr').toPromise();
                // translateService.addLangs(['en', 'fr']);
                // translateService.use('fr').toPromise();
                // translateService.setDefaultLang('fr');
                library.addIcons(fasStar, farStar);
                optionHost.setHost(this);

              }
  instance: any;
  isLinked: boolean;
  optionChangedHandlers: EventEmitter<any>;
  settingsButtonChanged = (e) => {
    console.log(e);
  };
  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
    this.invList = await this.storageService.get('NAfactures');
    console.log(this.invList);
    this.clientsList = await this.storageService.get('Contacts');
  }

  async ngOnInit() {
    var lang = window.navigator.language;
    this.translateService.setDefaultLang('en');
    this.translateService.use(lang);
    console.log(await this.dbService.getAllAccounts());
    const nowDate = new Date();
    this.dateToday = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
    await this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
    this.invList = await this.storageService.get('NAfactures');
    this.clientsList = await this.storageService.get('Contacts');
    this.devise = await this.storageService.get('devise');
    if(this.devise == null)
    {
      this.devise = '€';
      this.storageService.set('devise',this.devise);
    }
  }
  CreateWorksite()
  {
    console.log('Bouton nv chantier');
    this.navController.navigateBack(['createworksite'],{replaceUrl:true});
  }

  manageWorksite(e: any)
  {
    var chantier : Chantier = e.data;
    this.navController.navigateBack(['worksite',{chantierId: chantier.chantierId}],{replaceUrl:true});
    console.log('click',chantier.worksiteName);
  }
  async deleteWorksite(chantier:Chantier){
    let res : string =null;
    await this.modal.open('delChantier','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.chantierList = this.chantierList.filter(a => a.chantierId !== chantier.chantierId);
    this.storageService.set('Chantiers', this.chantierList);
  }
  GeneratePDFInvoice(f : Facture)
  {
    this.pdfService.GeneratePDFInvoice(null,f);
  }
  GetName(el: Chantier)
  {
    var name = '/';
    const us = this.clientsList.find(a => a.userId === el.clientId);
    if(us)
      name = us.lastName.toUpperCase() +' '+ us.firstName;
    return name;
  }
  SetTabView(type : string)
  {
    this.TabView = type;
  }
  ToggleFilter(event)
  {
    console.log(event);
    if(event.detail.checked === true)
    {
      this.toggleChantier = true;
      console.log('Afficher chantiers terminées')
    }else
    {
      this.toggleChantier = false;
      console.log('Afficher chantiers en cours')

    }
  }
  createInvoice()
  {
    console.log('Bouton nv facture (creation)');
    this.navController.navigateBack(['invoice',{chantierId: 'null', type: 'facture', mode:'false'}]);
  }
  scanInvoice()
  {
    console.log('Bouton nv facture (scan)');
    this.navController.navigateBack(['invoice',{chantierId: 'null', type: 'facture', mode:'true'}]);
  }
  async assignInvoice(inv : Facture)
  {
    console.log('Assign invoice');
    let res : string =null;
    await this.modal.open('assign',inv.factureId)
    .then(result => result.result
      .then((data) => {
        if(data.chantierId !== null)
        {
          let worksiteInvoices;
          if(inv.type.toLowerCase() === 'facture')
          {
            worksiteInvoices = data.factures;
          }else worksiteInvoices = data.devis;

          worksiteInvoices.push(inv);
          const chantier = this.chantierList.find(a => a.chantierId === data.chantierId);
          const chantierIndex = this.chantierList.findIndex(a => a.chantierId === data.chantierId); 
          if(inv.type.toLowerCase() === 'facture')
            chantier.factures= worksiteInvoices;
          else chantier.devis = worksiteInvoices;
      
          this.chantierList[chantierIndex] = chantier;
          this.storageService.set('Chantiers',this.chantierList);

          this.invList.splice(this.invList.findIndex(a => a.factureId === inv.factureId),1);
          res='OK';
        }
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
  }
  openInvoice(inv : Facture)
  {
    console.log('Bouton open facture',inv.factureId);
    this.navController.navigateBack(['invoice',{factureId: inv.factureId, type: 'facture',chantierId: 'null'}]);
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
    // if(inv.receivedMoney!=null)
    // {
    //   inv.receivedMoney.forEach(element => {
    //     this.DeleteReceive(inv,element);
    //   });
    // }
    this.invList = this.invList.filter(a => a.factureId !== inv.factureId);
    // if(this.indexFind>=0)
    // {
    //  // this.chantierList.splice(this.indexFind,1);
    //   this.chantierList[this.indexFind] = this.chantier;
    // }else this.chantierList.push(this.chantier);
    this.storageService.set('NAfactures',this.invList);
  }
  createDevis()
  {
    console.log('Bouton nv facture (creation)');
    this.navController.navigateBack(['invoice',{chantierId: 'null', type: 'devis', mode:'false'}]);
  }
  scanDevis()
  {
    console.log('Bouton nv facture (scan)');
    this.navController.navigateBack(['invoice',{chantierId: 'null', type: 'devis', mode:'true'}]);
  }
  openDevis(inv : Facture)
  {
    console.log('Bouton open facture',inv.factureId);
    this.navController.navigateBack(['invoice',{factureId: inv.factureId, type: 'devis',chantierId: 'null'}]);
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
    this.invList = this.invList.filter(a => a.factureId !== inv.factureId);
    // if(indexFind>=0)
    // {
    //   this.invList.splice(indexFind,1);
    // }
    this.storageService.set('NAfactures',this.invList);
  }
  TransformToInvoice(d : Facture)
  {
    const index=this.invList.findIndex(a => a.factureId === d.factureId);
    this.generateUUID();
    let newFacture = new Facture(
      this.uuidValue,
      d.factureName,
      d.description,
      this.dateToday,
      d.typePay,
      d.remise,
      d.priceHtva,
      d.tva,
      d.totalPrice,
      d.images,
      d.receivedMoney,
      d.cart,
      d.mode,
      'Facture'
    );
    this.invList.push(newFacture);
    // this.chantier.devis.splice(index,1); s'il faut supprimer
    this.storageService.set('NAfactures',this.invList);
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  GoProfile()
  {
    console.log('show profile');
    this.navController.navigateBack(['profile-info']);
  }
  GoSettings()
  {
    console.log('show settings');
    this.navController.navigateBack(['settings']);
  }

  async About()
  {
    this.appVersion.getAppName();
    this.appVersion.getPackageName();
    this.appVersion.getVersionCode();
    this.appVersion.getVersionNumber();
    console.log(this.appVersion.getAppName());
    console.log(this.appVersion.getPackageName());
    console.log(this.appVersion.getVersionCode());
    console.log(this.appVersion.getVersionNumber());

    let res : string =null;
    await this.modal.open('about','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));
      return;
  }
  RateApp()
  {
    this.appRate.setPreferences({
      storeAppURL: {
        ios: '&lt;app_id>',
        android: 'market://details?id=&lt;package_name>',
        windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
      }
    });
    
    this.appRate.promptForRating(true);
    
    // or, override the whole preferences object
    this.appRate.setPreferences({
      usesUntilPrompt: 3,
      storeAppURL: {
       ios: '&lt;app_id>',
       android: 'market://details?id=&lt;package_name>',
       windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
      }
    });
    
    this.appRate.promptForRating(false);
  }
  settingsBtsClick(e : any)
  {
    if(e.item.value === 'about')
    {
      this.About();
    }else //settings
    {
      this.GoSettings();
    }
  }
}
