import React, { Component } from 'react';

import styles from './counter.scss';

export class Counter extends Component {
  render() {
    return (
      <div className={ styles.default }>
        <button onClick={this.props.decrement}>-</button>
        { this.props.count }
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}
