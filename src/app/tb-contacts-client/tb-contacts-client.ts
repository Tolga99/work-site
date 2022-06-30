import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';

@Component({
  selector: 'app-tb-contacts-client',
  templateUrl: 'tb-contacts-client.html',
  styleUrls: ['tb-contacts-client.css']
})
export class TabContactsClient implements OnInit {
  public contactsList: Array<User> = [];
  client: User;
  clientId: string;
  indexFind =-5;
  uuidValue: string;
  tag: string;
  modif:string;


   formClient = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl(''),
    phone: new FormControl(''),
    mail: new FormControl(''),
    tva: new FormControl(''),
    iban: new FormControl(''),
    bic: new FormControl(''),
  });
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService: StorageService,
              private router: Router,
              private route: ActivatedRoute,)
              {}
  async ngOnInit(): Promise<void> {

    this.storageService.init();
    this.contactsList =await this.storageService.get('Contacts');
    if(this.contactsList==null)
      this.contactsList = new Array<User>();

    this.modif = this.route.snapshot.paramMap.get('userId');
    this.tag = this.route.snapshot.paramMap.get('tag');

    if(this.modif!=null)
    {
      console.log('modification',this.modif);
      this.storageService.get('Contacts');
      this.indexFind =this.contactsList.findIndex(x => x.userId === this.modif);
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
          iban: this.contactsList[this.indexFind].iban,
          bic: this.contactsList[this.indexFind].bic,
        });
      }
    }else
    {
      console.log('creation',this.modif);
      this.clientId= this.generateUUID();
    }
  }

  async onSubmit() {
    const invalid = [];
    const controls = this.formClient.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='firstName')
            nom='Prénom';
          if(name==='lastName')
            nom='Nom';
          invalid.push(nom);
      }
    }
    if (!this.formClient.valid)
    {
      let res : string =null;
      await this.modal.open('field',invalid.toString())
      .then(result => result.result
        .then((data) => {
          res='OK';
        }, (reason) => {
        res='DISMISS' }
        ));
        return;
    }

    this.client = new User(
      this.clientId,
      this.formClient.get('firstName').value,
      this.formClient.get('lastName').value,
      this.formClient.get('address').value,
      this.formClient.get('phone').value,
      this.formClient.get('mail').value,
      null,
      this.formClient.get('tva').value,
      this.formClient.get('iban').value,
      this.formClient.get('bic').value
    );
    if(this.indexFind>=0)
    {
      // this.contactsList.splice(this.indexFind,1);
      this.contactsList[this.indexFind] = this.client;
    }else this.contactsList.push(this.client);
    this.storageService.set('Contacts',this.contactsList);
    if(!this.tag)
    {
      this.router.navigate(['/tb-contacts'],{replaceUrl:true});
    }
    else if(this.tag.toLowerCase() === 'chantier')
    {
      this.router.navigate(['/createworksite'],{replaceUrl:true});
    }else if(this.tag.toLowerCase() === 'profile')
    {
      this.router.navigate(['/client',{userId : this.modif}],{replaceUrl:true});
    }
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  async GoBack()
  {
    let res : string =null;
    await this.modal.open('exitPage','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS'; }
      ));
    if(res === 'DISMISS')
        return;

    if(!this.tag)
    {
      this.router.navigate(['/tb-contacts'],{replaceUrl:true});
    }
    else if(this.tag.toLowerCase() === 'chantier')
    {
      this.router.navigate(['/createworksite'],{replaceUrl:true});
    }else if(this.tag.toLowerCase() === 'profile')
    {
      this.router.navigate(['/client',{userId : this.modif}],{replaceUrl:true});
    }
  }
}