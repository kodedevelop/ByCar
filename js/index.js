import { initMobileMenu } from './modules/mobileMenu.js'
import { initStatusIndicator } from './modules/statusIndicator.js'

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu()
  initStatusIndicator()
})