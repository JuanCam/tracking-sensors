let _socket = null;

export const useWebSocket = (url) => {
  _socket = _socket || new WebSocket(url);
  return {
    message: (fn) => {
      _socket.onmessage = (event) => {
        fn({ event, data: JSON.parse(event.data) });
      };
    },
    send: (message) => {
      _socket.send(JSON.stringify(message));
    },
    get: () => {
      return _socket;
    }
  }
};