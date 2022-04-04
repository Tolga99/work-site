import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.html',
  styleUrls: ['tabs.scss']
})
export class Tabs {

  public home: string;
  public calendar: string;
  public contacts: string;
  public settings: string;
  public language: string;

  constructor(private _translate: TranslateService
              ,private http: HttpClient) {}
  async ionViewDidEnter(){
  }
}
