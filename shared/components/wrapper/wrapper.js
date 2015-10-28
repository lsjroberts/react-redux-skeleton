import React, { Component } from 'react';

import styles from './wrapper.scss';

export class Wrapper extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <article className={ styles.wrapper }>
        <h2>{ title }</h2>
        <div className={ styles.component }>
          { children }
        </div>
      </article>
    );
  }
}
