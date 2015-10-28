import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'modules/actions';

import './app.scss';

class App extends Component {
  render () {
    const { state, actions, children } = this.props;

    return (
      <div>
        {children && React.cloneElement(children, { state, actions })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { state };
}

function mapDispatchToProps (dispatch) {
  let boundActions = {};

  for (var moduleName in actions) {
    boundActions[moduleName] = bindActionCreators(actions[moduleName], dispatch);
  }

  return {
    actions: boundActions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
