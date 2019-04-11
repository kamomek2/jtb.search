import * as React from 'react';
import { shallow } from 'enzyme';

import SearchLayout from '$containers/SearchLayout';
import ResultLayout from '$containers/ResultLayout';
import SearchScreen from "$components/SearchScreen";
import { hotelReducer, HOTEL_INITIAL_STATE, HotelList } from 'jtb.hotels';
import { flightReducer, FLIGHT_INITIAL_STATE, FlightList } from 'jtb.flights';
import { SEARCH_INITIAL_STATE, searchReducer } from "../src/index";

describe('[Search]', () => {
  describe('[Mount] Checking components', () => {
    it('[SearchLayout] renders', () => {
      const wrapper = shallow(<SearchLayout />);
      expect(wrapper.find(SearchScreen).length).toBe(1);
    });

    it('[ResultLayout] renders', () => {
      const wrapper = shallow(<ResultLayout />);
      expect(wrapper.find(SearchScreen).length).toBe(1);
      expect(wrapper.find(HotelList).length).toBe(1);
      expect(wrapper.find(FlightList).length).toBe(1);
    });
  });

  describe('[Store] Data storage', () => {
    it('Search state has search fields', () => {
      const newState = searchReducer(SEARCH_INITIAL_STATE, null);
      expect(Object.keys(newState).indexOf('arrival_date')).toBeGreaterThanOrEqual(0);
      expect(Object.keys(newState).indexOf('departure_date')).toBeGreaterThanOrEqual(0);
      expect(Object.keys(newState).indexOf('query')).toBeGreaterThanOrEqual(0);
    });

    it('Hotels component exports hotel list', () => {
      const newState = hotelReducer(HOTEL_INITIAL_STATE, null);
      expect(newState.list).toEqual([]);
    });

    it('Flight component exports flight list', () => {
      const newState = flightReducer(FLIGHT_INITIAL_STATE, null);
      expect(newState.list).toEqual([]);
    });
  });
});
