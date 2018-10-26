# Address Book

Gaming Innovation Group JavaScript Challenge.

By [Yago López Salvador](https://yagolopez.js.org)

## Features

- **Progressive Web Application** with offline capabilities enabled by a service worker. The service worker writes files to the *browser cache storage*. 
  - In Chrome, the cache can be showed at: Menu → More Tools → Developer Tools → Application Tab → Cache → Cache Storage
  - Visit the page and then **reload** it to write the files to the cache. 
  - Add an app icon to desktop/home screen from: Menu → More Tools → Developer Tools → Create Shorcut.
  - Disconnect from network
  - Next time the app should load the files from local cache storage
- FrontEnd Framework: **Ionic v3** (Based in Angular+)
- Responsive Layout
- Material Design
- Persistence in browser using **LocalStorage**
- Use of **LoDash** library for JavaScript collection management
- Supported browsers: Chrome, Firefox, Edge (modern versions).
- **Testing**: Ionci v3 does not provide infrastructure for testing by default (like Angular with Jasmine, Karma and Protractor). So Jest testing framework has been used
- Operations on data are logged to browser console
- Input data **validation**

## Demo

- [Link](https://yagolopez.js.org/gig-address-book/www/)

- QR Code:

  ![QR Code](qrcode.png)


## Requirements

- Node Package Manager (NPM)

## Architecture and Functionality

- When the app is started, contacts collection is loaded in memory from Browser LocalStorage. If LocalStorage is empty, a dummy data is created programatically.
- When the app is running, operations on data are executed in memory
- When the app is closed, the contacts collection is persisted to Browser LocalStorage
- Use of **MVC Pattern** for separation of concerns
- Use of **Repository Pattern** to manage the contact collection using a *Contacts Repositoy Service*
- Use of **Singleton Pattern**. The *Contacts Repository Service* has only an instance in memory to share data between components.
- Use of **Inversion of Control Pattern** for code modularity and decoupling (*[SOLID principles](https://en.wikipedia.org/wiki/SOLID)*). The injection of dependencies is provided as infrastructure by the Angular Framework
- Use of **Component Pattern**. Ionic provides a library of premade UI components
- Use of a **Contact Model** to represent an **entity** from the model domain.

## Scripts

Run In the commnad line in project directory:

- List available scripts `npm run`
- Run Application: `npm run start`
- Test Application: `npm run test`
- Build Application: `npm run build`
- Build Application for Production: `npm run build:prod`
- Lint Application: `npm run lint`
- Run Code Coverage: `npm run coverage:run`
- Show Coverage: `npm run coverage:show`
  - [View coverage](https://yagolopez.js.org/gig-address-book/coverage/lcov-report/)
- Show Application Built in Browser: `npm run show:app`
- Package Analysis: `npm run analyze:packages`

<p align="center"><a href="#">Back to top ↑</a></p>