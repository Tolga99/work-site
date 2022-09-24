import { Injectable, NgZone } from '@angular/core';
import { Directory, Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import jsPDF from 'jspdf';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { getPlatforms, Platform, ToastController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Capacitor } from '@capacitor/core';
import * as saveAs from 'file-saver';
import * as fs from "file-system";
import * as FileSaver from 'file-saver';
import { DocumentViewer,DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { throws } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  readonly isApp = Capacitor.getPlatform() !== 'web';
  constructor(private storageService : StorageService, private toastController: ToastController,
    private localNotifications : LocalNotifications, private translateService : TranslateService,
    private fileOpener: FileOpener, private file: File) { }
  async GeneratePDFInvoice(chantier : Chantier | undefined, f : Facture)
  {
    let devise : string = await this.storageService.get('devise');
    if(devise == undefined || devise == null)
      devise = '€';
    const profile : User =await this.storageService.get('MyProfile');
    const clientlist : Array<User> = await this.storageService.get('Contacts');
    var client : User | undefined;
    if(chantier == null)
    {
        client = null;
    }else client = clientlist.find(a => a.userId === chantier.clientId);
    let y = 0;
    const doc = new jsPDF();
    doc.setFontSize(18);
    if(f.type==='facture')
      doc.text('Facture', 90, 8);
    else if(f.type==='devis')
      doc.text('Devis', 90, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    if(profile !== null)
    {
      doc.text(profile.firstName+'\n'+profile.lastName.toUpperCase()+'\n'+profile.address, 14, 15);
    }else doc.text(''+'\n'+''+'\n'+'', 14, 15);
    if(client !== null)
    {
      doc.text(client.firstName+'\n'+client.lastName.toUpperCase()+'\n'+client.address+'\n'+client.phone, 150, 30);
    }else doc.text(''+'\n'+''+'\n'+'', 14, 15);

    doc.text('N° facture : '+f.factureName, 15, 50);
    doc.text('Date : '+f.date, 15, 55);
    y=60;

    let tableColumns;
    let articleRows;
    if(f.mode==='creation')
    {
      tableColumns = ['Nom article','Description','Quantité', 'Prix unitaire', 'Prix total'];
      // articleRows :[[string,string,number,number,number]];
      articleRows = [[,,,,,]];
      articleRows.splice(0,1);
      f.cart.forEach(element => {
        articleRows.push([element.product.productName,element.product.description,element.quantity,element.product.priceHtva +devise,(element.product.priceHtva * element.quantity)+devise]);
        y+=10;
      });
    }else
    {
      tableColumns = ['Description','Prix total'];
      // articleRows :[[string,number]];
      articleRows = [[,,]];
      articleRows.splice(0,1);
      articleRows.push([f.description,f.totalPrice]);
      var string = f.description;
      if(string.match(/\n/gi))
      {
        console.log(string.match(/\n/gi).length);
        y += string.match(/a/gi).length*5;
      }
      y+=14;
    }

    (doc as any).autoTable(tableColumns, articleRows, { startY: 60 });
    y+=8;

    let total=0;
    let totalTva = 0;
    const remise : string =f.remise.toString();
    let htva :number =f.priceHtva;
    const tva:string =f.tva.toString();

    if(Number.parseFloat(remise) !== 0)
    {
      htva = htva * (1 - Number.parseFloat(remise) / 100);
      htva = Math.round(htva * 100) / 100; // REMISE arrondi

    }
    totalTva = htva / 100 * Number.parseFloat(tva);
    totalTva = Math.round(totalTva * 100) / 100; // TVA arrondi

    total= Number.parseFloat(htva.toString()) + totalTva;
    total = Math.round(total * 100) / 100; // arrondi

    console.log('Tva : ',tva);
    console.log('TTva : ',totalTva);
    console.log('htva : ',htva);




    if(f.mode==='creation')
    {
      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('Total HTVA : '+Math.round((f.priceHtva) * 100) / 100+devise, 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('Remise '+f.remise+'% : '+ Math.round((f.priceHtva-htva) * 100) / 100+devise, 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('TVA '+f.tva+'% : '+totalTva+devise, 150, y);
      y+=6;
    }

    doc.setFillColor('3333FF');
    doc.rect(150,y-5,55,5.5,'F');
    doc.setTextColor('FFFFFF');
    doc.text('Total TTC : '+f.totalPrice+devise, 150, y);
    y+=6;

    doc.setTextColor('000000');
    if(f.typePay==='bancaire')
      doc.text('Condition de réglement : Virement bancaire',25,y);
    else doc.text('Condition de réglement : Paiement cash',25,y);
    y+=6;
    doc.text('Echéance de paiement : LES FACTURES SONT PAYABLES A LA RECEPTION.',25,y);
    y+=6;

    doc.text('Tout retard de paiement à compter de 10 jours après la date de réception',25,y);
    y+=6;
    doc.text('de la facture fera l\'objet d\'une facturation d\'intérêts de retard au taux légal envigueur',25,y);
    y+=6;

    y+=10;
    doc.text('Coordonnées bancaires :',80,y);
    y+=6;
    if(profile !== null)
    {
      doc.text('Titulaire du compte : '+profile.firstName+' '+profile.lastName.toUpperCase(),80,y);
      y+=6;
      if(profile.iban == null || profile.iban == null)
      {
        doc.text('IBAN : ' + '',80,y);
      }else
      {
        doc.text('IBAN : ' + profile.iban.toString(),80,y);
      }
    }else 
    {
      doc.text('Titulaire du compte : ',80,y);
      y+=6;
      doc.text('IBAN : ',80,y);
    }
    y+=6;

    y+=10;
    doc.text('Signature du vendeur', 8, y);
    doc.text('Signature de l\'acheteur', 140, y);
    y+=6;
    var blob = doc.output('blob');
    doc.output()
    var fileNameText = f.factureName + '.pdf ' + this.translateService.instant('fileGenerated');
    var reader = new FileReader();
    // var out = new Blob([blob], {type: 'application/pdf'});
    var out = new Blob([blob], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    console.log(this.isApp);
    if(this.isApp)
      this.createPdf(doc.output(),f.factureName + '.pdf ');
    else saveAs(doc.output('blob'), f.factureName + '.pdf ');
  }
  async blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  async presentToast(text : string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

createPdf(docRes : string, fileName : string) {
  const pdfBlock = document.getElementById("print-wrapper");

  let buffer = new ArrayBuffer(docRes.length);
  let array = new Uint8Array(buffer);
  for (var i = 0; i < docRes.length; i++) {
      array[i] = docRes.charCodeAt(i);
  }

    const directory = this.file.dataDirectory;
    let options: IWriteOptions = { 
      replace: true 
    };

    this.file.checkFile(directory, fileName).then((res)=> {
      this.file.writeFile(directory, fileName,buffer, options)
      .then((res)=> {
        console.log("File generated" + JSON.stringify(res));
        this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
          .then(() => console.log('File is exported'))
          .catch(e => console.log(e));
      }).catch((error)=> {
        console.log(JSON.stringify(error));
      });
    }).catch((error)=> {
      this.file.writeFile(directory,fileName,buffer).then((res)=> {
        console.log("File generated" + JSON.stringify(res));
        this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
          .then(() => console.log('File exported'))
          .catch(e => console.log(e));
      })
      .catch((error)=> {
        console.log(JSON.stringify(error));
      });
    });
}
}


