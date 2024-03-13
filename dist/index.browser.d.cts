import { Socket } from 'socket.io-client';

declare const createClientSocket: (socket: Socket) => {
    on: <T>(action: string, callback: (payload: T) => void) => any;
    emitWithAck: <T_1, U>(action: string, payload: T_1) => Promise<U>;
};

export { createClientSocket };
