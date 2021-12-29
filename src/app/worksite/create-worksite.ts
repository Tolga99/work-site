import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-createworksite',
  templateUrl: 'create-worksite.page.html',
  styleUrls: ['worksite.page.scss']
})
export class CreateWorksite implements OnInit {

  constructor(private storageService:StorageService) {}

  async ngOnInit() {
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
  }

}
