import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router,private storageService: StorageService) {
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
  ClickContact(user:User)
  {
    this.router.navigate(['new-contact',{userId: user.userId}]);
    console.log('click',user.firstName);
  }
  deleteContact(user:User){
    this.contactsList = this.contactsList.filter(a => a.userId != user.userId);
    this.storageService.set("Contacts", this.contactsList);
  }
}

