((doc, WebSocket) => {
  const oList = doc.querySelector('#list')
  const omessage = doc.querySelector('#message')
  const oSend = doc.querySelector('#send')
  const ws = new WebSocket('ws:localhost:8000')

  const init = () => {
    bindEvent()
  }
  const bindEvent = () => {
    oSend.addEventListener('click', handerEnterSend)
    ws.addEventListener('open', handleOpen)
    ws.addEventListener('close', handleClose)
    ws.addEventListener('error', handleError)
    ws.addEventListener('message', handleMessage)
  }
  const handerEnterSend = () => {
    console.log('SendMessage')
  }
  const handleOpen = (e) => {
    console.log('websocket open', e)
  }
  const handleClose = (e) => {
    console.log('websocket close', e)
  }
  const handleError = (e) => {
    console.log('websocket error', e)
  }
  const handleMessage = (e) => {
    console.log('websocket message', e)
  }

  init()
})(document, WebSocket)

