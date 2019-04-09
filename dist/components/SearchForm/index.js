"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextInput_1 = require("../../components/TextInput");
const style = require('./style.scss');
exports.SearchForm = ({ onArrivalChange, onDepartureChange, onQueryChange, onSubmit, arrival_date, departure_date, query, }) => (React.createElement("form", { className: style.wrapper, onSubmit: onSubmit },
    React.createElement("div", { className: style.dateColumn },
        React.createElement(TextInput_1.TextInput, { label: "Departure (locked)", placeholder: "Type it here", value: departure_date, onChange: onDepartureChange })),
    React.createElement("div", { className: style.dateColumn },
        React.createElement(TextInput_1.TextInput, { label: "Arrival (locked)", placeholder: "Type it here", value: arrival_date, onChange: onArrivalChange })),
    React.createElement("div", { className: style.searchColumn },
        React.createElement(TextInput_1.TextInput, { label: "Search query", placeholder: "Type it here", value: query, onChange: onQueryChange })),
    React.createElement("div", { className: style.buttonRow },
        React.createElement("button", null, "search"))));
//# sourceMappingURL=index.js.map