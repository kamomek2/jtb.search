import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import * as searchActions from './src/redux/search/actions';

declare const searchReducer: Reducer;
declare const searchPersistConfig: PersistConfig;
declare const searchSaga;
declare const SEARCH_PATHS;
declare const SEARCH_ACTIONS;
declare class SearchScreen extends React.PureComponent<{}, {}> {}


declare const searchSetSearchString: typeof searchActions.searchSetSearchString;
declare const searchPerformSearch: typeof searchActions.searchPerformSearch;
declare const searchDispatchSearchQuery: typeof searchActions.searchDispatchSearchQuery;

declare module 'jtb.search' {}
