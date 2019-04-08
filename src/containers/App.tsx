import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";
import { NavLink, Switch, Route } from 'react-router-dom';
import { SEARCH_PATHS } from "../constants/paths";
import SearchLayout from "../containers/SearchLayout";
import ResultLayout from "../containers/ResultLayout";

interface IAppProps {}
interface IAppState {}

class Component extends React.Component<IAppProps, IAppState> {
  state = { };

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

const mapStateToProps = (state, props) => ({ });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Component));
