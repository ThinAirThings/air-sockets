'use server'

// src/functions/rxtx.ts
var rxToTx = (input) => {
  const txIndex = input.indexOf("rx");
  if (txIndex !== -1) {
    return input.slice(0, txIndex) + "tx" + input.slice(txIndex + 2);
  }
  return input;
};

// src/components/createSocketClient.ts
var createSocketClient = (socket) => {
  const socketWrapper = {
    on: (action, callback) => {
      socket.on(rxToTx(action), callback);
      return socketWrapper;
    }
  };
  return socketWrapper;
};
export {
  createSocketClient
};
