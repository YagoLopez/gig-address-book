import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NewContactPageModule } from '../pages/contact/contact.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsService } from '../services/contacts.service';
import { ContactPage } from '../pages/contact/contact';
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
        {component: ContactPage, name: 'contact', segment: 'contact', defaultHistory: [HomePage]}
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
    ContactsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
