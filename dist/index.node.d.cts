export { ClientAirSocket, createClientAirSocket } from './index.browser.cjs';
import { Socket } from 'socket.io';
import 'socket.io-client';

declare const createServerAirSocket: (socket: Socket) => {
    on: <T>(action: string, callback: (payload: T) => void) => any;
    emitWithAck: <T_1, U>(action: string, payload: T_1) => Promise<U>;
};
type ServerAirSocket = ReturnType<typeof createServerAirSocket>;

export { ServerAirSocket, createServerAirSocket };
