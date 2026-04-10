export function initNossosValFadeIn(){
    const valores = document.querySelectorAll('[data-animAte-fadeUp]');

    // Guard clause. 
    // Se o elemento não existir em tal página, o código com esse elemento não será executado e isso previnirá erros
    if (!valores.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
    
                // Como esses elementos estão lado a lado na maioria das larguras das telas, ent esse forEach() é para acrescentar 200ms a cada elemento para que ocorra a sensação que a animação está ocorrendo um elemento por vez
                valores.forEach((valor, index) => {
                    setTimeout(() => {
                        valor.classList.add('fadeUp');
                    }, index * 200);
                });
            }
        });
    }, {threshold: 0.2});
    
    // Acionar a função só quando o primeiro elemento (valor) aparece na tela
    observer.observe(valores[0]);
}