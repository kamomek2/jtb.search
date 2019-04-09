import * as React from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../../components/SearchScreen';
import { FlightList } from 'jtb.flights';
const style = require('./style.scss');

interface IResultLayoutProps {}

export const ResultLayout: React.FunctionComponent<IResultLayoutProps> = () => (
  <div className={style.wrapper}>
    <SearchScreen />
    <FlightList />
  </div>
);

export default ResultLayout;
