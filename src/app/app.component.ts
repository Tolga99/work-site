import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userList : User[] = [];

  constructor(private storageService:StorageService) 
  {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 /* async ngOnInit() {
await this.storageService.init();
     
    this.userList.push({
      userId:1
     // name :'Ercan'
    });
    
    this.userList.push({
      userId:2
   //   name :'Tolga'
    });


    // this.storageService.set('maliste',this.userList);
  }
*/
}
