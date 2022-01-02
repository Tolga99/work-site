import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss']
})
export class Profile implements OnInit{
  public myAccount: User;

  formProfile = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    tva: new FormControl('',Validators.required),
  });

  constructor(private storageService: StorageService,private router: Router) {
    console.log('Module profil');
  }

  async ngOnInit(): Promise<void> 
  {
    console.log('nginit profil ',this.storageService.get("MyProfile"));

    this.storageService.init();
    if(this.storageService.get("MyProfile")!=null)
    {
        this.formProfile.setValue({
          firstName: this.storageService.get('firstName'),
          lastName:  this.storageService.get('lastName'),
          address:  this.storageService.get('address'),
          phone:  this.storageService.get('phone'),
          mail:  this.storageService.get('mail'),
          tva: this.storageService.get('tva'),
        });
    }
    if(this.formProfile.get('firstName').value=='[object Promise]' || null)
    {
      this.formProfile.setValue({
        firstName: "",
        lastName:  "",
        address:  "",
        phone:  "",
        mail:  "",
        tva: "",
      });
    }
  }

  UpdateProfile() {
    console.log('my profil actualisation');
    console.log('form status',this.formProfile);
    if (!this.formProfile.valid)
      return;

    this.storageService.init();
    this.myAccount = new User(
      "17",
      this.formProfile.get('firstName').value,
      this.formProfile.get('lastName').value,
      this.formProfile.get('address').value,
      this.formProfile.get('phone').value,
      this.formProfile.get('mail').value,
      this.formProfile.get('tva').value
    );

    this.storageService.setProfile(this.myAccount);
    console.log("Profil actualisé, redirection...");
    this.router.navigate(['/tb-settings']);

  }
}
