import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { BehaviorSubject } from 'rxjs';
import { MethodsService } from '../services/methods.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createworksite',
  templateUrl: 'create-worksite.html',
  styleUrls: ['create-worksite.scss']
})
export class CreateWorksite implements OnInit {
  newWorksite : Chantier;
  client : User;
  selectedClient : User;
  uuidValue : string;
  public chantierList : Array<Chantier> = [];
  clientList : Array<User> = [];
  date : string;
  userId : string;
  formWork = new UntypedFormGroup({
    worksiteName: new UntypedFormControl('',Validators.required),
    client: new UntypedFormControl('', Validators.required),
    description: new UntypedFormControl(''),
    address : new UntypedFormControl(''),
  });

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService:StorageService, private router: Router,
    private route:ActivatedRoute, private methodsService : MethodsService, private navController : NavController)
  {
  }
  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.clientList = await this.storageService.get('Contacts');

  }
  async ngOnInit() {
    const nowDate = new Date();
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
    this.storageService.init();
    this.clientList = await this.storageService.get('Contacts');
    console.log(this.clientList);
    if(this.userId !== null)
    {
      this.formWork.get('client').setValue(this.clientList.find(a => a.userId === this.userId).userId);
    }
    this.formWork.get('client').valueChanges.subscribe((value: User) => {
      console.log('selected',value);
      this.formWork.get('address').setValue(this.clientList.find(a => a.userId === value.userId).address.toString());
      console.log(this.formWork.get('address'));
    });
  }

  async CreateWorksite() {
    const invalid = [];
    const controls = this.formWork.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='worksiteName')
            nom='Nom chantier';
          if(name === 'client')
            nom='Client';
          invalid.push(nom);
      }
    }
    if (!this.formWork.valid)
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
    console.log(this.formWork.get('client').value);
    this.client = this.clientList.find(x => x.userId === this.formWork.get('client').value.userId);
    this.storageService.init();
    this.newWorksite = new Chantier(
      this.generateUUID(),
      this.formWork.get('worksiteName').value,
      // this.client.lastName,
      this.client.userId,
      this.client.lastName.toUpperCase() +' '+ this.client.firstName,
      this.formWork.get('description').value,
      this.formWork.get('address').value,
      this.date,
      null,
      'En cours',
      null,
      null,
      null,
      null,
      null,
    );

    this.chantierList=await this.storageService.get('Chantiers');
    if(this.chantierList==null)
      this.chantierList=[];
    this.chantierList.push(this.newWorksite);
    this.storageService.set('Chantiers',this.chantierList);

    if(this.client.historique==null)
      this.client.historique= new Array<string>();
    this.client.historique.push(this.newWorksite.chantierId);

    this.clientList[this.clientList.findIndex(a => a.userId == this.client.userId)] = this.client;
    this.storageService.set('Contacts', this.clientList);
    console.log('Chantier crée, redirection...');
    this.navController.navigateBack(['/tb-home'],{replaceUrl:true});
  }
  NewClient()
  {
    console.log('create client');
    this.navController.navigateBack(['new-contact',{tag: 'chantier'}]);
  }
  generateUUID()
  {
      this.uuidValue=UUID.UUID();
      return this.uuidValue;
  }
  async GoBack()
  {
    var result : string | undefined;
    let cpt = 0;
    Object.keys(this.formWork.controls).forEach(key => {
      if(!this.methodsService.isNullOrEmpty(this.formWork.controls[key].value))
      {
        cpt ++;
      }
    });
    if(cpt > 0)
    {
      result = await this.GoBackModal();
    }
    console.log(result);
    if(result !== null)
      this.navController.navigateBack(['tb-home'],{replaceUrl:true});
  }
  async GoBackModal() : Promise<string>
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
        return null;
    return '';
  }
}

