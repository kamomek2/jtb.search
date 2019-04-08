import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import { SagaIterator } from "redux-saga";

declare const searchReducer: Reducer;
declare const searchPersistConfig: PersistConfig;
declare const searchSaga: SagaIterator;
declare const SEARCH_PATHS;
declare const SEARCH_ACTIONS;

declare module 'jtb.search' {
}
