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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ExampleComponent: {
    displayName: 'ExampleComponent'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/ExampleComponent/ExampleComponent.js',
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
//import User from '../../Components/User'

var ExampleComponent = _wrapComponent('ExampleComponent')(function (_React$Component) {
  (0, _inherits3.default)(ExampleComponent, _React$Component);

  function ExampleComponent() {
    (0, _classCallCheck3.default)(this, ExampleComponent);
    return (0, _possibleConstructorReturn3.default)(this, (ExampleComponent.__proto__ || (0, _getPrototypeOf2.default)(ExampleComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExampleComponent, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;


      return _react3.default.createElement('div', { className: 'ExampleComponent' });
    }
  }]);
  return ExampleComponent;
}(_react3.default.Component));

ExampleComponent.propTypes = {
  //me: React.PropTypes.object
};

ExampleComponent.defaultProps = {
  //me: {}
};

exports.default = ExampleComponent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQvRXhhbXBsZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwicHJvcHMiLCJDb21wb25lbnQiLCJFeGFtcGxlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs2QkFJVztBQUFBLFVBRURBLElBRkMsR0FFUSxLQUFLQyxLQUZiLENBRURELElBRkM7OztBQUlQLGFBQ0UsdUNBQUssV0FBVyxrQkFBaEIsR0FERjtBQUtEOzs7RUFYNEIsZ0JBQU1FLFM7O0FBZXJDQyxpQkFBaUJDLFNBQWpCLEdBQTZCO0FBQzNCO0FBRDJCLENBQTdCOztBQUlBRCxpQkFBaUJFLFlBQWpCLEdBQWdDO0FBQzlCO0FBRDhCLENBQWhDOztrQkFJZUYsZ0IiLCJmaWxlIjoiRXhhbXBsZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbi8vaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Vc2VyJ1xuXG5jbGFzcyBFeGFtcGxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnRXhhbXBsZUNvbXBvbmVudCd9ID5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkV4YW1wbGVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvL21lOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbkV4YW1wbGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAvL21lOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlQ29tcG9uZW50XG5cbiJdfQ==