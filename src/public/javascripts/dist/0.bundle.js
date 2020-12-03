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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/musix/search', {
        params: {
          search: _this.state.category
        }
      }).then(function (response) {
        if (_this.state.track_list.length == 0) {
          _this.setState({
            track_list: response.data.message.body.track_list
          });
        } else {
          var currentTracks = _this.state.track_list;
          currentTracks.push.apply(currentTracks, _toConsumableArray(response.data.message.body.track_list));

          _this.setState({
            track_list: currentTracks
          });
        }

        _this.startTimer();

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

    _this.countDown = function () {
      console.log("Timer", _this.state.timer);

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
      var newTrackList = _this.state.track_list;
      var oldTrack = newTrackList.shift();
      var oldLyrics = oldTrack.track.lyrics.lyrics_body; //grab 5 random words

      var newQuery = [];
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));
      newQuery.push(_this.getRandomWord(oldLyrics));

      _this.setState({
        track_list: newTrackList,
        category: newQuery.join(" ")
      });

      _this.fetchTracks();
    };

    _this.getRandomWord = function (lyrics) {
      var words = lyrics.split(" ");
      var randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    };

    _this.handleCategoryChange = function (event) {
      _this.setState({
        category: event.target.value
      });
    };

    _this.state = {
      track_list: [],
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
        type: "button",
        onClick: this.fetchTracks,
        value: "Search"
      }), " "), this.state.track_list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "song",
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
      }));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9XZWxjb21lLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZldGNoVHJhY2tzIiwiZ2V0IiwicGFyYW1zIiwic2VhcmNoIiwic3RhdGUiLCJjYXRlZ29yeSIsInRoZW4iLCJyZXNwb25zZSIsInRyYWNrX2xpc3QiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImRhdGEiLCJtZXNzYWdlIiwiYm9keSIsImN1cnJlbnRUcmFja3MiLCJwdXNoIiwic3RhcnRUaW1lciIsIm1hcCIsInQiLCJmZXRjaEx5cmljcyIsInRyYWNrSWQiLCJ0cmFjayIsInRyYWNrX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidHJhY2tzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzaW5nbGVUcmFjayIsImx5cmljcyIsImNvdW50RG93biIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwicG9wUGxheUxpc3QiLCJzZXRJbnRlcnZhbCIsIm5ld1RyYWNrTGlzdCIsIm9sZFRyYWNrIiwic2hpZnQiLCJvbGRMeXJpY3MiLCJseXJpY3NfYm9keSIsIm5ld1F1ZXJ5IiwiZ2V0UmFuZG9tV29yZCIsImpvaW4iLCJ3b3JkcyIsInNwbGl0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJiaW5kIiwiaXRlbSIsImFsYnVtX25hbWUiLCJhcnRpc3RfbmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbXVzaXgnLFxuICBwb3J0OiAzMDAwLFxuICBhcGlLZXk6ICdQSXZSVG9LUFVzTVZuaGJPN0VLRXJHaGE0SlQ4RnU3RCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYWNrX2xpc3Q6IFtdLFxuICAgICAgY2F0ZWdvcnk6IFwiVG9yb250b1wiLFxuICAgICAgdGltZXI6IDEwXG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gdGhpcy5oYW5kbGVDYXRlZ29yeUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcblxuICB9XG5cblxuICAvKipcbiAgICogUXVlcnkgZm9yIHRyYWNrc1xuICAgKi9cbiAgZmV0Y2hUcmFja3MgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL211c2l4L3NlYXJjaCcsIHtwYXJhbXM6IHtzZWFyY2g6IHRoaXMuc3RhdGUuY2F0ZWdvcnl9fSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgaWYodGhpcy5zdGF0ZS50cmFja19saXN0Lmxlbmd0aCA9PSAwICl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWNrX2xpc3Q6IHJlc3BvbnNlLmRhdGEubWVzc2FnZS5ib2R5LnRyYWNrX2xpc3RcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGN1cnJlbnRUcmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrX2xpc3Q7XG4gICAgICAgIGN1cnJlbnRUcmFja3MucHVzaCguLi5yZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS50cmFja19saXN0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tfbGlzdDogY3VycmVudFRyYWNrc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcblxuICAgICAgdGhpcy5zdGF0ZS50cmFja19saXN0Lm1hcCggdCA9PiB7XG4gICAgICAgIHRoaXMuZmV0Y2hMeXJpY3Moe1xuICAgICAgICAgIHRyYWNrSWQ6IHQudHJhY2sudHJhY2tfaWRcbiAgICAgICAgfSk7XG4gICAgICB9KVxuXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGZvciBseXJpY3MgZm9yIHByb3ZpZGVkIHRyYWNrSWRcbiAgICogQHBhcmFtIHRyYWNrSWRcbiAgICogQHJldHVybnMge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn1cbiAgICovXG4gIGZldGNoTHlyaWNzID0gKHt0cmFja0lkfSkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoICcvYXBpL211c2l4L2x5cmljcycsIHtwYXJhbXM6IHt0cmFja0lkOiB0cmFja0lkfX0pLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCB0cmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrX2xpc3Q7XG4gICAgICBsZXQgaW5kZXggPSB0cmFja3MuZmluZEluZGV4KCB0ID0+IHQudHJhY2sudHJhY2tfaWQgPT09IHRyYWNrSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJJbmRleFwiLGluZGV4KTtcbiAgICAgIGxldCBzaW5nbGVUcmFjayA9IHsuLi50cmFja3NbaW5kZXhdfTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVHJhY2sgSWQgVXBkYXRlIEx5cmljc1wiLCBzaW5nbGVUcmFjay50cmFjay50cmFja19pZCk7XG4gICAgICBzaW5nbGVUcmFjay50cmFjay5seXJpY3MgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS5seXJpY3M7XG4gICAgICB0cmFja3NbaW5kZXhdID0gc2luZ2xlVHJhY2s7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cmFja19saXN0OiB0cmFja3NcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRyYWNrX2xpc3QpO1xuICAgIH0pLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcblxuICB9XG5cbiAgY291bnREb3duID0gKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJUaW1lclwiLCB0aGlzLnN0YXRlLnRpbWVyKTtcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyID4gMCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZXI6IHRoaXMuc3RhdGUudGltZXIgLSAxXG4gICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpbWVyOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIC8vcmVzZXQgdGltZXJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgICAgdGhpcy5wb3BQbGF5TGlzdCgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuY291bnREb3duLCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3BzIHRoZSBmaXJzdCB0cmFjayBpbiB0aGUgcGxheSBsaXN0LCBxdWV1ZXMgdXAgcXVlcnkgZm9yIG5leHQgdHJhY2tzXG4gICAqL1xuICBwb3BQbGF5TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgbmV3VHJhY2tMaXN0ID0gdGhpcy5zdGF0ZS50cmFja19saXN0O1xuICAgIGxldCBvbGRUcmFjayA9IG5ld1RyYWNrTGlzdC5zaGlmdCgpO1xuICAgIGxldCBvbGRMeXJpY3MgPSBvbGRUcmFjay50cmFjay5seXJpY3MubHlyaWNzX2JvZHk7XG5cbiAgICAvL2dyYWIgNSByYW5kb20gd29yZHNcbiAgICBsZXQgbmV3UXVlcnkgPSBbXTtcbiAgICBuZXdRdWVyeS5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZChvbGRMeXJpY3MpKTtcbiAgICBuZXdRdWVyeS5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZChvbGRMeXJpY3MpKTtcbiAgICBuZXdRdWVyeS5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZChvbGRMeXJpY3MpKTtcbiAgICBuZXdRdWVyeS5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZChvbGRMeXJpY3MpKTtcbiAgICBuZXdRdWVyeS5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZChvbGRMeXJpY3MpKTtcblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFja19saXN0OiBuZXdUcmFja0xpc3QsXG4gICAgICBjYXRlZ29yeTogbmV3UXVlcnkuam9pbihcIiBcIilcbiAgICB9KTtcblxuICAgIHRoaXMuZmV0Y2hUcmFja3MoKTtcbiAgfVxuXG4gIGdldFJhbmRvbVdvcmQgPSBseXJpY3MgPT4ge1xuICAgIGxldCB3b3JkcyA9IGx5cmljcy5zcGxpdChcIiBcIik7XG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKVxuICAgIHJldHVybiB3b3Jkc1tyYW5kb21JbmRleF07XG4gIH1cblxuICBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2F0ZWdvcnk6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPkNhdGVnb3J5IFNlYXJjaDogIDxpbnB1dCBjbGFzc05hbWU9XCJjYXRlZ29yeS1zZWFyY2hcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNhdGVnb3J5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDYXRlZ29yeUNoYW5nZX0vPiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZmV0Y2hUcmFja3N9IHZhbHVlPVwiU2VhcmNoXCIvPiA8L2gzPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRyYWNrX2xpc3QubWFwKCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nXCIga2V5PXtpdGVtLnRyYWNrLnRyYWNrX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50cmFjay5hbGJ1bV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJieWxpbmVcIj4gYnkge2l0ZW0udHJhY2suYXJ0aXN0X25hbWV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aW1lcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7aXRlbS50cmFjay5seXJpY3MgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJseXJpY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50cmFjay5seXJpY3MubHlyaWNzX2JvZHl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==