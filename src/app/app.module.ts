import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
import { NewContactPageModule } from '../pages/new-contact/new-contact.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsService } from '../services/contacts.service';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { HelpPage } from '../pages/help/help';
import { HelpPageModule } from '../pages/help/help.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: HomePage, name: 'home', segment: ''},
        {component: HelpPage, name: 'help', segment: 'help', defaultHistory: [HomePage]},
        {component: NewContactPage, name: 'contact', segment: 'contact', defaultHistory: [HomePage]}
      ]
    }),
    NewContactPageModule,
    HelpPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    // StatusBar,
    ContactsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
