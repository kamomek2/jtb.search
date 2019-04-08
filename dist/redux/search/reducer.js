"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduxsauce_1 = require("reduxsauce");
const constants_1 = require("$redux/search/constants");
const storage_1 = require("redux-persist/lib/storage");
const date_fns_1 = require("date-fns");
const setSearchString = (state, { query }) => (Object.assign({}, state, { query }));
const HANDLERS = {
    [constants_1.SEARCH_ACTIONS.SET_SEARCH_STRING]: setSearchString,
};
const INITIAL_STATE = {
    query: '',
    departure_date: date_fns_1.format(new Date(), 'dd MMM yyyy'),
    arrival_date: date_fns_1.format(date_fns_1.addDays(new Date(), 14), 'dd MMM yyyy'),
};
exports.searchPersistConfig = {
    key: 'search',
    whitelist: [],
    storage: storage_1.default,
};
exports.default = reduxsauce_1.createReducer(INITIAL_STATE, HANDLERS);
//# sourceMappingURL=reducer.js.map