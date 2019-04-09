import * as React from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../../components/SearchScreen';
import { FlightList } from 'jtb.flights';
import { HotelList } from 'jtb.hotels';
const style = require('./style.scss');

interface IResultLayoutProps {}

export const ResultLayout: React.FunctionComponent<IResultLayoutProps> = () => (
  <div className={style.wrapper}>
    <SearchScreen />
    <FlightList />
    <HotelList />
  </div>
);

export default ResultLayout;
