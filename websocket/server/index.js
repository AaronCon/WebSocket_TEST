(() => {
  const WebSocket = require('ws')
  // ws:localhost:8000
  const ws = new WebSocket.Server({port: 8000})
  const init = () => {
    bindEvent()
  }
  function bindEvent() {
    ws.on('connection', function(wss) {
      wss.on('message', function(message) {
        console.log('客户端发送的消息为'+ message)
      })
    })
    // server.on('open', handleOpen)
    // server.on('close', handleClose)
    // server.on('error', handleError)
    // ws.on('connection', handleConnection(wss))
  }
  // function handleOpen() {
  //   console.log('WebSocket Open')
  // }
  // function handleClose() {
  //   console.log('WebSocket Close')
  // }
  // function handleError() {
  //   console.log('WebSocket Error')
  // }
  // function handleConnection(wss) {
  //   wss.on('message', function(message) {
  //     console.log("前端发过来的消息为"+ message)
  //   })
  // }
  // function handleMessage() {
  //   console.log(msg)
  // }
  init()
})()