"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.searchSetSearchString = (query) => ({ type: constants_1.SEARCH_ACTIONS.SET_SEARCH_STRING, query });
exports.searchPerformSearch = () => ({ type: constants_1.SEARCH_ACTIONS.PERFORM_SEARCH });
exports.searchDispatchSearchQuery = ({ query, arrival_date, departure_date }) => ({
    type: constants_1.SEARCH_ACTIONS.DISPATCH_SEARCH_QUERY,
    query, arrival_date, departure_date
});
//# sourceMappingURL=actions.js.map