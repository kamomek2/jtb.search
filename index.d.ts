// import * as React from 'react';
//
// export interface IExpandableTextareaProps {
//   value: string,
//   placeholder?: string,
//   rows?: number,
//   className?: string,
//   minRows?: number,
//   maxRows?: number,
//   lineHeight?: number,
//   onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
//   style?: React.CSSProperties,
// }
//
// export interface IExpandableTextareaState {
//   rows: number,
// }
//
// declare class ExpandableTextarea extends React.PureComponent<IExpandableTextareaProps, IExpandableTextareaState> {
// }
//
// declare module 'expandable-textarea' {
// }
//
// export default ExpandableTextarea;

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
