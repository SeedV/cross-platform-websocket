export { default as WebSocket } from 'ws';

declare const usingBrowserWebSocket = false;
declare const nextTick: (callback: Function, ...args: any[]) => void;

export { nextTick, usingBrowserWebSocket };
