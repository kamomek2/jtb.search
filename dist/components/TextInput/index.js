"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style = require('./style.scss');
exports.TextInput = ({ label, value, onChange, placeholder = '', }) => (React.createElement("div", { className: style.wrapper },
    label &&
        React.createElement("div", { className: style.label }, label),
    React.createElement("input", { type: "text", onChange: onChange, className: style.input, placeholder: placeholder, value: value })));
//# sourceMappingURL=index.js.map