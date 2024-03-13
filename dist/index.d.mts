import { Socket } from 'socket.io-client';

declare const createSocketClient: (socket: Socket) => {
    on: <T>(action: string, callback: (payload: T) => void) => any;
};

export { createSocketClient };
