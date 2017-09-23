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

var _reactDataGrid = require('react-data-grid');

var _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */

/* Grid Utilitites */

/* React */
var _rows = [];
for (var i = 1; i < 100; i++) {
  _rows.push({
    id: i,
    title: 'Title ' + i,
    count: i * 1000
  });
}

var rowGetter = function rowGetter(i) {
  return _rows[i];
};

var columns = [{
  key: 'id',
  name: 'ID'
}, {
  key: 'title',
  name: 'Title'
}, {
  key: 'count',
  name: 'Count'
}];

var DataGrid = function (_React$Component) {
  (0, _inherits3.default)(DataGrid, _React$Component);

  function DataGrid() {
    (0, _classCallCheck3.default)(this, DataGrid);
    return (0, _possibleConstructorReturn3.default)(this, (DataGrid.__proto__ || (0, _getPrototypeOf2.default)(DataGrid)).apply(this, arguments));
  }

  (0, _createClass3.default)(DataGrid, [{
    key: 'render',
    value: function render() {
      if (typeof window == 'undefined') return false;

      return _react2.default.createElement(_reactDataGrid2.default, {
        columns: columns,
        rowGetter: rowGetter,
        rowsCount: _rows.length,
        minHeight: 500 });
    }
  }]);
  return DataGrid;
}(_react2.default.Component);

exports.default = DataGrid;