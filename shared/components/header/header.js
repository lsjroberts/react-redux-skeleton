import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

export class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header className={ styles.bright }>
        <h1>React Redux Skeleton</h1>
      </header>
    );
  }
}
