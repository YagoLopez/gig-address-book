# Address Book

Gaming Innovation Group JavaScript Challenge.

By [Yago López Salvador](https://yagolopez.js.org)

## Features

- **Progressive Web Application**, with offline capabilities enabled by a service worker
- FrontEnd Framework: **Ionic v3** (Based in Angular)
- Pages are **lazy-loaded** using **code-splitting**
- Responsive Layout
- Material Design
- Persistence in browser using **LocalStorage**
- **LoDash** as utility for JavaScript collection management
- Supported browsers: Chrome, Firefox, Edge, modern versions.
- **Testing**: Ionci v3 does not provide infrastructure for testing like Angular with Jasmine, Karma and Protractor. So Jest testing framework has been added

## Architecture

- Contacts collection is loaded from Browser LocalStorage when app is initialized
- Contacts collections is persisted to Browser LocalStorage when app is closed
- Operations on data are executed with data loaded in memory
- Use of Repository Pattern to manage contacts collection in a Repositoy Service
- Use of Singleton Pattern. The Repository Service can have only an instance in memory to share data between components. This is an Angular good practice to share data.
- Use of a Contact Model to represent an entity from the domain.