export function initDepoimentosFadeIn(){
    const depoimentosCards = document.querySelectorAll('[data-animete-depoimentos-cards]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
    
                // Como esses elementos estão lado a lado na maioria das larguras das telas, ent esse forEach() é para acrescentar 300ms a cada elemento para que ocorra a sensação que a animação está ocorrendo um elemento por vez
                depoimentosCards.forEach((depoimentoCard, index) => {
                    setTimeout(() => {
                        depoimentoCard.classList.add('fadeUp', 'heroToRight');
                    }, index * 300);
                });
            }
        });
    }, {threshold: 0.2});
    
    // Aciona a função com qualquer card que aparecer na tela
    depoimentosCards.forEach(depoimentoCard => observer.observe(depoimentoCard));
}