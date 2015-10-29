import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Counter } from 'components/counter';
import { Currency } from 'components/currency';

import { increment, decrement } from 'modules/counter/actions';
import { setAmount, setCurrency, fetchRatesIfNeeded } from 'modules/currency/actions';

export class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRatesIfNeeded(['GBP', 'USD', 'EUR']))
  }

  handleChangeAmount(e) {
    this.props.dispatch(setAmount(e.target.value));
  }

  handleChangeCurrency(e) {
    this.props.dispatch(setCurrency(e.target.value));
  }

  render() {
    const { state, dispatch } = this.props;

    const counter = (
      <Counter
        count={ state.counter }
        increment={ () => dispatch(increment()) }
        decrement={ () => dispatch(decrement()) }
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
            state={ state.currency }
            onChangeAmount={ ::this.handleChangeAmount }
            onChangeCurrency={ ::this.handleChangeCurrency }
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
