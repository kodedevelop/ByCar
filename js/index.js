import { initMobileMenu }       from './modules/mobileMenu.js';
import { initStatusIndicator }  from './modules/statusIndicator.js';
import { initVideoBackground }  from './modules/video.js';
import initCarrosselMarcas      from './modules/carrosselMarcas.js';
import initCarrosselEstetica    from './modules/carrosselEstetica.js';
import { initMascaraForm, initEnviarParaWhatsApp }  from './modules/contatoForm.js';
import abrirWhats               from './modules/abrirWhats.js';
import './modules/scriptOpcoes.js';

/* ANIMAÇÕES */
import { initFadeRight, initNossaHistLinhaAmarela, initOpacityFull, initElementGrow } from './modules/animateNossaHistoria.js';
import { initNossosValFadeUp, initWBCaixaPretasFadeUp, initWBOpcoesFadeUp, initPFFCaixaPretasFadeUp }   from './modules/animeteNossosValores.js';
import { initDepoimentosFadeIn } from './modules/animateDepoimentos.js';
import { initFadeUp }            from './modules/animateFooter.js';

window.abrirWhats = abrirWhats

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStatusIndicator();
  initVideoBackground();
  initCarrosselMarcas();
  initCarrosselEstetica();
  initMascaraForm();
  initEnviarParaWhatsApp();
  initFadeRight();
  initNossaHistLinhaAmarela();
  initOpacityFull();
  initElementGrow();
  initNossosValFadeUp();
  initWBCaixaPretasFadeUp();
  initWBOpcoesFadeUp();
  initPFFCaixaPretasFadeUp();
  initDepoimentosFadeIn();
  initFadeUp();
});


/* Whatsapp flutuante */
const wpp = document.querySelector('.whatsappFlutuante');

wpp.addEventListener('click', ()=> {
  window.open('https://wa.me/5581986210917?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank');  // abre o zap em outra aba
});