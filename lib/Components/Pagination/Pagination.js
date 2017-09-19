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
  Pagination: {
    displayName: 'Pagination'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Pagination/Pagination.js',
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


var Pagination = _wrapComponent('Pagination')(function (_React$Component) {
  (0, _inherits3.default)(Pagination, _React$Component);

  function Pagination() {
    (0, _classCallCheck3.default)(this, Pagination);
    return (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          pageNumber = _props.pageNumber,
          count = _props.count;

      var per_page = this.props.per_page || 10;
      var pager = this.props.pager || "numbers";

      //console.log('PAGINATION COMPONENT', this.props, pageNumber, count, path)

      var currentPage = 1;
      var totalPages = Math.ceil(count / per_page);

      var pages = [];
      if (totalPages > 1) {
        for (var i = 1; i <= totalPages; i++) {
          if (i === +pageNumber) {
            pages.push(_react3.default.createElement(
              _reactFoundation.PaginationItem,
              { key: i, isCurrent: true },
              i
            ));
          } else {
            pages.push(_react3.default.createElement(
              _reactFoundation.PaginationItem,
              { key: i },
              _react3.default.createElement(
                _reactRouter.Link,
                { to: path + i },
                i
              )
            ));
          }
        }
      }

      /*pages.push(
        <span key={totalPages+1}>
          Total: {count}
        </span>
      );*/

      if (pager == "numbers") {
        return _react3.default.createElement(
          _reactFoundation.Pagination,
          { 'aria-label': 'Pagination' },
          pages
        );
      }

      if (pager == "next") {
        if (pageNumber < totalPages) {
          return _react3.default.createElement(
            _reactFoundation.Pagination,
            { 'aria-label': 'Pagination', className: 'pagination-next' },
            _react3.default.createElement(
              _reactFoundation.PaginationItem,
              null,
              _react3.default.createElement(
                _reactRouter.Link,
                { to: path + (pageNumber + 1) },
                'Next Page'
              )
            )
          );
        }
      }

      return false;

      /*return (
        <ReactPagination aria-label="Pagination">
          <PaginationPrevious isDisabled>Previous</PaginationPrevious>
          <PaginationItem isCurrent>1</PaginationItem>
          <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
          <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
          <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
          <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
          <PaginationNext><a aria-label="Next page">Next</a></PaginationNext>
        </ReactPagination>
      );*/
    }
  }]);
  return Pagination;
}(_react3.default.Component));

Pagination.propTypes = {
  count: _react3.default.PropTypes.number,
  pageNumber: _react3.default.PropTypes.number,
  path: _react3.default.PropTypes.string
};

Pagination.defaultProps = {
  count: 0,
  pageNumber: 1,
  path: "/"
};

