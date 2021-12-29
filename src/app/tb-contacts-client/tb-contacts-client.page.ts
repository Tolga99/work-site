import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-contacts-client',
  templateUrl: 'tb-contacts-client.page.html',
  styleUrls: ['tb-contacts-client.page.css']
})
export class TabContactsClientPage implements OnInit {
  contactsList: User[] = [];
  client: User;

   formClient = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    tva: new FormControl('',Validators.required),
    //lastName: new FormControl('', Validators.required),

  });
  constructor(private storageService: StorageService, private router: Router) {
    console.log("form creation");
    // this.formClient.addControl('firstName',new FormControl('',Validators.required));
    // this.formClient.addControl('lastName',new FormControl('',Validators.required));
    // this.formClient.addControl('address',new FormControl('',Validators.required));
    // this.formClient.addControl('phone',new FormControl('',Validators.required));
    // this.formClient.addControl('tva',new FormControl('',Validators.required));
    // this.formClient.removeControl('test');


  }
  ngOnInit(): void {
  //  this.formClient = new FormGroup({
  //   firstName: new FormControl('',Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   address: new FormControl('',Validators.required),
  //   phone: new FormControl('', Validators.required),
  //   tva: new FormControl('',Validators.required),
  //  });
   
    //lastName: new FormControl('', Validators.required),  
  }
  async onSubmit() {
    console.log('clickkk');
    console.log('form status',this.formClient);
    if (!this.formClient.valid)
      return;

    this.storageService.init();
    this.client.firstName = this.formClient.get('firstName').value;
    this.client.lastName = this.formClient.get('lastName').value;
    this.client.address=this.formClient.get('address').value;
    this.client.phone=this.formClient.get('phone').value;
    this.client.tva=this.formClient.get('tva').value;
    this.contactsList =await this.storageService.get('Contacts');
    console.log("Liste ="+ this.contactsList);
    this.contactsList.push(this.client);
    console.log("New Liste ="+ this.contactsList);

    this.storageService.set('Contacts',this.contactsList);

    this.router.navigate(['/tb-contacts']);

  }

}