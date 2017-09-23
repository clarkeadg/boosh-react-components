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

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */
var Carousel = function (_React$Component) {
  (0, _inherits3.default)(Carousel, _React$Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);
    return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          slides = _props.slides,
          options = _props.options;

      if (!slides.length) return false;

      var settings = options ? options : {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return _react2.default.createElement(
        _reactSlick2.default,
        settings,
        slides.map(function (slide, id) {
          return _react2.default.createElement(
            'div',
            { key: id, className: 'carousel-card' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: slide.url },
              _react2.default.createElement(
                'div',
                { className: 'slide-cont' },
                _react2.default.createElement('img', { className: 'banner', src: slide.banner }),
                slide.pattern ? _react2.default.createElement('div', { className: 'pattern-map' }) : '',
                slide.title ? _react2.default.createElement(
                  'h2',
                  null,
                  slide.title
                ) : ''
              )
            )
          );
        })
      );
    }
  }]);
  return Carousel;
}(_react2.default.Component);
/* React */


Carousel.propTypes = {
  slides: _react2.default.PropTypes.array
};

Carousel.defaultProps = {
  slides: []
};

exports.default = Carousel;