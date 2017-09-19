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
  Footer: {
    displayName: 'Footer'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Footer/Footer.js',
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


var Footer = _wrapComponent('Footer')(function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'footer',
        null,
        _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/pages/safety' },
              'Safety'
            ),
            ' | ',
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/pages/terms' },
              'Terms of Service'
            ),
            ' | ',
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/pages/privacy' },
              'Privacy Policy'
            ),
            _react3.default.createElement(
              'div',
              { className: 'copyright' },
              this.props.copyright
            ),
            _react3.default.createElement(
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
}(_react3.default.Component));

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

exports.default = Footer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJjb3B5cmlnaHQiLCJhZGRyZXNzIiwiQ29tcG9uZW50IiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEE7OztBQUdBOzs7Ozs7Ozs7Ozs7OzZCQU1XO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxPQUFPLEVBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sSUFBSSxlQUFWO0FBQUE7QUFBQSxhQURGO0FBRUcsaUJBRkg7QUFHRTtBQUFBO0FBQUEsZ0JBQU0sSUFBSSxjQUFWO0FBQUE7QUFBQSxhQUhGO0FBSUcsaUJBSkg7QUFLRTtBQUFBO0FBQUEsZ0JBQU0sSUFBSSxnQkFBVjtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFBNEIsbUJBQUtBLEtBQUwsQ0FBV0M7QUFBdkMsYUFORjtBQU9FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFNBQWY7QUFBMEIsbUJBQUtELEtBQUwsQ0FBV0U7QUFBckM7QUFQRjtBQURGO0FBREYsT0FERjtBQWVEOzs7RUFsQmtCLGdCQUFNQyxTOztBQXFCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkEyQmVDLE0iLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUm93LCBDb2x1bW4sIE1lbnUsIE1lbnVJdGVtLCBBbGlnbm1lbnRzIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgPENvbHVtbiBzbWFsbD17MTJ9PlxuICAgICAgICAgICAgPExpbmsgdG89eycvcGFnZXMvc2FmZXR5J30+U2FmZXR5PC9MaW5rPlxuICAgICAgICAgICAgeycgfCAnfVxuICAgICAgICAgICAgPExpbmsgdG89eycvcGFnZXMvdGVybXMnfT5UZXJtcyBvZiBTZXJ2aWNlPC9MaW5rPlxuICAgICAgICAgICAgeycgfCAnfVxuICAgICAgICAgICAgPExpbmsgdG89eycvcGFnZXMvcHJpdmFjeSd9PlByaXZhY3kgUG9saWN5PC9MaW5rPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj57dGhpcy5wcm9wcy5jb3B5cmlnaHR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NcIj57dGhpcy5wcm9wcy5hZGRyZXNzfTwvZGl2PlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZm9vdGVyPlxuICAgICk7XG4gIH1cbn1cblxuLypcbjxmb290ZXI+XG4gIDxSb3cgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxuICAgIDxDb2x1bW4gc21hbGw9ezEyfSBtZWRpdW09ezZ9PlxuICAgICAgPE1lbnUgaXNWZXJ0aWNhbD5cbiAgICAgICAgPE1lbnVJdGVtPjxMaW5rIHRvPXsnL211c2ljJ30+TXVzaWMgVmlkZW9zPC9MaW5rPjwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbT48TGluayB0bz17Jy9nYW1lL3NvbmljJ30+U29uaWMgdGhlIEhlZGdlaG9nPC9MaW5rPjwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC9Db2x1bW4+XG4gICAgPENvbHVtbiBzbWFsbD17MTJ9IG1lZGl1bT17Nn0+XG4gICAgICA8TWVudSBpc1ZlcnRpY2FsID5cbiAgICAgICAgPE1lbnVJdGVtPjxMaW5rIHRvPXsnL3NldHRpbmdzJ30+QWNjb3VudDwvTGluaz48L01lbnVJdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvQ29sdW1uPlxuICA8L1Jvdz5cbiAgPFJvdyBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgPENvbHVtbiBzbWFsbD17MTJ9PlxuICAgICAgPExpbmsgdG89eycvcHJpdmFjeSd9PlByaXZhY3kgUG9saWN5PC9MaW5rPlxuICAgICAgeycgfCAnfVxuICAgICAgPExpbmsgdG89eycvdGVybXMnfT5UZXJtcyBvZiBTZXJ2aWNlPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj57dGhpcy5wcm9wcy5jb3B5cmlnaHR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NcIj57dGhpcy5wcm9wcy5hZGRyZXNzfTwvZGl2PlxuICAgIDwvQ29sdW1uPlxuICA8L1Jvdz5cbjwvZm9vdGVyPlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19