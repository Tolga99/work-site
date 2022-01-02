import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ArticlesPipe } from './articles.pipe';

@NgModule({
  declarations: [AppComponent, ArticlesPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), BrowserAnimationsModule, AppRoutingModule,
    IonicStorageModule.forRoot(), CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
