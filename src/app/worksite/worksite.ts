import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../models/facture';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-worksite',
  templateUrl: 'worksite.page.html',
  styleUrls: ['worksite.page.scss']
})
export class Worksite implements OnInit {

  chantierId: string;
  images = [];
  invList : Array<Facture>;
  hoursList : Array<Hour>;

  formChantier = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   imgChantier: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });

 headElementsInv = ['Nom facture', 'Total HTVA','Date'];
 headElementsHour = ['Description', 'Heure travail','Date'];



  constructor(private storageService:StorageService, private router: Router, private route: ActivatedRoute) 
  {
  }

  async ionViewDidEnter(){
    console.log('view did enter');
    this.storageService.init();
    this.hoursList =await this.storageService.get('Hours');
    this.invList =await this.storageService.get('Invoices');

  }

  async ngOnInit() {
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');
    console.log('chantier :',this.chantierId);

    this.storageService.init();
    this.hoursList =await this.storageService.get('Hours');
    this.invList =await this.storageService.get('Invoices');

  } 

  get f(){
    return this.formChantier.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) 
    {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) 
      {
        var reader = new FileReader();
        reader.onload = (event:any) => 
        {
          console.log(event.target.result);
          this.images.push(event.target.result); 
          this.formChantier.patchValue({
          fileSource: this.images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSubmit(){}

  resetImages()
  {
    this.images=[];
  //   this.formChantier.patchValue({
  //     file: new FormControl('', [Validators.required]),
  //     fileSource: new FormControl('', [Validators.required])})
  // 
  }
  createInvoice()
  {
    console.log("Bouton nv facture");
    this.router.navigate(['invoice']);
  }
  openInvoice(inv : Facture)
  {
    console.log("Bouton open facture");
    this.router.navigate(['invoice',{factureId: inv.factureId}]);
  }
  AddHour()
  {
    console.log("Bouton nv heure");
    this.router.navigate(['hours']);
  }
  deleteInvoice(inv:Facture){
    //this.invList = this.invList.filter(a => a. != inv.);
    this.storageService.set("Invoices", this.invList);
  }
  deleteHour(hour:Hour){
    this.hoursList = this.hoursList.filter(a => a.hourId != hour.hourId);
    this.storageService.set("Hours", this.hoursList);
  }
  
}
