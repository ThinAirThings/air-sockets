import * as _socket_io_component_emitter from '@socket.io/component-emitter';
import { Socket } from 'socket.io-client';

declare const createClientAirSocket: (socket: Socket, actions?: {
    action: string;
    handler: <T>(payload: T, response: (payload: any) => void) => void;
}[] | undefined) => Promise<{
    ioSocket: Socket<_socket_io_component_emitter.DefaultEventsMap, _socket_io_component_emitter.DefaultEventsMap>;
    on: <T_1>(action: string, callback: (payload: T_1) => void) => any;
    emitWithAck: <T_2, U>(action: string, payload: T_2) => Promise<U>;
}>;
type ClientAirSocket = Awaited<ReturnType<typeof createClientAirSocket>>;

export { ClientAirSocket, createClientAirSocket };
