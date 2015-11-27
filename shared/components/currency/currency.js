import React, { Component } from 'react';

import styles from './currency.scss';

export class Currency extends Component {
  render() {
    const { state, onChangeAmount, onChangeCurrency } = this.props;
    const { amount, currency, rates } = state;

    return (
      <div className={ styles.default }>
        <input
          onChange={ (e) => onChangeAmount(e.target.value) }
          type='text'
          value={ amount }
        />

        GBP&nbsp;

        {rates.isFetching && rates.items.size === 0 &&
          <p>Loading...</p>
        }

        {!rates.isFetching && rates.items.size === 0 &&
          <p>No rates found.</p>
        }

        {rates.items.size > 0 && (
          <span>
            in
            <select onChange={ (e) => onChangeCurrency(e.target.value) } value={ currency }>
              <option value=''>---</option>
              {[...rates.items.keys()].map(rateCurrency =>
                <option value={ rateCurrency }>
                  { rateCurrency }
                </option>
              )}
            </select>
            is { (amount * rates.items.get(currency) || amount).toFixed(2) }
          </span>
        )}
      </div>
    );
  }
}
