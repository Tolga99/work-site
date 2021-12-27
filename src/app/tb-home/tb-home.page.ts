import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.page.html',
  styleUrls: ['tb-home.page.scss']
})
export class TabHomePage implements OnInit {

  constructor(private storageService:StorageService) {}

  async ngOnInit() {
    var maliste = await this.storageService.get('listClient');

    console.log('here is maliste',maliste);
  }

}
