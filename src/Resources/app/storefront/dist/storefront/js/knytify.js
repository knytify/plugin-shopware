(window.webpackJsonp=window.webpackJsonp||[]).push([["knytify"],{irfY:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e);var a,l,s,p=function(t){function e(){return r(this,e),u(this,f(e).apply(this,arguments))}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){window.addEventListener("scroll",this.onScroll.bind(this))}},{key:"onScroll",value:function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&alert(this.options.text)}}])&&i(n.prototype,o),a&&i(n,a),e}(n("FGIj").a);s={text:"babsdfds"},(l="options")in(a=p)?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,window.PluginManager.register("TestPlugin",p,"[data-test-plugin]")}},[["irfY","runtime","vendor-node","vendor-shared"]]]);