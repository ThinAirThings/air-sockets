


import { Socket } from 'socket.io';
import { rxToTx } from '../functions/rxtx.js';


export type ServerAirSocket = {
    ioSocket: Socket
    on<T>(action: string, callback: (payload: T) => void): ServerAirSocket
    emitWithAck<T, U>(action: string, payload: T): Promise<U>
}

export const createServerAirSocket = (
    socket: Socket
) => {
    const socketWrapper = {
        ioSocket: socket,
        on: <T>(action: string, callback: (payload: T, ackCallback: (ackPayload: any) => void) => void) => {
            socket.on(rxToTx(action), callback)
            return socketWrapper
        },
        emitWithAck: async <T, U>(action: string, payload: T) => {
            return await socket.emitWithAck(action, payload) as U
        }
    }
    return socketWrapper as ServerAirSocket
}
