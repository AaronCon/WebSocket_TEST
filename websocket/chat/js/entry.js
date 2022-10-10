((doc, storage, location) => {
  const oUsername = doc.querySelector('#username')
  const oEnter = doc.querySelector('#enter')
  
  const init = () => {
    bindEvent()
  }
  function bindEvent() {
    oEnter.addEventListener('click', handerEnterBtnClick)
  }
  function handerEnterBtnClick() {
    const username = oUsername.value.trim()
    if(username.length < 6) {
      alert('用户名不小于6位')
      return;
    }
    storage.setItem('username', username)
    location.href = 'index.html'
  }
  init()
}
)(document, localStorage, location);