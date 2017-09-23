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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */

var Portlet = function (_React$Component) {
  (0, _inherits3.default)(Portlet, _React$Component);

  function Portlet() {
    (0, _classCallCheck3.default)(this, Portlet);
    return (0, _possibleConstructorReturn3.default)(this, (Portlet.__proto__ || (0, _getPrototypeOf2.default)(Portlet)).apply(this, arguments));
  }

  (0, _createClass3.default)(Portlet, [{
    key: "render",
    value: function render() {
      var myClass = "portlet";
      if (this.props.className) {
        myClass += " " + this.props.className;
      }
      if (this.props.cont) {
        return _react2.default.createElement(
          "div",
          { className: myClass },
          this.props.title ? _react2.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
          this.props.subtitle ? _react2.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
          _react2.default.createElement("div", { className: "portlet-cont", dangerouslySetInnerHTML: { __html: this.props.cont } })
        );
      }
      if (this.props.items) {
        return _react2.default.createElement(
          "div",
          { className: myClass },
          this.props.title ? _react2.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
          this.props.subtitle ? _react2.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
          _react2.default.createElement(
            "div",
            { className: "portlet-items" },
            this.props.items
          )
        );
      }
      return _react2.default.createElement(
        "div",
        { className: myClass },
        this.props.title ? _react2.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
        this.props.subtitle ? _react2.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
        _react2.default.createElement("div", { className: "portlet-cont" })
      );
    }
  }]);
  return Portlet;
}(_react2.default.Component);
/* React */


exports.default = Portlet;