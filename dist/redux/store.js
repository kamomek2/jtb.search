"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const redux_saga_1 = require("redux-saga");
const connected_react_router_1 = require("connected-react-router");
const history_1 = require("history");
const connected_react_router_2 = require("connected-react-router");
const reducer_1 = require("./search/reducer");
const sagas_1 = require("./search/sagas");
const jtb_flights_1 = require("jtb.flights");
const jtb_hotels_1 = require("jtb.hotels");
exports.sagaMiddleware = redux_saga_1.default();
exports.history = history_1.createBrowserHistory();
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : redux_1.compose;
exports.store = redux_1.createStore(redux_1.combineReducers({
    flight: redux_persist_1.persistReducer(jtb_flights_1.flightPersistConfig, jtb_flights_1.flightReducer),
    hotel: redux_persist_1.persistReducer(jtb_hotels_1.hotelPersistConfig, jtb_hotels_1.hotelReducer),
    search: redux_persist_1.persistReducer(reducer_1.searchPersistConfig, reducer_1.default),
    router: connected_react_router_1.connectRouter(exports.history),
}), composeEnhancers(redux_1.applyMiddleware(connected_react_router_2.routerMiddleware(exports.history), exports.sagaMiddleware)));
function configureStore() {
    exports.sagaMiddleware.run(sagas_1.default);
    exports.sagaMiddleware.run(jtb_flights_1.flightSaga);
    exports.sagaMiddleware.run(jtb_hotels_1.hotelSaga);
    const persistor = redux_persist_1.persistStore(exports.store);
    return { store: exports.store, persistor };
}
exports.configureStore = configureStore;
//# sourceMappingURL=store.js.map