exports.default = Pagination;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInBhdGgiLCJwYWdlTnVtYmVyIiwiY291bnQiLCJwZXJfcGFnZSIsInBhZ2VyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJwYWdlcyIsImkiLCJwdXNoIiwiQ29tcG9uZW50IiwiUGFnaW5hdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs2QkFNVztBQUFBLG1CQUUyQixLQUFLQSxLQUZoQztBQUFBLFVBRURDLElBRkMsVUFFREEsSUFGQztBQUFBLFVBRUtDLFVBRkwsVUFFS0EsVUFGTDtBQUFBLFVBRWlCQyxLQUZqQixVQUVpQkEsS0FGakI7O0FBR1AsVUFBSUMsV0FBVyxLQUFLSixLQUFMLENBQVdJLFFBQVgsSUFBdUIsRUFBdEM7QUFDQSxVQUFJQyxRQUFRLEtBQUtMLEtBQUwsQ0FBV0ssS0FBWCxJQUFvQixTQUFoQzs7QUFFQTs7QUFFQSxVQUFJQyxjQUFjLENBQWxCO0FBQ0EsVUFBSUMsYUFBYUMsS0FBS0MsSUFBTCxDQUFVTixRQUFNQyxRQUFoQixDQUFqQjs7QUFFQSxVQUFJTSxRQUFRLEVBQVo7QUFDQSxVQUFJSCxhQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGFBQUksSUFBSUksSUFBSSxDQUFaLEVBQWVBLEtBQUdKLFVBQWxCLEVBQThCSSxHQUE5QixFQUFtQztBQUNqQyxjQUFJQSxNQUFNLENBQUNULFVBQVgsRUFBdUI7QUFDckJRLGtCQUFNRSxJQUFOLENBQ0U7QUFBQTtBQUFBLGdCQUFnQixLQUFLRCxDQUFyQixFQUF3QixlQUF4QjtBQUFtQ0E7QUFBbkMsYUFERjtBQUdELFdBSkQsTUFJTztBQUNMRCxrQkFBTUUsSUFBTixDQUNFO0FBQUE7QUFBQSxnQkFBZ0IsS0FBS0QsQ0FBckI7QUFDRTtBQUFBO0FBQUEsa0JBQU0sSUFBSVYsT0FBS1UsQ0FBZjtBQUFtQkE7QUFBbkI7QUFERixhQURGO0FBS0Q7QUFDRjtBQUNGOztBQUVEOzs7Ozs7QUFNQSxVQUFJTixTQUFTLFNBQWIsRUFBd0I7QUFDdEIsZUFDRTtBQUFBO0FBQUEsWUFBaUIsY0FBVyxZQUE1QjtBQUNJSztBQURKLFNBREY7QUFLRDs7QUFFRCxVQUFJTCxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsWUFBSUgsYUFBYUssVUFBakIsRUFBNkI7QUFDM0IsaUJBQ0U7QUFBQTtBQUFBLGNBQWlCLGNBQVcsWUFBNUIsRUFBeUMsV0FBVSxpQkFBbkQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQU0sSUFBSU4sUUFBTUMsYUFBVyxDQUFqQixDQUFWO0FBQUE7QUFBQTtBQURGO0FBREYsV0FERjtBQU9EO0FBQ0Y7O0FBRUQsYUFBTyxLQUFQOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUQ7OztFQXZFc0IsZ0JBQU1XLFM7O0FBMkUvQkMsV0FBV0MsU0FBWCxHQUF1QjtBQUNyQlosU0FBTyxnQkFBTWEsU0FBTixDQUFnQkMsTUFERjtBQUVyQmYsY0FBWSxnQkFBTWMsU0FBTixDQUFnQkMsTUFGUDtBQUdyQmhCLFFBQU0sZ0JBQU1lLFNBQU4sQ0FBZ0JFO0FBSEQsQ0FBdkI7O0FBTUFKLFdBQVdLLFlBQVgsR0FBMEI7QUFDeEJoQixTQUFPLENBRGlCO0FBRXhCRCxjQUFZLENBRlk7QUFHeEJELFFBQU07QUFIa0IsQ0FBMUI7O2tCQU1lYSxVIiwiZmlsZSI6IlBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdpbmF0aW9uIGFzIFJlYWN0UGFnaW5hdGlvbiwgUGFnaW5hdGlvbk5leHQsIFBhZ2luYXRpb25QcmV2aW91cywgUGFnaW5hdGlvbkl0ZW0sIFBhZ2luYXRpb25FbGxpcHNpcyB9IGZyb20gJ3JlYWN0LWZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHsgcGF0aCwgcGFnZU51bWJlciwgY291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcGVyX3BhZ2UgPSB0aGlzLnByb3BzLnBlcl9wYWdlIHx8IDEwO1xuICAgIGxldCBwYWdlciA9IHRoaXMucHJvcHMucGFnZXIgfHwgXCJudW1iZXJzXCI7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdQQUdJTkFUSU9OIENPTVBPTkVOVCcsIHRoaXMucHJvcHMsIHBhZ2VOdW1iZXIsIGNvdW50LCBwYXRoKVxuXG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMTtcbiAgICBsZXQgdG90YWxQYWdlcyA9IE1hdGguY2VpbChjb3VudC9wZXJfcGFnZSk7XG5cbiAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICBpZiAodG90YWxQYWdlcyA+IDEpIHtcbiAgICAgIGZvcihsZXQgaSA9IDE7IGk8PXRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gK3BhZ2VOdW1iZXIpIHtcbiAgICAgICAgICBwYWdlcy5wdXNoKFxuICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIGtleT17aX0gaXNDdXJyZW50PntpfTwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlcy5wdXNoKFxuICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRoK2l9PntpfTwvTGluaz5cbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qcGFnZXMucHVzaChcbiAgICAgIDxzcGFuIGtleT17dG90YWxQYWdlcysxfT5cbiAgICAgICAgVG90YWw6IHtjb3VudH1cbiAgICAgIDwvc3Bhbj5cbiAgICApOyovXG5cbiAgICBpZiAocGFnZXIgPT0gXCJudW1iZXJzXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdFBhZ2luYXRpb24gYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIj5cbiAgICAgICAgICB7IHBhZ2VzIH1cbiAgICAgICAgPC9SZWFjdFBhZ2luYXRpb24+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwYWdlciA9PSBcIm5leHRcIikge1xuICAgICAgaWYgKHBhZ2VOdW1iZXIgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0UGFnaW5hdGlvbiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgICA8TGluayB0bz17cGF0aCsocGFnZU51bWJlcisxKX0+TmV4dCBQYWdlPC9MaW5rPlxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICA8L1JlYWN0UGFnaW5hdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvKnJldHVybiAoXG4gICAgICA8UmVhY3RQYWdpbmF0aW9uIGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCI+XG4gICAgICAgIDxQYWdpbmF0aW9uUHJldmlvdXMgaXNEaXNhYmxlZD5QcmV2aW91czwvUGFnaW5hdGlvblByZXZpb3VzPlxuICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gaXNDdXJyZW50PjE8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+PGEgYXJpYS1sYWJlbD1cIlBhZ2UgMlwiPjI8L2E+PC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgPFBhZ2luYXRpb25JdGVtPjxhIGFyaWEtbGFiZWw9XCJQYWdlIDNcIj4zPC9hPjwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbT48YSBhcmlhLWxhYmVsPVwiUGFnZSA0XCI+NDwvYT48L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICA8UGFnaW5hdGlvbkVsbGlwc2lzLz5cbiAgICAgICAgPFBhZ2luYXRpb25JdGVtPjxhIGFyaWEtbGFiZWw9XCJQYWdlIDEyXCI+MTI8L2E+PC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgPFBhZ2luYXRpb25JdGVtPjxhIGFyaWEtbGFiZWw9XCJQYWdlIDEzXCI+MTM8L2E+PC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgPFBhZ2luYXRpb25OZXh0PjxhIGFyaWEtbGFiZWw9XCJOZXh0IHBhZ2VcIj5OZXh0PC9hPjwvUGFnaW5hdGlvbk5leHQ+XG4gICAgICA8L1JlYWN0UGFnaW5hdGlvbj5cbiAgICApOyovXG4gIH1cblxufVxuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgY291bnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHBhZ2VOdW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHBhdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn1cblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvdW50OiAwLFxuICBwYWdlTnVtYmVyOiAxLFxuICBwYXRoOiBcIi9cIlxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG5cbiJdfQ==