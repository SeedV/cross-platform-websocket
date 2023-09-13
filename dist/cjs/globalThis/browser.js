'use strict';

var globalThisShim = (function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    else if (typeof window !== 'undefined') {
        return window;
    }
    else {
        return Function('return this')();
    }
})();

exports.globalThisShim = globalThisShim;
//# sourceMappingURL=browser.js.map
