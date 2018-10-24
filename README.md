# Address Book

Gaming Innovation Group JavaScript Challenge.

By [Yago López Salvador](https://yagolopez.js.org)

## Features

- **Progressive Web Application** (offline capabilities enabled by a service worker). Service worker writes files to the *browser cache storage*. 
  - It can be showed at: Menu → More Tools → Developer Tools → Application Tab → Cache → Cache Storage
  - The first time the app is loaded, the files are written to cache. Add an app icon to desktop/home screen from: Menu → More Tools → Developer Tools → Create Shorcut. (If the app is run locally reload the page to be sure all files are written to cache)
  - Disconnect from network
  - The second time the app loads files from local cache storage
- FrontEnd Framework: **Ionic v3** (Based in Angular+)
- Responsive Layout
- Material Design
- Persistence in browser using **LocalStorage**
- Use of **LoDash** library for JavaScript collection management
- Supported browsers: Chrome, Firefox, Edge (modern versions).
- **Testing**: Ionci v3 does not provide infrastructure for testing by default (like Angular with Jasmine, Karma and Protractor). So Jest testing framework has been used
- Operations on data are logged to browser console

## Demo

- [Link](https://yagolopez.js.org/gig-address-book/www/)


## Requirements

- Node Package Manager (NPM)

## Architecture and Functionality

- When the app is started, contacts collection is loaded in memory from Browser LocalStorage. If LocalStorage is empty, a dummy data is created programatically.
- When the app is running, operations on data are executed in memory
- When the app is closed, the contacts collection is persisted to Browser LocalStorage
- Use of **Repository Pattern** to manage the contacts collection using a *Contacts Repositoy Service*
- Use of **Singleton Pattern**. The *Contacts Repository Service* has only an instance in memory to share data between components.
- Use of **Inversion of Control Pattern** for code modularity and decoupling (*SOLID principles*). The injection of dependencies is provided as infrastructure by the Angular Framework
- Use of **Component Pattern**. Ionic provides a library of premade UI components
- Use of a **Contact Model** to represent an **entity** from the model domain.

## Scripts

Run In the commnad line:

- List available scripts `npm run`
- Run Application: `npm run start`
- Test Application: `npm run test`
- Build Application: `npm run build`
- Build Application for Production: `npm run build:prod`
- Lint Application: `npm run lint`
- Run Code Coverage: `npm run coverage:run`
- Show Coverage: `npm run coverage:show`
  - [View coverage](https://yagolopez.js.org/gig-address-book/coverage/lcov-report/)
- Show Application in Browser: `npm run show:app`