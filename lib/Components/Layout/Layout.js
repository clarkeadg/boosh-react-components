'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _TopNav = require('../TopNav/TopNav');

var _TopNav2 = _interopRequireDefault(_TopNav);

var _Hamburger = require('../Hamburger/Hamburger');

var _Hamburger2 = _interopRequireDefault(_Hamburger);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { LightBox } from 'boosh-react-lightbox';

/* Components */
var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          app = _props.app,
          rest = (0, _objectWithoutProperties3.default)(_props, ['app']);

      return _react2.default.createElement(
        'div',
        { id: 'outer-container', className: 'layout' },
        _react2.default.createElement(_Hamburger2.default, { nav_items: app.nav }),
        _react2.default.createElement(
          'div',
          { id: 'page-wrap' },
          _react2.default.createElement(
            'div',
            { className: 'fixed-top' },
            _react2.default.createElement(_TopNav2.default, null),
            _react2.default.createElement(_Header2.default, { logo_url: app.logo, site_name: app.name, nav_items: app.nav })
          ),
          _react2.default.createElement('main', rest),
          _react2.default.createElement(_Footer2.default, { copyright: 'Copyright 2017', address: '' })
        )
      );
    }
  }]);
  return Layout;
}(_react2.default.Component);
/* React */


Layout.propTypes = {
  app: _react2.default.PropTypes.object
};

Layout.defaultProps = {
  app: {}
};

exports.default = Layout;