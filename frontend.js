function startServer() {
  return new Promise((resolve, reject) => {
    app.listen(process.env.PORT || 8080, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Server running');
        resolve();
      }
    });
  })
}

function getWebsocketConnection() {
  // This line makes the WebSocket connection always use port the CollabServer port.
  const host = window.location.host.replace('3000', '8080');
  const webSocket = new WebSocket('ws://' + host);
  const connection = new sharedb.Connection(webSocket);
  return connection;
}
