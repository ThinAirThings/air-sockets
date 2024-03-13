export { ClientAirSocket, createClientAirSocket } from './index.browser.cjs';
import { Socket } from 'socket.io';
import '@socket.io/component-emitter';
import 'socket.io-client';

type ServerAirSocket = {
    ioSocket: Socket;
    on<T>(action: string, callback: (payload: T, ackCallback: (ackPayload: any) => void) => void): ServerAirSocket;
    emitWithAck<T, U>(action: string, payload: T): Promise<U>;
};
declare const createServerAirSocket: (socket: Socket) => ServerAirSocket;

export { ServerAirSocket, createServerAirSocket };
