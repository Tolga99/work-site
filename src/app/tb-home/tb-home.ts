import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.html',
  styleUrls: ['tb-home.scss']
})
export class TabHome implements OnInit {
  chantierList : Array<Chantier> = [];

  headElements = ['Nom chantier', 'Nom Client', 'Date début'];

  constructor(private storageService:StorageService, private router: Router) {}

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
  }

  async ngOnInit() {
    this.storageService.init();
    this.chantierList = await this.storageService.get('Chantiers');
   // var maliste = await this.storageService.get('listClient');

   // console.log('here is maliste',maliste);
  }
  CreateWorksite()
  {
    console.log("Bouton nv chantier");
    this.router.navigate(['createworksite']);
  }

  ManageWorksite(chantier: Chantier)
  {
    this.router.navigate(['worksite',{chantierId: chantier.chantierId}]);
    console.log('click',chantier.worksiteName); 
  }
  deleteWorksite(chantier:Chantier){
    this.chantierList = this.chantierList.filter(a => a.chantierId != chantier.chantierId);
    this.storageService.set("Chantiers", this.chantierList);
  }
}
