"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ItemBox: {
    displayName: "ItemBox"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/Components/ItemBox/ItemBox.js",
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

var ItemBox = _wrapComponent("ItemBox")(function (_React$Component) {
  (0, _inherits3.default)(ItemBox, _React$Component);

  function ItemBox() {
    (0, _classCallCheck3.default)(this, ItemBox);
    return (0, _possibleConstructorReturn3.default)(this, (ItemBox.__proto__ || (0, _getPrototypeOf2.default)(ItemBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(ItemBox, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "itembox" },
        _react3.default.createElement("img", { src: this.props.img }),
        _react3.default.createElement("div", { className: "itembox-title", dangerouslySetInnerHTML: { __html: this.props.title } }),
        _react3.default.createElement("div", { className: "itembox-copy", dangerouslySetInnerHTML: { __html: this.props.copy } })
      );
    }
  }]);
  return ItemBox;
}(_react3.default.Component));

exports.default = ItemBox;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0l0ZW1Cb3gvSXRlbUJveC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImltZyIsIl9faHRtbCIsInRpdGxlIiwiY29weSIsIkNvbXBvbmVudCIsIkl0ZW1Cb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs2QkFJVztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0UsK0NBQUssS0FBSyxLQUFLQSxLQUFMLENBQVdDLEdBQXJCLEdBREY7QUFFRSwrQ0FBSyxXQUFVLGVBQWYsRUFBK0IseUJBQXlCLEVBQUVDLFFBQVEsS0FBS0YsS0FBTCxDQUFXRyxLQUFyQixFQUF4RCxHQUZGO0FBR0UsK0NBQUssV0FBVSxjQUFmLEVBQThCLHlCQUF5QixFQUFFRCxRQUFRLEtBQUtGLEtBQUwsQ0FBV0ksSUFBckIsRUFBdkQ7QUFIRixPQURGO0FBT0Q7OztFQVZtQixnQkFBTUMsUzs7a0JBY2JDLE8iLCJmaWxlIjoiSXRlbUJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cblxuY2xhc3MgSXRlbUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1nfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbWJveC10aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy50aXRsZSB9fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbWJveC1jb3B5XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNvcHkgfX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Cb3g7XG4iXX0=