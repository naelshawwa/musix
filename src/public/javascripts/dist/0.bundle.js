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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var numberOfSongs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      console.log("Requesting ".concat(numberOfSongs, " songs"));
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/musix/search', {
        search: _this.state.category,
        trackIds: _this.state.trackIds,
        numberOfSongs: numberOfSongs
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (_this.state.trackList.length == 0) {
          _this.setState({
            trackList: response.data.message.body.track_list
          });
        } else {
          var currentTracks = _this.state.trackList;
          currentTracks.push.apply(currentTracks, _toConsumableArray(response.data.message.body.track_list));

          _this.setState({
            trackList: currentTracks
          });
        }

        _this.startTimer();

        _this.state.trackList.map(function (t) {
          if (!t.track.lyrics) {
            //if we don't have lyrics get lyrics for this item
            _this.fetchLyrics({
              trackId: t.track.track_id
            });
          }
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
        var tracks = _this.state.trackList;
        var index = tracks.findIndex(function (t) {
          return t.track.track_id === trackId;
        });
        console.log("Index", index);

        var singleTrack = _objectSpread({}, tracks[index]);

        console.log("Track Id Update Lyrics", singleTrack.track.track_id);
        singleTrack.track.lyrics = response.data.message.body.lyrics;
        tracks[index] = singleTrack;

        _this.setState({
          trackList: tracks
        });

        var trackIds = _this.state.trackIds;
        trackIds.push(trackId);

        _this.setState({
          tracks: tracks
        });
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.countDown = function () {
      if (_this.state.timer > 0) {
        _this.setState({
          timer: _this.state.timer - 1
        });
      } else {
        _this.setState({
          timer: 10
        }); //reset timer


        clearInterval(_this.interval);

        _this.popPlayList();
      }
    };

    _this.startTimer = function () {
      console.log("Start timer");
      _this.interval = setInterval(_this.countDown, 1000);
    };

    _this.popPlayList = function () {
      var newTrackList = _this.state.trackList;
      var oldTrack = newTrackList.shift();
      var oldLyrics = oldTrack.track.lyrics.lyrics_body; //grab 5 random words

      var newQuery = [];
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));

      _this.setState({
        trackList: newTrackList,
        category: newQuery.join(" ")
      });

      _this.fetchTracks(1);
    };

    _this.getRandomWord = function (lyrics) {
      var words = lyrics.split(" "); //filter words shorter than 5 letters

      words = words.filter(function (w) {
        return w.length > 5;
      });
      var randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    };

    _this.handleCategoryChange = function (event) {
      _this.setState({
        category: event.target.value
      });
    };

    _this.state = {
      trackList: [],
      trackIds: [],
      category: "Toronto",
      timer: 10
    };
    _this.handleCategoryChange = _this.handleCategoryChange.bind(_assertThisInitialized(_this));
    _this.startTimer = _this.startTimer.bind(_assertThisInitialized(_this));
    _this.countDown = _this.countDown.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Query for tracks
   */


  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Category Search:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "category-search",
        type: "text",
        value: this.state.category,
        onChange: this.handleCategoryChange
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "button",
        type: "button",
        onClick: function onClick() {
          return _this2.fetchTracks(2);
        },
        value: "Search"
      }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "song-grid"
      }, this.state.trackList.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "song ".concat(index == 0 ? "first-song" : ""),
          key: item.track.track_id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, item.track.album_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "byline"
        }, " by ", item.track.artist_name), index == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "timer"
        }, _this2.state.timer), item.track.lyrics && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "lyrics"
        }, item.track.lyrics.lyrics_body));
      })));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9XZWxjb21lLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZldGNoVHJhY2tzIiwibnVtYmVyT2ZTb25ncyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Iiwic2VhcmNoIiwic3RhdGUiLCJjYXRlZ29yeSIsInRyYWNrSWRzIiwidGhlbiIsInJlc3BvbnNlIiwidHJhY2tMaXN0IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJkYXRhIiwibWVzc2FnZSIsImJvZHkiLCJ0cmFja19saXN0IiwiY3VycmVudFRyYWNrcyIsInB1c2giLCJzdGFydFRpbWVyIiwibWFwIiwidCIsInRyYWNrIiwibHlyaWNzIiwiZmV0Y2hMeXJpY3MiLCJ0cmFja0lkIiwidHJhY2tfaWQiLCJlcnJvciIsImdldCIsInBhcmFtcyIsInRyYWNrcyIsImluZGV4IiwiZmluZEluZGV4Iiwic2luZ2xlVHJhY2siLCJjb3VudERvd24iLCJ0aW1lciIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsInBvcFBsYXlMaXN0Iiwic2V0SW50ZXJ2YWwiLCJuZXdUcmFja0xpc3QiLCJvbGRUcmFjayIsInNoaWZ0Iiwib2xkTHlyaWNzIiwibHlyaWNzX2JvZHkiLCJuZXdRdWVyeSIsImdldFJhbmRvbVdvcmQiLCJqb2luIiwid29yZHMiLCJzcGxpdCIsImZpbHRlciIsInciLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJpbmQiLCJpdGVtIiwiYWxidW1fbmFtZSIsImFydGlzdF9uYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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QUN5QyxJQUFELEVBQU85QixLQUFQLEVBQWlCO0FBQzFDLDRCQUNNO0FBQUssbUJBQVMsaUJBQVVBLEtBQUssSUFBSSxDQUFULEdBQWEsWUFBYixHQUE0QixFQUF0QyxDQUFkO0FBQTBELGFBQUcsRUFBRThCLElBQUksQ0FBQ3ZDLEtBQUwsQ0FBV0k7QUFBMUUsd0JBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FBd0JtQyxJQUFJLENBQUN2QyxLQUFMLENBQVd3QyxVQUFuQyxDQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWYsbUJBQTZCRCxJQUFJLENBQUN2QyxLQUFMLENBQVd5QyxXQUF4QyxDQUZGLEVBSUdoQyxLQUFLLElBQUksQ0FBVCxpQkFDQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNHLE1BQUksQ0FBQzFCLEtBQUwsQ0FBVzhCLEtBRGQsQ0FMSixFQVNHMEIsSUFBSSxDQUFDdkMsS0FBTCxDQUFXQyxNQUFYLGlCQUNDO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0dzQyxJQUFJLENBQUN2QyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JxQixXQURyQixDQVZKLENBRE47QUFpQkQsT0FsQkEsQ0FESCxDQUZGLENBREo7QUEwQkQ7Ozs7RUFoTW1Cb0IsK0M7O0FBbU1QbkUsc0VBQWYsRSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbXVzaXgnLFxuICBwb3J0OiAzMDAwLFxuICBhcGlLZXk6ICdQSXZSVG9LUFVzTVZuaGJPN0VLRXJHaGE0SlQ4RnU3RCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrTGlzdDogW10sXG4gICAgICB0cmFja0lkczpbXSxcbiAgICAgIGNhdGVnb3J5OiBcIlRvcm9udG9cIixcbiAgICAgIHRpbWVyOiAxMFxuICAgIH1cblxuXG4gICAgdGhpcy5oYW5kbGVDYXRlZ29yeUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0VGltZXIgPSB0aGlzLnN0YXJ0VGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGZvciB0cmFja3NcbiAgICovXG4gIGZldGNoVHJhY2tzID0gKG51bWJlck9mU29uZ3MgPSAyKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhgUmVxdWVzdGluZyAke251bWJlck9mU29uZ3N9IHNvbmdzYCk7XG4gICAgYXhpb3MucG9zdCgnL2FwaS9tdXNpeC9zZWFyY2gnLCB7XG4gICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXG4gICAgICB0cmFja0lkczogdGhpcy5zdGF0ZS50cmFja0lkcyxcbiAgICAgIG51bWJlck9mU29uZ3M6IG51bWJlck9mU29uZ3NcbiAgICB9LHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgIGlmKHRoaXMuc3RhdGUudHJhY2tMaXN0Lmxlbmd0aCA9PSAwICl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWNrTGlzdDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLmJvZHkudHJhY2tfbGlzdFxuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgY3VycmVudFRyYWNrcyA9IHRoaXMuc3RhdGUudHJhY2tMaXN0O1xuICAgICAgICBjdXJyZW50VHJhY2tzLnB1c2goLi4ucmVzcG9uc2UuZGF0YS5tZXNzYWdlLmJvZHkudHJhY2tfbGlzdCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWNrTGlzdDogY3VycmVudFRyYWNrc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcblxuICAgICAgdGhpcy5zdGF0ZS50cmFja0xpc3QubWFwKCB0ID0+IHtcbiAgICAgICAgaWYoIXQudHJhY2subHlyaWNzKXsgLy9pZiB3ZSBkb24ndCBoYXZlIGx5cmljcyBnZXQgbHlyaWNzIGZvciB0aGlzIGl0ZW1cbiAgICAgICAgICB0aGlzLmZldGNoTHlyaWNzKHtcbiAgICAgICAgICAgIHRyYWNrSWQ6IHQudHJhY2sudHJhY2tfaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGZvciBseXJpY3MgZm9yIHByb3ZpZGVkIHRyYWNrSWRcbiAgICogQHBhcmFtIHRyYWNrSWRcbiAgICogQHJldHVybnMge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn1cbiAgICovXG4gIGZldGNoTHlyaWNzID0gKHt0cmFja0lkfSkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoICcvYXBpL211c2l4L2x5cmljcycsIHtwYXJhbXM6IHt0cmFja0lkOiB0cmFja0lkfX0pLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCB0cmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrTGlzdDtcbiAgICAgIGxldCBpbmRleCA9IHRyYWNrcy5maW5kSW5kZXgoIHQgPT4gdC50cmFjay50cmFja19pZCA9PT0gdHJhY2tJZCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkluZGV4XCIsaW5kZXgpO1xuICAgICAgbGV0IHNpbmdsZVRyYWNrID0gey4uLnRyYWNrc1tpbmRleF19O1xuICAgICAgY29uc29sZS5sb2coXCJUcmFjayBJZCBVcGRhdGUgTHlyaWNzXCIsIHNpbmdsZVRyYWNrLnRyYWNrLnRyYWNrX2lkKTtcbiAgICAgIHNpbmdsZVRyYWNrLnRyYWNrLmx5cmljcyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZS5ib2R5Lmx5cmljcztcbiAgICAgIHRyYWNrc1tpbmRleF0gPSBzaW5nbGVUcmFjaztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRyYWNrTGlzdDogdHJhY2tzXG4gICAgICB9KTtcblxuICAgICAgbGV0IHRyYWNrSWRzID0gdGhpcy5zdGF0ZS50cmFja0lkcztcbiAgICAgIHRyYWNrSWRzLnB1c2godHJhY2tJZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJhY2tzOiB0cmFja3NcbiAgICAgIH0pXG5cbiAgICB9KS5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNvdW50RG93biA9ICgpID0+IHtcblxuICAgIGlmKHRoaXMuc3RhdGUudGltZXIgPiAwKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aW1lcjogdGhpcy5zdGF0ZS50aW1lciAtIDFcbiAgICAgIH0pXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZXI6IDEwXG4gICAgICB9KTtcblxuICAgICAgLy9yZXNldCB0aW1lclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgICB0aGlzLnBvcFBsYXlMaXN0KCk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydCB0aW1lclwiKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIHBvcHMgdGhlIGZpcnN0IHRyYWNrIGluIHRoZSBwbGF5IGxpc3QsIHF1ZXVlcyB1cCBxdWVyeSBmb3IgbmV4dCB0cmFja3NcbiAgICovXG4gIHBvcFBsYXlMaXN0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdUcmFja0xpc3QgPSB0aGlzLnN0YXRlLnRyYWNrTGlzdDtcbiAgICBsZXQgb2xkVHJhY2sgPSBuZXdUcmFja0xpc3Quc2hpZnQoKTtcbiAgICBsZXQgb2xkTHlyaWNzID0gb2xkVHJhY2sudHJhY2subHlyaWNzLmx5cmljc19ib2R5O1xuXG4gICAgLy9ncmFiIDUgcmFuZG9tIHdvcmRzXG4gICAgbGV0IG5ld1F1ZXJ5ID0gW107XG4gICAgbmV3UXVlcnkucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQob2xkTHlyaWNzKSk7XG4gICAgbmV3UXVlcnkucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQob2xkTHlyaWNzKSk7XG4gICAgbmV3UXVlcnkucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQob2xkTHlyaWNzKSk7XG4gICAgbmV3UXVlcnkucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQob2xkTHlyaWNzKSk7XG4gICAgbmV3UXVlcnkucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQob2xkTHlyaWNzKSk7XG5cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHJhY2tMaXN0OiBuZXdUcmFja0xpc3QsXG4gICAgICBjYXRlZ29yeTogbmV3UXVlcnkuam9pbihcIiBcIilcbiAgICB9KTtcblxuICAgIHRoaXMuZmV0Y2hUcmFja3MoMSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHJhbmRvbSB3b3JkIGZyb20gbHlyaWNzXG4gICAqIEBwYXJhbSBseXJpY3NcbiAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgKi9cbiAgZ2V0UmFuZG9tV29yZCA9IGx5cmljcyA9PiB7XG4gICAgbGV0IHdvcmRzID0gbHlyaWNzLnNwbGl0KFwiIFwiKTtcblxuICAgIC8vZmlsdGVyIHdvcmRzIHNob3J0ZXIgdGhhbiA1IGxldHRlcnNcbiAgICB3b3JkcyA9IHdvcmRzLmZpbHRlciggdyA9PiB3Lmxlbmd0aCA+IDUpO1xuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aClcbiAgICByZXR1cm4gd29yZHNbcmFuZG9tSW5kZXhdO1xuICB9XG5cbiAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhdGVnb3J5OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5DYXRlZ29yeSBTZWFyY2g6ICA8aW5wdXQgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2VhcmNoXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9Lz4gPGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmZldGNoVHJhY2tzKDIpfSB2YWx1ZT1cIlNlYXJjaFwiLz4gPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmctZ3JpZFwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudHJhY2tMaXN0Lm1hcCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29uZyAke2luZGV4ID09IDAgPyBcImZpcnN0LXNvbmdcIiA6IFwiXCJ9YH0ga2V5PXtpdGVtLnRyYWNrLnRyYWNrX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udHJhY2suYWxidW1fbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ5bGluZVwiPiBieSB7aXRlbS50cmFjay5hcnRpc3RfbmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRyYWNrLmx5cmljcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJseXJpY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHJhY2subHlyaWNzLmx5cmljc19ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iXSwic291cmNlUm9vdCI6IiJ9