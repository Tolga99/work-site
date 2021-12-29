import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.page.html',
  styleUrls: ['tb-home.page.scss']
})
export class TabHomePage implements OnInit {

  constructor(private storageService:StorageService, private router: Router) {}

  async ngOnInit() {
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
  }
  CreateWorksite()
  {
    console.log("Bouton nv chantier");
    this.router.navigate(['/tb-home/createworksite']);
  }

}
