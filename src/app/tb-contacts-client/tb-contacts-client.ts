import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tb-contacts-client',
  templateUrl: 'tb-contacts-client.html',
  styleUrls: ['tb-contacts-client.css']
})
export class TabContactsClient implements OnInit {
  public contactsList: Array<User> = [];
  client: User;
  clientId: string;
  indexFind: number =-5;
  uuidValue: string;
  tag: string;


   formClient = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    tva: new FormControl('',Validators.required),
  });
  constructor(private storageService: StorageService, 
              private router: Router, 
              private route: ActivatedRoute,
              private location: Location) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  async ngOnInit(): Promise<void> {

    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
    if(this.contactsList==null)
      this.contactsList = new Array<User>();

    const modif = this.route.snapshot.paramMap.get('userId');
    this.tag = this.route.snapshot.paramMap.get('tag');

    if(modif!=null)
    {
      console.log('modification',modif);
      this.storageService.get("Contacts");
      this.indexFind =this.contactsList.findIndex(x => x.userId == modif);
      if(this.indexFind>=0)
      {
        this.clientId= this.contactsList[this.indexFind].userId;
        this.formClient.setValue({
          firstName: this.contactsList[this.indexFind].firstName,
          lastName:  this.contactsList[this.indexFind].lastName,
          address:  this.contactsList[this.indexFind].address,
          phone:  this.contactsList[this.indexFind].phone,
          mail:  this.contactsList[this.indexFind].mail,
          tva: this.contactsList[this.indexFind].tva,
        });
      }
    }else
    {
      console.log('creation',modif);
      this.clientId= this.generateUUID();
    }
  }

  onSubmit() {
    console.log(this.generateUUID());
    console.log('form status',this.formClient);
    if (!this.formClient.valid)
      return;

    this.client = new User(
      this.clientId,
      this.formClient.get('firstName').value,
      this.formClient.get('lastName').value,
      this.formClient.get('address').value,
      this.formClient.get('phone').value,
      this.formClient.get('mail').value,
      this.formClient.get('tva').value
    );
    if(this.indexFind>=0)
    {
      this.contactsList.splice(this.indexFind,1);
      this.contactsList[this.indexFind] = this.client;
    }else this.contactsList.push(this.client);
    this.storageService.set('Contacts',this.contactsList);
    if(this.tag==null)
    {
      this.router.navigate(['/tb-contacts']);
    }
    else this.router.navigate(['/createworksite']);
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
}