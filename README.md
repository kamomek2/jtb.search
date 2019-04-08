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
