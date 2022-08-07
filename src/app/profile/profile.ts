import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { User } from '../models/user';
import { MethodsService } from '../services/methods.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss']
})
export class Profile implements OnInit{
  public myAccount: User;
  profileExist = 'NO';
  public bgImage = '/src/assets/worksiteBackground.png';
  formProfile = new UntypedFormGroup({
    firstName: new UntypedFormControl('',Validators.required),
    lastName: new UntypedFormControl('', Validators.required),
    address: new UntypedFormControl(''),
    phone: new UntypedFormControl(''),
    mail: new UntypedFormControl(''),
    tva: new UntypedFormControl(''),
    iban: new UntypedFormControl(''),
    bic: new UntypedFormControl(''),
  });
  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private storageService: StorageService,
    private router: Router, private methodsService : MethodsService, private navController : NavController) {
    console.log('Module profil');
  }

  async ngOnInit(): Promise<void>
  {
    console.log('nginit profil ',this.storageService.get('MyProfile'));

    this.storageService.init();
    let profile : User = await this.storageService.get('MyProfile');
    if(profile!=null)
    {
        this.myAccount = profile;
        this.profileExist = 'YES';
        this.formProfile.setValue({
          firstName: profile.firstName,
          lastName: profile.lastName,
          address: profile.address,
          phone: profile.phone,
          mail: profile.mail,
          tva: profile.tva,
          iban: profile.iban,
          bic: profile.bic,
        });
    }else
    {
      this.profileExist = 'NO';
      this.formProfile.setValue({
        firstName: '',
        lastName:  '',
        address:  '',
        phone:  '',
        mail:  '',
        tva: '',
        iban: '',
        bic: '',
      });
    }
  }

  async UpdateProfile() {
    const invalid = [];
    const controls = this.formProfile.controls;
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
    if (!this.formProfile.valid)
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

    this.storageService.init();
    this.myAccount = new User(
      '17',
      this.formProfile.get('firstName').value,
      this.formProfile.get('lastName').value,
      this.formProfile.get('address').value,
      this.formProfile.get('phone').value,
      this.formProfile.get('mail').value,
      null,
      this.formProfile.get('tva').value,
      this.formProfile.get('iban').value,
      this.formProfile.get('bic').value,

    );

    this.storageService.setProfile(this.myAccount);
    console.log('Profil actualisé, redirection...');
    this.navController.navigateBack(['/tb-home']);

  }
  async GoBack()
  {
    var result : string | undefined;
    if(this.profileExist === 'NO')
    {
      let cpt = 0;
      Object.keys(this.formProfile.controls).forEach(key => {
        if(!this.methodsService.isNullOrEmpty(this.formProfile.controls[key].value))
        {
          cpt ++;
        }
      });
      console.log(cpt,this.formProfile);
      if(cpt > 0)
      {
        result = await this.GoBackModal();
      }
    }else
    {
      if(!this.methodsService.equals(this.myAccount.firstName,this.formProfile.get('firstName').value) ||
      !this.methodsService.equals(this.myAccount.lastName,this.formProfile.get('lastName').value) ||
      !this.methodsService.equals(this.myAccount.address.toString(),this.formProfile.get('address').value) ||
      !this.methodsService.equals(this.myAccount.mail.toString(),this.formProfile.get('mail').value) ||
      !this.methodsService.equals(this.myAccount.tva.toString(),this.formProfile.get('tva').value) ||
      !this.methodsService.equals(this.myAccount.iban.toString(),this.formProfile.get('iban').value) ||
      !this.methodsService.equals(this.myAccount.bic.toString(),this.formProfile.get('bic').value) ||
      !this.methodsService.equals(this.myAccount.phone,this.formProfile.get('phone').value))
      {
        result = await this.GoBackModal();
      }
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
