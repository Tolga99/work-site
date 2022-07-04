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
import { DxiItemComponent, INestedOptionContainer, NestedOptionHost } from 'devextreme-angular';
@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.html',
  styleUrls: ['tb-home.scss'],
  providers : [NestedOptionHost]
})
export class TabHome implements OnInit, INestedOptionContainer{
  alignments : any[]= [
    { value: 'settings', name: 'x', icon: 'fas fa-toolbox' },
    { value: 'about', name: 'c', icon: 'fas fa-icon' },
  ];
  // <dx-button icon="" (click)="GoSettings()" [text]="">
  // </dx-button>
  // <dx-button icon="" (click)="About()" [text]="">
  // </dx-button>
  TabView = 'enCours';
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
  
  dataSource: MatTableDataSource<Chantier>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSourceF: MatTableDataSource<Facture>;
  @ViewChild(MatPaginator) paginatorF: MatPaginator;
  @ViewChild(MatSort) sortF: MatSort;
  @ViewChild('myButton') myButton: DxiItemComponent;
  @ContentChildren(DxiItemComponent) options: QueryList<DxiItemComponent>;
  constructor(private modalS : NgbModal,
              private storageService:StorageService,
              private router: Router,
              private _liveAnnouncer: LiveAnnouncer,
              private http: HttpClient,
              private _translate: TranslateService, private appVersion : AppVersion,
              private appRate : AppRate,
              private library : FaIconLibrary,private optionHost: NestedOptionHost)
              {
                this.storageService.init();
                _translate.setDefaultLang('fr');
                _translate.use('fr');

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
    this.clientsList = await this.storageService.get('Contacts');

    this.dataSource = new MatTableDataSource(this.chantierList.filter(a => a.isFinished === 'En cours'));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceF = new MatTableDataSource(this.invList);
    this.dataSourceF.paginator = this.paginatorF;
    this.dataSourceF.sort = this.sortF;

    this.dataSourceF._filterData(this.dataSourceF.data);
    this.dataSourceF.paginator.nextPage();
    console.log('current tab : ',this.TabView);
    this.dataSourceF.paginator.firstPage();

    Object.defineProperty(this.myButton, "options", {  writable: true  });
    this.myButton.options = this.options;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  async ngOnInit() {
    // this.router.navigate(['login'],{replaceUrl:true});
    await this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
    this.dataSource = new MatTableDataSource(this.chantierList);

    this.invList = await this.storageService.get('NAfactures');
    this.dataSourceF = new MatTableDataSource(this.invList);

    // this.searchList = this.chantierList;
    this.clientsList = await this.storageService.get('Contacts');

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceF.paginator = this.paginatorF;
    this.dataSourceF.sort = this.sortF;
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
  }
  CreateWorksite()
  {
    console.log('Bouton nv chantier');
    this.router.navigate(['createworksite'],{replaceUrl:true});
  }

  ManageWorksite(chantier: Chantier)
  {
    this.router.navigate(['worksite',{chantierId: chantier.chantierId}],{replaceUrl:true});
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
    this.dataSource = new MatTableDataSource(this.chantierList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  hideSearch()
  {}
  yourSearchFunction(event)
  {
    var val : string = event.target.value;
    val = val.toLowerCase();
    console.log('s :',val);
    if(this.client === true)
    {
      const noms = this.clientsList.filter(a => a.lastName.toLowerCase().includes(val));
      this.searchList = [];
      noms.forEach(element => {
        this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
      });

      const prenoms = this.clientsList.filter(a => a.firstName.toLowerCase().includes(val));
      prenoms.forEach(element => {
        this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
      });
    }else if(this.state === true)
    {
      this.searchList = this.chantierList.filter(a => a.isFinished.toLowerCase().includes(val));
    }else if(this.name === true)
    {
      this.searchList = this.chantierList.filter(a => a.worksiteName.toLowerCase().includes(val));
    }else if(this.address === true)
    {
      this.searchList = this.chantierList.filter(a => a.address.toLowerCase().includes(val));
    }else if(this.date === true)
    {
      this.searchList = this.chantierList.filter(a => a.dateStart.toLowerCase().includes(val));
    }
  }
  yourInputChangeFunction(event)
  {
    var val : string = event.target.value;
    val = val.toLowerCase();
    console.log(val);
    if(val === '')
    {
      this.searchList = this.chantierList;
      return;
    }
    if(this.client === true)
    {
      const noms = this.clientsList.filter(a => a.lastName.toLowerCase().includes(val));
      this.searchList = [];
      noms.forEach(element => {
        this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
      });

      const prenoms = this.clientsList.filter(a => a.firstName.toLowerCase().includes(val));
      prenoms.forEach(element => {
        this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
      });
    }else if(this.state === true)
    {
      this.searchList = this.chantierList.filter(a => a.isFinished.toLowerCase().includes(val));
    }else if(this.name === true)
    {
      this.searchList = this.chantierList.filter(a => a.worksiteName.toLowerCase().includes(val));
    }else if(this.address === true)
    {
      this.searchList = this.chantierList.filter(a => a.address.toLowerCase().includes(val));
    }else if(this.date === true)
    {
      this.searchList = this.chantierList.filter(a => a.dateStart.toLowerCase().includes(val));
    }
  }
  UpdateSearch(event)
  {
    console.log(event.target.name);
    if(event.target.name === 'name')
    {
      this.state=false;
      this.address = false;
      this.date = false;
      this.client =false;
    }else if(event.target.name === 'client')
    {
      this.state=false;
      this.address = false;
      this.date = false;
      this.name =false;
    }else if(event.target.name === 'state')
    {
      this.name=false;
      this.address = false;
      this.date = false;
      this.client =false;
    }else if(event.target.name === 'date')
    {
      this.state=false;
      this.address = false;
      this.name = false;
      this.client =false;
    }else if(event.target.name === 'address')
    {
      this.state=false;
      this.name = false;
      this.date = false;
      this.client =false;
    }
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
      this.dataSource = new MatTableDataSource(this.chantierList.filter(a => a.isFinished !== 'En cours'));
    }else
    {
      this.toggleChantier = false;
      console.log('Afficher chantiers en cours')
      this.dataSource = new MatTableDataSource(this.chantierList.filter(a => a.isFinished === 'En cours'));

    }
  }
  createInvoice()
  {
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice',{chantierId: 'null', type: 'facture', mode:'false'}]);
  }
  scanInvoice()
  {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice',{chantierId: 'null', type: 'facture', mode:'true'}]);
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
          this.dataSourceF = new MatTableDataSource(this.invList);
          //ASSIGN ENDED
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
  //   console.log('Bouton open facture',inv.factureId);
  //   this.router.navigate(['invoice',{factureId: inv.factureId, type: 'facture',chantierId: this.chantierId}]);
  }
  async deleteInvoice(inv:Facture) : Promise<void>{
  //   let res : string =null;
  //   await this.modal.open('delInv',inv.factureName)
  //   .then(result => result.result
  //     .then((data) => {
  //       res='OK';
  //     }, (reason) => {
  //     res='DISMISS' }
  //     ));

  //   if(res==='DISMISS')
  //       return ;
  //   if(inv.receivedMoney!=null)
  //   {
  //     inv.receivedMoney.forEach(element => {
  //       this.DeleteReceive(inv,element);
  //     });
  //   }
  //   this.chantier.factures = this.chantier.factures.filter(a => a.factureId !== inv.factureId);
  //   if(this.indexFind>=0)
  //   {
  //    // this.chantierList.splice(this.indexFind,1);
  //     this.chantierList[this.indexFind] = this.chantier;
  //   }else this.chantierList.push(this.chantier);
  //   this.storageService.set('Chantiers',this.chantierList);

  //   this.dataSourceFacture = new MatTableDataSource(this.chantier.factures);
  }


  createDevis()
  {
    console.log('Bouton nv facture (creation)');
    this.router.navigate(['invoice',{chantierId: 'null', type: 'devis', mode:'false'}]);
  }
  scanDevis()
  {
    console.log('Bouton nv facture (scan)');
    this.router.navigate(['invoice',{chantierId: 'null', type: 'devis', mode:'true'}]);
  }
  openDevis(inv : Facture)
  {
  //   console.log('Bouton open facture',inv.factureId);
  //   this.router.navigate(['invoice',{factureId: inv.factureId, type: 'devis',chantierId: this.chantierId}]);
  }
  async deleteDevis(inv:Facture){
  //   let res : string =null;
  //   await this.modal.open('delDev',inv.factureName)
  //   .then(result => result.result
  //     .then((data) => {
  //       res='OK';
  //     }, (reason) => {
  //     res='DISMISS' }
  //     ));

  //   if(res==='DISMISS')
  //       return ;
  //   this.chantier.devis = this.chantier.devis.filter(a => a.factureId !== inv.factureId);
  //   if(this.indexFind>=0)
  //   {
  //    // this.chantierList.splice(this.indexFind,1);
  //     this.chantierList[this.indexFind] = this.chantier;
  //   }else this.chantierList.push(this.chantier);
  //   this.storageService.set('Chantiers',this.chantierList);

  //   this.dataSourceDevis = new MatTableDataSource(this.chantier.devis);

  }

  TransformToInvoice(d : Facture)
  {
  //   const index=this.chantier.devis.findIndex(a => a.factureId === d.factureId);
  //   this.generateUUID();
  //   d.factureId= this.uuidValue;
  //   this.chantier.factures.push(d);
  //   // this.chantier.devis.splice(index,1); s'il faut supprimer
  //   this.chantierList[this.chantierList.findIndex(a => a.chantierId === this.chantier.chantierId)] = this.chantier;
  //   this.storageService.set('Chantiers',this.chantierList);
  }
  applyFilterFacture(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceF.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceF.paginator) {
      this.dataSourceF.paginator.firstPage();
    }
  }
  announceSortChangeFacture(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  GoProfile()
  {
    console.log('show profile');
    this.router.navigate(['my-profile']);
  }
  GoSettings()
  {
    console.log('show settings');
    this.router.navigate(['settings']);
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
}
