'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var Nav = function (_React$Component) {
  (0, _inherits3.default)(Nav, _React$Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);
    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'renderLink',
    value: function renderLink(item) {
      if (item.type == "button") return this.renderButton(item);

      if (item.url == "/") {
        return _react2.default.createElement(
          _reactRouter.IndexLink,
          { activeClassName: 'active', to: item.url },
          item.icon ? _react2.default.createElement(_reactFoundation.Icon, { name: item.icon }) : '',
          item.title
        );
      }

      return _react2.default.createElement(
        _reactRouter.Link,
        { activeClassName: 'active', to: item.url },
        item.icon ? _react2.default.createElement(_reactFoundation.Icon, { name: item.icon }) : '',
        item.title
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton(item) {
      return _react2.default.createElement(
        'a',
        { target: '_blank', className: 'button', href: item.url },
        item.title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.items) return false;

      var isVertical = this.props.isVertical ? this.props.isVertical : false;
      var z = this;

      return _react2.default.createElement(
        _reactFoundation.Menu,
        { className: this.props.className, isVertical: isVertical },
        this.props.items.map(function (item, id) {
          return _react2.default.createElement(
            _reactFoundation.MenuItem,
            { key: id },
            z.renderLink(item)
          );
        })
      );
    }
  }]);
  return Nav;
}(_react2.default.Component);
/* React */


exports.default = Nav;