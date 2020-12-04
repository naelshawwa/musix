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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/musix/search', {
        search: _this.state.category,
        trackIds: _this.state.trackIds
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
        onClick: this.fetchTracks,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9XZWxjb21lLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZldGNoVHJhY2tzIiwicG9zdCIsInNlYXJjaCIsInN0YXRlIiwiY2F0ZWdvcnkiLCJ0cmFja0lkcyIsInRoZW4iLCJyZXNwb25zZSIsInRyYWNrTGlzdCIsImxlbmd0aCIsInNldFN0YXRlIiwiZGF0YSIsIm1lc3NhZ2UiLCJib2R5IiwidHJhY2tfbGlzdCIsImN1cnJlbnRUcmFja3MiLCJwdXNoIiwic3RhcnRUaW1lciIsIm1hcCIsInQiLCJmZXRjaEx5cmljcyIsInRyYWNrSWQiLCJ0cmFjayIsInRyYWNrX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicGFyYW1zIiwidHJhY2tzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzaW5nbGVUcmFjayIsImx5cmljcyIsImNvdW50RG93biIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwicG9wUGxheUxpc3QiLCJzZXRJbnRlcnZhbCIsIm5ld1RyYWNrTGlzdCIsIm9sZFRyYWNrIiwic2hpZnQiLCJvbGRMeXJpY3MiLCJseXJpY3NfYm9keSIsIm5ld1F1ZXJ5IiwiZ2V0UmFuZG9tV29yZCIsImpvaW4iLCJ3b3JkcyIsInNwbGl0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJiaW5kIiwiaXRlbSIsImFsYnVtX25hbWUiLCJhcnRpc3RfbmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBRGQsQ0FMSixFQVNHd0IsSUFBSSxDQUFDckMsS0FBTCxDQUFXVyxNQUFYLGlCQUNDO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0cwQixJQUFJLENBQUNyQyxLQUFMLENBQVdXLE1BQVgsQ0FBa0JXLFdBRHJCLENBVkosQ0FETjtBQWlCRCxPQWxCQSxDQURILENBRkYsQ0FESjtBQTBCRDs7OztFQWxMbUJrQiwrQzs7QUFxTFBoRSxzRUFBZixFIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtdXNpeCcsXG4gIHBvcnQ6IDMwMDAsXG4gIGFwaUtleTogJ1BJdlJUb0tQVXNNVm5oYk83RUtFckdoYTRKVDhGdTdEJ1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uLy4uL2FwcC5jb25maWcuanMnXG5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydhcGkta2V5J10gPSBhcHBDb25maWcuYXBpS2V5XG5cbmNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhY2tMaXN0OiBbXSxcbiAgICAgIHRyYWNrSWRzOltdLFxuICAgICAgY2F0ZWdvcnk6IFwiVG9yb250b1wiLFxuICAgICAgdGltZXI6IDEwXG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gdGhpcy5oYW5kbGVDYXRlZ29yeUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcblxuICB9XG5cblxuICAvKipcbiAgICogUXVlcnkgZm9yIHRyYWNrc1xuICAgKi9cbiAgZmV0Y2hUcmFja3MgPSAoKSA9PiB7XG4gICAgYXhpb3MucG9zdCgnL2FwaS9tdXNpeC9zZWFyY2gnLCB7XG4gICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXG4gICAgICB0cmFja0lkczogdGhpcy5zdGF0ZS50cmFja0lkc1xuICAgIH0se1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgaWYodGhpcy5zdGF0ZS50cmFja0xpc3QubGVuZ3RoID09IDAgKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tMaXN0OiByZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS50cmFja19saXN0XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBjdXJyZW50VHJhY2tzID0gdGhpcy5zdGF0ZS50cmFja0xpc3Q7XG4gICAgICAgIGN1cnJlbnRUcmFja3MucHVzaCguLi5yZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS50cmFja19saXN0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tMaXN0OiBjdXJyZW50VHJhY2tzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuXG4gICAgICB0aGlzLnN0YXRlLnRyYWNrTGlzdC5tYXAoIHQgPT4ge1xuICAgICAgICB0aGlzLmZldGNoTHlyaWNzKHtcbiAgICAgICAgICB0cmFja0lkOiB0LnRyYWNrLnRyYWNrX2lkXG4gICAgICAgIH0pO1xuICAgICAgfSlcblxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBmb3IgbHlyaWNzIGZvciBwcm92aWRlZCB0cmFja0lkXG4gICAqIEBwYXJhbSB0cmFja0lkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj59XG4gICAqL1xuICBmZXRjaEx5cmljcyA9ICh7dHJhY2tJZH0pID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCAnL2FwaS9tdXNpeC9seXJpY3MnLCB7cGFyYW1zOiB7dHJhY2tJZDogdHJhY2tJZH19KS50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICBsZXQgdHJhY2tzID0gdGhpcy5zdGF0ZS50cmFja0xpc3Q7XG4gICAgICBsZXQgaW5kZXggPSB0cmFja3MuZmluZEluZGV4KCB0ID0+IHQudHJhY2sudHJhY2tfaWQgPT09IHRyYWNrSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJJbmRleFwiLGluZGV4KTtcbiAgICAgIGxldCBzaW5nbGVUcmFjayA9IHsuLi50cmFja3NbaW5kZXhdfTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVHJhY2sgSWQgVXBkYXRlIEx5cmljc1wiLCBzaW5nbGVUcmFjay50cmFjay50cmFja19pZCk7XG4gICAgICBzaW5nbGVUcmFjay50cmFjay5seXJpY3MgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2UuYm9keS5seXJpY3M7XG4gICAgICB0cmFja3NbaW5kZXhdID0gc2luZ2xlVHJhY2s7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cmFja0xpc3Q6IHRyYWNrc1xuICAgICAgfSk7XG5cbiAgICAgIGxldCB0cmFja0lkcyA9IHRoaXMuc3RhdGUudHJhY2tJZHM7XG4gICAgICB0cmFja0lkcy5wdXNoKHRyYWNrSWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRyYWNrczogdHJhY2tzXG4gICAgICB9KVxuXG4gICAgfSkuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb3VudERvd24gPSAoKSA9PiB7XG5cbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyID4gMCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZXI6IHRoaXMuc3RhdGUudGltZXIgLSAxXG4gICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpbWVyOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIC8vcmVzZXQgdGltZXJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgICAgdGhpcy5wb3BQbGF5TGlzdCgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuY291bnREb3duLCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3BzIHRoZSBmaXJzdCB0cmFjayBpbiB0aGUgcGxheSBsaXN0LCBxdWV1ZXMgdXAgcXVlcnkgZm9yIG5leHQgdHJhY2tzXG4gICAqL1xuICBwb3BQbGF5TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgbmV3VHJhY2tMaXN0ID0gdGhpcy5zdGF0ZS50cmFja0xpc3Q7XG4gICAgbGV0IG9sZFRyYWNrID0gbmV3VHJhY2tMaXN0LnNoaWZ0KCk7XG4gICAgbGV0IG9sZEx5cmljcyA9IG9sZFRyYWNrLnRyYWNrLmx5cmljcy5seXJpY3NfYm9keTtcblxuICAgIC8vZ3JhYiA1IHJhbmRvbSB3b3Jkc1xuICAgIGxldCBuZXdRdWVyeSA9IFtdO1xuICAgIG5ld1F1ZXJ5LnB1c2godGhpcy5nZXRSYW5kb21Xb3JkKG9sZEx5cmljcykpO1xuICAgIG5ld1F1ZXJ5LnB1c2godGhpcy5nZXRSYW5kb21Xb3JkKG9sZEx5cmljcykpO1xuICAgIG5ld1F1ZXJ5LnB1c2godGhpcy5nZXRSYW5kb21Xb3JkKG9sZEx5cmljcykpO1xuICAgIG5ld1F1ZXJ5LnB1c2godGhpcy5nZXRSYW5kb21Xb3JkKG9sZEx5cmljcykpO1xuICAgIG5ld1F1ZXJ5LnB1c2godGhpcy5nZXRSYW5kb21Xb3JkKG9sZEx5cmljcykpO1xuXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRyYWNrTGlzdDogbmV3VHJhY2tMaXN0LFxuICAgICAgY2F0ZWdvcnk6IG5ld1F1ZXJ5LmpvaW4oXCIgXCIpXG4gICAgfSk7XG5cbiAgICB0aGlzLmZldGNoVHJhY2tzKCk7XG4gIH1cblxuICBnZXRSYW5kb21Xb3JkID0gbHlyaWNzID0+IHtcbiAgICBsZXQgd29yZHMgPSBseXJpY3Muc3BsaXQoXCIgXCIpO1xuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aClcbiAgICByZXR1cm4gd29yZHNbcmFuZG9tSW5kZXhdO1xuICB9XG5cbiAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhdGVnb3J5OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5DYXRlZ29yeSBTZWFyY2g6ICA8aW5wdXQgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2VhcmNoXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9Lz4gPGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmZldGNoVHJhY2tzfSB2YWx1ZT1cIlNlYXJjaFwiLz4gPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmctZ3JpZFwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudHJhY2tMaXN0Lm1hcCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29uZyAke2luZGV4ID09IDAgPyBcImZpcnN0LXNvbmdcIiA6IFwiXCJ9YH0ga2V5PXtpdGVtLnRyYWNrLnRyYWNrX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udHJhY2suYWxidW1fbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ5bGluZVwiPiBieSB7aXRlbS50cmFjay5hcnRpc3RfbmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRyYWNrLmx5cmljcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJseXJpY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHJhY2subHlyaWNzLmx5cmljc19ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iXSwic291cmNlUm9vdCI6IiJ9