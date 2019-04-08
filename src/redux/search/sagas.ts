import { put, takeLatest, select } from 'redux-saga/effects';
import { SEARCH_ACTIONS } from "$redux/search/constants";
import { push } from "connected-react-router";
import { SEARCH_PATHS } from "$constants/paths";
import { IStore } from "$redux/store";
import { searchDispatchSearchQuery } from "$redux/search/actions";

function* performSearchSaga() {
  yield put(push(SEARCH_PATHS.SEARCH));
  const {
    search: {
      query, arrival_date, departure_date,
    }
  }: IStore = yield select();

  yield put(searchDispatchSearchQuery({ query, arrival_date, departure_date }));
  console.log({ query, arrival_date, departure_date, })
}

function* mySaga() {
  yield takeLatest(SEARCH_ACTIONS.PERFORM_SEARCH, performSearchSaga)
}

export default mySaga;
