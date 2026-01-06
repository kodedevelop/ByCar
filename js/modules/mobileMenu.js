export function initMobileMenu() {
  const mobileBtn = document.querySelector('.section1-mobile-toggle')
  const mobileMenu = document.querySelector('.section1-mobile-menu')

  if (!mobileBtn || !mobileMenu) return

  mobileBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open')

    mobileBtn.setAttribute('aria-expanded', isOpen)
    mobileBtn.textContent = isOpen ? '✕' : '☰'
  })
}
