import React, { Component } from 'react';

import styles from './counter.scss';

export class Counter extends Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props;

    return (
      <div className={ styles.default }>
        <button onClick={ onDecrement }>-</button>
        { count }
        <button onClick={ onIncrement }>+</button>
      </div>
    );
  }
}
