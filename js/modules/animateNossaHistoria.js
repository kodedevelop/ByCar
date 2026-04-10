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


/* Função para acionar a animação do elemento aumentando de tamanho */
export function initElementGrow() {
    const elementsGrow = document.querySelectorAll('[data-animate-elementGrow]');

    // Guard clause. 
    // Se o elemento não existir em tal página, o código com esse elemento não será executado e isso previnirá erros
    if (!elementsGrow) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('elementGrow');
        });
    }, {threshold: 0.2});

    elementsGrow.forEach(elementGrowing => observer.observe(elementGrowing));
}