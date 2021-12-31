import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Chantier } from '../models/chantier';
import { User } from '../models/user';

@Component({
  selector: 'app-invoice',
  templateUrl: 'invoice.page.html',
  styleUrls: ['invoice.page.scss']
})
export class Invoice implements OnInit {

  images = [];
  formInv = new FormGroup({
    invoiceName: new FormControl('',Validators.required),
    clientLastName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imgFactures: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    typePay: new FormControl('', [Validators.required]),
    priceHtva: new FormControl('', [Validators.required]),
    tva: new FormControl('', [Validators.required]),
    remise: new FormControl('', [Validators.required]),
  });

  constructor(private storageService:StorageService, private router: Router)
  {
    console.log('create chantier');
  }

  async ngOnInit() {
 
  }

  async CreateWorksite() {
   
  }

  // async ngOnInit() {
  //   this.chantierId = this.route.snapshot.paramMap.get('chantierId');
  //   console.log('chantier :',this.chantierId);
  // } 

  get f(){
    return this.formInv.controls;
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
          this.formInv.patchValue({
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
}
