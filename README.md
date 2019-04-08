## JTB Search Component (main)

Will dispatch the search and handle routing.

### Setup
Clone and install:

```
git clone https://github.com/muerwre/jtb.search.git
cd jtb.search.git
npm i
```

Run it:
```
npm start
```

Navigate to ```http://localhost:8000/``` to see it in action

### How it works
When you click 'Search', the component dispatches DISPATCH_SEARCH_QUERY along the combined redux store. The components,
that's listening to all the dispatches, trigger async redux-saga actions reacting dispatched events.

Flights and Hotels lists are stored in separate github repos, https://github.com/muerwre/jtb.flights and
https://github.com/muerwre/jtb.hotels, both of them require Search Form component and global styles from this repo, 
but every of them handles async logic by itself, so you can run each project as standalone app.   

### Typescript and transpilling
Currently the main file is ```index.ts```, but if you need pure js to be default module export, 
change the ```package.json``` file to contain ```"main": "dist/index.js"``` instead of ```"main": "src/index.ts"```. 
You'll need to run ```npm run build``` after each change commit.

Also, there's a lot of ```import Component from '../../components/Component'``` strings in place where pretty 
path aliases must be, but we've spent a lot of time to make TS translate path aliases to correct form and that was 
unsuccessfull. 
