"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const constants_1 = require("./constants");
const connected_react_router_1 = require("connected-react-router");
const paths_1 = require("../../constants/paths");
const actions_1 = require("./actions");
function* performSearchSaga() {
    yield effects_1.put(connected_react_router_1.push(paths_1.SEARCH_PATHS.SEARCH));
    const { search: { query, arrival_date, departure_date, } } = yield effects_1.select();
    yield effects_1.put(actions_1.searchDispatchSearchQuery({ query, arrival_date, departure_date }));
    console.log({ query, arrival_date, departure_date, });
}
function* mySaga() {
    yield effects_1.takeLatest(constants_1.SEARCH_ACTIONS.PERFORM_SEARCH, performSearchSaga);
}
exports.default = mySaga;
//# sourceMappingURL=sagas.js.map