"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SearchForm_1 = require("../SearchForm");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const searchActions = require("../../redux/search/actions");
const style = require('./style.scss');
class SearchScreen extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onArrivalChange = () => { };
        this.onDepartureChange = () => { };
        this.onQueryChange = ({ target: { value } }) => {
            this.props.searchSetSearchString(value);
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.searchPerformSearch();
        };
    }
    render() {
        const { query, arrival_date, departure_date, } = this.props;
        return (React.createElement("div", { className: style.wrapper },
            React.createElement("div", { className: style.container },
                React.createElement("div", { className: style.header }, "Search form (Main component)"),
                React.createElement(SearchForm_1.SearchForm, { onQueryChange: this.onQueryChange, onArrivalChange: this.onArrivalChange, onDepartureChange: this.onDepartureChange, onSubmit: this.onSubmit, query: query, arrival_date: arrival_date, departure_date: departure_date }))));
    }
}
const mapStateToProps = ({ search }) => (Object.assign({}, search));
const mapDispatchToProps = dispatch => redux_1.bindActionCreators({
    searchSetSearchString: searchActions.searchSetSearchString,
    searchPerformSearch: searchActions.searchPerformSearch,
}, dispatch);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
//# sourceMappingURL=index.js.map