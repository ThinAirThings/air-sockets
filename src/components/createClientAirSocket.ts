
import { Socket } from 'socket.io-client';
import { rxToTx } from '../functions/rxtx.js';



export const createClientAirSocket = async (
    socket: Socket,
    actions?: {
        action: string
        handler: <T>(payload: T, response: (payload: any) => void) => void
    }[]
) => {
    await new Promise<void>(resolve => {
        socket.on('connect', () => {
            resolve()
        })
    })
    if (actions) {
        actions.forEach(({ action, handler }) => {
            socket.on(rxToTx(action), handler)
        })
    }
    const socketWrapper = {
        ioSocket: socket,
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

export type ClientAirSocket = Awaited<ReturnType<typeof createClientAirSocket>>