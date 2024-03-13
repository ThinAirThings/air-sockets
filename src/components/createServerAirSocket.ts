


import { Socket } from 'socket.io';
import { rxToTx } from '../functions/rxtx.js';


export interface ServerAirSocket extends Omit<Socket, 'on'  | 'emitWithAck'> {
    on<T>(action: string, callback: (payload: T) => void): ServerAirSocket
    emitWithAck<T, U>(action: string, payload: T): Promise<U>
}

export const createServerAirSocket = (
    socket: Socket
) => {
    const socketWrapper = {
        ...socket,
        on: <T>(action: string, callback: (payload: T) => void) => {
            socket.on(rxToTx(action), callback)
            return socketWrapper
        },
        emitWithAck: async <T, U>(action: string, payload: T) => {
            return await socket.emitWithAck(action, payload) as U
        }
    } as ServerAirSocket
    return socketWrapper
}

