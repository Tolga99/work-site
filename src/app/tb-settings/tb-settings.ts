import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.html',
  styleUrls: ['tb-settings.scss']
})
export class TabSettings implements OnInit {

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private router:Router) {}
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
  MySettings()
  {
    console.log('show settings');
    this.router.navigate(['settings']);
  }

  async About()
  {
    let res : string =null;
    await this.modal.open('about','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));
      return;
  }
}
