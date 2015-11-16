import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

export class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header className={ styles.default }>
        <h1>React Redux Skeleton</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/example'>Example Route</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
