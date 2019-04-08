import * as React from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../../components/SearchScreen';

const style = require('./style.scss');

interface IResultLayoutProps {}

export const ResultLayout: React.FunctionComponent<IResultLayoutProps> = () => (
  <div className={style.wrapper}>
    <SearchScreen />
  </div>
);

export default ResultLayout;
