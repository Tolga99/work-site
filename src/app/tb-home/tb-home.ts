import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.html',
  styleUrls: ['tb-home.scss']
})
export class TabHome implements OnInit{
  TabView = 'enCours';
  chantierList : Array<Chantier> = [];
  searchList : Array<Chantier> = [];
  clientsList : Array<User> = [];
  headElements = ['worksiteName', 'client', 'dateStart','address','...'];

  public modal = new NgbdModalFocus(this.modalS);

  name = true;
  client = false;
  date = false;
  address = false;
  state = false;
  
  dataSource: MatTableDataSource<Chantier>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private modalS : NgbModal,
              private storageService:StorageService,
              private router: Router,
              private _liveAnnouncer: LiveAnnouncer)
              {
              }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
    this.clientsList = await this.storageService.get('Contacts');
    this.dataSource = new MatTableDataSource(this.chantierList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

    // const noms = this.clientsList.filter(a => a.lastName.toLowerCase().includes(filterValue.toLowerCase()));
    // this.searchList = [];
    // noms.forEach(element => {
    //   this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
    // });

    // const prenoms = this.clientsList.filter(a => a.firstName.toLowerCase().includes(filterValue.toLowerCase()));
    // prenoms.forEach(element => {
    //   this.searchList = this.chantierList.filter(a => a.clientId === element.userId);
    // });

    // if(this.searchList.length === 0)
    // {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }else
    // {
    //   this.searchList.forEach( element =>{
    //     this.dataSource.filter = element.address.toLowerCase();

    //   });
    // }
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
    this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
    this.dataSource = new MatTableDataSource(this.chantierList);

    // this.searchList = this.chantierList;
    this.clientsList = await this.storageService.get('Contacts');

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
    console.log(val);
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
}
