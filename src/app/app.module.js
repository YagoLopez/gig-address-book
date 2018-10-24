var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NewContactPageModule } from '../pages/new-contact/new-contact.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsService } from '../services/contacts.service';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { HelpPage } from '../pages/help/help';
import { HelpPageModule } from '../pages/help/help.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp, {}, {
                    links: [
                        { component: HomePage, name: 'home', segment: '' },
                        { component: HelpPage, name: 'help', segment: 'help', defaultHistory: [HomePage] },
                        { component: NewContactPage, name: 'contact', segment: 'contact', defaultHistory: [HomePage] }
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
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map