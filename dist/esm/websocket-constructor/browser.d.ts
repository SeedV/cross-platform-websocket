declare const usingBrowserWebSocket = true;
declare const nextTick: (cb: () => void, setTimeoutFn: (fn: () => void, timeout: number) => void) => void;
declare const WebSocket: {
    new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
    prototype: WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};

export { WebSocket, nextTick, usingBrowserWebSocket };
