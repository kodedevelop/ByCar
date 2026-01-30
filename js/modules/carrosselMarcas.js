export default function initCarrosselMarcas() {
  const logos = [
    'bmw-logo.webp',
    'ceramic-pro-logo.webp',
    'glasurit-logo.webp',
    'kavaca-logo.webp',
    'porsche-logo.webp',
    'windowblue-logo.webp',
  ];

  const logoPath = 'assets/img/marcas/';
  const container = document.getElementById('carousel-container');
  const track = document.getElementById('carousel-track');
  
if (!container || !track) {
  // Esta página não tem o carrossel de marcas
  return;
}

  function renderLogos() {
    for (let i = 0; i < 2; i++) {
      logos.forEach((logo) => {
        const img = document.createElement('img');
        img.src = `${logoPath}${logo}`;
        img.alt = `Logo ${logo.replace('-logo.png', '')}`;
        img.draggable = false;
        img.decoding = 'async';
        img.width = 160;
        img.height = 80;

        track.appendChild(img);
      });
    }
  }

  renderLogos();

  requestAnimationFrame(() => {
    container.scrollLeft += 1;
    container.scrollLeft -= 1;
    startAutoScroll();
  });

  let isDragging = false;
  let isAutoScrolling = false;
  let startX = 0;
  let startY = 0;
  let scrollStart = 0;
  let rafId = null;

  let scrollAccumulator = 0;
  const SCROLL_SPEED = 0.5; // Velocidade

  function autoScroll() {
    if (!isAutoScrolling) return;

    scrollAccumulator += SCROLL_SPEED;

    if (scrollAccumulator >= 1) {
      const move = Math.floor(scrollAccumulator);
      container.scrollLeft += move;
      scrollAccumulator -= move;
    }

    if (container.scrollLeft >= track.scrollWidth / 2) {
      container.scrollLeft -= track.scrollWidth / 2;
    }

    rafId = requestAnimationFrame(autoScroll);
  }

  function startAutoScroll() {
    if (isAutoScrolling) return;
    isAutoScrolling = true;
    rafId = requestAnimationFrame(autoScroll);
  }

  function stopAutoScroll() {
    isAutoScrolling = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = container.scrollLeft;
    container.classList.add('dragging');
    stopAutoScroll();
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove('dragging');
    startAutoScroll();
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const walk = (e.pageX - startX) * 1.5;
    container.scrollLeft = scrollStart - walk;
  });

  container.addEventListener('mouseleave', () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove('dragging');
    startAutoScroll();
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
    scrollStart = container.scrollLeft;
    stopAutoScroll();
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX;
    const y = e.touches[0].pageY;

    const deltaX = x - startX;
    const deltaY = y - startY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    container.scrollLeft = scrollStart - deltaX * 1.5;
    e.preventDefault();
  });

  container.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    startAutoScroll();
  });
}

initCarrosselMarcas();