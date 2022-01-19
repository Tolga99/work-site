import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-contacts',
  templateUrl: 'tb-contacts.html',
  styleUrls: ['tb-contacts.css']
})
export class TabContacts implements OnInit  {
  // headElements = ['#', 'Prenom', 'Nom', 'Adresse'];
  headElements = ['Prenom', 'Nom', 'Adresse'];

  contactsList: Array<User> = [];
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS : NgbModal,private router: Router,private storageService: StorageService) {
    console.log('dans construct');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }
  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
  }

  async ngOnInit(): Promise<void> {
    console.log('dans init');
    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
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
}

