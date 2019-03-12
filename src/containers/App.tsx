// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import { SomeComponent } from '$components/SomeComponent';

class Component extends React.Component {
  state = { };

  render() {
    return (
      <div>
        <SomeComponent />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Component));
