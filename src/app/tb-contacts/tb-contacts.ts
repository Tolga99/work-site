import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  
  public allowedPageSizes = [5, 10, 15];
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;

  contactsList: Array<User> = [];
  public modal = new NgbdModalFocus(this.modalS);

  constructor(private modalS : NgbModal,
              private storageService:StorageService,
              private router: Router,
              private _liveAnnouncer: LiveAnnouncer , private navController : NavController)
              {
              }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.contactsList = await this.storageService.get('Contacts');
  }

  async ngOnInit(): Promise<void> {
    this.storageService.init();
    this.contactsList = await this.storageService.get('Contacts');
  }

  CreateClient(){
    console.log('create client');
    this.navController.navigateBack(['new-contact']);
    // this.navController.navigateBack(['tb-new-contact']);
  }
  openContact(e:any)
  {
    var user : User = e.data;
    this.navController.navigateBack(['client',{userId: user.userId}]);
  }

  EditContact(user:User)
  {
    this.navController.navigateBack(['new-contact',{userId: user.userId}]);
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
    this.navController.navigateBack(['createworksite',{userId : us.userId}],{replaceUrl:true});
  }
}

