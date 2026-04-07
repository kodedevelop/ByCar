/* Função da animação da imagem aumentando de tamanho */
export function initAnimacaoImgCrescrendo() {
    const nossaHistImgContainer = document.querySelector('.nh-image-container');
    
    const observer = new IntersectionObserver((entries) => {
        // Verificando quando o 1º (e único) item aparece na tela
        if (entries[0].isIntersecting) nossaHistImgContainer.classList.add('animateGrowImg');
    }, {threshold: 0.2});

    observer.observe(nossaHistImgContainer);
}