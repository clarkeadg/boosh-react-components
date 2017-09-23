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

var _reactRedux = require('react-redux');

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Link } from 'react-router'

var Gallery = function (_React$Component) {
  (0, _inherits3.default)(Gallery, _React$Component);

  function Gallery() {
    (0, _classCallCheck3.default)(this, Gallery);
    return (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).apply(this, arguments));
  }

  (0, _createClass3.default)(Gallery, [{
    key: 'openLightbox',
    value: function openLightbox(images, index) {
      //this.props.dispatch(LightBoxActions.lightboxOpen(images, index))
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.items) return false;

      var images = [];

      var z = this;

      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          _reactFoundation.Row,
          { upOnSmall: 7 },
          this.props.items.map(function (item, id) {
            images.push('http://localhost:8888' + item.imgfull);
            return _react2.default.createElement(
              _reactFoundation.Column,
              { key: id },
              _react2.default.createElement(
                'button',
                { onClick: function onClick() {
                    return z.openLightbox(images, id);
                  } },
                _react2.default.createElement('img', { src: 'http://localhost:8888' + item.thumb })
              )
            );
          })
        )
      );
    }
  }]);
  return Gallery;
}(_react2.default.Component);

/* Config */
//import Config from '../../config'

/* Actions */
//import { LightBoxActions } from 'boosh-react-lightbox'

/* Components */

/* React */


var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Gallery);