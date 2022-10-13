((doc, WebSocket, storage, location) => {
  const oList = doc.querySelector('#list')
  const oSend = doc.querySelector('#send')
  const ws = new WebSocket('ws://localhost:8000')
  const name = storage.getItem('username')

  const init = () => {
    // 判断是否登录，进行路由跳转
    if(!name) {
      return location.href = '/entry.html'
    }
    bindEvent()
  }
  const bindEvent = () => {
    // 添加点击发送命令
    oSend.addEventListener('click', handerEnterSend)
  }

  const handerEnterSend = () => {
    console.log("连接开始")
    const data = {
      name,
      time: new Date().getTime(),
      message: doc.querySelector('#message').value
    }

    ws.onopen = function() {
      ws.send(JSON.stringify(data))
    }()
    ws.onmessage = function(msg) {
      msg = JSON.parse(msg.data)
      console.log(msg)
      const { name, time, message } =  msg
      console.log(name)
      const oItem = doc.createElement('li')
      oItem.innerHTML = `
        <p>消息：${ message }</p>
        <p>
          <span>${ name }</span>
          <i>${ new Date(time) }</i>
        </p>
      `
      oList.appendChild(oItem)
    }
  }

  init()
})(document, WebSocket, localStorage, location)

