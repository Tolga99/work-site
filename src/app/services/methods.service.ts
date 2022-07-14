import { Injectable } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import jsPDF from 'jspdf';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { ToastController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor() { }
    isNullOrEmpty(text : string) {
    if(text === '' || text === null || text === undefined)
        return true;
    else return false;
  }
  equals(text1 : string, text2 : string) {
    console.log(text1,text2);
    if(text1 === '' || text1 === null || text1 === undefined)
    {
        if(text2 === '' || text2 === null || text2 === undefined)
        {
            return true;
        }
    }else
    {
        if(text1 === text2)
        {
            return true;
        }
    }
    return false;
  }
}

