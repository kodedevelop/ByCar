// COLOCAR NUM ARQUIVO UNIFICADO POSTERIORMENTE !!!

export function initNossosValFadeUp(){
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
                        valor.classList.add('fadeUp')
                    }, index * 200);
                });
            };
        });
    }, {threshold: 0.2});
    
    // Acionar a função só quando o primeiro elemento (valor) aparece na tela
    observer.observe(valores[0]);
}


// Função que faz aparecer uma caixa preta (section Window Blue da pág Película e PFF) por vez
export function initWBCaixaPretasFadeUp(){
    const caixasPretasWB = document.querySelectorAll('.spec-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                caixasPretasWB.forEach((caixaPretsWB, index) => {
                    setTimeout(() => {
                        caixaPretsWB.classList.add('fadeUp')
                    }, index * 200);
                })
            };
        });
    }, {threshold: 0.2});

    caixasPretasWB.forEach((caixaPretaWB) => {observer.observe(caixaPretaWB)});
}


// Função que faz aparecer uma caixa preta (section Window Blue da pág Película e PFF) por vez
export function initWBOpcoesFadeUp(){
    const opcoesWB = document.querySelectorAll('.tab-button');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                opcoesWB.forEach((opccaoWB, index) => {
                    setTimeout(() => {
                        opccaoWB.classList.add('fadeUp')
                    }, index * 200);
                });
            };
        });
    });

    opcoesWB.forEach((opcaoWB) => observer.observe(opcaoWB));
}


// Função que faz aparecer uma caixa preta (section PFF da pág Película e PFF) por vez
export function initPFFCaixaPretasFadeUp(){
    const caixasPretasPFF = document.querySelectorAll('.ppf-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                caixasPretasPFF.forEach((caixaPretaPFF, index) => {
                    setTimeout(() => {
                        caixaPretaPFF.classList.add('fadeUp')
                    }, index * 200);
                });
            };
        });
    }, {threshold: 0.2});

    caixasPretasPFF.forEach((caixaPretaPFF) => {observer.observe(caixaPretaPFF)});
}