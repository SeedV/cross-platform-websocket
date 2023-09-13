# cross-platform-websocket

A cross platform websocket (client). Supports browser and node environments.

## Installing

```shell
yarn add git+https://github.com/SeedV/cross-platform-websocket.git#<branch|tag>
```

## Usage

### Browser
> **Note:** Browser not support the options param.
```
const ws = new WebSocket('ws://localhost:8888/ws');
ws.onopen = () => console.warn('ws open');
ws.onmessage = data => console.warn('ws message', data);
ws.onclose = () => console.warn('ws close');
```

### Node
```
const ws = new WebSocket(
    'ws://localhost:8888/ws',
    undefined,
    {headers: {['Authorization']: 'token'}}
);
ws.onopen = () => console.warn('ws open');
ws.onmessage = data => console.warn('ws message', data);
ws.onclose = () => console.warn('ws close');
```