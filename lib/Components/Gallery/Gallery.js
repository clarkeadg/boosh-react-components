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

var _reactRedux = require('react-redux');

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Gallery: {
    displayName: 'Gallery'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Gallery/Gallery.js',
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


/* Config */
//import Config from '../../config'

/* Actions */
//import { LightBoxActions } from 'boosh-react-lightbox'

/* Components */


//import { Link } from 'react-router'

var Gallery = _wrapComponent('Gallery')(function (_React$Component) {
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

      return _react3.default.createElement(
        'div',
        { className: 'gallery' },
        _react3.default.createElement(
          _reactFoundation.Row,
          { upOnSmall: 7 },
          this.props.items.map(function (item, id) {
            images.push('http://localhost:8888' + item.imgfull);
            return _react3.default.createElement(
              _reactFoundation.Column,
              { key: id },
              _react3.default.createElement(
                'button',
                { onClick: function onClick() {
                    return z.openLightbox(images, id);
                  } },
                _react3.default.createElement('img', { src: 'http://localhost:8888' + item.thumb })
              )
            );
          })
        )
      );
    }
  }]);
  return Gallery;
}(_react3.default.Component));

var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Gallery);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0dhbGxlcnkvR2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJpbWFnZXMiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJ6IiwibWFwIiwiaXRlbSIsImlkIiwicHVzaCIsImltZ2Z1bGwiLCJvcGVuTGlnaHRib3giLCJ0aHVtYiIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiR2FsbGVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhBOzs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUVBOzs7Ozs7Ozs7Ozs7aUNBSWVBLE0sRUFBUUMsSyxFQUFPO0FBQzNCO0FBQ0E7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdDLEtBQWhCLEVBQXVCLE9BQU8sS0FBUDs7QUFFdkIsVUFBSUgsU0FBUyxFQUFiOztBQUVBLFVBQU1JLElBQUksSUFBVjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVcsQ0FBaEI7QUFDRyxlQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ2pDUCxtQkFBT1EsSUFBUCxDQUFZLDBCQUF3QkYsS0FBS0csT0FBekM7QUFDQSxtQkFDRTtBQUFBO0FBQUEsZ0JBQVEsS0FBS0YsRUFBYjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxTQUFTO0FBQUEsMkJBQUlILEVBQUVNLFlBQUYsQ0FBZVYsTUFBZixFQUFzQk8sRUFBdEIsQ0FBSjtBQUFBLG1CQUFqQjtBQUNFLHVEQUFLLEtBQUssMEJBQXdCRCxLQUFLSyxLQUF2QztBQURGO0FBREYsYUFERjtBQU9ELFdBVEE7QUFESDtBQURGLE9BREY7QUFpQkQ7OztFQTlCbUIsZ0JBQU1DLFM7O0FBa0M1QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUVosS0FBUixFQUFrQjtBQUN4QyxTQUFPLEVBQVA7QUFFRCxDQUhEOztrQkFLZSx5QkFBUVcsZUFBUixFQUF5QkUsT0FBekIsQyIsImZpbGUiOiJHYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBSZWFjdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG4vKiBDb25maWcgKi9cbi8vaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnXG5cbi8qIEFjdGlvbnMgKi9cbi8vaW1wb3J0IHsgTGlnaHRCb3hBY3Rpb25zIH0gZnJvbSAnYm9vc2gtcmVhY3QtbGlnaHRib3gnXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFJvdywgQ29sdW1uLCBCdXR0b24gfSBmcm9tICdyZWFjdC1mb3VuZGF0aW9uJztcbi8vaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgb3BlbkxpZ2h0Ym94KGltYWdlcywgaW5kZXgpIHtcbiAgIC8vdGhpcy5wcm9wcy5kaXNwYXRjaChMaWdodEJveEFjdGlvbnMubGlnaHRib3hPcGVuKGltYWdlcywgaW5kZXgpKVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXRlbXMpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBpbWFnZXMgPSBbXVxuXG4gICAgY29uc3QgeiA9IHRoaXNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cbiAgICAgICAgPFJvdyB1cE9uU21hbGw9ezd9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OCcraXRlbS5pbWdmdWxsKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbHVtbiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT56Lm9wZW5MaWdodGJveChpbWFnZXMsaWQpfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cDovL2xvY2FsaG9zdDo4ODg4JytpdGVtLnRodW1ifSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbGxlcnkpXG4iXX0=