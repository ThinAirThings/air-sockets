import * as _socket_io_component_emitter from '@socket.io/component-emitter';
import { Socket } from 'socket.io-client';

declare const createClientAirSocket: (socket: Socket) => Promise<{
    ioSocket: Socket<_socket_io_component_emitter.DefaultEventsMap, _socket_io_component_emitter.DefaultEventsMap>;
    on: <T>(action: string, callback: (payload: T) => void) => any;
    emitWithAck: <T_1, U>(action: string, payload: T_1) => Promise<U>;
}>;
type ClientAirSocket = Awaited<ReturnType<typeof createClientAirSocket>>;

export { ClientAirSocket, createClientAirSocket };
