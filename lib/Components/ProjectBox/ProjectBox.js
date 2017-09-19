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
  ProjectBox: {
    displayName: "ProjectBox"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/Components/ProjectBox/ProjectBox.js",
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

var ProjectBox = _wrapComponent("ProjectBox")(function (_React$Component) {
  (0, _inherits3.default)(ProjectBox, _React$Component);

  function ProjectBox() {
    (0, _classCallCheck3.default)(this, ProjectBox);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectBox.__proto__ || (0, _getPrototypeOf2.default)(ProjectBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectBox, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "projectbox itembox" },
        _react3.default.createElement("img", { src: this.props.img }),
        _react3.default.createElement("div", { className: "itembox-title", dangerouslySetInnerHTML: { __html: this.props.title } }),
        _react3.default.createElement("div", { className: "projectbox-company", dangerouslySetInnerHTML: { __html: this.props.company } }),
        _react3.default.createElement("div", { className: "projectbox-role", dangerouslySetInnerHTML: { __html: this.props.role } })
      );
    }
  }]);
  return ProjectBox;
}(_react3.default.Component));

exports.default = ProjectBox;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1Byb2plY3RCb3gvUHJvamVjdEJveC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImltZyIsIl9faHRtbCIsInRpdGxlIiwiY29tcGFueSIsInJvbGUiLCJDb21wb25lbnQiLCJQcm9qZWN0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7NkJBSVc7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRSwrQ0FBSyxLQUFLLEtBQUtBLEtBQUwsQ0FBV0MsR0FBckIsR0FERjtBQUVFLCtDQUFLLFdBQVUsZUFBZixFQUErQix5QkFBeUIsRUFBRUMsUUFBUSxLQUFLRixLQUFMLENBQVdHLEtBQXJCLEVBQXhELEdBRkY7QUFHRSwrQ0FBSyxXQUFVLG9CQUFmLEVBQW9DLHlCQUF5QixFQUFFRCxRQUFRLEtBQUtGLEtBQUwsQ0FBV0ksT0FBckIsRUFBN0QsR0FIRjtBQUlFLCtDQUFLLFdBQVUsaUJBQWYsRUFBaUMseUJBQXlCLEVBQUVGLFFBQVEsS0FBS0YsS0FBTCxDQUFXSyxJQUFyQixFQUExRDtBQUpGLE9BREY7QUFRRDs7O0VBWHNCLGdCQUFNQyxTOztrQkFlaEJDLFUiLCJmaWxlIjoiUHJvamVjdEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cblxuY2xhc3MgUHJvamVjdEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Rib3ggaXRlbWJveFwiPlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtYm94LXRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnRpdGxlIH19Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0Ym94LWNvbXBhbnlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuY29tcGFueSB9fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdGJveC1yb2xlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnJvbGUgfX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RCb3g7XG4iXX0=