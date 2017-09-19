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

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _UserSelector = require('../Selectors/UserSelector');

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _User = require('../Components/User/User');

var _User2 = _interopRequireDefault(_User);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Collection: {
    displayName: 'Collection'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/Collection/Collection.js',
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


/* Actions */


/* Selectors */


/* Sagas */
//import GetCommentsSaga from '../../Sagas/Preloaders/GetCommentsSaga'

/* Components */


var Collection = _wrapComponent('Collection')(function (_React$Component) {
  (0, _inherits3.default)(Collection, _React$Component);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);
    return (0, _possibleConstructorReturn3.default)(this, (Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).apply(this, arguments));
  }

  (0, _createClass3.default)(Collection, [{
    key: 'getData',
    value: function getData(pageNumber) {
      var Meta = {
        query: {
          page: pageNumber,
          per_page: this.props.per_page || 10
        },
        path: this.props.path || "/users/"
      };
      this.props.dispatch(_Creators2.default.getUsersAttempt(Meta));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getData(this.props.pageNumber);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.pageNumber !== this.props.pageNumber) {
        this.getData(newProps.pageNumber);
      }
    }

    /*loadMore() {
      pageId++;
      console.log('load More', pageId)
      this.getData(pageId)
    }*/

  }, {
    key: 'renderUsers',
    value: function renderUsers(loading, users) {
      if (loading) {
        return _react3.default.createElement(_booshReactComponents.Loading, null);
      }

      var userOptions = this.props.userOptions || {};
      //console.log('USER OPTIONS', userOptions)

      if (this.props.viewType && this.props.viewType == 'list') {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { upOnSmall: 1 },
          users.map(function (item, id) {
            return _react3.default.createElement(
              _reactFoundation.Column,
              { key: id },
              _react3.default.createElement(_User2.default, { user: item, meta: true, userOptions: userOptions })
            );
          })
        );
      }

      var size = this.props.size || 4;

      return _react3.default.createElement(
        _reactFoundation.Row,
        { upOnSmall: 2, upOnMedium: 4, upOnLarge: size },
        users.map(function (item, id) {
          return _react3.default.createElement(
            _reactFoundation.Column,
            { key: id },
            _react3.default.createElement(_User2.default, { user: item, userOptions: userOptions })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          users = _props.users,
          pageNumber = _props.pageNumber,
          loading = _props.loading,
          viewType = _props.viewType;


      var path = this.props.path || "/users/";
      var per_page = this.props.per_page || 10;
      var pager = this.props.pager || "numbers";

      return _react3.default.createElement(
        'div',
        { className: "users users-" + viewType },
        this.renderUsers(loading, users.items),
        _react3.default.createElement(_booshReactComponents.Pagination, { path: path, pager: pager, per_page: per_page, pageNumber: pageNumber, count: users.count })
      );
    }
  }]);
  return Collection;
}(_react3.default.Component));

Collection.propTypes = {
  loading: _react3.default.PropTypes.bool,
  users: _react3.default.PropTypes.object,
  pageNumber: _react3.default.PropTypes.number,
  count: _react3.default.PropTypes.number
};

Collection.defaultProps = {
  viewType: 'grid',
  loading: true,
  users: {},
  pageNumber: 1,
  count: 0
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    loading: state.users.attempting,
    users: (0, _UserSelector.getUsersCollection)(state, props)
  };
};

