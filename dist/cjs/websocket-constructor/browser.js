'use strict';

var index_js = require('../globalThis/index.js');

var usingBrowserWebSocket = true;
var nextTick = (function () {
    var isPromiseAvailable = typeof Promise === 'function' && typeof Promise.resolve === 'function';
    if (isPromiseAvailable) {
        return function (cb) { return Promise.resolve().then(cb); };
    }
    else {
        return function (cb, setTimeoutFn) { return setTimeoutFn(cb, 0); };
    }
})();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var WebSocket = index_js.globalThisShim.WebSocket || index_js.globalThisShim.MozWebSocket;

exports.WebSocket = WebSocket;
exports.nextTick = nextTick;
exports.usingBrowserWebSocket = usingBrowserWebSocket;
//# sourceMappingURL=browser.js.map
