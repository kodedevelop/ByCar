/* Função da animação da imagem aumentando de tamanho */
export function initAnimacaoImgCrescrendo() {
    const nossaHistImgContainer = document.querySelector('.nh-image-container');
    
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        
        if (entry.isIntersecting) nossaHistImgContainer.classList.add('animateGrowImg');
    }, {threshold: 0.2});

    observer.observe(nossaHistImgContainer);
}