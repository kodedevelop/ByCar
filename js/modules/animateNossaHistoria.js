/* Função para acionar a animção dos textos aparecerem da direita para esquerda */
export function initNossaHistTextos(){    
    const textos = document.querySelectorAll('[data-animete-NS-textos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('nossaHistoriaToRight');
        });
    }, {threshold: 0.2})

    textos.forEach(texto => observer.observe(texto));
}


/* Função para acionar a animção das linhas amarelas aumentarem de tamanho */
export function initNossaHistLinhaAmarela(){
    const linhas = document.querySelectorAll('[data-animete-NS-linhas]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('nossaHistoriaLinhaSize');
        });
    }, {threshold: 0.2})

    linhas.forEach(linha => observer.observe(linha));
}

/* Função para acionar a animção dos subtitulos aparecerem */
export function initNossaHistSubtitulos(){
    const subtitulos = document.querySelectorAll('[data-animete-NS-subtitulos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('nossaHistSubtitulos');
        });
    }, {threshold: 0.2})

    subtitulos.forEach(subtitulo => observer.observe(subtitulo))
}


/* Função para acionar a animação da imagem aumentando de tamanho */
export function initNossaHistImg() {
    const nossaHistImgContainer = document.querySelector('.nh-image-container');
    
    const observer = new IntersectionObserver((entries) => {
        // Verificando quando o 1º (e único) item aparece na tela
        if (entries[0].isIntersecting) nossaHistImgContainer.classList.add('animateGrowImg');
    }, {threshold: 0.2});

    observer.observe(nossaHistImgContainer);
}