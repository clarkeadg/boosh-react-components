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

var ProjectBox = function (_React$Component) {
  (0, _inherits3.default)(ProjectBox, _React$Component);

  function ProjectBox() {
    (0, _classCallCheck3.default)(this, ProjectBox);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectBox.__proto__ || (0, _getPrototypeOf2.default)(ProjectBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectBox, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "projectbox itembox" },
        _react2.default.createElement("img", { src: this.props.img }),
        _react2.default.createElement("div", { className: "itembox-title", dangerouslySetInnerHTML: { __html: this.props.title } }),
        _react2.default.createElement("div", { className: "projectbox-company", dangerouslySetInnerHTML: { __html: this.props.company } }),
        _react2.default.createElement("div", { className: "projectbox-role", dangerouslySetInnerHTML: { __html: this.props.role } })
      );
    }
  }]);
  return ProjectBox;
}(_react2.default.Component);
/* React */


exports.default = ProjectBox;