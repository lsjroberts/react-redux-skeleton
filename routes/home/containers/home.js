import { connect } from 'react-redux';

import { increment, decrement } from 'modules/counter/actions';
import { setAmount, setCurrency, fetchRatesIfNeeded } from 'modules/currency/actions';

import { Home } from '../components/home';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    currency: state.currency
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchRatesIfNeeded(['GBP', 'USD', 'EUR']));

  return {
    onIncrementCounter: () => { dispatch(increment()) },
    onDecrementCounter: () => { dispatch(decrement()) },
    onChangeConverterAmount: (amount) => { dispatch(setAmount(amount)) },
    onChangeConverterCurrency: (currency) => { dispatch(setCurrency(currency)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
