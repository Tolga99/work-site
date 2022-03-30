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
    console.log('view did enter');
    this.getDeviceLanguage();
  }
  _initialiseTranslation(): void {
    this._translate.get('home').subscribe((res: string) => {
      this.home = res;
    });
    this._translate.get('calendar').subscribe((res: string) => {
      this.calendar = res;
    });
    this._translate.get('contacts').subscribe((res: string) => {
      this.contacts = res;
    });
    this._translate.get('settings').subscribe((res: string) => {
      this.settings = res;
    });
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  _translateLanguage(): void {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate(language) {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');
    if (language) {
      this.language = language;
    }
    else {
      // Set your language here
      this.language = 'en';
    }
    this._translateLanguage();
  }

  getDeviceLanguage() {
    if (window.Intl && typeof window.Intl === 'object') {
      this._initTranslate(navigator.language)
    }
  }
}
