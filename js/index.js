import { initMobileMenu }       from './modules/mobileMenu.js';
import { initStatusIndicator }  from './modules/statusIndicator.js';
import { initVideoBackground }  from './modules/video.js';
import initCarrosselMarcas      from './modules/carrosselMarcas.js';
import initCarrosselEstetica    from './modules/carrosselEstetica.js';
import initMascaraForm          from './modules/mascaraForm.js';
import abrirWhats               from './modules/abrirWhats.js';
import './modules/scriptOpcoes.js';

/* ANIMAÇÕES */
import { initFadeRight, initNossaHistLinhaAmarela, initOpacityFull, initNossaHistImg } from './modules/animateNossaHistoria.js';
import { initNossosValFadeIn }   from './modules/animeteNossosValores.js';
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
  initFadeRight();
  initNossaHistLinhaAmarela();
  initOpacityFull();
  initNossaHistImg();
  initNossosValFadeIn();
  initDepoimentosFadeIn();
  initFadeUp();

  // ==========================
  // FORMULÁRIO + reCAPTCHA
  // ==========================
  const formulario = document.querySelector('form');

  if (!formulario) return;

  formulario.addEventListener('submit', function (event) {
    // Token do reCAPTCHA
    const captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length === 0) {
      event.preventDefault();
      alert('Por favor, preencha o reCAPTCHA!');
      return;
    }

    event.preventDefault(); // evita submit padrão
    enviarParaWhatsApp();
  });

  function enviarParaWhatsApp() {
    const nome = document.getElementById('nome')?.value.trim();
    const celular = document.getElementById('celular')?.value.trim();
    const mensagem = document.getElementById('mensagem')?.value.trim();

    const numeroWhatsApp = '5581985210917';

    const texto = 
`Nome: ${nome}
Celular: ${celular}
Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  }
});


/* Whatsapp flutuante */
const wpp = document.querySelector('.whatsappFlutuante');

wpp.addEventListener('click', ()=> {
  window.open('https://wa.me/5581986210917?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank');  // abre o zap em outra aba
});