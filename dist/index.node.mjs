import {
  createClientSocket,
  rxToTx
} from "./chunk-DH5RMLYX.mjs";

// src/components/createServerSocket.ts
var createServerSocket = (socket) => {
  const socketWrapper = {
    on: (action, callback) => {
      socket.on(rxToTx(action), callback);
      return socketWrapper;
    },
    emitWithAck: async (action, payload) => {
      return await socket.emitWithAck(action, payload);
    }
  };
  return socketWrapper;
};
export {
  createClientSocket,
  createServerSocket
};
