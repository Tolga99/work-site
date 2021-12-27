import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{
  myAccount: User;

  constructor(private storageService: StorageService) {}

  async ngOnInit(): Promise<void> 
  {
    await this.storageService.init();
    this.myAccount =await this.storageService.get('Profile');
  }
  UpdateProfile(form: NgForm)
  {
      //await this.storageService.init();
      this.myAccount.firstName=form.value.firstName;
      this.myAccount.lastName=form.value.lastName;
      this.myAccount.adress=form.value.adress;
      this.myAccount.phone=form.value.phone;
      this.myAccount.tva=form.value.tva;

      this.storageService.set('Profile',this.myAccount);
  }
}
