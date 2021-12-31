import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.html',
  styleUrls: ['./hours.scss'],
})
export class Hours implements OnInit {
  
  formHour = new FormGroup({
    description: new FormControl('',Validators.required),
    hour: new FormControl('', Validators.required),
    minute: new FormControl('', Validators.required),
  });
  hour : Hour;
  date : string;
  hoursList : Array<Hour> =[];
  uuidValue: string;


  constructor(public router:Router, public storageService: StorageService) {}
  async ngOnInit(): Promise<void> {
    var nowDate = new Date(); 
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();

    this.storageService.init();
    this.hoursList =await this.storageService.get('Hours');
    if(this.hoursList==null)
      this.hoursList = new Array<Hour>();
  }
  
  public customFormatter(value: number) {
    return `${value}%`
  }
  CreateHour()
  {
    console.log(      
      this.formHour.get('description').value,
      this.formHour.get('hour').value,
      this.formHour.get('minute').value,);


      console.log(this.generateUUID());
      console.log('form status',this.formHour);
      if (!this.formHour.valid)
        return;
  
      this.hour = new Hour(
        this.generateUUID(),
        this.date,
        this.formHour.get('description').value,
        this.formHour.get('hour').value,
        this.formHour.get('minute').value,
      );
      this.hoursList.push(this.hour);
      console.log(this.hour.description);
      this.storageService.set('Hours',this.hoursList);
      this.router.onSameUrlNavigation = 'reload';
        console.log("Hours saved", this.hoursList);
      this.router.navigate(['/worksite']);
    }
    generateUUID()
    {
        this.uuidValue=UUID.UUID();
        return this.uuidValue;
    }
}
