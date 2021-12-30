import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-tb-contacts',
  templateUrl: 'tb-contacts.page.html',
  styleUrls: ['tb-contacts.page.css']
})
export class TabContactsPage implements OnInit {
  headElements = ['#', 'Prenom', 'Nom', 'Adresse'];
  contactsList: Array<User> = [];

  constructor(private router: Router,private storageService: StorageService) {


  }
  async ngOnInit(): Promise<void> {
    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
  }
  
  AddContact()
  {
    this.router.navigate(["tb-contacts-client"]);
    console.log("Click on Add Client");

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
}

