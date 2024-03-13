export { createClientSocket } from './index.browser.cjs';
import { Socket } from 'socket.io';
import 'socket.io-client';

declare const createServerSocket: (socket: Socket) => {
    on: <T>(action: string, callback: (payload: T) => void) => any;
    emitWithAck: <T_1, U>(action: string, payload: T_1) => Promise<U>;
};

export { createServerSocket };
