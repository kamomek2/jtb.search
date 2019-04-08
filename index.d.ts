import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import { ISearchScreenProps } from "./src/components/SearchScreen";

declare const searchReducer: Reducer;
declare const searchPersistConfig: PersistConfig;
declare const searchSaga;
declare const SEARCH_PATHS;
declare const SEARCH_ACTIONS;
declare class SearchScreen extends React.PureComponent<ISearchScreenProps, {}> {}

declare module 'jtb.search' {
}
