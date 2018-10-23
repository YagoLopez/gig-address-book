# Address Book

Gaming Innovation Group JavaScript Challenge.

By [Yago López Salvador](https://yagolopez.js.org)

## Features

- **Progressive Web Application**, with offline capabilities enabled by a service worker
- FrontEnd Framework: **Ionic v3** (Based in Angular)
- Responsive Layout
- Material Design
- Persistence in browser using **LocalStorage**
- **LoDash** as utility for JavaScript collection management
- Supported browsers: Chrome, Firefox, Edge, modern versions.
- **Testing**: Ionci v3 does not provide infrastructure for testing like Angular (with Jasmine, Karma and Protractor). So Jest testing framework has been used
- Operations are logged to browser console

## Architecture and functionality

- When the app is started, contacts collection is loaded in memory from Browser LocalStorage
- When the app is running, operations on data are executed in memory
- When the app is closed, contacts collections is persisted to Browser LocalStorage
- Use of **Repository Pattern** to manage the contacts collection in a *Contacts Repositoy Service*
- Use of **Singleton Pattern**. The *Contacts Repository Service* has only an instance in memory to share data between components. This is an Angular good practice.
- Use of a Contact **Model** to represent an **entity** from the domain.

