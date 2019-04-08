import { createReducer } from 'reduxsauce';
import * as ACTIONS from "$redux/search/actions";
import { SEARCH_ACTIONS } from "$redux/search/constants";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";
import { format, addDays } from 'date-fns';

export type ISearchState = Readonly<{
  // key: string
  query: string,
  departure_date: string,
  arrival_date: string,
}>;

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface ActionHandler<T> {
  (state: ISearchState, payload: UnsafeReturnType<T>): ISearchState;
}

const setSearchString: ActionHandler<typeof ACTIONS.searchSetSearchString> = (state, { query }) => ({
  ...state,
  query,
});

const HANDLERS = {
  [SEARCH_ACTIONS.SET_SEARCH_STRING]: setSearchString,
};

const INITIAL_STATE: ISearchState = {
  query: '',
  departure_date: format(new Date(), 'dd MMM yyyy'),
  arrival_date: format(addDays(new Date(), 14), 'dd MMM yyyy'),
};

export const searchPersistConfig: PersistConfig = {
  key: 'search',
  whitelist: [],
  storage,
};
export default createReducer(INITIAL_STATE, HANDLERS);
