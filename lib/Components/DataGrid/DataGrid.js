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

var _reactDataGrid = require('react-data-grid');

var _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  DataGrid: {
    displayName: 'DataGrid'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/DataGrid/DataGrid.js',
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

/* Grid Utilitites */
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

var DataGrid = _wrapComponent('DataGrid')(function (_React$Component) {
  (0, _inherits3.default)(DataGrid, _React$Component);

  function DataGrid() {
    (0, _classCallCheck3.default)(this, DataGrid);
    return (0, _possibleConstructorReturn3.default)(this, (DataGrid.__proto__ || (0, _getPrototypeOf2.default)(DataGrid)).apply(this, arguments));
  }

  (0, _createClass3.default)(DataGrid, [{
    key: 'render',
    value: function render() {
      if (typeof window == 'undefined') return false;

      return _react3.default.createElement(_reactDataGrid2.default, {
        columns: columns,
        rowGetter: rowGetter,
        rowsCount: _rows.length,
        minHeight: 500 });
    }
  }]);
  return DataGrid;
}(_react3.default.Component));

exports.default = DataGrid;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0RhdGFHcmlkL0RhdGFHcmlkLmpzIl0sIm5hbWVzIjpbIl9yb3dzIiwiaSIsInB1c2giLCJpZCIsInRpdGxlIiwiY291bnQiLCJyb3dHZXR0ZXIiLCJjb2x1bW5zIiwia2V5IiwibmFtZSIsIndpbmRvdyIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkRhdGFHcmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTs7O0FBSUE7O0FBRUE7QUFDQSxJQUFJQSxRQUFRLEVBQVo7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxHQUFwQixFQUF5QkEsR0FBekIsRUFBOEI7QUFDNUJELFFBQU1FLElBQU4sQ0FBVztBQUNUQyxRQUFJRixDQURLO0FBRVRHLHNCQUFnQkgsQ0FGUDtBQUdUSSxXQUFPSixJQUFJO0FBSEYsR0FBWDtBQUtEOztBQUVELElBQU1LLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQUtOLE1BQU1DLENBQU4sQ0FBTDtBQUFBLENBQWxCOztBQUVBLElBQUlNLFVBQVUsQ0FDWjtBQUNFQyxPQUFLLElBRFA7QUFFRUMsUUFBTTtBQUZSLENBRFksRUFLWjtBQUNFRCxPQUFLLE9BRFA7QUFFRUMsUUFBTTtBQUZSLENBTFksRUFTWjtBQUNFRCxPQUFLLE9BRFA7QUFFRUMsUUFBTTtBQUZSLENBVFksQ0FBZDs7Ozs7Ozs7Ozs7OzZCQWlCVztBQUNQLFVBQUcsT0FBT0MsTUFBUCxJQUFpQixXQUFwQixFQUFpQyxPQUFPLEtBQVA7O0FBRWpDLGFBQ0U7QUFDRSxpQkFBU0gsT0FEWDtBQUVFLG1CQUFXRCxTQUZiO0FBR0UsbUJBQVdOLE1BQU1XLE1BSG5CO0FBSUUsbUJBQVcsR0FKYixHQURGO0FBT0Q7OztFQVpvQixnQkFBTUMsUzs7a0JBZWRDLFEiLCJmaWxlIjoiRGF0YUdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3REYXRhR3JpZCBmcm9tICdyZWFjdC1kYXRhLWdyaWQnXG5cbi8qIENvbXBvbmVudHMgKi9cblxuLyogR3JpZCBVdGlsaXRpdGVzICovXG5sZXQgX3Jvd3MgPSBbXTtcbmZvciAobGV0IGkgPSAxOyBpIDwgMTAwOyBpKyspIHtcbiAgX3Jvd3MucHVzaCh7XG4gICAgaWQ6IGksXG4gICAgdGl0bGU6IGBUaXRsZSAke2l9YCxcbiAgICBjb3VudDogaSAqIDEwMDBcbiAgfSk7XG59XG5cbmNvbnN0IHJvd0dldHRlciA9IGkgPT4gX3Jvd3NbaV07XG5cbmxldCBjb2x1bW5zID0gW1xuICB7XG4gICAga2V5OiAnaWQnLFxuICAgIG5hbWU6ICdJRCdcbiAgfSxcbiAge1xuICAgIGtleTogJ3RpdGxlJyxcbiAgICBuYW1lOiAnVGl0bGUnXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjb3VudCcsXG4gICAgbmFtZTogJ0NvdW50J1xuICB9XG5dXG5cbmNsYXNzIERhdGFHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgaWYodHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3REYXRhR3JpZCBcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XG4gICAgICAgIHJvd3NDb3VudD17X3Jvd3MubGVuZ3RofVxuICAgICAgICBtaW5IZWlnaHQ9ezUwMH0gLz5cbiAgICApOyAgICAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhR3JpZDtcbiJdfQ==