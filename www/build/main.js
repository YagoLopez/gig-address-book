webpackJsonp([0],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    HelpPage.prototype.onCloseBtn = function () {
        this.navCtrl.pop();
        this.menuCtrl.close();
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\help\help.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid style="height: 100%">\n\n    <ion-row justify-content-center align-items-center style="height: 50%">\n\n      <ion-card>\n\n        <ion-card-header color="primary">\n\n          Information:\n\n        </ion-card-header>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="checkmark-circle-outline" item-start></ion-icon>\n\n            <p class="info-text">\n\n              In mobile screens, when left side menu is hidden, drag from the left\n\n              side border of the screen to open the menu\n\n            </p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-icon name="checkmark-circle-outline" item-start></ion-icon>\n\n            <p class="info-text">Swipe contact to the left to remove it from the list</p>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <button ion-button icon-start (click)="onCloseBtn()">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n        Close\n\n      </button>\n\n    </ion-row>\n\n   </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_action__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__ = __webpack_require__(59);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, contactsService) {
        this.navCtrl = navCtrl;
        this.contactsService = contactsService;
        this.urlAvatar = "assets/imgs/1.png";
        // todo: borrar
        contactsService.loadContactsFromLocalStorage();
        if (contactsService.isEmpty()) {
            contactsService.loadContactsFromMemory();
        }
        contactsService.sortAlphabetically();
        this.contacts = this.contactsService.getAll();
        this.contactsService.logToConsole();
    }
    Object.defineProperty(HomePage.prototype, "contacts", {
        get: function () {
            return this._contacts;
        },
        set: function (contacts) {
            this._contacts = contacts;
        },
        enumerable: true,
        configurable: true
    });
    ;
    HomePage.prototype.onViewContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */], __assign({}, contact, { action: __WEBPACK_IMPORTED_MODULE_3__models_action__["a" /* Action */].UPDATE }));
    };
    HomePage.prototype.onNewContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */], { action: __WEBPACK_IMPORTED_MODULE_3__models_action__["a" /* Action */].CREATE });
    };
    HomePage.prototype.onRemoveContact = function (id, slidingContact) {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(id);
            return;
        }
        else {
            slidingContact.close();
        }
    };
    HomePage.prototype.onRemoveAll = function () {
        if (window.confirm('Confirm remove all contacts')) {
            this.contactsService.removeAll();
        }
    };
    HomePage.prototype.isContactListEmpty = function () {
        return this.contactsService.isEmpty();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.contacts = this.contactsService.getAll();
    };
    HomePage.prototype.filterContacts = function ($event) {
        // Reset items back to all of the items
        this.contacts = this.contactsService.getAll();
        // set val to the value of the searchbar
        var val = $event.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contacts = this.contacts.filter(function (contact) {
                return ((contact.firstName + ' ' + contact.lastName).toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Address Book</ion-title>\n\n    <ion-buttons end *ngIf="!isContactListEmpty()">\n\n      <button ion-button icon-only (click)="onRemoveAll()" title="Remove All Contacts">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="fade-in-long">\n\n\n\n  <ion-searchbar (ionInput)="filterContacts($event)" padding></ion-searchbar>\n\n\n\n  <ion-list inset *ngIf="contacts.length > 0">\n\n    <ion-item-sliding *ngFor="let contact of contacts" #slidingContact>\n\n      <button ion-item (click)="onViewContact(contact)" title="View Contact" class="item-hover">\n\n        <ion-avatar item-start>\n\n          <img [src]="urlAvatar" alt="">\n\n        </ion-avatar>\n\n        <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>\n\n        <p>{{ contact.email }}</p>\n\n        <button ion-button clear item-end>\n\n          <ion-icon name="play"></ion-icon>\n\n        </button>\n\n      </button>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="onRemoveContact(contact.id, slidingContact)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <div *ngIf="contacts.length < 1" class="centered-in-page">\n\n    <img src="assets/imgs/contacts-ios-grey.svg" class="logo-emtpy-list"/>\n\n    <div class="text-empty-list">Address Book is empty</div>\n\n  </div>\n\n\n\n  <ion-fab right bottom class="fab-position">\n\n    <button ion-fab color="primary" (click)="onNewContact()" title="New Contact">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactsService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action["CREATE"] = "CREATE";
    Action["READ"] = "READ";
    Action["UPDATE"] = "UPDATE";
    Action["DELETE"] = "DELETE";
})(Action || (Action = {}));
//# sourceMappingURL=action.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_new_contact_new_contact_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_contacts_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_contact_new_contact__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help_module__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], name: 'home', segment: '' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */], name: 'help', segment: 'help', defaultHistory: [__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_new_contact_new_contact__["a" /* NewContactPage */], name: 'contact', segment: 'contact', defaultHistory: [__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__pages_new_contact_new_contact_module__["a" /* NewContactPageModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_help_help_module__["a" /* HelpPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_contacts_service__["a" /* ContactsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_contact__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewContactPageModule = /** @class */ (function () {
    function NewContactPageModule() {
    }
    NewContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__new_contact__["a" /* NewContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__new_contact__["a" /* NewContactPage */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */]
            ],
        })
    ], NewContactPageModule);
    return NewContactPageModule;
}());

