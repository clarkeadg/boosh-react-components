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

var _reactSimpleDropdown = require('react-simple-dropdown');

var _reactSimpleDropdown2 = _interopRequireDefault(_reactSimpleDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* React */
var Nav = function (_React$Component) {
  (0, _inherits3.default)(Nav, _React$Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);
    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'renderItem',
    value: function renderItem(item) {
      var _this2 = this;

      if (item.type == "button") return this.renderButton(item);

      if (item.dropdown) {
        return _react2.default.createElement(
          _reactSimpleDropdown2.default,
          { ref: 'dropdown' },
          _react2.default.createElement(
            _reactSimpleDropdown.DropdownTrigger,
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { activeClassName: 'active', to: item.url },
              item.icon ? _react2.default.createElement(_reactFoundation.Icon, { name: item.icon }) : '',
              item.title
            )
          ),
          _react2.default.createElement(
            _reactSimpleDropdown.DropdownContent,
            { onClick: function onClick() {
                _this2.refs.dropdown.hide();
              } },
            _react2.default.createElement(
              _reactFoundation.Menu,
              { isVertical: true },
              item.dropdown.map(function (dropDownItem, id) {
                return _react2.default.createElement(
                  _reactFoundation.MenuItem,
                  { key: id },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: dropDownItem.url },
                    'dropDownItem.title'
                  )
                );
              })
            )
          )
        );
      }

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
      var z = this;
      if (!z.props.items) return false;

      var isVertical = z.props.isVertical ? z.props.isVertical : false;

      return _react2.default.createElement(
        _reactFoundation.Menu,
        { className: z.props.className, isVertical: isVertical },
        z.props.items.map(function (item, id) {
          return _react2.default.createElement(
            _reactFoundation.MenuItem,
            { key: id },
            z.renderItem(item),
            item.items ? _react2.default.createElement(
              _reactFoundation.Menu,
              { className: 'submenu', isVertical: isVertical },
              item.items.map(function (it, id) {
                return _react2.default.createElement(
                  _reactFoundation.MenuItem,
                  { key: id },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { activeClassName: 'active', to: it.url },
                    it.icon ? _react2.default.createElement(_reactFoundation.Icon, { name: it.icon }) : '',
                    it.title
                  )
                );
              })
            ) : ''
          );
        })
      );
    }
  }]);
  return Nav;
}(_react2.default.Component);

/* Components */


exports.default = Nav;