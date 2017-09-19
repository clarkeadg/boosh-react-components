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

var _reactBurgerMenu = require('react-burger-menu');

var _reactBurgerMenu2 = _interopRequireDefault(_reactBurgerMenu);

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Hamburger: {
    displayName: 'Hamburger'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Hamburger/Hamburger.js',
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


// Pick an Animation
//const HamburgerMenu = BurgerMenu.slide;
var HamburgerMenu = _reactBurgerMenu2.default.stack;
//const HamburgerMenu = BurgerMenu.elastic;
//const HamburgerMenu = BurgerMenu.bubble;
//const HamburgerMenu = BurgerMenu.push;
//const HamburgerMenu = BurgerMenu.pushRotate;
//const HamburgerMenu = BurgerMenu.scaleDown;
//const HamburgerMenu = BurgerMenu.scaleRotate;
//const HamburgerMenu = BurgerMenu.fallDown;

var Hamburger = _wrapComponent('Hamburger')(function (_React$Component) {
  (0, _inherits3.default)(Hamburger, _React$Component);

  function Hamburger() {
    (0, _classCallCheck3.default)(this, Hamburger);
    return (0, _possibleConstructorReturn3.default)(this, (Hamburger.__proto__ || (0, _getPrototypeOf2.default)(Hamburger)).apply(this, arguments));
  }

  (0, _createClass3.default)(Hamburger, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'hamburger hide-for-large-x' },
        _react3.default.createElement(
          HamburgerMenu,
          { isOpen: false, pageWrapId: "page-wrap", outerContainerId: "outer-container" },
          _react3.default.createElement(_Nav2.default, { items: this.props.nav_items })
        )
      );
    }
  }]);
  return Hamburger;
}(_react3.default.Component));

exports.default = Hamburger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0hhbWJ1cmdlci9IYW1idXJnZXIuanMiXSwibmFtZXMiOlsiSGFtYnVyZ2VyTWVudSIsInN0YWNrIiwicHJvcHMiLCJuYXZfaXRlbXMiLCJDb21wb25lbnQiLCJIYW1idXJnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEE7OztBQUdBOzs7QUFJQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLDBCQUFXQyxLQUFqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7NkJBSVc7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsNEJBQWY7QUFDRTtBQUFDLHVCQUFEO0FBQUEsWUFBZSxRQUFRLEtBQXZCLEVBQThCLFlBQVksV0FBMUMsRUFBdUQsa0JBQWtCLGlCQUF6RTtBQUNFLHlEQUFLLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxTQUF2QjtBQURGO0FBREYsT0FERjtBQU9EOzs7RUFWcUIsZ0JBQU1DLFM7O2tCQWFmQyxTIiwiZmlsZSI6IkhhbWJ1cmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2L05hdic7XG5cbi8vIFBpY2sgYW4gQW5pbWF0aW9uXG4vL2NvbnN0IEhhbWJ1cmdlck1lbnUgPSBCdXJnZXJNZW51LnNsaWRlO1xuY29uc3QgSGFtYnVyZ2VyTWVudSA9IEJ1cmdlck1lbnUuc3RhY2s7XG4vL2NvbnN0IEhhbWJ1cmdlck1lbnUgPSBCdXJnZXJNZW51LmVsYXN0aWM7XG4vL2NvbnN0IEhhbWJ1cmdlck1lbnUgPSBCdXJnZXJNZW51LmJ1YmJsZTtcbi8vY29uc3QgSGFtYnVyZ2VyTWVudSA9IEJ1cmdlck1lbnUucHVzaDtcbi8vY29uc3QgSGFtYnVyZ2VyTWVudSA9IEJ1cmdlck1lbnUucHVzaFJvdGF0ZTtcbi8vY29uc3QgSGFtYnVyZ2VyTWVudSA9IEJ1cmdlck1lbnUuc2NhbGVEb3duO1xuLy9jb25zdCBIYW1idXJnZXJNZW51ID0gQnVyZ2VyTWVudS5zY2FsZVJvdGF0ZTtcbi8vY29uc3QgSGFtYnVyZ2VyTWVudSA9IEJ1cmdlck1lbnUuZmFsbERvd247XG5cbmNsYXNzIEhhbWJ1cmdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlciBoaWRlLWZvci1sYXJnZS14XCI+XG4gICAgICAgIDxIYW1idXJnZXJNZW51IGlzT3Blbj17ZmFsc2V9IHBhZ2VXcmFwSWQ9e1wicGFnZS13cmFwXCJ9IG91dGVyQ29udGFpbmVySWQ9e1wib3V0ZXItY29udGFpbmVyXCJ9PlxuICAgICAgICAgIDxOYXYgaXRlbXM9e3RoaXMucHJvcHMubmF2X2l0ZW1zfS8+XG4gICAgICAgIDwvSGFtYnVyZ2VyTWVudT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xuXG4iXX0=