## JTB Search Component (main)

Will dispatch the search and handle routing between screens. Flights and Hotels components included from 
github (can be done via npm) repos as build dependencies.


Flights: https://github.com/muerwre/jtb.flights 

Hotels: https://github.com/muerwre/jtb.hotelss 

### Setup
Clone and install:

```
git clone https://github.com/muerwre/jtb.search.git
cd jtb.search
yarn
```

Run it:
```
yarn start
```

Navigate to ```http://localhost:8000/``` to see it in action

### How it works
For now we have three modules: ```jtb.search``` (this component), ```jtb.flights``` and ```jtb.hotels```, each of them has
its own github repo and can be published to npm as individual package.

The ```jtb.search``` module requires ```jtb.flights``` and ```jtb.hotels``` as dependencies and embeds their 
views, data storage structures and async listeners (sagas) to make them work together.

At the same time you can clone ```jtb.flights``` or ```jtb.hotels``` repos and launch as standalone web app. Both of 
this modules requires other one and ```jtb.search``` as dev-dependencies, so we have entire data structures and async
listeners to make development easier.

This means, that we have { search, flight, history } data storage and async listeners at every of these modules. 

### Async calls
We created mockups for async calls. ```jtb.flights``` will produce fake api response within 1s and  ```jtb.hotels``` 
will do it after 1.5s.

### Shared components 
```jtb.flights``` and ```jtb.hotels``` will require  ```jtb.search```'s fully functional Search Form when you'll
clone their repos and run them as standalone apps. That was made to make developing easier. 

### Shared styles
Every module can has its own variables, stored in ```src/styles/variables.scss```, but ```jtb.flights``` and 
```jtb.hotels``` will include variables from ```jtb.search``` as default.

### Typescript
Each of these modules exports .js files with type definitions at index.d.ts, so you can import them from not only
Typescript projects, but from Javascript ones without any problems.

### Publishing to npm
Now we use github repos to store modules, but you can switch to npm without any issues (we've tried it). You'll
need to change package version every time changes were made and run ```npm publish``` after every change publication.

The project will produce pure .js files to dist folder before publishing automatically.
