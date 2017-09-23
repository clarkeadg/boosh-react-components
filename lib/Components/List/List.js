'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ProjectBox = require('../ProjectBox/ProjectBox');

var _ProjectBox2 = _interopRequireDefault(_ProjectBox);

var _ItemBox = require('../ItemBox/ItemBox');

var _ItemBox2 = _interopRequireDefault(_ItemBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'renderItem',
    value: function renderItem(id, item, itemType) {
      switch (itemType) {
        case "ProjectBox":
          return _react2.default.createElement(_ProjectBox2.default, (0, _extends3.default)({ key: id }, item));
          break;
        case "ItemBox":
          return _react2.default.createElement(_ItemBox2.default, (0, _extends3.default)({ key: id }, item));
          break;
        default:
          return _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement(
              'h4',
              null,
              item.title
            )
          );
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.itemType) return false;

      return _react2.default.createElement(
        'div',
        { className: 'list' },
        this.props.data.map(function (item, id) {
          return _this2.renderItem(id, item, _this2.props.itemType);
        })
      );
    }
  }]);
  return List;
}(_react2.default.Component);
/* React */


exports.default = List;