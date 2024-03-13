
import { Socket } from 'socket.io-client';
import { rxToTx } from '../functions/rxtx.js';



export const createClientAirSocket = (
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
    }
    return socketWrapper
}

export type ClientAirSocket = ReturnType<typeof createClientAirSocket>