//# sourceMappingURL=new-contact.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_contact_new_contact__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_action__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_help_help__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    // tslint:disable-next-line
    function MyApp(contactsService, menuCtrl, platform) {
        this.contactsService = contactsService;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        /**
         * Just before unload the app, save the in-memory contact list to Local Storage
         */
        window.addEventListener('beforeunload', function () {
            contactsService.saveAll();
        });
        this.devWidth = this.platform.width();
    }
    MyApp.prototype.onNewContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_contact_new_contact__["a" /* NewContactPage */], { action: __WEBPACK_IMPORTED_MODULE_5__models_action__["a" /* Action */].CREATE });
        this.menuCtrl.close();
    };
    MyApp.prototype.onHelp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_help_help__["a" /* HelpPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.ngDoCheck = function () {
        this.devWidth = this.platform.width();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yagol\Documents\projects\gig-address-book\src\app\app.html"*/'<ion-split-pane>\n\n\n\n  <!--  left side menu  -->\n\n  <ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="dark">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-list id="left-side-menu" style="color: lightgrey">\n\n      <button ion-item (click)="onNewContact()">\n\n        <ion-icon name="contacts"></ion-icon>\n\n        New Contact\n\n      </button>\n\n      <button ion-item (click)="onHelp()">\n\n        <ion-icon name="help-circle"></ion-icon>\n\n        Help\n\n      </button>\n\n      <div text-center padding [hidden]="devWidth > 760">\n\n        <button menuToggle ion-button icon-start detail-none clear>\n\n          <ion-icon name="close-circle"></ion-icon>\n\n          Close\n\n        </button>\n\n      </div>\n\n    </ion-list>\n\n  </ion-menu>\n\n  <!--/left-side-menu-->\n\n\n\n  <!-- main content -->\n\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n\n  <!--/main-content-->\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\yagol\Documents\projects\gig-address-book\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewContactPage = /** @class */ (function () {
    function NewContactPage(navCtrl, navParams, contactsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.MIN_LENGTH = 4;
        this.countries = ['Spain', 'France', 'Germany', 'Italy', 'USA'];
        this.idControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ disabled: true });
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(this.MIN_LENGTH)
        ]);
        this.lastNameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(this.MIN_LENGTH)
        ]);
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email
        ]);
        this.countryControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
        ]);
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            id: this.idControl,
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            country: this.countryControl
        });
        var contactData = this.navParams.data;
        this.action = contactData.action;
        if (this.action === 'UPDATE') {
            this.action = contactData.action;
            this.idControl.setValue(contactData.id);
            this.firstNameControl.setValue(contactData.firstName);
            this.lastNameControl.setValue(contactData.lastName);
            this.emailControl.setValue(contactData.email);
            this.countryControl.setValue(contactData.country);
        }
    }
    NewContactPage.prototype.onSaveContact = function () {
        if (this.contactForm.valid) {
            if (this.action === 'CREATE') {
                this.contactsService.add(this.contactForm.value);
                this.goToPreviousPage();
            }
            if (this.action === 'UPDATE') {
                if (this.contactsService.update(this.contactForm.value)) {
                    this.goToPreviousPage();
                }
            }
        }
        else {
            console.log('Invalid Form');
        }
    };
    NewContactPage.prototype.onRemoveContact = function () {
        if (window.confirm('Confirm Delete Contact')) {
            this.contactsService.remove(this.contactForm.value.id);
            this.goToPreviousPage();
        }
    };
    NewContactPage.prototype.onCancelBtn = function () {
        this.goToPreviousPage();
    };
    NewContactPage.prototype.goToPreviousPage = function () {
        this.navCtrl.pop();
    };
    NewContactPage.prototype.ionViewWillEnter = function () {
        this.firstNameControl.setErrors(null);
        this.lastNameControl.setErrors(null);
        this.emailControl.setErrors(null);
    };
    NewContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-contact',template:/*ion-inline-start:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\new-contact\new-contact.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title *ngIf="action === \'CREATE\'">New Contact</ion-title>\n\n    <ion-title *ngIf="action === \'UPDATE\'">Contact</ion-title>\n\n    <ion-buttons end *ngIf="action === \'UPDATE\'">\n\n      <button ion-button icon-only (click)="onRemoveContact()" title="Remove Contact">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="contactForm">\n\n\n\n    <ion-list>\n\n      <!--id control-->\n\n      <ion-item *ngIf="action === \'UPDATE\'">\n\n        <ion-label>Id:</ion-label>\n\n        <ion-input type="text" formControlName="id" disabled></ion-input>\n\n      </ion-item>\n\n\n\n      <!--firstName control-->\n\n      <ion-item>\n\n        <ion-label floating>First Name</ion-label>\n\n        <ion-input type="text" formControlName="firstName" clearInput></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="firstNameControl.hasError(\'required\')" class="error">\n\n        ⛔ Required field\n\n      </p>\n\n      <p *ngIf="firstNameControl.hasError(\'minlength\')" class="error">\n\n        ⛔ Minimum length is {{ MIN_LENGTH }}\n\n      </p>\n\n\n\n      <!--lastName control-->\n\n      <ion-item>\n\n        <ion-label floating>Last Name</ion-label>\n\n        <ion-input type="text" formControlName="lastName" clearInput></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="lastNameControl.hasError(\'required\')" class="error">\n\n        ⛔ Required field\n\n      </p>\n\n      <p *ngIf="lastNameControl.hasError(\'minlength\')" class="error">\n\n        ⛔ Minimum length is {{ MIN_LENGTH }}\n\n      </p>\n\n\n\n      <!--email control-->\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email" formControlName="email" clearInput></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="emailControl.hasError(\'required\')" class="error">\n\n        ⛔ Required field\n\n      </p>\n\n      <p *ngIf="emailControl.hasError(\'email\')" class="error">\n\n        ⛔ Invalid Email\n\n      </p>\n\n\n\n      <!--select country control-->\n\n      <ion-item id="select-country">\n\n        <ion-label>Country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option *ngFor="let country of countries"\n\n                      [value]="country">{{ country }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <!--/select country control-->\n\n\n\n    </ion-list>\n\n\n\n    <!--buttons-->\n\n    <div text-center padding>\n\n      <button ion-button icon-start (click)="onSaveContact()" [disabled]="!contactForm.valid">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n        Submit\n\n      </button>\n\n      <button ion-button icon-start\n\n              (click)="onCancelBtn()" class="fondo-naranja">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n        Cancel\n\n      </button>\n\n    </div>\n\n    <!--/buttons-->\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yagol\Documents\projects\gig-address-book\src\pages\new-contact\new-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__["a" /* ContactsService */]])
    ], NewContactPage);
    return NewContactPage;
}());

//# sourceMappingURL=new-contact.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
// todo: repasar README.md
// todo: cambiar nombre new-contact pagina
// todo: usar libreria para countries
// todo: e2e testing
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// Jest testing framework needs to use "require()" to load "lodash" library instead of es6 imports
// @ts-ignore
var sortBy = __webpack_require__(300);
// @ts-ignore
var remove = __webpack_require__(397);
// @ts-ignore
var findIndex = __webpack_require__(403);
// @ts-ignore
var isEqual = __webpack_require__(408);
/**
 * Contacts Service implements the Repository Pattern for Contact model domain (aka entity)
 */
var ContactsService = /** @class */ (function () {
    function ContactsService() {
        /**
         * Check if localStorage is available in browser
         * Local storage is needed to persist contact list
         */
        this.isLocalStorageAvailable = function () {
            var test = 'test';
            try {
                localStorage.setItem(test, 'test');
                localStorage.removeItem(test);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        if (!this.isLocalStorageAvailable()) {
            var msg = 'Local Storage not availalble in browser';
            window.alert(msg);
            throw new Error(msg);
        }
    }
    /**
     * Creates the contact list in memory for testing purposes
     */
    ContactsService.prototype.loadContactsFromMemory = function () {
        this.contacts = [
            { id: 1, firstName: 'Cfirstname1', lastName: 'Lastname1', email: 'email1@domain.com', country: 'Spain' },
            { id: 2, firstName: 'Dfirstname2', lastName: 'Lastname2', email: 'email2@domain.com', country: 'France' },
            { id: 3, firstName: 'Afirstname3', lastName: 'Lastname3', email: 'email3@domain.com', country: 'Germany' },
            { id: 4, firstName: 'Bfirstname4', lastName: 'Lastname4', email: 'email4@domain.com', country: 'USA' }
        ];
    };
    /**
     * Loads the contact list from Local Storage
     */
    ContactsService.prototype.loadContactsFromLocalStorage = function () {
        this.contacts = JSON.parse(localStorage.getItem('contacts'));
        this.sortAlphabetically();
    };
    ContactsService.prototype.getAll = function () {
        return this.contacts;
    };
    ContactsService.prototype.sortAlphabetically = function () {
        this.contacts = sortBy(this.contacts, ['firstName', 'lastName']);
    };
    ContactsService.prototype.add = function (contact) {
        contact = __assign({}, contact, { id: ContactsService.generateId(), firstName: ContactsService.capitalizeFirstLetter(contact.firstName), lastName: ContactsService.capitalizeFirstLetter(contact.lastName) });
        this.contacts = this.contacts.concat([contact]);
        this.sortAlphabetically();
        this.logToConsole();
    };
    ContactsService.prototype.remove = function (id) {
        try {
            remove(this.contacts, { id: id });
        }
        catch (error) {
            throw error;
        }
        this.logToConsole();
    };
    ContactsService.prototype.update = function (contact) {
        var oldContactIndex = findIndex(this.contacts, { id: contact.id });
        var oldContact = this.contacts[oldContactIndex];
        if (isEqual(oldContact, contact)) {
            window.alert('Data has not changed');
            return false;
        }
        else {
            oldContact.firstName = ContactsService.capitalizeFirstLetter(contact.firstName);
            oldContact.lastName = ContactsService.capitalizeFirstLetter(contact.lastName);
            oldContact.email = contact.email;
            oldContact.country = contact.country;
            this.sortAlphabetically();
            this.logToConsole();
            return true;
        }
    };
    /**
     * Save all contacts to localStorage
     */
    ContactsService.prototype.saveAll = function () {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        try {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * Remove all contacts from localStorage
     */
    ContactsService.prototype.removeAll = function () {
        try {
            this.contacts.length = 0;
            localStorage.clear();
        }
        catch (error) {
            throw error;
        }
        this.logToConsole();
    };
    ContactsService.prototype.isEmpty = function () {
        return this.contacts.length == 0;
    };
    ContactsService.capitalizeFirstLetter = function (text) {
        return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
    };
    ContactsService.prototype.logToConsole = function () {
        console.log('✍ Contact List Log');
        console.table(this.getAll());
    };
    ContactsService.generateId = function () {
        return Math.random().toString(36).substr(2, 8);
    };
    return ContactsService;
}());

//# sourceMappingURL=contacts.service.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map