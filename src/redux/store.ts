import { createStore, applyMiddleware, combineReducers, compose, Store } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, RouterState } from 'connected-react-router'
import searchReducer, { ISearchState, searchPersistConfig } from '$redux/search/reducer';
import searchSagas from '$redux/search/sagas';
import { createBrowserHistory } from 'history';
import { PersistedState, Persistor } from "redux-persist/es/types";
import { routerMiddleware } from 'connected-react-router'

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === 'object' &&
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  combineReducers({
    search: persistReducer(searchPersistConfig, searchReducer),
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ))
);

export function configureStore(): { store: Store<any>, persistor: Persistor } {
  sagaMiddleware.run(searchSagas);
  const persistor = persistStore(store);

  return { store, persistor };
}

export interface IStore {
  search: ISearchState,
  router: RouterState,
}
