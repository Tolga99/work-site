import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.page.html',
  styleUrls: ['tb-home.page.scss']
})
export class TabHomePage implements OnInit {

  elements: any = [
    {id: 1, worksite: 'Mark', client: 'Otto', date: '@mdo'},
    {id: 2, worksite: 'Jacob', client: 'Thornton', date: '@fat'},
    {id: 3, worksite: 'Larry', client: 'the Bird', date: '@twitter'},
  ];

  headElements = ['#', 'Nom chantier', 'Nom Client', 'Date début'];

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
