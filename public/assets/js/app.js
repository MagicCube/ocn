webpackJsonp([0],{135:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var a=t[o](u),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(){localStorage.setItem(c,JSON.stringify(l))}Object.defineProperty(t,"__esModule",{value:!0}),t.deselectMovie=t.selectMovie=t.nextBatch=void 0;var u=(t.nextBatch=function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=3;break}return e.next=3,u();case 3:return f&&(l=l.slice(f.length),o()),f=l.slice(0,i),e.abrupt("return",f);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.selectMovie=function(){var e=r(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.post)("/api/select/"+t);case 2:o();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.deselectMovie=function(){var e=r(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.post)("/api/deselect/"+t);case 2:o();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=11;break}if(null===localStorage.getItem(c)){e.next=5;break}l=JSON.parse(localStorage.getItem(c)),e.next=10;break;case 5:return e.next=7,(0,a.get)("/data/index.json");case 7:l=e.sent,l=l.sort(function(){return Math.random()-.5}),o();case 10:s=!0;case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()),a=n(201),i=12,c="movie-index",s=!1,l=null,f=null},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var a=t[o](u),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(42),l=r(s),f=n(198),p=r(f),d=n(200),v=r(d),h=n(135),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),y=function(e){function t(e){u(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={movies:[]},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.nextBatch()}},{key:"nextBatch",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.nextBatch();case 2:t=e.sent,this.setState({movies:t.slice(0,20)});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"ocn-app"},l.default.createElement(v.default,{data:this.state.movies?this.state.movies:[]}),l.default.createElement(p.default,{onNextBatchButtonClick:function(){return e.nextBatch()}}))}}]),t}(l.default.PureComponent);t.default=y},195:function(e,t){},197:function(e,t,n){e.exports=n.p+"index.html"},198:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(42),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(385);var s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ocn-bottom-bar"},c.default.createElement("div",{className:"hint"},"请选择看过的影片"),c.default.createElement("button",{className:"next-batch",onClick:this.props.onNextBatchButtonClick},"换一批"))}}]),t}(c.default.PureComponent);t.default=s},199:function(e,t,n){"use strict";function r(e){var t=e.data;return u.default.createElement("div",{className:"ocn-movie-cover",style:{backgroundImage:"url("+t.img+")"}},u.default.createElement("div",{className:"cover"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(42),u=function(e){return e&&e.__esModule?e:{default:e}}(o);n(387)},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var a=t[o](u),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(42),l=r(s),f=n(199),p=r(f),d=n(135);n(386);var v=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"selectMovie",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.selected=!0,this.forceUpdate(),e.next=4,(0,d.selectMovie)(t.id);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"deselectMovie",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.selected=!1,this.forceUpdate(),e.next=4,(0,d.deselectMovie)(t.id);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"handleMovieClick",value:function(e){e.selected?this.deselectMovie(e):this.selectMovie(e)}},{key:"render",value:function(){var e=this,t=this.props.data.map(function(t){return l.default.createElement("div",{key:t.id,className:t.selected?"list-item selected":"list-item",onClick:function(){return e.handleMovieClick(t)}},l.default.createElement(p.default,{data:t}),t.selected?l.default.createElement("div",{className:"check"}):null)});return l.default.createElement("div",{className:"ocn-movie-cover-list"},l.default.createElement("span",null,t))}}]),t}(l.default.Component);t.default=v},201:function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e),r.onload=function(){200===r.status?t(JSON.parse(r.responseText)):n("Request failed.  Returned status of "+r.status)},r.send(null)})}function o(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("POST",e),r.onload=function(){200===r.status?t("application/json"===r.getResponseHeader("Content-Type").toLocaleLowerCase()?JSON.parse(r.responseText):r.responseText):n("Request failed.  Returned status of "+r.status)},r.send(null)})}Object.defineProperty(t,"__esModule",{value:!0}),t.get=r,t.post=o},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(42),u=r(o),a=n(88),i=n(193),c=r(i);n(197),n(195),(0,a.render)(u.default.createElement(c.default,null),document.getElementById("ocn-root"))},385:function(e,t){},386:function(e,t){},387:function(e,t){}},[202]);