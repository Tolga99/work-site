import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-contacts-client',
  templateUrl: 'tb-contacts-client.page.html',
  styleUrls: ['tb-contacts-client.page.css']
})
export class TabContactsClientPage implements OnInit {
  contactsList: Array<User> = [];
  client: User;
  indexFind : number;


   formClient = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    tva: new FormControl('',Validators.required),
  });
  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute) {
  }
  async ngOnInit(): Promise<void> {
    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
    if(this.contactsList==null)
      this.contactsList = new Array<User>();
    const modif = this.route.snapshot.paramMap.get('userId');
    if(Number?.parseInt(modif)>0)
    {
      console.log('modification',modif);
      this.storageService.get("Contacts");
      if(this.indexFind=this.contactsList.find(x => x.userId == Number?.parseInt(modif)).userId)
      {
        if(this.indexFind>0)
        {
          this.formClient.setValue({
            firstName: this.contactsList[this.indexFind].firstName,
            lastName:  this.contactsList[this.indexFind].lastName,
            address:  this.contactsList[this.indexFind].address,
            phone:  this.contactsList[this.indexFind].phone,
            mail:  this.contactsList[this.indexFind].mail,
            tva: this.contactsList[this.indexFind].tva,
          });
        }
      }
    }else console.log('creation',modif);
  }
  onSubmit() {
    console.log('form status',this.formClient);
    if (!this.formClient.valid)
      return;

    this.client = new User(
      2,
      this.formClient.get('firstName').value,
      this.formClient.get('lastName').value,
      this.formClient.get('address').value,
      this.formClient.get('phone').value,
      this.formClient.get('mail').value,
      this.formClient.get('tva').value
    );

    this.contactsList.push(this.client);
    this.storageService.set('Contacts',this.contactsList);

    this.router.navigate(['/tb-contacts']);

  }

}