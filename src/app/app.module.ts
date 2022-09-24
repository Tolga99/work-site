import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { File } from '@awesome-cordova-plugins/file/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PhotoService } from './services/photo.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/environment.prod';
import { AuthService } from './shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicSelectableModule } from 'ionic-selectable';
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
//   }
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        IonicSelectableModule,
        FontAwesomeModule,
        NgbModule,
        NgxPayPalModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            defaultLanguage: 'fr',
        }),
        IonicModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule, HttpClientModule,
        IonicStorageModule.forRoot(), CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }), ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })],
    providers: [ImagePicker, Camera, AppRate,FileOpener,File, AppVersion, HttpClientModule,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StorageService, File, LocalNotifications, PhotoService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http : HttpClient): TranslateHttpLoader 
{
  return new TranslateHttpLoader(http);
}