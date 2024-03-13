export { ClientAirSocket, createClientAirSocket } from './index.browser.cjs';
import { Socket } from 'socket.io';
import 'socket.io-parser';
import 'socket.io-client';
import '@socket.io/component-emitter';

interface ServerAirSocket extends Omit<Socket, 'on' | 'emitWithAck'> {
    on<T>(action: string, callback: (payload: T) => void): ServerAirSocket;
    emitWithAck<T, U>(action: string, payload: T): Promise<U>;
}
declare const createServerAirSocket: (socket: Socket) => ServerAirSocket;

export { ServerAirSocket, createServerAirSocket };
