
import { Socket } from 'socket.io-client';
import { rxToTx } from '../functions/rxtx';

export const createClientSocket = (
    socket: Socket
) => {
    const socketWrapper = {
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
