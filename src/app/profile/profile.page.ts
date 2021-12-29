import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{
  public myAccount: User;
  public formClient: FormGroup;
  //  formClient = new FormGroup({
  //    firstName: new FormControl('',Validators.required),
  //    lastName: new FormControl('', Validators.required),
  //    address: new FormControl('',Validators.required),
  //    phone: new FormControl('', Validators.required),
  //    tva: new FormControl('',Validators.required),
  //   //lastName: new FormControl('', Validators.required),

  //  });

  constructor(private storageService: StorageService,private router: Router, private formBuilder: FormBuilder) {}

  async ngOnInit(): Promise<void> 
  {
    // this.storageService.init();
    // // this.storageService.set('Profile','TolgaTest');
    // this.myAccount = new User(1,"TolgaTest","TolgaTest","TolgaTest","TolgaTest","TolgaTest","TolgaTest");
    // // this.myAccount.firstName = "TolgaTest";
    // // this.myAccount.lastName = "TolgaTest";
    // // this.myAccount.address= "TolgaTest";
    // // this.myAccount.phone= "TolgaTest";
    // // this.myAccount.tva= "TolgaTest";
    // this.storageService.setProfile(this.myAccount);
    // console.log('Profil avant : ',this.myAccount.firstName);
    // this.myAccount =await this.storageService.get('MyProfile');
    // console.log('Profil actuel : ',this.myAccount.firstName);

      this.formClient = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          address: ['', Validators.required],
          phone: ['', Validators.required],
          tva: ['', Validators.required],
      });
  }

  async onSubmit() {
    console.log('clickkk');
    console.log('form status',this.formClient);
    if (!this.formClient.valid)
      return;

   // this.storageService.init();
    this.myAccount.firstName = this.formClient.get('firstName').value;
    this.myAccount.lastName = this.formClient.get('lastName').value;
    this.myAccount.address=this.formClient.get('address').value;
    this.myAccount.phone=this.formClient.get('phone').value;
    this.myAccount.tva=this.formClient.get('tva').value;
    // this.contactsList =await this.storageService.get('Contacts');
    // console.log("Liste ="+ this.contactsList);
    // this.contactsList.push(this.client);
    // console.log("New Liste ="+ this.contactsList);

    this.storageService.set('Profile',this.myAccount);
    console.log("Profil actualisé, redirection...");
    //this.router.navigate(['/tb-settings']);

  }
  UpdateProfile(formc: FormGroup) : void
  {
    console.log('form status',this.formClient);
    console.log('form ',formc.get('firstName').value);
    console.log('form ',this.formClient.get('firstName').value);

    this.myAccount = new User(
      1,
      this.formClient.get('firstName').value,
      this.formClient.get('lastName').value,
      this.formClient.get('address').value,
      this.formClient.get('phone').value,
      "mail",
      this.formClient.get('tva').value
      );

    this.myAccount.firstName = this.formClient.get('firstName').value;
    this.myAccount.lastName = this.formClient.get('lastName').value;
    this.myAccount.address=this.formClient.get('address').value;
    this.myAccount.phone=this.formClient.get('phone').value;
    this.myAccount.tva=this.formClient.get('tva').value;
    // this.contactsList =await this.storageService.get('Contacts');
    // console.log("Liste ="+ this.contactsList);
    // this.contactsList.push(this.client);
    // console.log("New Liste ="+ this.contactsList);

    this.storageService.set('MyProfile',this.myAccount);
    console.log("Profil actualisé, redirection...");
  }
}
