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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _ProjectBox = require('../ProjectBox/ProjectBox');

var _ProjectBox2 = _interopRequireDefault(_ProjectBox);

var _ItemBox = require('../ItemBox/ItemBox');

var _ItemBox2 = _interopRequireDefault(_ItemBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  List: {
    displayName: 'List'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/List/List.js',
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


var List = _wrapComponent('List')(function (_React$Component) {
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
          return _react3.default.createElement(_ProjectBox2.default, (0, _extends3.default)({ key: id }, item));
          break;
        case "ItemBox":
          return _react3.default.createElement(_ItemBox2.default, (0, _extends3.default)({ key: id }, item));
          break;
        default:
          return _react3.default.createElement(
            'div',
            { className: 'item' },
            _react3.default.createElement(
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

      return _react3.default.createElement(
        'div',
        { className: 'list' },
        this.props.data.map(function (item, id) {
          return _this2.renderItem(id, item, _this2.props.itemType);
        })
      );
    }
  }]);
  return List;
}(_react3.default.Component));

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0xpc3QvTGlzdC5qcyJdLCJuYW1lcyI6WyJpZCIsIml0ZW0iLCJpdGVtVHlwZSIsInRpdGxlIiwicHJvcHMiLCJkYXRhIiwibWFwIiwicmVuZGVySXRlbSIsIkNvbXBvbmVudCIsIkxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBOzs7QUFHQTs7Ozs7Ozs7Ozs7OzsrQkFNYUEsRSxFQUFJQyxJLEVBQU1DLFEsRUFBVTtBQUM3QixjQUFPQSxRQUFQO0FBQ0UsYUFBSyxZQUFMO0FBQ0UsaUJBQ0UsNkVBQVksS0FBS0YsRUFBakIsSUFBeUJDLElBQXpCLEVBREY7QUFHRjtBQUNBLGFBQUssU0FBTDtBQUNFLGlCQUNFLDBFQUFTLEtBQUtELEVBQWQsSUFBc0JDLElBQXRCLEVBREY7QUFHRjtBQUNBO0FBQ0UsaUJBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLG1CQUFLRTtBQUFWO0FBREYsV0FERjtBQUtGO0FBakJGO0FBbUJEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXRixRQUFoQixFQUEwQixPQUFPLEtBQVA7O0FBRTFCLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0csYUFBS0UsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDTCxJQUFELEVBQU1ELEVBQU4sRUFBYTtBQUNoQyxpQkFBTyxPQUFLTyxVQUFMLENBQWdCUCxFQUFoQixFQUFvQkMsSUFBcEIsRUFBMEIsT0FBS0csS0FBTCxDQUFXRixRQUFyQyxDQUFQO0FBQ0QsU0FGQTtBQURILE9BREY7QUFPRDs7O0VBbENnQixnQkFBTU0sUzs7a0JBcUNWQyxJIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBQcm9qZWN0Qm94IGZyb20gJy4uL1Byb2plY3RCb3gvUHJvamVjdEJveCdcbmltcG9ydCBJdGVtQm94IGZyb20gJy4uL0l0ZW1Cb3gvSXRlbUJveCdcblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVySXRlbShpZCwgaXRlbSwgaXRlbVR5cGUpIHtcbiAgICBzd2l0Y2goaXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgXCJQcm9qZWN0Qm94XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFByb2plY3RCb3gga2V5PXtpZH0gey4uLml0ZW19IC8+XG4gICAgICAgIClcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkl0ZW1Cb3hcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbUJveCBrZXk9e2lkfSB7Li4uaXRlbX0gLz5cbiAgICAgICAgKVxuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXRlbVR5cGUpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJdGVtKGlkLCBpdGVtLCB0aGlzLnByb3BzLml0ZW1UeXBlKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==