export function initFadeUp(){
    const footer = document.querySelector('[data-animate-footer]');
    
    const obeserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
    
        if (entry.isIntersecting){
            entry.target.classList.add('fadeUp');
        }
    }, {threshold: 0.2});
    
    obeserver.observe(footer);
}