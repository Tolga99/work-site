import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======

>>>>>>> c14df98cb1b37bb6ab2332b9593882d8a6d7384b
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage-angular';
=======
>>>>>>> c14df98cb1b37bb6ab2332b9593882d8a6d7384b

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(),BrowserAnimationsModule, AppRoutingModule,
    IonicStorageModule.forRoot()],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
>>>>>>> c14df98cb1b37bb6ab2332b9593882d8a6d7384b
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
