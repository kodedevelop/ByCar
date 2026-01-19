export function initVideoBackground() {
  const video = document.querySelector('.section3 .hero-video-bg');
  const placeholder = document.querySelector('.section3 .hero-video-placeholder');

  if (!video || !placeholder) {
    console.warn('Vídeo ou placeholder não encontrado');
    return;
  }

  // força carregamento
  video.load();

  video.addEventListener('canplaythrough', () => {
    video.style.display = 'block';
    placeholder.style.opacity = '0';

    setTimeout(() => {
      placeholder.style.display = 'none';
    }, 400);

    video.play().catch(() => {});
  });

  video.addEventListener('error', () => {
    console.error('Erro ao carregar o vídeo');
  });
}
