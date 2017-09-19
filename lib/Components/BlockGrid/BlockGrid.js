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
  BlockGrid: {
    displayName: 'BlockGrid'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/BlockGrid/BlockGrid.js',
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


var BlockGrid = _wrapComponent('BlockGrid')(function (_React$Component) {
  (0, _inherits3.default)(BlockGrid, _React$Component);

  function BlockGrid() {
    (0, _classCallCheck3.default)(this, BlockGrid);
    return (0, _possibleConstructorReturn3.default)(this, (BlockGrid.__proto__ || (0, _getPrototypeOf2.default)(BlockGrid)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlockGrid, [{
    key: 'renderItem',
    value: function renderItem(id, item) {
      return _react3.default.createElement(
        _reactRouter.Link,
        { to: item.url },
        _react3.default.createElement(
          'h4',
          null,
          item.title
        ),
        _react3.default.createElement('img', { src: item.img }),
        _react3.default.createElement(
          'h6',
          null,
          item.desc
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        _reactFoundation.Row,
        { upOnSmall: 2, upOnMedium: 3, upOnLarge: 5 },
        this.props.data.map(function (item, id) {
          return _react3.default.createElement(
            _reactFoundation.Column,
            null,
            _this2.renderItem(id, item)
          );
        })
      );
    }
  }]);
  return BlockGrid;
}(_react3.default.Component));

exports.default = BlockGrid;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0Jsb2NrR3JpZC9CbG9ja0dyaWQuanMiXSwibmFtZXMiOlsiaWQiLCJpdGVtIiwidXJsIiwidGl0bGUiLCJpbWciLCJkZXNjIiwicHJvcHMiLCJkYXRhIiwibWFwIiwicmVuZGVySXRlbSIsIkNvbXBvbmVudCIsIkJsb2NrR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBOzs7QUFHQTs7Ozs7Ozs7Ozs7OzsrQkFNYUEsRSxFQUFJQyxJLEVBQU07QUFDbkIsYUFDRTtBQUFBO0FBQUEsVUFBTSxJQUFJQSxLQUFLQyxHQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtELGVBQUtFO0FBQVYsU0FERjtBQUVFLCtDQUFLLEtBQUtGLEtBQUtHLEdBQWYsR0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLSCxlQUFLSTtBQUFWO0FBSEYsT0FERjtBQU9EOzs7NkJBRVE7QUFBQTs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsQ0FBaEIsRUFBbUIsWUFBWSxDQUEvQixFQUFrQyxXQUFXLENBQTdDO0FBQ0csYUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDUCxJQUFELEVBQU1ELEVBQU4sRUFBYTtBQUNoQyxpQkFDRTtBQUFBO0FBQUE7QUFDRyxtQkFBS1MsVUFBTCxDQUFnQlQsRUFBaEIsRUFBb0JDLElBQXBCO0FBREgsV0FERjtBQUtELFNBTkE7QUFESCxPQURGO0FBV0Q7OztFQXpCcUIsZ0JBQU1TLFM7O2tCQTRCZkMsUyIsImZpbGUiOiJCbG9ja0dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFJvdywgQ29sdW1uIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBCbG9ja0dyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlckl0ZW0oaWQsIGl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2l0ZW0udXJsfT5cbiAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gLz5cbiAgICAgICAgPGg2PntpdGVtLmRlc2N9PC9oNj5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyB1cE9uU21hbGw9ezJ9IHVwT25NZWRpdW09ezN9IHVwT25MYXJnZT17NX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKChpdGVtLGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW0oaWQsIGl0ZW0pfVxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tHcmlkO1xuIl19