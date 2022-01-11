import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Chantier } from '../models/chantier';
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
  chantierId:string;
  hourId: string;
  indexFind: number;
  public redirectTo: string;

  constructor(public router:Router, public storageService: StorageService,public route:ActivatedRoute) 
  {
    this.redirectTo = route.snapshot.data.redirectTo;
  }
  async ngOnInit(): Promise<void> {
    var nowDate = new Date(); 
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();

    let chantierl : Array<Chantier> = await this.storageService.get("Chantiers");
    let chantier = chantierl.find(a => a.chantierId== this.chantierId);
    this.hoursList =chantier.hours;
    if(this.hoursList==null)
      this.hoursList = new Array<Hour>();
  
    const existId = this.route.snapshot.paramMap.get('hourId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    if(existId!=null)
    {
      console.log('modification',existId);
      this.indexFind =this.hoursList.findIndex(x => x.hourId == existId);
      if(this.indexFind>=0)
      {
        this.hourId=this.hoursList[this.indexFind].hourId;
        this.formHour.setValue({
          hour: this.hoursList[this.indexFind].hour,
          description:  this.hoursList[this.indexFind].description,
          minute:  this.hoursList[this.indexFind].minute,
        });
      }
    }else 
    {
      console.log('creation',existId);
      this.hourId= this.generateUUID();
    }
  }
  
  public customFormatter(value: number) {
    return `${value}%`
  }
  async CreateHour()
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
        this.hourId,
        this.date,
        this.formHour.get('description').value,
        this.formHour.get('hour').value,
        this.formHour.get('minute').value,
      );

      if(this.indexFind>=0)
      {
        //this.hoursList.splice(this.indexFind,1);
        this.hoursList[this.indexFind] = this.hour;
      }else this.hoursList.push(this.hour);

      let chantierl : Array<Chantier> = await this.storageService.get("Chantiers");
      let chantier = chantierl.find(a => a.chantierId== this.chantierId);
      let chantierIndex = chantierl.findIndex(a => a.chantierId== this.chantierId);
  
      chantier.hours= this.hoursList;
      chantierl[chantierIndex] = chantier;
      this.storageService.set('Chantiers',chantierl);
      //this.storageService.set('Hours='+this.chantierId,this.hoursList);
      this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});
    }
    generateUUID()
    {
        this.uuidValue=UUID.UUID();
        return this.uuidValue;
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
}
