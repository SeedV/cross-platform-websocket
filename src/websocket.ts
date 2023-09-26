import {
  usingBrowserWebSocket,
  WebSocket as WS,
} from './websocket-constructor/index.js';

const isReactNative =
  typeof navigator !== 'undefined' &&
  typeof navigator.product === 'string' &&
  navigator.product.toLowerCase() === 'reactnative';

export class WebSocket {
  private ws: WS;
  constructor(
    private readonly key: string | undefined,
    url: string | URL,
    protocols?: string | string[],
    options?: {headers?: {[header: string]: string}}
  ) {
    if (usingBrowserWebSocket && !isReactNative) {
      this.ws = new WS(url, protocols);
    } else {
      this.ws = new WS(url, protocols, options);
    }
  }

  set onopen(cb: (key: string | undefined, evt: unknown) => void) {
    this.ws.onopen = e => cb(this.key, e);
  }

  set onclose(cb: (key: string | undefined, evt: unknown) => void) {
    this.ws.onclose = e => cb(this.key, e);
  }

  set onerror(cb: (key: string | undefined, evt: unknown) => void) {
    this.ws.onerror = e => cb(this.key, e);
  }

  set onmessage(cb: (key: string | undefined, data: unknown) => void) {
    this.ws.onmessage = e => cb(this.key, e.data);
  }

  send(data: string, opts?: {compress?: boolean}) {
    if (usingBrowserWebSocket) {
      this.ws.send(data);
    } else {
      this.ws.send(data, opts ?? {});
    }
  }

  close() {
    this.ws.close();
  }
}
