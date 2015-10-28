import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from '../components/wrapper';
import { Counter } from 'components/counter';
import { Currency } from 'components/currency';

export class Home extends Component {
  incrementCounter() {
    this.props.actions.counter.increment();
  }

  decrementCounter() {
    this.props.actions.counter.decrement();
  }

  changeCurrencyAmount(e) {
    this.props.actions.currency.changeAmount(e.target.value);
  }

  render() {
    const { state } = this.props;

    return (
      <div>
        <Header />
        <Wrapper title='Counter'>
          <Counter
            count={ state.counter }
            increment={ ::this.incrementCounter }
            decrement={ ::this.decrementCounter }
          />
        </Wrapper>
        <Wrapper title='Currency'>
          <Currency
            amount={ state.currency.amount }
            converted={ state.currency.converted }
            onChange={ ::this.changeCurrencyAmount }
          />
        </Wrapper>
      </div>
    );
  }
}
