"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Loading: {
    displayName: "Loading"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/Components/Loading/Loading.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}
/* React */


/* Components */
//import { Row, Column, Menu, MenuItem, Alignments } from 'react-foundation';
//import { Link } from 'react-router'

var Loading = _wrapComponent("Loading")(function (_React$Component) {
  (0, _inherits3.default)(Loading, _React$Component);

  function Loading() {
    (0, _classCallCheck3.default)(this, Loading);
    return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loading, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "loading" },
        "Loading..."
      );
    }
  }]);
  return Loading;
}(_react3.default.Component));

exports.default = Loading;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OzZCQUlXO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFBQTtBQUFBLE9BREY7QUFHRDs7O0VBTm1CLGdCQUFNQSxTOztrQkFTYkMsTyIsImZpbGUiOiJMb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuLy9pbXBvcnQgeyBSb3csIENvbHVtbiwgTWVudSwgTWVudUl0ZW0sIEFsaWdubWVudHMgfSBmcm9tICdyZWFjdC1mb3VuZGF0aW9uJztcbi8vaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgTG9hZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl19