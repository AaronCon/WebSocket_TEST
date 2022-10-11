((doc, WebSocket) => {
  const oList = doc.querySelector('#list')
  const oSend = doc.querySelector('#send')
  const ws = new WebSocket('ws://localhost:8000')

  const init = () => {
    bindEvent()
  }
  const bindEvent = () => {
    oSend.addEventListener('click', handerEnterSend)
    
    function handerEnterSend() {
      console.log("连接开始")
      ws.onopen = function() {
        let message = doc.querySelector('#message').value
        console.log(message)
        ws.send(message)
      }()
    }
  }

  init()
})(document, WebSocket)

