import { createReducer } from 'reduxsauce';

import { USER_ACTIONS } from "$redux/user/userActions";

const someActionHandler = (state, { payload }) => {

  // const {
  //   //val1,
  //   //val2,
  //   //val3,
  // } = payload;

  return { ...state, /* val1, val2, val3 */ };
};

const HANDLERS = {
  [USER_ACTIONS.SOME_ACTION]: someActionHandler,
};

const INITIAL_STATE = {
  // key: val,
  // key: val,
  // key: val
};

export default createReducer(INITIAL_STATE, HANDLERS);
