import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tb-contacts',
  templateUrl: 'tb-contacts.page.html',
  styleUrls: ['tb-contacts.page.scss']
})
export class TabContactsPage {

  constructor(private router: Router) {}
  
  AddContact()
  {
    this.router.navigate(["tb-contacts-client"]);
    console.log("Click on Add Client");

  }

}
