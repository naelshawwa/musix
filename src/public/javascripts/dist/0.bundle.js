(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app.config.js":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'musix',
  port: 3000,
  apiKey: 'PIvRToKPUsMVnhbO7EKErGha4JT8Fu7D'
}


/***/ }),

/***/ "./src/views/Index/Welcome.jsx":
/*!*************************************!*\
  !*** ./src/views/Index/Welcome.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config.js */ "./app.config.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_config_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['api-key'] = _app_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.apiKey;

var Welcome = /*#__PURE__*/function (_Component) {
  _inherits(Welcome, _Component);

  var _super = _createSuper(Welcome);

  function Welcome(props) {
    var _this;

    _classCallCheck(this, Welcome);

    _this = _super.call(this, props);

    _this.fetchTracks = function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/musix/search', {
        params: {
          search: "sunshine"
        }
      }).then(function (response) {
        _this.setState({
          track_list: response.data.message.body.track_list
        });

        _this.state.track_list.map(function (t) {
          _this.fetchLyrics({
            trackId: t.track.track_id
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.fetchLyrics = function (_ref) {
      var trackId = _ref.trackId;
      return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/musix/lyrics', {
        params: {
          trackId: trackId
        }
      }).then(function (response) {
        var tracks = _this.state.track_list;
        var index = tracks.findIndex(function (t) {
          return t.track.track_id === trackId;
        });
        console.log("Index", index);

        var singleTrack = _objectSpread({}, tracks[index]);

        console.log("Track Id Update Lyrics", singleTrack.track.track_id);
        singleTrack.track.lyrics = response.data.message.body.lyrics;
        tracks[index] = singleTrack;

        _this.setState({
          track_list: tracks
        });

        console.log(_this.state.track_list);
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.componentDidMount = function () {
      _this.fetchTracks();
    };

    _this.state = {
      track_list: []
    };
    return _this;
  }
  /**
   *
   */


  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.track_list.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "song",
          key: item.track.track_id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, item.track.album_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "byline"
        }, " by ", item.track.artist_name), item.track.lyrics && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "lyrics"
        }, item.track.lyrics.lyrics_body));
      }));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9XZWxjb21lLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZldGNoVHJhY2tzIiwiZ2V0IiwicGFyYW1zIiwic2VhcmNoIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJ0cmFja19saXN0IiwiZGF0YSIsIm1lc3NhZ2UiLCJib2R5Iiwic3RhdGUiLCJtYXAiLCJ0IiwiZmV0Y2hMeXJpY3MiLCJ0cmFja0lkIiwidHJhY2siLCJ0cmFja19pZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRyYWNrcyIsImluZGV4IiwiZmluZEluZGV4Iiwic2luZ2xlVHJhY2siLCJseXJpY3MiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW0iLCJhbGJ1bV9uYW1lIiwiYXJ0aXN0X25hbWUiLCJseXJpY3NfYm9keSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVBO0FBRUFBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsU0FBOUIsSUFBMkNDLHFEQUFTLENBQUNDLE1BQXJEOztJQUVNQyxPOzs7OztBQUNKLG1CQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixVQVVwQkMsV0FWb0IsR0FVTixZQUFNO0FBQ2xCUixrREFBSyxDQUFDUyxHQUFOLENBQVUsbUJBQVYsRUFBK0I7QUFBQ0MsY0FBTSxFQUFFO0FBQUNDLGdCQUFNLEVBQUU7QUFBVDtBQUFULE9BQS9CLEVBQStEQyxJQUEvRCxDQUFv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K0M7O0FBMkVQakMsc0VBQWYsRSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbXVzaXgnLFxuICBwb3J0OiAzMDAwLFxuICBhcGlLZXk6ICdQSXZSVG9LUFVzTVZuaGJPN0VLRXJHaGE0SlQ4RnU3RCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrX2xpc3Q6IFtdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBmZXRjaFRyYWNrcyA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy9hcGkvbXVzaXgvc2VhcmNoJywge3BhcmFtczoge3NlYXJjaDogXCJzdW5zaGluZVwifX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJhY2tfbGlzdDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLmJvZHkudHJhY2tfbGlzdFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3RhdGUudHJhY2tfbGlzdC5tYXAoIHQgPT4ge1xuICAgICAgICB0aGlzLmZldGNoTHlyaWNzKHtcbiAgICAgICAgICB0cmFja0lkOiB0LnRyYWNrLnRyYWNrX2lkXG4gICAgICAgIH0pO1xuICAgICAgfSlcblxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGZldGNoTHlyaWNzID0gKHt0cmFja0lkfSkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoICcvYXBpL211c2l4L2x5cmljcycsIHtwYXJhbXM6IHt0cmFja0lkOiB0cmFja0lkfX0pLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCB0cmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrX2xpc3Q7XG4gICAgICBsZXQgaW5kZXggPSB0cmFja3MuZmluZEluZGV4KCB0ID0+IHQudHJhY2sudHJhY2tfaWQgPT09IHRyYWNrSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJJbmRleFwiLGluZGV4KTtcbiAgICAgIGxldCBzaW5nbGVUcmFjayA9IHsuLi50cmFja3NbaW5kZXhdfTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVHJhY2sgSWQgVXBkYXRlIEx5cmljc1wiLCBzaW5nbGVUcmFjay50cmFjay50cmFja19pZCk7XG4gICAgICBzaW5nbGVUcmFjay50cmFjay5seXJpY3MgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS5seXJpY3M7XG4gICAgICB0cmFja3NbaW5kZXhdID0gc2luZ2xlVHJhY2s7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cmFja19saXN0OiB0cmFja3NcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRyYWNrX2xpc3QpO1xuICAgIH0pLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mZXRjaFRyYWNrcygpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudHJhY2tfbGlzdC5tYXAoIGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdcIiBrZXk9e2l0ZW0udHJhY2sudHJhY2tfaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRyYWNrLmFsYnVtX25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ5bGluZVwiPiBieSB7aXRlbS50cmFjay5hcnRpc3RfbmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2l0ZW0udHJhY2subHlyaWNzICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHlyaWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHJhY2subHlyaWNzLmx5cmljc19ib2R5fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=