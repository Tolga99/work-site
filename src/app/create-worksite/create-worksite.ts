import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';

@Component({
  selector: 'app-createworksite',
  templateUrl: 'create-worksite.html',
  styleUrls: ['create-worksite.scss']
})
export class CreateWorksite implements OnInit {
  newWorksite : Chantier;
  client : User;
  uuidValue : string;
  public chantierList : Array<Chantier> = []; 
  clientList : Array<User> = [];
  date : string;

  formWork = new FormGroup({
    worksiteName: new FormControl('',Validators.required),
    client: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address : new FormControl(''),
  });

  public redirectTo: string;

  constructor(private storageService:StorageService, private router: Router,private route:ActivatedRoute)
  {
    console.log('create chantier');
    this.redirectTo = route.snapshot.data.redirectTo;
  }
  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.clientList = await this.storageService.get('Contacts');
  }
  async ngOnInit() {
    var nowDate = new Date(); 
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
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
    this.client = this.clientList.find(x => x.userId == this.formWork.get('client').value);
    this.storageService.init();
    this.newWorksite = new Chantier(
      this.generateUUID(),
      this.formWork.get('worksiteName').value,
      this.client.lastName,
      this.client.userId,
      this.formWork.get('description').value,
      this.formWork.get('address').value,
      this.date,
      null,
      "En cours",
      null,
      null,
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
    this.router.navigate(['new-contact',{tag: 'chantier'}],{replaceUrl:true});
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  selectClient(event: Event) {
    let s = (event.target as HTMLSelectElement).value;
    this.formWork.patchValue({address : this.clientList.find(a => a.userId== s).address});
  }
  GoBack()
  {
    this.router.navigateByUrl(
			this.redirectTo,
			{
				replaceUrl: true
			}
		);
  }
  
}

