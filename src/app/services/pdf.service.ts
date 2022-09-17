import { Injectable } from '@angular/core';
import { Directory, Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import jsPDF from 'jspdf';
import { Chantier } from '../models/chantier';
import { Facture } from '../models/facture';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { ToastController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Capacitor } from '@capacitor/core';
import * as saveAs from 'file-saver';
import * as fs from "file-system";
import * as FileSaver from 'file-saver';
import { DocumentViewer,DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import {File} from '@ionic-native/file';
import {FileOpener} from "@ionic-native/file-opener";
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  readonly isApp = Capacitor.getPlatform() !== 'web';

  constructor(private storageService : StorageService, private toastController: ToastController,
    private localNotifications : LocalNotifications, private translateService : TranslateService,
    private documentViewer : DocumentViewer) { 
      this.documentViewer = new DocumentViewer();
    }
  async GeneratePDFInvoice(chantier : Chantier | undefined, f : Facture)
  {
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
        articleRows.push([element.product.productName,element.product.description,1,element.product.priceHtva,element.product.priceHtva]);
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
      y+=15;
    }

    (doc as any).autoTable(tableColumns, articleRows, { startY: 60 });
    y+=5;

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
      doc.text('TOTAL HTVA : '+Math.round((f.priceHtva) * 100) / 100+'€', 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('Remise '+f.remise+'% : '+ Math.round((f.priceHtva-htva) * 100) / 100+'€', 150, y);
      y+=6;

      doc.setFillColor('A0A0A0');
      doc.rect(150,y-5,55,5.5,'F');
      doc.setTextColor('FFFFFF');
      doc.text('TVA '+f.tva+'% : '+totalTva+'€', 150, y);
      y+=6;
    }

    doc.setFillColor('3333FF');
    doc.rect(150,y-5,55,5.5,'F');
    doc.setTextColor('FFFFFF');
    doc.text('Total TTC : '+f.totalPrice+'€', 150, y);
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
    var fileNameText = f.factureName + '.pdf ' + this.translateService.instant('fileGenerated');
    var reader = new FileReader();
    // var out = new Blob([blob], {type: 'application/pdf'});
    var out = new Blob([blob], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    const options: DocumentViewerOptions = {
      title: f.factureName + '.pdf '
    }
    this.downloadPdf(doc.output(),f.factureName + '.pdf ');
    // this.documentViewer.viewDocument(doc.output(),'application/vnd.openxmlformats-officedocument.wordprocessingml.document',options);
    // Filesystem.getUri({
    //   directory : FilesystemDirectory.Data,
    //   path: path
    // }).then((getUriResult) => {
    //   const path = getUriResult.uri;
    //   this.fileOpener.open(path,'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    // }, (error) => { console.log(error);
    // });
    console.log('is App : ',this.isApp);
    // if(this.isApp === false)
    //   FileSaver.saveAs(out,f.factureName + '.pdf ');
    // if (this.isApp)
    //   this.writeAndOpenFile(out,f.factureName + '.pdf ');
    // else
    //   saveAs(out, f.factureName + '.pdf ');

    // this.downloadAndOpenPDF(f.factureName + '.pdf ');
    //this.downloadPDF(blob,f.factureName+'.pdf');
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    // {
    //   try {
    //     Filesystem.writeFile({
    //       path: f.factureName+'.pdf',
    //       data: doc.output('datauristring'),
    //       directory: Directory.Documents
    //     });
    //     doc.output('datauri');
    //     this.presentToast(fileNameText);
    //     this.localNotifications.schedule({
    //       id: 1,
    //       text: fileNameText,
    //       // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    //       data: { secret: 'a' }
    //     });
    //   } catch (e) {
    //     console.error("Unable to write file", e);
    //   }    
    // }
    // else
    // {
    //   console.log('PC');
    //   doc.save(f.factureName+'.pdf');
    //   doc.output('dataurlnewwindow');     //opens the data uri in new window
    //   this.presentToast(fileNameText);
    //   this.localNotifications.schedule({
    //     id: 1,
    //     text: fileNameText,
    //     // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    //     data: { secret: 'a' }
    //   });
    // }
//     window.open(URL.createObjectURL(blob));

// function writeFile(fileEntry, dataObj) {
//   return $q(function (resolve, reject) {
//       fileEntry.createWriter(function (fileWriter) {
//           fileWriter.onwriteend = function () {
//               resolve();
//           };
//           fileWriter.onerror = function (e) {
//               reject(e);
//           };
//           fileWriter.write(dataObj);
//       });
//   });
// }

// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs)
// {


   // doc.save('exempleFacture.pdf');
  
    // var rawdata = doc.output();

    // var len = rawdata.length,
    // ab = new ArrayBuffer(len),
    // u8 = new Uint8Array(ab);

    // while(len--) u8[len] = rawdata.charCodeAt(len);

    // var blob = new Blob([ab], { type : "application/pdf" });


    // // var iframe = document.getElementById('outputPDFnormale');
    // // iframe.style.width = '60%';
    // // iframe.style.height = '650px';
    // // //iframe.src = URL.createObjectURL(blob)

    // // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, 'Ordini.pdf');
  }
  async presentToast(text : string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
downloadPdf(output : string, fileName : string)
{
  if (this.isApp === false) {
    const url = window.URL.createObjectURL(
      new Blob([output])
    );
    const link = window.document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    window.document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    return File.writeFile(
      File.externalRootDirectory + "/Download",
      fileName,
      new Blob([output]),
      {
        replace: true,
      }
    );
  }
  return FileOpener.open(File.externalRootDirectory + "/Download/" + fileName,"application/pdf");
}

}

