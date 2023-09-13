declare class WebSocket {
    private ws;
    constructor(url: string | URL, protocols?: string | string[], options?: {
        headers?: {
            [header: string]: string;
        };
    });
    set onopen(cb: (evt: unknown) => void);
    set onclose(cb: (evt: unknown) => void);
    set onerror(cb: (evt: unknown) => void);
    set onmessage(cb: (data: unknown) => void);
    send(data: string, opts?: {
        compress?: boolean;
    }): void;
    close(): void;
}

export { WebSocket };
