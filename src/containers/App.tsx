import * as React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from "connected-react-router";
import { history } from "$redux/store";
import { NavLink, Switch, Route } from 'react-router-dom';
import { SEARCH_PATHS } from "$constants/paths";
import SearchLayout from "$containers/SearchLayout";
import ResultLayout from "$containers/ResultLayout";

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route
              exact
              path={SEARCH_PATHS.ROOT}
              component={SearchLayout}
            />
            <Route
              path={SEARCH_PATHS.SEARCH}
              component={ResultLayout}
            />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(Component);
