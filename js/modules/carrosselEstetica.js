export default function initCarrosselEstetica() {
  console.log('🎠 Inicializando carrossel de estética...');
  const produtos = [
    { imagem: 'ceramic-pro-leather.webp', nome: 'CERAMIC PRO LEATHER' },
    { imagem: 'ceramic-pro-glass.webp', nome: 'CERAMIC PRO GLASS' },
    { imagem: 'ceramic-pro-marine.webp', nome: 'CERAMIC PRO MARINE (INDÚSTRIA NAVAL)' },
    { imagem: 'ceramic-pro-textile.webp', nome: 'CERAMIC PRO TEXTILE & CALIPER' }
  ];

  const imagePath = '../assets/img/produtos/';
  const container = document.getElementById('est-carousel-container');
  const track = document.getElementById('est-carousel-track');

  if (!container || !track) {
    console.warn('Elementos do carrossel não encontrados');
    return;
  }

  console.log('✅ Elementos do carrossel encontrados');
  // =========================
  // RTL normalization (robusto)
  // =========================
  function detectRTLScrollType() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    div.dir = 'rtl';

    const inner = document.createElement('div');
    inner.style.width = '200px';
    inner.style.height = '100px';
    div.appendChild(inner);

    document.body.appendChild(div);

    div.scrollLeft = 0;
    const initial = div.scrollLeft;

    div.scrollLeft = 1;
    const after = div.scrollLeft;

    document.body.removeChild(div);

    if (after === 0 && initial === 0) return 'negative';
    if (after === 1) return 'default';
    return 'reverse';
  }

  const isRTL = getComputedStyle(container).direction === 'rtl';
  const rtlType = isRTL ? detectRTLScrollType() : 'default';

  function getScroll() {
    const raw = container.scrollLeft;
    if (!isRTL) return raw;

    const max = container.scrollWidth - container.clientWidth;

    if (rtlType === 'negative') return -raw;
    if (rtlType === 'reverse') return max - raw;
    return raw;
  }

  function setScroll(v) {
    const max = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(max, v));

    if (!isRTL) {
      container.scrollLeft = clamped;
      return;
    }

    if (rtlType === 'negative') {
      container.scrollLeft = -clamped;
      return;
    }

    if (rtlType === 'reverse') {
      container.scrollLeft = max - clamped;
      return;
    }

    container.scrollLeft = clamped;
  }

  // =========================
  // Render (5 cópias = mais “folga”)
  // =========================
  const COPIES = 5;

  function createItem(produto) {
    const item = document.createElement('div');
    item.className = 'est-carousel-item';

    const img = document.createElement('img');
    img.src = imagePath + produto.imagem;
    img.alt = produto.nome;
    img.draggable = false;
    img.decoding = 'async';
    img.loading = 'eager';

    const nome = document.createElement('div');
    nome.className = 'est-carousel-item-name';
    nome.textContent = produto.nome;

    item.append(img, nome);
    return item;
  }

  function render() {
    track.innerHTML = '';
    for (let i = 0; i < COPIES; i++) {
      produtos.forEach((p) => track.appendChild(createItem(p)));
    }
  }

  function waitImagesNoHang() {
    const imgs = track.querySelectorAll('img');
    return Promise.all(
      [...imgs].map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      })
    );
  }

  // =========================
  // Loop infinito por MÓDULO (não “acaba” nunca)
  // =========================
  let oneSet = 0;     // largura de 1 conjunto (1 cópia)
  let anchor = 0;     // posição “âncora” no meio
  let ready = false;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function recalc() {
    // track.scrollWidth pode mudar quando imagens carregam / resize
    const w = track.scrollWidth;
    if (w <= 0) return;

    oneSet = w / COPIES;
    // âncora no meio (cópia central)
    anchor = oneSet * Math.floor(COPIES / 2);

    // reposiciona mantendo o offset relativo (se já estava rodando)
    const s = getScroll();
    if (oneSet > 0) {
      const offset = mod(s - anchor, oneSet);
      setScroll(anchor + offset);
    } else {
      setScroll(anchor);
    }

    ready = oneSet > 0 && container.scrollWidth > container.clientWidth;
  }

  function normalizeToAnchor() {
    // Mantém o scroll sempre dentro de [anchor, anchor+oneSet)
    if (!oneSet) return;

    const s = getScroll();
    const offset = mod(s - anchor, oneSet);
    setScroll(anchor + offset);
  }

  // =========================
  // Auto-scroll (direita -> esquerda visual)
  // Em scroll normalizado, direita->esquerda = aumentar scroll
  // =========================
  let isAuto = false;
  let isHover = false;
  let rafId = null;
  let accumulator = 0;

  const SPEED = 1.0;        // ajuste fino
  const SPEED_HOVER = 0.4;  // mais lento no hover

  function loop() {
    if (!isAuto) return;

    // se ainda não tem overflow, tenta recalcular e continua
    if (!ready) {
      recalc();
      rafId = requestAnimationFrame(loop);
      return;
    }

    const spd = isHover ? SPEED_HOVER : SPEED;
    accumulator += spd;

    const move = Math.trunc(accumulator); // funciona bem com frações
    if (move !== 0) {
      setScroll(getScroll() + move);
      accumulator -= move;
      normalizeToAnchor();
    }

    rafId = requestAnimationFrame(loop);
  }

  function startAuto() {
    if (isAuto) return;
    isAuto = true;
    rafId = requestAnimationFrame(loop);
  }

  function stopAuto() {
    isAuto = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  // =========================
  // Drag infinito (esquerda e direita) com POINTER EVENTS
  // =========================
  let isDragging = false;
  let pointerId = null;
  let dragStartX = 0;
  let dragStartScroll = 0;

  container.addEventListener('pointerenter', () => (isHover = true));
  container.addEventListener('pointerleave', () => (isHover = false));

  container.addEventListener('pointerdown', (e) => {
    // só botão primário quando for mouse
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    isDragging = true;
    pointerId = e.pointerId;

    container.setPointerCapture(pointerId);

    dragStartX = e.clientX;
    dragStartScroll = getScroll();

    stopAuto();
    container.classList.add('dragging');
    // impede seleção de texto
    e.preventDefault();
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging || e.pointerId !== pointerId) return;

    const dx = (e.clientX - dragStartX) * 1.5;

    // Drag “natural”:
    // move o ponteiro para a direita => conteúdo acompanha => scroll diminui
    setScroll(dragStartScroll - dx);

    normalizeToAnchor();
    e.preventDefault();
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    pointerId = null;
    container.classList.remove('dragging');
    startAuto();
  }

  container.addEventListener('pointerup', endDrag);
  container.addEventListener('pointercancel', endDrag);
  container.addEventListener('lostpointercapture', endDrag);

  // Wheel/trackpad também não pode “quebrar” o infinito
  container.addEventListener('scroll', () => {
    if (!oneSet) return;
    normalizeToAnchor();
  }, { passive: true });

  // Recalcular em resize / mudanças de layout
  const ro = new ResizeObserver(() => {
    recalc();
  });
  ro.observe(container);
  ro.observe(track);

  // =========================
  // INIT
  // =========================
  render();

  waitImagesNoHang().then(() => {
    recalc();
    // posiciona no meio mesmo se ainda não tiver overflow (quando aparecer, já tá pronto)
    setScroll(anchor);
    normalizeToAnchor();
    startAuto();
    console.log('✅ Carrossel infinito (auto + drag) iniciado');
  });

  // Segurança extra: se a aba perder foco, quando voltar ele retoma
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });
}