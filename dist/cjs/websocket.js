'use strict';

var index_js = require('./websocket-constructor/index.js');

var isReactNative = typeof navigator !== 'undefined' &&
    typeof navigator.product === 'string' &&
    navigator.product.toLowerCase() === 'reactnative';
var WebSocket = /** @class */ (function () {
    function WebSocket(url, protocols, options) {
        if (index_js.usingBrowserWebSocket && !isReactNative) {
            this.ws = new index_js.WebSocket(url, protocols);
        }
        else {
            this.ws = new index_js.WebSocket(url, protocols, options);
        }
    }
    Object.defineProperty(WebSocket.prototype, "onopen", {
        set: function (cb) {
            this.ws.onopen = cb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "onclose", {
        set: function (cb) {
            this.ws.onclose = cb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "onerror", {
        set: function (cb) {
            this.ws.onerror = cb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "onmessage", {
        set: function (cb) {
            this.ws.onmessage = function (e) { return cb(e.data); };
        },
        enumerable: false,
        configurable: true
    });
    WebSocket.prototype.send = function (data, opts) {
        if (index_js.usingBrowserWebSocket) {
            this.ws.send(data);
        }
        else {
            this.ws.send(data, opts !== null && opts !== void 0 ? opts : {});
        }
    };
    WebSocket.prototype.close = function () {
        this.ws.close();
    };
    return WebSocket;
}());

exports.WebSocket = WebSocket;
//# sourceMappingURL=websocket.js.map