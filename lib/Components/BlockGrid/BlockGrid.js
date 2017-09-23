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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var BlockGrid = function (_React$Component) {
  (0, _inherits3.default)(BlockGrid, _React$Component);

  function BlockGrid() {
    (0, _classCallCheck3.default)(this, BlockGrid);
    return (0, _possibleConstructorReturn3.default)(this, (BlockGrid.__proto__ || (0, _getPrototypeOf2.default)(BlockGrid)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlockGrid, [{
    key: 'renderItem',
    value: function renderItem(id, item) {
      return _react2.default.createElement(
        _reactRouter.Link,
        { to: item.url },
        _react2.default.createElement(
          'h4',
          null,
          item.title
        ),
        _react2.default.createElement('img', { src: item.img }),
        _react2.default.createElement(
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

      return _react2.default.createElement(
        _reactFoundation.Row,
        { upOnSmall: 2, upOnMedium: 3, upOnLarge: 5 },
        this.props.data.map(function (item, id) {
          return _react2.default.createElement(
            _reactFoundation.Column,
            null,
            _this2.renderItem(id, item)
          );
        })
      );
    }
  }]);
  return BlockGrid;
}(_react2.default.Component);
/* React */


exports.default = BlockGrid;