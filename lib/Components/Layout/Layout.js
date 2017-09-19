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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _TopNav = require('../TopNav/TopNav');

var _TopNav2 = _interopRequireDefault(_TopNav);

var _Hamburger = require('../Hamburger/Hamburger');

var _Hamburger2 = _interopRequireDefault(_Hamburger);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Layout: {
    displayName: 'Layout'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Layout/Layout.js',
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


//import { LightBox } from 'boosh-react-lightbox';

var Layout = _wrapComponent('Layout')(function (_React$Component) {
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

      return _react3.default.createElement(
        'div',
        { id: 'outer-container', className: 'layout' },
        _react3.default.createElement(_Hamburger2.default, { nav_items: app.nav }),
        _react3.default.createElement(
          'div',
          { id: 'page-wrap' },
          _react3.default.createElement(
            'div',
            { className: 'fixed-top' },
            _react3.default.createElement(_TopNav2.default, null),
            _react3.default.createElement(_Header2.default, { logo_url: app.logo, site_name: app.name, nav_items: app.nav })
          ),
          _react3.default.createElement('main', rest),
          _react3.default.createElement(_Footer2.default, { copyright: 'Copyright 2017', address: '' })
        )
      );
    }
  }]);
  return Layout;
}(_react3.default.Component));

Layout.propTypes = {
  app: _react3.default.PropTypes.object
};

Layout.defaultProps = {
  app: {}
};

exports.default = Layout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsicHJvcHMiLCJhcHAiLCJyZXN0IiwibmF2IiwibG9nbyIsIm5hbWUiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTs7O0FBR0E7OztBQUtBOzs7Ozs7Ozs7Ozs7NkJBSVc7QUFBQSxtQkFDaUIsS0FBS0EsS0FEdEI7QUFBQSxVQUNDQyxHQURELFVBQ0NBLEdBREQ7QUFBQSxVQUNRQyxJQURSOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssSUFBRyxpQkFBUixFQUEwQixXQUFVLFFBQXBDO0FBQ0UsNkRBQVcsV0FBV0QsSUFBSUUsR0FBMUIsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFLGlFQURGO0FBRUUsOERBQVEsVUFBVUYsSUFBSUcsSUFBdEIsRUFBNEIsV0FBV0gsSUFBSUksSUFBM0MsRUFBaUQsV0FBV0osSUFBSUUsR0FBaEU7QUFGRixXQURGO0FBS0UsZ0RBQVVELElBQVYsQ0FMRjtBQU1FLDREQUFRLFdBQVcsZ0JBQW5CLEVBQXFDLFNBQVMsRUFBOUM7QUFORjtBQUZGLE9BREY7QUFjRDs7O0VBbEJrQixnQkFBTUksUzs7QUFxQjNCQyxPQUFPQyxTQUFQLEdBQW1CO0FBQ2pCUCxPQUFLLGdCQUFNUSxTQUFOLENBQWdCQztBQURKLENBQW5COztBQUlBSCxPQUFPSSxZQUFQLEdBQXNCO0FBQ3BCVixPQUFLO0FBRGUsQ0FBdEI7O2tCQUllTSxNIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBUb3BOYXYgZnJvbSAnLi4vVG9wTmF2L1RvcE5hdic7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4uL0hhbWJ1cmdlci9IYW1idXJnZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XG4vL2ltcG9ydCB7IExpZ2h0Qm94IH0gZnJvbSAnYm9vc2gtcmVhY3QtbGlnaHRib3gnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFwcCwuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJvdXRlci1jb250YWluZXJcIiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPEhhbWJ1cmdlciBuYXZfaXRlbXM9e2FwcC5uYXZ9Lz5cbiAgICAgICAgPGRpdiBpZD1cInBhZ2Utd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCI+XG4gICAgICAgICAgICA8VG9wTmF2Lz5cbiAgICAgICAgICAgIDxIZWFkZXIgbG9nb191cmw9e2FwcC5sb2dvfSBzaXRlX25hbWU9e2FwcC5uYW1lfSBuYXZfaXRlbXM9e2FwcC5uYXZ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bWFpbiB7Li4ucmVzdH0vPlxuICAgICAgICAgIDxGb290ZXIgY29weXJpZ2h0PXsnQ29weXJpZ2h0IDIwMTcnfSBhZGRyZXNzPXsnJ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyAvKiA8TGlnaHRCb3gvPiAqLyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGFwcDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufVxuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBhcHA6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ==