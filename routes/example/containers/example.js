import { connect } from 'react-redux';

import { increment, decrement } from 'modules/counter/actions';

import { Example } from '../components/example';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => { dispatch(increment()) },
    onDecrementCounter: () => { dispatch(decrement()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
