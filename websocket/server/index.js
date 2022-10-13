(() => {
  const WebSocket = require('ws')
  // ws:localhost:8000
  const ws = new WebSocket.Server({port: 8000})
  const init = () => {
    bindEvent()
  }
  function bindEvent() {
    ws.on('connection', function(wss) {
      wss.on('message', (msg) => {
        // console.log('' + msg)
        // wss.send(''+ msg)
        ws.clients.forEach((e) => {
          e.send('' + msg)
        })
      })
    })
  }

  // function handleMessage(msg) {
  //   console.log(''+ msg)
  //   // wss.send('fdsaf')
  // }

  init()
})()