"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.node.ts
var index_node_exports = {};
__export(index_node_exports, {
  createClientAirSocket: () => createClientAirSocket,
  createServerAirSocket: () => createServerAirSocket
});
module.exports = __toCommonJS(index_node_exports);

// src/functions/rxtx.ts
var rxToTx = (input) => {
  const txIndex = input.indexOf("rx");
  if (txIndex !== -1) {
    return input.slice(0, txIndex) + "tx" + input.slice(txIndex + 2);
  }
  return input;
};

// src/components/createClientAirSocket.ts
var createClientAirSocket = async (socket, actions) => {
  await new Promise((resolve) => {
    socket.on("connect", () => {
      resolve();
    });
  });
  if (actions) {
    actions.forEach(({ action, handler }) => {
      socket.on(rxToTx(action), handler);
    });
  }
  const socketWrapper = {
    ioSocket: socket,
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

// src/components/createServerAirSocket.ts
var createServerAirSocket = (socket) => {
  const socketWrapper = {
    ioSocket: socket,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createClientAirSocket,
  createServerAirSocket
});
