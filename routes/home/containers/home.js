import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Counter } from 'components/counter';
import { Currency } from 'components/currency';

export class Home extends Component {
  render() {
    const { state } = this.props;
    const { increment, decrement } = this.props.actions.counter;
    const { changeAmount } = this.props.actions.currency;

    const counter = (
      <Counter
        count={ state.counter }
        increment={ () => increment() }
        decrement={ () => decrement() }
      />
    );

    return (
      <div>
        <Header />

        <Wrapper title='Counter'>
          <p>This counter demonstrates basic redux principles.</p>
          { counter }
        </Wrapper>

        <Wrapper title='Currency'>
          <p>
            This currency converter demonstrates how to use asynchronous api
            calls to update your redux store.
          </p>
          <Currency
            amount={ state.currency.amount }
            converted={ state.currency.converted }
            onChange={ (e) => changeAmount(e.target.value) }
          />
        </Wrapper>

        <Wrapper title='Reused counter'>
          <p>This second instance of the counter uses the same state.</p>
          { counter }
        </Wrapper>
      </div>
    );
  }
}
