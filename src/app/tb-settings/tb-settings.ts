import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.html',
  styleUrls: ['tb-settings.scss']
})
export class TabSettings implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void { 
  }
  MyProfile()
  {
    console.log('show profile');
    this.router.navigate(['my-profile']);
  }
  MyProducts()
  {
    console.log('show articles');
    this.router.navigate(['articles']);
  }

}
