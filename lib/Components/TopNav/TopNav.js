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
var TopNav = function (_React$Component) {
  (0, _inherits3.default)(TopNav, _React$Component);

  function TopNav() {
    (0, _classCallCheck3.default)(this, TopNav);
    return (0, _possibleConstructorReturn3.default)(this, (TopNav.__proto__ || (0, _getPrototypeOf2.default)(TopNav)).apply(this, arguments));
  }

  (0, _createClass3.default)(TopNav, [{
    key: 'render',
    value: function render() {
      //if (!this.props.items) return false;

      return _react2.default.createElement(
        'div',
        { className: 'top-nav' },
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 1 },
            _react2.default.createElement(_reactFoundation.Menu, { className: 'left' })
          ),
          _react2.default.createElement(_reactFoundation.Column, { small: 11 })
        )
      );
    }
  }]);
  return TopNav;
}(_react2.default.Component);

// <MenuItem><Link to='/'>Logo</Link></MenuItem>

//import { MeBox } from 'boosh-react-auth'

/* React */


exports.default = TopNav;