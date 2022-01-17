import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Chantier } from '../models/chantier';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tb-home',
  templateUrl: 'tb-home.html',
  styleUrls: ['tb-home.scss']
})
export class TabHome implements OnInit {
  chantierList : Array<Chantier> = [];

  headElements = ['Nom chantier', 'Nom Client', 'Date début','Adresse','Etat'];

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS : NgbModal,private storageService:StorageService, private router: Router) {}

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
    console.log('Bouton nv chantier');
    this.router.navigate(['createworksite']);
  }

  ManageWorksite(chantier: Chantier)
  {
    this.router.navigate(['worksite',{chantierId: chantier.chantierId}]);
    console.log('click',chantier.worksiteName);
  }
  async deleteWorksite(chantier:Chantier){
    let res : string =null;
    await this.modal.open('delChantier','')
    .then(result => result.result
      .then((data) => {
        res='OK';
      }, (reason) => {
      res='DISMISS' }
      ));

    if(res==='DISMISS')
        return ;
    this.chantierList = this.chantierList.filter(a => a.chantierId !== chantier.chantierId);
    this.storageService.set('Chantiers', this.chantierList);
  }
}
