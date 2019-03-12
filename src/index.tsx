import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { Route, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from '$redux/store';
import App from '$containers/App';
import { hot } from "react-hot-loader";

require('./styles/styles.scss');

const { store, persistor } = configureStore();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

/*
<div>
  <div>
    <NavLink exact to="/" activeClassName="active">
      Root
    </NavLink>
    <NavLink to="/somepath" activeClassName="active">
      Something
    </NavLink>
  </div>
  <Switch>
    <Route
      exact
      path="/"
      component={SomeComponent}
    />
    <Route
      path="/somepath"
      component={SomeComponent}
    />
  </Switch>
</div>
 */
