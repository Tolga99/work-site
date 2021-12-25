<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './services/storage.service';
=======
import { Component } from '@angular/core';
>>>>>>> c14df98cb1b37bb6ab2332b9593882d8a6d7384b

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  userList : User[] = [];

  constructor(private storageService:StorageService) 
  {
  }
  async ngOnInit() {
await this.storageService.init();
     
    this.userList.push({
      userId:1,
      name :'Ercan'
    });
    
    this.userList.push({
      userId:2,
      name :'Tolga'
    });


    // this.storageService.set('maliste',this.userList);
  }

=======
export class AppComponent {
  constructor() {}
>>>>>>> c14df98cb1b37bb6ab2332b9593882d8a6d7384b
}
