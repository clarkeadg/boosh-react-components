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
  Ad: {
    displayName: 'Ad'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Ad/Ad.js',
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


var Ad = _wrapComponent('Ad')(function (_React$Component) {
  (0, _inherits3.default)(Ad, _React$Component);

  function Ad() {
    (0, _classCallCheck3.default)(this, Ad);
    return (0, _possibleConstructorReturn3.default)(this, (Ad.__proto__ || (0, _getPrototypeOf2.default)(Ad)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ad, [{
    key: 'render',
    value: function render() {

      var imgSource = this.props.imgSource;
      if (!imgSource) return false;

      return _react3.default.createElement(
        'div',
        { className: 'ad' },
        _react3.default.createElement(
          'a',
          { href: '#' },
          _react3.default.createElement('img', { src: imgSource })
        )
      );
    }
  }]);
  return Ad;
}(_react3.default.Component));

exports.default = Ad;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FkL0FkLmpzIl0sIm5hbWVzIjpbImltZ1NvdXJjZSIsInByb3BzIiwiQ29tcG9uZW50IiwiQWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7NkJBTVc7O0FBRVAsVUFBSUEsWUFBWSxLQUFLQyxLQUFMLENBQVdELFNBQTNCO0FBQ0EsVUFBSSxDQUFDQSxTQUFMLEVBQWdCLE9BQU8sS0FBUDs7QUFFaEIsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLElBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVI7QUFBWSxpREFBSyxLQUFLQSxTQUFWO0FBQVo7QUFERixPQURGO0FBS0Q7OztFQVpjLGdCQUFNRSxTOztrQkFlUkMsRSIsImZpbGUiOiJBZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUm93LCBDb2x1bW4gfSBmcm9tICdyZWFjdC1mb3VuZGF0aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIEFkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgaW1nU291cmNlID0gdGhpcy5wcm9wcy5pbWdTb3VyY2U7XG4gICAgaWYgKCFpbWdTb3VyY2UpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9e2ltZ1NvdXJjZX0vPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWQ7XG4iXX0=