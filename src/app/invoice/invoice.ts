import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.page.html',
  styleUrls: ['invoice.page.scss']
})
export class Invoice implements OnInit {
  newWorksite : Chantier;
  uuidValue : string;
  public chantierList : Array<Chantier> = []; 
  clientList : Array<User> = [];

  formWork = new FormGroup({
    worksiteName: new FormControl('',Validators.required),
    clientLastName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private storageService:StorageService, private router: Router)
  {
    console.log('create chantier');
  }

  async ngOnInit() {
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
   this.storageService.init();
   this.clientList = await this.storageService.get('Contacts');
   console.log(this.clientList);
  }

  async CreateWorksite() {
    console.log('form status',this.formWork);
    if (!this.formWork.valid)
      return;

    this.storageService.init();
    this.newWorksite = new Chantier(
      this.generateUUID(),
      this.formWork.get('worksiteName').value,
      this.formWork.get('clientLastName').value,
      this.formWork.get('description').value
    );
    this.chantierList=await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList=[];
    this.chantierList.push(this.newWorksite);
    this.storageService.set('Chantiers',this.chantierList);

    console.log("Chantier crée, redirection...");
    this.router.navigate(['/tb-home']);

  }
  NewClient()
  {
    console.log('create client');
    this.router.navigate(['new-contact',{tag: 'chantier'}]);
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  
}
