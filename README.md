# cross-platform-websocket

A cross platform websocket (client). Supports browser and node environments.

## Installing

```shell
yarn add git+https://github.com/SeedV/cross-platform-websocket.git#<branch|tag>
```

## Usage

### Browser
> **Note:** Browser does not support the options parameter.
```
const ws = new WebSocket('key', 'ws://localhost:8888/ws');
ws.onopen = key => console.warn(key, 'ws open');
ws.onmessage = (key, data) => console.warn(key, 'ws message', data);
ws.onclose = key => console.warn(key, 'ws close');
```

### Node
```
const ws = new WebSocket(
    'key',
    'ws://localhost:8888/ws',
    undefined,
    {headers: {['Authorization']: 'token'}}
);
ws.onopen = key => console.warn(key, 'ws open');
ws.onmessage = (key, data) => console.warn(key, 'ws message', data);
ws.onclose = key => console.warn(key, 'ws close');
```