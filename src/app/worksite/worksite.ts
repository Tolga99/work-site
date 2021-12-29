import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-worksite',
  templateUrl: 'worksite.page.html',
  styleUrls: ['worksite.page.scss']
})
export class Worksite implements OnInit {

  constructor(private storageService:StorageService) {}

  async ngOnInit() {
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
  }

}
