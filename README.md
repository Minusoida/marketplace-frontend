# NatureFT 
[![Deploy to Heroku](https://github.com/Minusoida/natureft-frontend/actions/workflows/angular.yml/badge.svg)](https://github.com/Minusoida/natureft-frontend/actions/workflows/angular.yml)

![logo](src/assets/images/logo.png)


Own chunks of virtual Slovenian natural landmarks and support organizations that look after the real ones.

Team members: Luka Žontar, Jakob Maležič, Matic Bregar, Anže Habjan

## Idea

With the rise of cryptocurrencies non-fungible tokens (short NFT) are gaining popularity. Although, they are mostly used for transactions,
a new use case is recently becoming more and more popular. That use case are digital assets. The most famous are probably NBA, which sells
events that happened in their games and Twitter, which uses NFT for selling tweets. These can then be traded between different users.
That's how we've gotten an idea, to help charity companies by using NFTs. We created a web application, where a user can donate to charity
with NFTs and also get something in return.

Our application currently focuses in donating to companies in Slovenia that are responsible for large nature environments, like caves, forests,
national parks etc. We split such environments into smaller blocks which users can virtually buy with NFTs. The money made from these 
transactions is then donated to companies that take care of a given environment. This way, the users get virtual assets, which he can
later sell, for potentially higher value, while also doing something for a good cause.


## Technologies

We created our web application using Angular framework. It contains basic functionalities for buying assets. The app would be later
connected with a backend application for trading with NFTs.

## How to run

For running the application locally you will need node 12.14.1 and npm 
6.13.4. After cloning the repository run the following commands:
```bash
npm install
ng serve
```
The application should be visible on address `localhost:4200`.

## Test environment

Test version of the application is currently available on heroku:
https://natureft.herokuapp.com/
