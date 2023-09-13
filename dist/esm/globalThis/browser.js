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

export { globalThisShim };
//# sourceMappingURL=browser.js.map
