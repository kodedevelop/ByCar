import { initMobileMenu } from './modules/mobileMenu.js'
import { initStatusIndicator } from './modules/statusIndicator.js'
import { initVideoBackground } from './modules/video.js'

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu()
  initStatusIndicator()
  initVideoBackground()
})