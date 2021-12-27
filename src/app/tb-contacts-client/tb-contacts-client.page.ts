import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-contacts-client',
  templateUrl: 'tb-contacts-client.page.html',
  styleUrls: ['tb-contacts-client.page.css']
})
export class TabContactsClientPage {
  contactsList : User[] = [];

  constructor(private storageService: StorageService,private router:Router) {
  }

  async CreateClient(client:User)
  {
      await this.storageService.init();
      this.contactsList =await this.storageService.get('Contacts');
      this.contactsList.push(client);
      this.storageService.set('Contacts',this.contactsList);
  }

}