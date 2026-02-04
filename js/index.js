import { initMobileMenu } from './modules/mobileMenu.js';
import { initStatusIndicator } from './modules/statusIndicator.js';
import { initVideoBackground } from './modules/video.js';
import initCarrosselMarcas from './modules/carrosselMarcas.js';
import initCarrosselEstetica from './modules/carrosselEstetica.js';
import initMascaraForm from './modules/mascaraForm.js';
import './modules/scriptOpcoes.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStatusIndicator();
  initVideoBackground();
  initCarrosselMarcas();
  initCarrosselEstetica();
  initMascaraForm();

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
