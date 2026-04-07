export function initAnimacaoHero(){
    
}

const heroTextos = document.querySelectorAll('[data-animete-hero]');

const observer = new IntersectionObserver((entries) => {
    // Verificando quando o item aparece na tela
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('heroToRight');
        }
    });
}, {threshold: 0.2});

heroTextos.forEach(el => observer.observe(el));


