import { initMobileMenu } from './modules/mobileMenu.js';
import { initStatusIndicator } from './modules/statusIndicator.js';
import { initVideoBackground } from './modules/video.js';
import initCarrosselMarcas from './modules/carrosselMarcas.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStatusIndicator();
  initVideoBackground();
  initCarrosselMarcas();
});

