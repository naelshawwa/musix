(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{56:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(57),c=r.n(o),i=r(58),s=r.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=k(t);if(e){var a=k(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return b(this,r)}}function b(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}c.a.defaults.headers.common["api-key"]=s.a.apiKey;var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,r,n,o=h(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).fetchTracks=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;console.log("Requesting ".concat(t," songs")),c.a.post("/api/musix/search",{search:e.state.category,trackIds:e.state.trackIds,numberOfSongs:t},{headers:{"Content-Type":"application/json"}}).then((function(t){if(0==e.state.trackList.length)e.setState({trackList:t.data.message.body.track_list});else{var r=e.state.trackList;r.push.apply(r,y(t.data.message.body.track_list)),e.setState({trackList:r})}e.startTimer(),e.state.trackList.map((function(t){t.track.lyrics||e.fetchLyrics({trackId:t.track.track_id})}))})).catch((function(t){console.log(t)}))},e.fetchLyrics=function(t){var r=t.trackId;return c.a.get("/api/musix/lyrics",{params:{trackId:r}}).then((function(t){var n=e.state.trackList,a=n.findIndex((function(t){return t.track.track_id===r}));console.log("Index",a);var o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},n[a]);console.log("Track Id Update Lyrics",o.track.track_id),o.track.lyrics=t.data.message.body.lyrics,n[a]=o,e.setState({trackList:n}),e.state.trackIds.push(r),e.setState({tracks:n})})).catch((function(t){console.log(t)}))},e.countDown=function(){e.state.timer>0?e.setState({timer:e.state.timer-1}):(e.setState({timer:10}),clearInterval(e.interval),e.popPlayList())},e.startTimer=function(){console.log("Start timer"),e.interval=setInterval(e.countDown,1e3)},e.popPlayList=function(){var t=e.state.trackList,r=t.shift().track.lyrics.lyrics_body,n=[];n.push(e.getRandomWord(r)),n.push(e.getRandomWord(r)),n.push(e.getRandomWord(r)),n.push(e.getRandomWord(r)),n.push(e.getRandomWord(r)),e.setState({trackList:t,category:n.join(" ")}),e.fetchTracks(1)},e.getRandomWord=function(t){var e=t.split(" ");return(e=e.filter((function(t){return t.length>5})))[Math.floor(Math.random()*e.length)]},e.handleCategoryChange=function(t){e.setState({category:t.target.value})},e.state={trackList:[],trackIds:[],category:"Toronto",timer:10},e.handleCategoryChange=e.handleCategoryChange.bind(g(e)),e.startTimer=e.startTimer.bind(g(e)),e.countDown=e.countDown.bind(g(e)),e}return e=i,(r=[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("h3",null,"Category Search:  ",a.a.createElement("input",{className:"category-search",type:"text",value:this.state.category,onChange:this.handleCategoryChange})," ",a.a.createElement("input",{className:"button",type:"button",onClick:function(){return t.fetchTracks(2)},value:"Search"})," "),a.a.createElement("div",{className:"song-grid"},this.state.trackList.map((function(e,r){return a.a.createElement("div",{className:"song ".concat(0==r?"first-song":""),key:e.track.track_id},a.a.createElement("div",{className:"title"},e.track.album_name),a.a.createElement("div",{className:"byline"}," by ",e.track.artist_name),0==r&&a.a.createElement("div",{className:"timer"},t.state.timer),e.track.lyrics&&a.a.createElement("div",{className:"lyrics"},e.track.lyrics.lyrics_body))}))))}}])&&m(e.prototype,r),n&&m(e,n),i}(n.Component);e.default=v},58:function(t,e){t.exports={name:"musix",port:3e3,apiKey:"PIvRToKPUsMVnhbO7EKErGha4JT8Fu7D"}}}]);