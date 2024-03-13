import * as socket_io_parser from 'socket.io-parser';
import * as socket_io_client from 'socket.io-client';
import { Socket } from 'socket.io-client';
import * as _socket_io_component_emitter from '@socket.io/component-emitter';

declare const createClientAirSocket: (socket: Socket) => Promise<{
    on: <T>(action: string, callback: (payload: T) => void) => any;
    emitWithAck: <T_1, U>(action: string, payload: T_1) => Promise<U>;
    io: socket_io_client.Manager<_socket_io_component_emitter.DefaultEventsMap, _socket_io_component_emitter.DefaultEventsMap>;
    id: string | undefined;
    connected: boolean;
    recovered: boolean;
    auth: {
        [key: string]: any;
    } | ((cb: (data: object) => void) => void);
    receiveBuffer: (readonly any[])[];
    sendBuffer: socket_io_parser.Packet[];
}>;
type ClientAirSocket = ReturnType<typeof createClientAirSocket>;

export { ClientAirSocket, createClientAirSocket };
