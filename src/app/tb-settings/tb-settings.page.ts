import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.page.html',
  styleUrls: ['tb-settings.page.scss']
})
export class TabSettingsPage {

  constructor(private router:Router) {}
  MyProfile()
  {
    console.log('show profile');
    this.router.navigate(['/tabs/tb-settings/my-profile']);
  }

}
