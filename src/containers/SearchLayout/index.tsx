import * as React from 'react';
import { connect } from 'react-redux';
import SearchScreen from '$components/SearchScreen';

const style = require('./style.scss');

interface ISearchLayoutProps {}

export const SearchLayout: React.FunctionComponent<ISearchLayoutProps> = () => (
  <div className={style.wrapper}>
    <SearchScreen />
  </div>
);

export default SearchLayout;
