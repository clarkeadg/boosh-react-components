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

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var Hamburger = function (_React$Component) {
  (0, _inherits3.default)(Hamburger, _React$Component);

  function Hamburger(props) {
    (0, _classCallCheck3.default)(this, Hamburger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Hamburger.__proto__ || (0, _getPrototypeOf2.default)(Hamburger)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Hamburger, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'renderHambugerButton',
    value: function renderHambugerButton() {
      if (!this.state.isOpen) {
        return _react2.default.createElement(
          'div',
          { className: 'bm-burger-button' },
          _react2.default.createElement(
            'button',
            { onClick: this.toggleMenu },
            _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-list' })
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'bm-burger-button' },
        _react2.default.createElement(
          'button',
          { onClick: this.toggleMenu },
          _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-x' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var nav_items = this.props.nav_items;


      var active = this.state.isOpen ? 'active' : '';

      return _react2.default.createElement(
        'div',
        { className: "hamburger " + active },
        _react2.default.createElement('div', { className: 'bm-overlay' }),
        _react2.default.createElement(
          'div',
          { className: 'bm-menu-wrap' },
          _react2.default.createElement(
            'div',
            { className: 'bm-menu', onClick: this.closeMenu },
            _react2.default.createElement(
              'nav',
              { className: 'bm-item-list' },
              _react2.default.createElement(_Nav2.default, { items: nav_items })
            )
          )
        ),
        this.renderHambugerButton()
      );
    }
  }]);
  return Hamburger;
}(_react2.default.Component);
/* React */


Hamburger.propTypes = {
  nav_items: _react2.default.PropTypes.array
};

Hamburger.defaultProps = {
  nav_items: []
};

exports.default = Hamburger;