/*function preload(params, req) {
  return [
    [GetCommentsSaga, {}]
  ];
}
Comments.preload = preload;*/

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Collection);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlTnVtYmVyIiwiTWV0YSIsInF1ZXJ5IiwicGFnZSIsInBlcl9wYWdlIiwicHJvcHMiLCJwYXRoIiwiZGlzcGF0Y2giLCJnZXRVc2Vyc0F0dGVtcHQiLCJnZXREYXRhIiwibmV3UHJvcHMiLCJsb2FkaW5nIiwidXNlcnMiLCJ1c2VyT3B0aW9ucyIsInZpZXdUeXBlIiwibWFwIiwiaXRlbSIsImlkIiwic2l6ZSIsInBhZ2VyIiwicmVuZGVyVXNlcnMiLCJpdGVtcyIsImNvdW50IiwiQ29tcG9uZW50IiwiQ29sbGVjdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImF0dGVtcHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBR0E7Ozs7QUFHQTs7QUFNQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJBOzs7QUFJQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7NEJBUVVBLFUsRUFBWTtBQUNsQixVQUFJQyxPQUFPO0FBQ1RDLGVBQU87QUFDTEMsZ0JBQU1ILFVBREQ7QUFFTEksb0JBQVUsS0FBS0MsS0FBTCxDQUFXRCxRQUFYLElBQXVCO0FBRjVCLFNBREU7QUFLVEUsY0FBTSxLQUFLRCxLQUFMLENBQVdDLElBQVgsSUFBbUI7QUFMaEIsT0FBWDtBQU9BLFdBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixtQkFBUUMsZUFBUixDQUF3QlAsSUFBeEIsQ0FBcEI7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLUSxPQUFMLENBQWEsS0FBS0osS0FBTCxDQUFXTCxVQUF4QjtBQUNEOzs7OENBRTBCVSxRLEVB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O0FBRkYsR0FBUDtBQUlELENBTEQ7O0FBT0E7Ozs7Ozs7a0JBT2UseUJBQVEwQixlQUFSLEVBQXlCUCxVQUF6QixDIiwiZmlsZSI6IkNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG4vKiBBY3Rpb25zICovXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0NyZWF0b3JzJ1xuXG4vKiBTZWxlY3RvcnMgKi9cbmltcG9ydCB7IGdldFVzZXJzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlbGVjdG9ycy9Vc2VyU2VsZWN0b3InXG5cbi8qIFNhZ2FzICovXG4vL2ltcG9ydCBHZXRDb21tZW50c1NhZ2EgZnJvbSAnLi4vLi4vU2FnYXMvUHJlbG9hZGVycy9HZXRDb21tZW50c1NhZ2EnXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFJvdywgQ29sdW1uLCBCdXR0b24gfSBmcm9tICdyZWFjdC1mb3VuZGF0aW9uJztcbmltcG9ydCB7IFBhZ2luYXRpb24sIFBvcnRsZXQsIExvYWRpbmcgfSBmcm9tICdib29zaC1yZWFjdC1jb21wb25lbnRzJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Vc2VyL1VzZXInXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBnZXREYXRhKHBhZ2VOdW1iZXIpIHtcbiAgICBsZXQgTWV0YSA9IHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IHBhZ2VOdW1iZXIsXG4gICAgICAgIHBlcl9wYWdlOiB0aGlzLnByb3BzLnBlcl9wYWdlIHx8IDEwXG4gICAgICB9LFxuICAgICAgcGF0aDogdGhpcy5wcm9wcy5wYXRoIHx8IFwiL3VzZXJzL1wiXG4gICAgfVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goQWN0aW9ucy5nZXRVc2Vyc0F0dGVtcHQoTWV0YSkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXREYXRhKHRoaXMucHJvcHMucGFnZU51bWJlcilcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLnBhZ2VOdW1iZXIgIT09IHRoaXMucHJvcHMucGFnZU51bWJlcikge1xuICAgICAgdGhpcy5nZXREYXRhKG5ld1Byb3BzLnBhZ2VOdW1iZXIpXG4gICAgfVxuICB9XG5cbiAgLypsb2FkTW9yZSgpIHtcbiAgICBwYWdlSWQrKztcbiAgICBjb25zb2xlLmxvZygnbG9hZCBNb3JlJywgcGFnZUlkKVxuICAgIHRoaXMuZ2V0RGF0YShwYWdlSWQpXG4gIH0qL1xuXG4gIHJlbmRlclVzZXJzKGxvYWRpbmcsIHVzZXJzKSB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkaW5nLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgdXNlck9wdGlvbnMgPSB0aGlzLnByb3BzLnVzZXJPcHRpb25zIHx8IHt9XG4gICAgLy9jb25zb2xlLmxvZygnVVNFUiBPUFRJT05TJywgdXNlck9wdGlvbnMpXG5cbiAgICBpZih0aGlzLnByb3BzLnZpZXdUeXBlICYmIHRoaXMucHJvcHMudmlld1R5cGUgPT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IHVwT25TbWFsbD17MX0+XG4gICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDb2x1bW4ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgPFVzZXIgdXNlcj17aXRlbX0gbWV0YT17dHJ1ZX0gdXNlck9wdGlvbnM9e3VzZXJPcHRpb25zfS8+XG4gICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSB8fCA0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgdXBPblNtYWxsPXsyfSB1cE9uTWVkaXVtPXs0fSB1cE9uTGFyZ2U9e3NpemV9PlxuICAgICAgICB7dXNlcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sdW1uIGtleT17aWR9PlxuICAgICAgICAgICAgICA8VXNlciB1c2VyPXtpdGVtfSB1c2VyT3B0aW9ucz17dXNlck9wdGlvbnN9Lz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgeyB1c2VycywgcGFnZU51bWJlciwgbG9hZGluZywgdmlld1R5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgcGF0aCA9IHRoaXMucHJvcHMucGF0aCB8fCBcIi91c2Vycy9cIjtcbiAgICBsZXQgcGVyX3BhZ2UgPSB0aGlzLnByb3BzLnBlcl9wYWdlIHx8IDEwO1xuICAgIGxldCBwYWdlciA9IHRoaXMucHJvcHMucGFnZXIgfHwgXCJudW1iZXJzXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1widXNlcnMgdXNlcnMtXCIrdmlld1R5cGV9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVXNlcnMobG9hZGluZywgdXNlcnMuaXRlbXMpIH1cbiAgICAgICAgPFBhZ2luYXRpb24gcGF0aD17cGF0aH0gcGFnZXI9e3BhZ2VyfSBwZXJfcGFnZT17cGVyX3BhZ2V9IHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9IGNvdW50PXt1c2Vycy5jb3VudH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuQ29sbGVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGxvYWRpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFnZU51bWJlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY291bnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn1cblxuQ29sbGVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHZpZXdUeXBlOiAnZ3JpZCcsXG4gIGxvYWRpbmc6IHRydWUsXG4gIHVzZXJzOiB7fSxcbiAgcGFnZU51bWJlcjogMSxcbiAgY291bnQ6IDBcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRpbmc6IHN0YXRlLnVzZXJzLmF0dGVtcHRpbmcsXG4gICAgdXNlcnM6IGdldFVzZXJzQ29sbGVjdGlvbihzdGF0ZSwgcHJvcHMpXG4gIH1cbn1cblxuLypmdW5jdGlvbiBwcmVsb2FkKHBhcmFtcywgcmVxKSB7XG4gIHJldHVybiBbXG4gICAgW0dldENvbW1lbnRzU2FnYSwge31dXG4gIF07XG59XG5Db21tZW50cy5wcmVsb2FkID0gcHJlbG9hZDsqL1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29sbGVjdGlvbilcblxuXG4iXX0=