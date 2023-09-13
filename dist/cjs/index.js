'use strict';

var websocket_js = require('./websocket.js');



Object.keys(websocket_js).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return websocket_js[k]; }
	});
});
//# sourceMappingURL=index.js.map
