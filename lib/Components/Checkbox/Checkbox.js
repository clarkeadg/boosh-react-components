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
  Checkbox: {
    displayName: "Checkbox"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/Components/Checkbox/Checkbox.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Checkbox = _wrapComponent("Checkbox")(function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isChecked: false
    }, _this.toggleCheckboxChange = function () {
      var handleCheckboxChange = _this.props.handleCheckboxChange;


      _this.setState(function (_ref2) {
        var isChecked = _ref2.isChecked;
        return {
          isChecked: !isChecked
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: "render",
    value: function render() {
      var isChecked = this.state.isChecked;


      return _react3.default.createElement("input", {
        type: "checkbox",
        checked: isChecked,
        onChange: this.toggleCheckboxChange });
    }
  }]);
  return Checkbox;
}(_react3.default.Component));

exports.default = Checkbox;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiaXNDaGVja2VkIiwidG9nZ2xlQ2hlY2tib3hDaGFuZ2UiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsInByb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJDaGVja2JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnTkFHRUEsSyxHQUFRO0FBQ05DLGlCQUFXO0FBREwsSyxRQUlSQyxvQixHQUF1QixZQUFNO0FBQUEsVUFDbkJDLG9CQURtQixHQUNNLE1BQUtDLEtBRFgsQ0FDbkJELG9CQURtQjs7O0FBRzNCLFlBQUtFLFFBQUwsQ0FBYztBQUFBLFlBQUdKLFNBQUgsU0FBR0EsU0FBSDtBQUFBLGVBQ1o7QUFDRUEscUJBQVcsQ0FBQ0E7QUFEZCxTQURZO0FBQUEsT0FBZDtBQUtELEs7Ozs7OzZCQUVRO0FBQUEsVUFDQ0EsU0FERCxHQUNlLEtBQUtELEtBRHBCLENBQ0NDLFNBREQ7OztBQUdQLGFBQ0U7QUFDRSxjQUFLLFVBRFA7QUFFRSxpQkFBU0EsU0FGWDtBQUdFLGtCQUFVLEtBQUtDLG9CQUhqQixHQURGO0FBTUQ7OztFQXhCb0IsZ0JBQU1JLFM7O2tCQTJCZEMsUSIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICB9XG5cbiAgdG9nZ2xlQ2hlY2tib3hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVDaGVja2JveENoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoKHsgaXNDaGVja2VkIH0pID0+IChcbiAgICAgIHtcbiAgICAgICAgaXNDaGVja2VkOiAhaXNDaGVja2VkLFxuICAgICAgfVxuICAgICkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNDaGVja2VkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUNoZWNrYm94Q2hhbmdlfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=