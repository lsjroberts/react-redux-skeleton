import React, { Component } from 'react';

export class Currency extends Component {
  render() {
    return (
      <div>
        <input
          onChange={ this.props.onChange }
          type='text'
          value={ this.props.amount }
        />
        { this.props.converted }
      </div>
    );
  }
}
