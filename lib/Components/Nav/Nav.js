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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Nav: {
    displayName: 'Nav'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Nav/Nav.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}
/* React */


/* Components */


var Nav = _wrapComponent('Nav')(function (_React$Component) {
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
        return _react3.default.createElement(
          _reactRouter.IndexLink,
          { activeClassName: 'active', to: item.url },
          item.icon ? _react3.default.createElement(_reactFoundation.Icon, { name: item.icon }) : '',
          item.title
        );
      }

      return _react3.default.createElement(
        _reactRouter.Link,
        { activeClassName: 'active', to: item.url },
        item.icon ? _react3.default.createElement(_reactFoundation.Icon, { name: item.icon }) : '',
        item.title
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton(item) {
      return _react3.default.createElement(
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

      return _react3.default.createElement(
        _reactFoundation.Menu,
        { className: this.props.className, isVertical: isVertical },
        this.props.items.map(function (item, id) {
          return _react3.default.createElement(
            _reactFoundation.MenuItem,
            { key: id },
            z.renderLink(item)
          );
        })
      );
    }
  }]);
  return Nav;
}(_react3.default.Component));

exports.default = Nav;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOlsiaXRlbSIsInR5cGUiLCJyZW5kZXJCdXR0b24iLCJ1cmwiLCJpY29uIiwidGl0bGUiLCJwcm9wcyIsIml0ZW1zIiwiaXNWZXJ0aWNhbCIsInoiLCJjbGFzc05hbWUiLCJtYXAiLCJpZCIsInJlbmRlckxpbmsiLCJDb21wb25lbnQiLCJOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7K0JBTWFBLEksRUFBTTtBQUNmLFVBQUlBLEtBQUtDLElBQUwsSUFBYSxRQUFqQixFQUEyQixPQUFPLEtBQUtDLFlBQUwsQ0FBa0JGLElBQWxCLENBQVA7O0FBRTNCLFVBQUlBLEtBQUtHLEdBQUwsSUFBWSxHQUFoQixFQUFxQjtBQUNuQixlQUNFO0FBQUE7QUFBQSxZQUFXLGlCQUFpQixRQUE1QixFQUFzQyxJQUFJSCxLQUFLRyxHQUEvQztBQUNJSCxlQUFLSSxJQUFMLEdBQVksdURBQU0sTUFBTUosS0FBS0ksSUFBakIsR0FBWixHQUF1QyxFQUQzQztBQUVHSixlQUFLSztBQUZSLFNBREY7QUFNRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFNLGlCQUFpQixRQUF2QixFQUFpQyxJQUFJTCxLQUFLRyxHQUExQztBQUNJSCxhQUFLSSxJQUFMLEdBQVksdURBQU0sTUFBTUosS0FBS0ksSUFBakIsR0FBWixHQUF1QyxFQUQzQztBQUVHSixhQUFLSztBQUZSLE9BREY7QUFNRDs7O2lDQUVZTCxJLEVBQU07QUFDakIsYUFBUTtBQUFBO0FBQUEsVUFBRyxRQUFPLFFBQVYsRUFBbUIsV0FBVSxRQUE3QixFQUFzQyxNQUFNQSxLQUFLRyxHQUFqRDtBQUF1REgsYUFBS0s7QUFBNUQsT0FBUjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxLQUFoQixFQUF1QixPQUFPLEtBQVA7O0FBRXZCLFVBQUlDLGFBQWEsS0FBS0YsS0FBTCxDQUFXRSxVQUFYLEdBQXdCLEtBQUtGLEtBQUwsQ0FBV0UsVUFBbkMsR0FBZ0QsS0FBakU7QUFDQSxVQUFNQyxJQUFJLElBQVY7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFXLEtBQUtILEtBQUwsQ0FBV0ksU0FBNUIsRUFBdUMsWUFBWUYsVUFBbkQ7QUFDRyxhQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJJLEdBQWpCLENBQXFCLFVBQUNYLElBQUQsRUFBTVksRUFBTixFQUFhO0FBQ2pDLGlCQUNFO0FBQUE7QUFBQSxjQUFVLEtBQUtBLEVBQWY7QUFDSUgsY0FBRUksVUFBRixDQUFhYixJQUFiO0FBREosV0FERjtBQUtELFNBTkE7QUFESCxPQURGO0FBV0Q7OztFQTNDZSxnQkFBTWMsUzs7a0JBK0NUQyxHIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1lbnUsIE1lbnVJdGVtLCBJY29uIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbic7XG5pbXBvcnQgeyBMaW5rLCBJbmRleExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyTGluayhpdGVtKSB7XG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImJ1dHRvblwiKSByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oaXRlbSk7XG5cbiAgICBpZiAoaXRlbS51cmwgPT0gXCIvXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbmRleExpbmsgYWN0aXZlQ2xhc3NOYW1lPXsnYWN0aXZlJ30gdG89e2l0ZW0udXJsfT5cbiAgICAgICAgICB7IGl0ZW0uaWNvbiA/IDxJY29uIG5hbWU9e2l0ZW0uaWNvbn0vPiA6ICcnIH1cbiAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgPC9JbmRleExpbms+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT17J2FjdGl2ZSd9IHRvPXtpdGVtLnVybH0+XG4gICAgICAgIHsgaXRlbS5pY29uID8gPEljb24gbmFtZT17aXRlbS5pY29ufS8+IDogJycgfVxuICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cblxuICByZW5kZXJCdXR0b24oaXRlbSkge1xuICAgIHJldHVybiAoPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj17aXRlbS51cmx9PntpdGVtLnRpdGxlfTwvYT4pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLml0ZW1zKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgaXNWZXJ0aWNhbCA9IHRoaXMucHJvcHMuaXNWZXJ0aWNhbCA/IHRoaXMucHJvcHMuaXNWZXJ0aWNhbCA6IGZhbHNlXG4gICAgY29uc3QgeiA9IHRoaXNcblxuICAgIHJldHVybiAoXG4gICAgICA8TWVudSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfT5cbiAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgeyB6LnJlbmRlckxpbmsoaXRlbSkgfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0=