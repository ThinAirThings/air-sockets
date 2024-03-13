
import { Socket } from 'socket.io-client';
import { rxToTx } from '../functions/rxtx';

export const createSocketClient = (
    socket: Socket
) => {
    const socketWrapper = {
        on: <T>(action: string, callback: (payload: T) => void) => {
            socket.on(rxToTx(action), callback)
            return socketWrapper
        }
    }
    return socketWrapper
}