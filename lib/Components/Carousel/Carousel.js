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

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Carousel: {
    displayName: 'Carousel'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Carousel/Carousel.js',
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


var Carousel = _wrapComponent('Carousel')(function (_React$Component) {
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

      return _react3.default.createElement(
        _reactSlick2.default,
        settings,
        slides.map(function (slide, id) {
          return _react3.default.createElement(
            'div',
            { key: id, className: 'carousel-card' },
            _react3.default.createElement(
              _reactRouter.Link,
              { to: slide.url },
              _react3.default.createElement(
                'div',
                { className: 'slide-cont' },
                _react3.default.createElement('img', { className: 'banner', src: slide.banner }),
                slide.pattern ? _react3.default.createElement('div', { className: 'pattern-map' }) : '',
                slide.title ? _react3.default.createElement(
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
}(_react3.default.Component));

Carousel.propTypes = {
  slides: _react3.default.PropTypes.array
};

Carousel.defaultProps = {
  slides: []
};

exports.default = Carousel;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2xpZGVzIiwib3B0aW9ucyIsImxlbmd0aCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJtYXAiLCJzbGlkZSIsImlkIiwidXJsIiwiYmFubmVyIiwicGF0dGVybiIsInRpdGxlIiwiQ29tcG9uZW50IiwiQ2Fyb3VzZWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEE7OztBQUdBOzs7Ozs7Ozs7Ozs7OzZCQU1XO0FBQUEsbUJBQ21CLEtBQUtBLEtBRHhCO0FBQUEsVUFDREMsTUFEQyxVQUNEQSxNQURDO0FBQUEsVUFDT0MsT0FEUCxVQUNPQSxPQURQOztBQUVQLFVBQUksQ0FBQ0QsT0FBT0UsTUFBWixFQUFvQixPQUFPLEtBQVA7O0FBRXBCLFVBQUlDLFdBQVdGLFVBQVVBLE9BQVYsR0FBb0I7QUFDakNHLGNBQU0sSUFEMkI7QUFFakNDLGtCQUFVLElBRnVCO0FBR2pDQyxrQkFBVSxJQUh1QjtBQUlqQ0MsdUJBQWUsSUFKa0I7QUFLakNDLHNCQUFjLENBTG1CO0FBTWpDQyx3QkFBZ0I7QUFOaUIsT0FBbkM7O0FBU0EsYUFDRTtBQUFBO0FBQVlOLGdCQUFaO0FBQ0VILGVBQU9VLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQU9DLEVBQVAsRUFBYztBQUN2QixpQkFBTztBQUFBO0FBQUEsY0FBSyxLQUFLQSxFQUFWLEVBQWMsV0FBVSxlQUF4QjtBQUNMO0FBQUE7QUFBQSxnQkFBTSxJQUFJRCxNQUFNRSxHQUFoQjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFlBQWY7QUFDRSx1REFBSyxXQUFVLFFBQWYsRUFBd0IsS0FBS0YsTUFBTUcsTUFBbkMsR0FERjtBQUVJSCxzQkFBTUksT0FBTixHQUFnQix1Q0FBSyxXQUFVLGFBQWYsR0FBaEIsR0FBaUQsRUFGckQ7QUFHSUosc0JBQU1LLEtBQU4sR0FBYztBQUFBO0FBQUE7QUFBS0wsd0JBQU1LO0FBQVgsaUJBQWQsR0FBdUM7QUFIM0M7QUFERjtBQURLLFdBQVA7QUFTRCxTQVZEO0FBREYsT0FERjtBQWVEOzs7RUE5Qm9CLGdCQUFNQyxTOztBQWtDN0JDLFNBQVNDLFNBQVQsR0FBcUI7QUFDbkJuQixVQUFRLGdCQUFNb0IsU0FBTixDQUFnQkM7QUFETCxDQUFyQjs7QUFJQUgsU0FBU0ksWUFBVCxHQUF3QjtBQUN0QnRCLFVBQVE7QUFEYyxDQUF4Qjs7a0JBSWVrQixRIiwiZmlsZSI6IkNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBzbGlkZXMsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFzbGlkZXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgc2V0dGluZ3MgPSBvcHRpb25zID8gb3B0aW9ucyA6IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogNjAwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+e1xuICAgICAgICBzbGlkZXMubWFwKChzbGlkZSxpZCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcmRcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtzbGlkZS51cmx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhbm5lclwiIHNyYz17c2xpZGUuYmFubmVyfS8+XG4gICAgICAgICAgICAgICAgeyBzbGlkZS5wYXR0ZXJuID8gPGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLW1hcFwiLz4gOiAnJ31cbiAgICAgICAgICAgICAgICB7IHNsaWRlLnRpdGxlID8gPGgyPntzbGlkZS50aXRsZX08L2gyPiA6ICcnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfSlcbiAgICAgIH08L1NsaWRlcj5cbiAgICApO1xuICB9XG5cbn1cblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xuICBzbGlkZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheVxufVxuXG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNsaWRlczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcblxuXG4iXX0=