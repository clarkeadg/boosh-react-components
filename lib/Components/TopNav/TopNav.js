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
  TopNav: {
    displayName: 'TopNav'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/TopNav/TopNav.js',
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

//import { MeBox } from 'boosh-react-auth'


var TopNav = _wrapComponent('TopNav')(function (_React$Component) {
  (0, _inherits3.default)(TopNav, _React$Component);

  function TopNav() {
    (0, _classCallCheck3.default)(this, TopNav);
    return (0, _possibleConstructorReturn3.default)(this, (TopNav.__proto__ || (0, _getPrototypeOf2.default)(TopNav)).apply(this, arguments));
  }

  (0, _createClass3.default)(TopNav, [{
    key: 'render',
    value: function render() {
      //if (!this.props.items) return false;

      return _react3.default.createElement(
        'div',
        { className: 'top-nav' },
        _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 1 },
            _react3.default.createElement(_reactFoundation.Menu, { className: 'left' })
          ),
          _react3.default.createElement(_reactFoundation.Column, { small: 11 })
        )
      );
    }
  }]);
  return TopNav;
}(_react3.default.Component));

// <MenuItem><Link to='/'>Logo</Link></MenuItem>

exports.default = TopNav;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1RvcE5hdi9Ub3BOYXYuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVG9wTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTkE7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7OzZCQUtXO0FBQ1A7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxPQUFPLENBQWY7QUFDRSxtRUFBTSxXQUFVLE1BQWhCO0FBREYsV0FERjtBQU1FLG1FQUFRLE9BQU8sRUFBZjtBQU5GO0FBREYsT0FERjtBQWNEOzs7RUFuQmtCLGdCQUFNQSxTOztBQXVCM0I7O2tCQUVlQyxNIiwiZmlsZSI6IlRvcE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUm93LCBDb2x1bW4sIE1lbnUsIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbidcbi8vaW1wb3J0IHsgTWVCb3ggfSBmcm9tICdib29zaC1yZWFjdC1hdXRoJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgVG9wTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy9pZiAoIXRoaXMucHJvcHMuaXRlbXMpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXZcIj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgPENvbHVtbiBzbWFsbD17MX0+XG4gICAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJsZWZ0XCI+XG5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXsxMX0+XG4gICAgICAgICAgICB7IC8qIDxNZUJveC8+ICovIH1cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuLy8gPE1lbnVJdGVtPjxMaW5rIHRvPScvJz5Mb2dvPC9MaW5rPjwvTWVudUl0ZW0+XG5cbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjtcbiJdfQ==