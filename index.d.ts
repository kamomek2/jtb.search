import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";

declare const searchReducer: Reducer;
declare const searchPersistConfig: PersistConfig;
declare const searchSaga;
declare const SEARCH_PATHS;
declare const SEARCH_ACTIONS;
declare class SearchScreen extends React.PureComponent<{}, {}> {}

export type ISearchState = Readonly<{
  query: string,
  departure_date: string,
  arrival_date: string,
}>;

declare module 'jtb.search' {}
