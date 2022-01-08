import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../models/facture';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss'],
})
export class Payment implements OnInit {

  invList : Array<Facture>;
  selectedInv : Facture;
  formPay = new FormGroup({
   chantierName: new FormControl('', [Validators.required]),
   payment: new FormControl('', [Validators.required]),
   address : new FormControl('',Validators.required),
 });

  headElementsInv = ['Nom facture', 'Total HTVA','Date'];
  redirectTo : string="";
  constructor(private router: Router,private route:ActivatedRoute, private storageService :StorageService) 
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }

  async ngOnInit() {
    this.storageService.init();
    this.invList = await this.storageService.get("Invoices");
  }
  GoBack()
  {
    this.router.navigateByUrl(
			this.redirectTo,
			{
				replaceUrl: true
			}
		);
  }
  SavePay()
  {}

}
