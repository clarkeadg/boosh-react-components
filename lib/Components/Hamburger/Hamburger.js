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

var _reactBurgerMenu = require('react-burger-menu');

var _reactBurgerMenu2 = _interopRequireDefault(_reactBurgerMenu);

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pick an Animation
//const HamburgerMenu = BurgerMenu.slide;


/* Components */
var HamburgerMenu = _reactBurgerMenu2.default.stack;
//const HamburgerMenu = BurgerMenu.elastic;
//const HamburgerMenu = BurgerMenu.bubble;
//const HamburgerMenu = BurgerMenu.push;
//const HamburgerMenu = BurgerMenu.pushRotate;
//const HamburgerMenu = BurgerMenu.scaleDown;
//const HamburgerMenu = BurgerMenu.scaleRotate;
//const HamburgerMenu = BurgerMenu.fallDown;

/* React */

var Hamburger = function (_React$Component) {
  (0, _inherits3.default)(Hamburger, _React$Component);

  function Hamburger() {
    (0, _classCallCheck3.default)(this, Hamburger);
    return (0, _possibleConstructorReturn3.default)(this, (Hamburger.__proto__ || (0, _getPrototypeOf2.default)(Hamburger)).apply(this, arguments));
  }

  (0, _createClass3.default)(Hamburger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'hamburger hide-for-large-x' },
        _react2.default.createElement(
          HamburgerMenu,
          { isOpen: false, pageWrapId: "page-wrap", outerContainerId: "outer-container" },
          _react2.default.createElement(_Nav2.default, { items: this.props.nav_items })
        )
      );
    }
  }]);
  return Hamburger;
}(_react2.default.Component);

exports.default = Hamburger;