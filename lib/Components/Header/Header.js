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

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Header: {
    displayName: 'Header'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Header/Header.js',
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


var Header = _wrapComponent('Header')(function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'header',
        null,
        _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            _react3.default.createElement(
              _reactRouter.Link,
              { className: 'logo', to: '/' },
              _react3.default.createElement('img', { src: this.props.logo_url, alt: this.props.site_name })
            ),
            _react3.default.createElement(
              'div',
              { className: 'header-nav show-for-large' },
              _react3.default.createElement(_Nav2.default, { items: this.props.nav_items })
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react3.default.Component));

exports.default = Header;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJsb2dvX3VybCIsInNpdGVfbmFtZSIsIm5hdl9pdGVtcyIsIkNvbXBvbmVudCIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTkE7OztBQUdBOzs7Ozs7Ozs7Ozs7OzZCQU9XO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxPQUFPLEVBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQ0UscURBQUssS0FBSyxLQUFLQSxLQUFMLENBQVdDLFFBQXJCLEVBQStCLEtBQUssS0FBS0QsS0FBTCxDQUFXRSxTQUEvQztBQURGLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwyQkFBZjtBQUNFLDZEQUFLLE9BQU8sS0FBS0YsS0FBTCxDQUFXRyxTQUF2QjtBQURGO0FBSkY7QUFERjtBQURGLE9BREY7QUFjRDs7O0VBakJrQixnQkFBTUMsUzs7a0JBcUJaQyxNIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFJvdywgQ29sdW1uIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbidcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2L05hdic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgPENvbHVtbiBzbWFsbD17MTJ9PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibG9nb1wiIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5sb2dvX3VybH0gYWx0PXt0aGlzLnByb3BzLnNpdGVfbmFtZX0vPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2IHNob3ctZm9yLWxhcmdlXCI+XG4gICAgICAgICAgICAgIDxOYXYgaXRlbXM9e3RoaXMucHJvcHMubmF2X2l0ZW1zfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19