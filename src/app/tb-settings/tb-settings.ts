import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgbdModalFocus } from '../modal/modal-focus';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tb-settings',
  templateUrl: 'tb-settings.html',
  styleUrls: ['tb-settings.scss']
})
export class TabSettings implements OnInit {

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,private router:Router,
              private translateService : TranslateService, private navController : NavController) {}
  ngOnInit(): void { 
  }
  MyProducts()
  {
    console.log('show articles');
    this.navController.navigateBack(['articles']);
  }
}
