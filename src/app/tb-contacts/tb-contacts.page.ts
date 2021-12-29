import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tb-contacts',
  templateUrl: 'tb-contacts.page.html',
  styleUrls: ['tb-contacts.page.css']
})
export class TabContactsPage {

  constructor(private router: Router) {}
  
  AddContact()
  {
    this.router.navigate(["tb-contacts-client"]);
    console.log("Click on Add Client");

  }
  CreateClient(){
    console.log('create client');
    this.router.navigate(['/tb-contacts/new-contact']);
    // this.router.navigate(['tb-new-contact']);

  }
}

