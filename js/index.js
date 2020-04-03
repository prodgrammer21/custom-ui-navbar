const iconTrigger = document.querySelector('#iconTrigger')
const icon = document.querySelector('#icon')
const menuContainer = document.querySelector('.menu-container')

iconTrigger.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    /* Icon */
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-close')
    /* Menu */
    menuContainer.classList.add('show')
    menuContainer.classList.remove('hide')
  } else {
    /* Icon */
    icon.classList.add('fa-bars')
    icon.classList.remove('fa-close')
    /* Menu */
    menuContainer.classList.remove('show')
    menuContainer.classList.add('hide')
  }
})