import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-contacts',
  templateUrl: 'tb-contacts.html',
  styleUrls: ['tb-contacts.css']
})
export class TabContacts implements OnInit  {
  // headElements = ['#', 'Prenom', 'Nom', 'Adresse'];
  headElements = ['lastName', 'firstName', 'address','...'];

  contactsList: Array<User> = [];
  public modal = new NgbdModalFocus(this.modalS);


  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private modalS : NgbModal,
              private storageService:StorageService,
              private router: Router,
              private _liveAnnouncer: LiveAnnouncer)
              {
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

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.contactsList = await this.storageService.get('Contacts');
    this.dataSource = new MatTableDataSource(this.contactsList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async ngOnInit(): Promise<void> {
    this.storageService.init();
    this.contactsList = await this.storageService.get('Contacts');
    this.dataSource = new MatTableDataSource(this.contactsList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  CreateClient(){
    console.log('create client');
    this.router.navigate(['new-contact']);
    // this.router.navigate(['tb-new-contact']);
  }
  OpenContact(user:User)
  {
    this.router.navigate(['client',{userId: user.userId}]);
  }

  EditContact(user:User)
  {
    this.router.navigate(['new-contact',{userId: user.userId}]);
    console.log('click',user.firstName);
  }
  async deleteContact(user:User){
    let res : string =null;
    await this.modal.open('delCli',user.firstName+' '+user.lastName.toUpperCase())
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.contactsList = this.contactsList.filter(a => a.userId !== user.userId);
    this.storageService.set('Contacts', this.contactsList);
  }
  NewWork(us : User)
  {
    this.router.navigate(['createworksite',{userId : us.userId}],{replaceUrl:true});
  }
}

