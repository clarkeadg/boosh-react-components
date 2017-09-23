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

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* React */
var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'logo', to: '/' },
              _react2.default.createElement('img', { src: this.props.logo_url, alt: this.props.site_name })
            ),
            _react2.default.createElement(
              'div',
              { className: 'header-nav show-for-large' },
              _react2.default.createElement(_Nav2.default, { items: this.props.nav_items })
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

/* Components */


exports.default = Header;