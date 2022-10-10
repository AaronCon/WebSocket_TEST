const WebSocket = require('ws')
((WebSocket) => {
  // ws:localhost:8000
  const WebSocketServer = WebSocket.Server;
  const server = new WebSocketServer({
    port: 8000
  })
  const init = () => {
    bindEvent()
  }
  function bindEvent() {
    server.on('open', handleOpen)
    server.on('close', handleClose)
    server.on('error', handleError)
    server.on('connection', handleConnection)
  }
  function handleOpen() {
    console.log('WebSocket Open')
  }
  function handleClose() {
    console.log('WebSocket Close')
  }
  function handleError() {
    console.log('WebSocket Error')
  }
  function handleConnection(ws) {
    console.log('WebSocket Connetion')
    ws.on('message', handleMessage)
  }
  function handleMessage() {
    console.log(msg)
  }
  init()
})(WebSocket)