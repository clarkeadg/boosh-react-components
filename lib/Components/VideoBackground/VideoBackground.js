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
  VideoBackground: {
    displayName: 'VideoBackground'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/VideoBackground/VideoBackground.js',
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

//import { MeBox } from 'boosh-react-auth'


var videos = ['dark-igloo-cat-1', 'dark-igloo-giphy-cat', 'dark-igloo-logo-explode', 'mathewlucas', 'peter-carlson-bots', 'savage-street', 'victorcourtright'];

var VideoBackground = _wrapComponent('VideoBackground')(function (_React$Component) {
  (0, _inherits3.default)(VideoBackground, _React$Component);

  function VideoBackground() {
    (0, _classCallCheck3.default)(this, VideoBackground);
    return (0, _possibleConstructorReturn3.default)(this, (VideoBackground.__proto__ || (0, _getPrototypeOf2.default)(VideoBackground)).apply(this, arguments));
  }

  (0, _createClass3.default)(VideoBackground, [{
    key: 'render',
    value: function render() {
      var video = this.props.video;

      if (!video) video = "//cdn.boosh.io/topmusicvideos/videos/" + videos[Math.floor(Math.random() * videos.length)];

      return _react3.default.createElement(
        'div',
        { className: 'video-background-wrapper' },
        _react3.default.createElement(
          'video',
          { className: 'video-background', preload: 'auto', autoPlay: 'autoplay', loop: 'loop' },
          _react3.default.createElement('source', { src: video + ".mp4", type: 'video/mp4' }),
          _react3.default.createElement('source', { src: video + ".webm", type: 'video/webm' })
        )
      );
    }
  }]);
  return VideoBackground;
}(_react3.default.Component));

exports.default = VideoBackground;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1ZpZGVvQmFja2dyb3VuZC9WaWRlb0JhY2tncm91bmQuanMiXSwibmFtZXMiOlsidmlkZW9zIiwidmlkZW8iLCJwcm9wcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIkNvbXBvbmVudCIsIlZpZGVvQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5BOzs7QUFHQTs7QUFFQTs7O0FBR0EsSUFBTUEsU0FBUyxDQUNiLGtCQURhLEVBRWIsc0JBRmEsRUFHYix5QkFIYSxFQUliLGFBSmEsRUFLYixvQkFMYSxFQU1iLGVBTmEsRUFPYixrQkFQYSxDQUFmOzs7Ozs7Ozs7Ozs7NkJBWVc7QUFBQSxVQUVEQyxLQUZDLEdBRVUsS0FBS0MsS0FGZixDQUVERCxLQUZDOztBQUdQLFVBQUksQ0FBQ0EsS0FBTCxFQUFZQSxRQUFRLDBDQUEwQ0QsT0FBT0csS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWNMLE9BQU9NLE1BQWhDLENBQVAsQ0FBbEQ7O0FBRVosYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxrQkFBakIsRUFBb0MsU0FBUSxNQUE1QyxFQUFtRCxVQUFTLFVBQTVELEVBQXVFLE1BQUssTUFBNUU7QUFDRSxvREFBUSxLQUFLTCxRQUFNLE1BQW5CLEVBQTJCLE1BQUssV0FBaEMsR0FERjtBQUVFLG9EQUFRLEtBQUtBLFFBQU0sT0FBbkIsRUFBNEIsTUFBSyxZQUFqQztBQUZGO0FBREYsT0FERjtBQVFEOzs7RUFmMkIsZ0JBQU1NLFM7O2tCQW1CckJDLGUiLCJmaWxlIjoiVmlkZW9CYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBSb3csIENvbHVtbiwgTWVudSwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1mb3VuZGF0aW9uJ1xuLy9pbXBvcnQgeyBNZUJveCB9IGZyb20gJ2Jvb3NoLXJlYWN0LWF1dGgnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCB2aWRlb3MgPSBbXG4gICdkYXJrLWlnbG9vLWNhdC0xJyxcbiAgJ2RhcmstaWdsb28tZ2lwaHktY2F0JyxcbiAgJ2RhcmstaWdsb28tbG9nby1leHBsb2RlJyxcbiAgJ21hdGhld2x1Y2FzJyxcbiAgJ3BldGVyLWNhcmxzb24tYm90cycsXG4gICdzYXZhZ2Utc3RyZWV0JyxcbiAgJ3ZpY3RvcmNvdXJ0cmlnaHQnXG5dO1xuXG5jbGFzcyBWaWRlb0JhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB7IHZpZGVvIH0gID0gdGhpcy5wcm9wc1xuICAgIGlmICghdmlkZW8pIHZpZGVvID0gXCIvL2Nkbi5ib29zaC5pby90b3BtdXNpY3ZpZGVvcy92aWRlb3MvXCIgKyB2aWRlb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnZpZGVvcy5sZW5ndGgpXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJhY2tncm91bmQtd3JhcHBlclwiPlxuICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW8tYmFja2dyb3VuZFwiIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXk9XCJhdXRvcGxheVwiIGxvb3A9XCJsb29wXCI+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9e3ZpZGVvK1wiLm1wNFwifSB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPXt2aWRlbytcIi53ZWJtXCJ9IHR5cGU9XCJ2aWRlby93ZWJtXCIvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQmFja2dyb3VuZDtcbiJdfQ==