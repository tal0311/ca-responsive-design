function openMenu() {
  let x = '&#9747;'
  let menu = '&#9776;'
  let elBody = document.querySelector('body')
  elBody.classList.toggle('open-menu')
  let elBtn = document.querySelector('.menu-btn')

  setTimeout(() => {
    if (elBody.classList.contains('open-menu')) {
      elBtn.innerHTML = x
    } else elBtn.innerHTML = menu
  }, 300)
}

function openModal() {
  let elModal = document.querySelector('.modal')
  let elBody = document.querySelector('body')
  elBody.classList.add('modal-shown')
  elModal.classList.add('open-modal')
}

function onSubmitEmail() {
  let elModal = document.querySelector('.modal')
  let elBody = document.querySelector('body')
  elBody.classList.remove('modal-shown')
  elModal.classList.remove('open-modal')
}
