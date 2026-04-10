/* Função para acionar a animção dos elementos aparecerem da direita para esquerda */
export function initFadeRight(){    
    const textos = document.querySelectorAll('[data-animate-fadeRight]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fadeRight');
        });
    }, {threshold: 0.2});

    textos.forEach(texto => observer.observe(texto));
}


/* Função para acionar a animção das linhas amarelas aumentarem de tamanho */
export function initNossaHistLinhaAmarela(){
    const linhas = document.querySelectorAll('[data-animate-NS-linhas]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('nossaHistoriaLinhaSize');
        });
    }, {threshold: 0.2});

    linhas.forEach(linha => observer.observe(linha));
}

/* Função para acionar a animção dos subtitulos aparecerem */
export function initOpacityFull(){
    const subtitulos = document.querySelectorAll('[data-animate-opacityFull]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('opacityFull');
        });
    }, {threshold: 0.2});

    subtitulos.forEach(subtitulo => observer.observe(subtitulo));
}


/* Função para acionar a animação da imagem aumentando de tamanho */
export function initNossaHistImg() {
    const nossaHistImgContainer = document.querySelector('.nh-image-container');
    
    // Guard clause. 
    // Se o elemento não existir em tal página, o código com esse elemento não será executado e isso previnirá erros
    if (!nossaHistImgContainer) return;
    
    const observer = new IntersectionObserver((entries) => {
        // Verificando quando o 1º (e único) item aparece na tela
        if (entries[0].isIntersecting) nossaHistImgContainer.classList.add('elementGrow');
    }, {threshold: 0.2});

    observer.observe(nossaHistImgContainer);
}