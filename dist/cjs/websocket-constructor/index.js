'use strict';

var ws = require('ws');

var usingBrowserWebSocket = false;
var nextTick = process.nextTick;

exports.WebSocket = ws;
exports.nextTick = nextTick;
exports.usingBrowserWebSocket = usingBrowserWebSocket;
//# sourceMappingURL=index.js.map
