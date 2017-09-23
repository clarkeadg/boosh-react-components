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

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var videos = ['dark-igloo-cat-1', 'dark-igloo-giphy-cat', 'dark-igloo-logo-explode', 'mathewlucas', 'peter-carlson-bots', 'savage-street', 'victorcourtright'];
//import { MeBox } from 'boosh-react-auth'

/* React */

var VideoBackground = function (_React$Component) {
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

      return _react2.default.createElement(
        'div',
        { className: 'video-background-wrapper' },
        _react2.default.createElement(
          'video',
          { className: 'video-background', preload: 'auto', autoPlay: 'autoplay', loop: 'loop' },
          _react2.default.createElement('source', { src: video + ".mp4", type: 'video/mp4' }),
          _react2.default.createElement('source', { src: video + ".webm", type: 'video/webm' })
        )
      );
    }
  }]);
  return VideoBackground;
}(_react2.default.Component);

exports.default = VideoBackground;