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
  Portlet: {
    displayName: "Portlet"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/Components/Portlet/Portlet.js",
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

var Portlet = _wrapComponent("Portlet")(function (_React$Component) {
  (0, _inherits3.default)(Portlet, _React$Component);

  function Portlet() {
    (0, _classCallCheck3.default)(this, Portlet);
    return (0, _possibleConstructorReturn3.default)(this, (Portlet.__proto__ || (0, _getPrototypeOf2.default)(Portlet)).apply(this, arguments));
  }

  (0, _createClass3.default)(Portlet, [{
    key: "render",
    value: function render() {
      var myClass = "portlet";
      if (this.props.className) {
        myClass += " " + this.props.className;
      }
      if (this.props.cont) {
        return _react3.default.createElement(
          "div",
          { className: myClass },
          this.props.title ? _react3.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
          this.props.subtitle ? _react3.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
          _react3.default.createElement("div", { className: "portlet-cont", dangerouslySetInnerHTML: { __html: this.props.cont } })
        );
      }
      if (this.props.items) {
        return _react3.default.createElement(
          "div",
          { className: myClass },
          this.props.title ? _react3.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
          this.props.subtitle ? _react3.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
          _react3.default.createElement(
            "div",
            { className: "portlet-items" },
            this.props.items
          )
        );
      }
      return _react3.default.createElement(
        "div",
        { className: myClass },
        this.props.title ? _react3.default.createElement("div", { className: "portlet-title", dangerouslySetInnerHTML: { __html: this.props.title } }) : '',
        this.props.subtitle ? _react3.default.createElement("div", { className: "portlet-subtitle", dangerouslySetInnerHTML: { __html: this.props.subtitle } }) : '',
        _react3.default.createElement("div", { className: "portlet-cont" })
      );
    }
  }]);
  return Portlet;
}(_react3.default.Component));

exports.default = Portlet;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1BvcnRsZXQvUG9ydGxldC5qcyJdLCJuYW1lcyI6WyJteUNsYXNzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb250IiwidGl0bGUiLCJfX2h0bWwiLCJzdWJ0aXRsZSIsIml0ZW1zIiwiQ29tcG9uZW50IiwiUG9ydGxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7OzZCQUlXO0FBQ1AsVUFBSUEsVUFBVSxTQUFkO0FBQ0EsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFNBQWYsRUFBMEI7QUFDeEJGLG1CQUFVLE1BQUksS0FBS0MsS0FBTCxDQUFXQyxTQUF6QjtBQUNEO0FBQ0QsVUFBSSxLQUFLRCxLQUFMLENBQVdFLElBQWYsRUFBcUI7QUFDbkIsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFXSCxPQUFoQjtBQUNJLGVBQUtDLEtBQUwsQ0FBV0csS0FBWCxHQUFtQix1Q0FBSyxXQUFVLGVBQWYsRUFBK0IseUJBQXlCLEVBQUVDLFFBQVEsS0FBS0osS0FBTCxDQUFXRyxLQUFyQixFQUF4RCxHQUFuQixHQUE2RyxFQURqSDtBQUVJLGVBQUtILEtBQUwsQ0FBV0ssUUFBWCxHQUFzQix1Q0FBSyxXQUFVLGtCQUFmLEVBQWtDLHlCQUF5QixFQUFFRCxRQUFRLEtBQUtKLEtBQUwsQ0FBV0ssUUFBckIsRUFBM0QsR0FBdEIsR0FBc0gsRUFGMUg7QUFHRSxpREFBSyxXQUFVLGNBQWYsRUFBOEIseUJBQXlCLEVBQUVELFFBQVEsS0FBS0osS0FBTCxDQUFXRSxJQUFyQixFQUF2RDtBQUhGLFNBREY7QUFPRDtBQUNELFVBQUksS0FBS0YsS0FBTCxDQUFXTSxLQUFmLEVBQXNCO0FBQ3BCLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBV1AsT0FBaEI7QUFDSSxlQUFLQyxLQUFMLENBQVdHLEtBQVgsR0FBbUIsdUNBQUssV0FBVSxlQUFmLEVBQStCLHlCQUF5QixFQUFFQyxRQUFRLEtBQUtKLEtBQUwsQ0FBV0csS0FBckIsRUFBeEQsR0FBbkIsR0FBNkcsRUFEakg7QUFFSSxlQUFLSCxLQUFMLENBQVdLLFFBQVgsR0FBc0IsdUNBQUssV0FBVSxrQkFBZixFQUFrQyx5QkFBeUIsRUFBRUQsUUFBUSxLQUFLSixLQUFMLENBQVdLLFFBQXJCLEVBQTNELEdBQXRCLEdBQXNILEVBRjFIO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQWdDLGlCQUFLTCxLQUFMLENBQVdNO0FBQTNDO0FBSEYsU0FERjtBQU9EO0FBQ0QsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXUCxPQUFoQjtBQUNJLGFBQUtDLEtBQUwsQ0FBV0csS0FBWCxHQUFtQix1Q0FBSyxXQUFVLGVBQWYsRUFBK0IseUJBQXlCLEVBQUVDLFFBQVEsS0FBS0osS0FBTCxDQUFXRyxLQUFyQixFQUF4RCxHQUFuQixHQUE2RyxFQURqSDtBQUVJLGFBQUtILEtBQUwsQ0FBV0ssUUFBWCxHQUFzQix1Q0FBSyxXQUFVLGtCQUFmLEVBQWtDLHlCQUF5QixFQUFFRCxRQUFRLEtBQUtKLEtBQUwsQ0FBV0ssUUFBckIsRUFBM0QsR0FBdEIsR0FBc0gsRUFGMUg7QUFHRSwrQ0FBSyxXQUFVLGNBQWY7QUFIRixPQURGO0FBT0Q7OztFQWhDbUIsZ0JBQU1FLFM7O2tCQW9DYkMsTyIsImZpbGUiOiJQb3J0bGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuXG5jbGFzcyBQb3J0bGV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG15Q2xhc3MgPSBcInBvcnRsZXRcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIG15Q2xhc3MrPSBcIiBcIit0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuY29udCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e215Q2xhc3N9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy50aXRsZSA/IDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC10aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy50aXRsZSB9fS8+IDogJycgfVxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5zdWJ0aXRsZSA/IDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC1zdWJ0aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5zdWJ0aXRsZSB9fS8+IDogJycgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC1jb250XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNvbnQgfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlDbGFzc30+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLnRpdGxlID8gPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LXRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnRpdGxlIH19Lz4gOiAnJyB9XG4gICAgICAgICAgeyB0aGlzLnByb3BzLnN1YnRpdGxlID8gPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LXN1YnRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnN1YnRpdGxlIH19Lz4gOiAnJyB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LWl0ZW1zXCI+e3RoaXMucHJvcHMuaXRlbXN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtteUNsYXNzfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLnRpdGxlID8gPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LXRpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnRpdGxlIH19Lz4gOiAnJyB9XG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdWJ0aXRsZSA/IDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC1zdWJ0aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5zdWJ0aXRsZSB9fS8+IDogJycgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtY29udFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0bGV0O1xuIl19