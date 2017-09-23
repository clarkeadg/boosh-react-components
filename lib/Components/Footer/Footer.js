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
var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/pages/safety' },
              'Safety'
            ),
            ' | ',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/pages/terms' },
              'Terms of Service'
            ),
            ' | ',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/pages/privacy' },
              'Privacy Policy'
            ),
            _react2.default.createElement(
              'div',
              { className: 'copyright' },
              this.props.copyright
            ),
            _react2.default.createElement(
              'div',
              { className: 'address' },
              this.props.address
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2.default.Component);

/*
<footer>
  <Row className="display">
    <Column small={12} medium={6}>
      <Menu isVertical>
        <MenuItem><Link to={'/music'}>Music Videos</Link></MenuItem>
        <MenuItem><Link to={'/game/sonic'}>Sonic the Hedgehog</Link></MenuItem>
      </Menu>
    </Column>
    <Column small={12} medium={6}>
      <Menu isVertical >
        <MenuItem><Link to={'/settings'}>Account</Link></MenuItem>
      </Menu>
    </Column>
  </Row>
  <Row className="display">
    <Column small={12}>
      <Link to={'/privacy'}>Privacy Policy</Link>
      {' | '}
      <Link to={'/terms'}>Terms of Service</Link>
      <div className="copyright">{this.props.copyright}</div>
      <div className="address">{this.props.address}</div>
    </Column>
  </Row>
</footer>
*/

/* React */


exports.default = Footer;