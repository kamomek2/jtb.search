import { SEARCH_ACTIONS } from "$redux/search/constants";
import { ISearchState } from "index";

export const searchSetSearchString = (query: string) => ({ type: SEARCH_ACTIONS.SET_SEARCH_STRING, query });
export const searchPerformSearch = () => ({ type: SEARCH_ACTIONS.PERFORM_SEARCH });
export const searchDispatchSearchQuery = (
  { query, arrival_date, departure_date }:
  { query: ISearchState['query'], arrival_date: ISearchState['arrival_date'], departure_date: ISearchState['departure_date']}
) => ({
  type: SEARCH_ACTIONS.DISPATCH_SEARCH_QUERY,
  query, arrival_date, departure_date
});
