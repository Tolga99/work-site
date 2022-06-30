import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { NgbdModalFocus } from '../modal/modal-focus';
import { Chantier } from '../models/chantier';
import { Hour } from '../models/hour';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.html',
  styleUrls: ['./hours.scss'],
})
export class Hours implements OnInit {

  public dateHour;
  formHour = new UntypedFormGroup({
    date: new UntypedFormControl('',Validators.required),
    description: new UntypedFormControl(''),
  });
  hour : Hour;
  date : string;
  hoursList : Array<Hour> =[];
  uuidValue: string;
  chantierId:string;
  hourId: string;
  indexFind: number;

  public modal = new NgbdModalFocus(this.modalS);
  constructor(private modalS :NgbModal,
              public router:Router, 
              public storageService: StorageService,
              public route:ActivatedRoute,
              private cd : ChangeDetectorRef)
  {
  }
  async ngOnInit(): Promise<void> {
    const nowDate = new Date();
    this.date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    this.storageService.init();

    const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
    const chantier = chantierl.find(a => a.chantierId === this.chantierId);
    this.hoursList =chantier.hours;
    if(this.hoursList==null)
      this.hoursList = new Array<Hour>();

    const existId = this.route.snapshot.paramMap.get('hourId');
    this.chantierId = this.route.snapshot.paramMap.get('chantierId');

    if(existId!=null)
    {
      console.log('modification',existId);
      this.indexFind =this.hoursList.findIndex(x => x.hourId === existId);
      if(this.indexFind>=0)
      {
        this.hourId=this.hoursList[this.indexFind].hourId;
        this.hour = new Hour(
          this.hoursList[this.indexFind].hourId,
          this.hoursList[this.indexFind].date,
          this.hoursList[this.indexFind].description,
          this.hoursList[this.indexFind].hour,
          this.hoursList[this.indexFind].minute,
        )
        const d = new Date();
        console.log(this.hour.hour, 'et ',this.hour.minute);
        d.setUTCHours(this.hour.hour,this.hour.minute,0,0);
        console.log('dt',d.toISOString());

        this.formHour.setValue({
          date: d.toISOString(),
          description:  this.hoursList[this.indexFind].description,
        });
        this.formHour.get('date').setValue(d.toISOString());
        console.log('result ',        this.formHour.get('date').value);
        // this.cd.detectChanges();
        // this.formHour.get('date').setValue(d.toISOString());
        // this.formHour.patchValue({ date : d.toISOString()});
        this.date = d.toISOString();
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
    const invalid = [];
    const controls = this.formHour.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          let nom='';
          if(name==='date')
            nom='Heure';
          invalid.push(nom);
      }
    }
    if (!this.formHour.valid)
    {
      let res : string =null;
      await this.modal.open('field',invalid.toString())
      .then(result => result.result
        .then((data) => {
          res='OK';
        }, (reason) => {
        res='DISMISS' }
        ));
        return;
    }

      const dd = new Date(this.formHour.get('date').value);
      console.log(dd.getHours(), ':',dd.getMinutes());


      console.log(this.generateUUID());
      console.log('form status',this.formHour);
      if (!this.formHour.valid)
        return;

      this.hour = new Hour(
        this.hourId,
        this.date,
        this.formHour.get('description').value,
        dd.getHours(),
        dd.getMinutes(),
      );

      if(this.indexFind>=0)
      {
        // this.hoursList.splice(this.indexFind,1);
        this.hoursList[this.indexFind] = this.hour;
      }else this.hoursList.push(this.hour);

      const chantierl : Array<Chantier> = await this.storageService.get('Chantiers');
      const chantier = chantierl.find(a => a.chantierId === this.chantierId);
      const chantierIndex = chantierl.findIndex(a => a.chantierId === this.chantierId);

      chantier.hours= this.hoursList;
      chantierl[chantierIndex] = chantier;
      this.storageService.set('Chantiers',chantierl);
      // this.storageService.set('Hours='+this.chantierId,this.hoursList);
      this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});
    }
    generateUUID()
    {
        this.uuidValue=UUID.UUID();
        return this.uuidValue;
    }
    GoBack()
    {
      this.router.navigate(['/worksite',{chantierId: this.chantierId}],{replaceUrl:true});
    }
}
