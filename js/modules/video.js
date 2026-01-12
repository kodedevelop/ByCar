export function initVideoBackground() {
  const video = document.querySelector('.section2-video');
  const placeholder = document.querySelector('.section2-placeholder');

  if (!video || !placeholder) {
    console.warn('Vídeo ou placeholder não encontrado');
    return;
  }

  // força carregamento
  video.load();

  video.addEventListener('loadeddata', () => {
    video.play().catch(() => {});
    placeholder.style.display = 'none';
    video.style.display = 'block';
  });

  video.addEventListener('error', () => {
    console.error('Erro ao carregar o vídeo');
  });
}
