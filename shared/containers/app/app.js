import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './app.scss';

class App extends Component {
  render () {
    const { state, dispatch, children } = this.props;

    return (
      <div>
        {children && React.cloneElement(children, { state, dispatch })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { state };
}

export default connect(mapStateToProps)(App);
