var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ContactsService } from '../services/contacts.service';
import { HomePage } from '../pages/home/home';
import { MenuController, NavController } from 'ionic-angular';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { Action } from '../models/action';
import { HelpPage } from '../pages/help/help';
var MyApp = /** @class */ (function () {
    // tslint:disable-next-line
    function MyApp(contactsService, menuCtrl, platform) {
        this.contactsService = contactsService;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.rootPage = HomePage;
        /**
         * Just before unload the app, save the in-memory contact list to Local Storage
         */
        window.addEventListener('beforeunload', function () {
            contactsService.saveAll();
        });
        this.devWidth = this.platform.width();
    }
    MyApp.prototype.onNewContact = function () {
        this.navCtrl.push(NewContactPage, { action: Action.CREATE });
        this.menuCtrl.close();
    };
    MyApp.prototype.onHelp = function () {
        this.navCtrl.push(HelpPage);
        this.menuCtrl.close();
    };
    MyApp.prototype.ngDoCheck = function () {
        this.devWidth = this.platform.width();
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", NavController)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [ContactsService,
            MenuController,
            Platform])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map