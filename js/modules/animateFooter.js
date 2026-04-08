export function initFooterUp(){
    const footer = document.querySelector('[data-animete-footer]');
    
    const obeserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
    
        if (entry.isIntersecting){
            entry.target.classList.add('footerUp');
        }
    }, {threshold: 0.2});
    
    obeserver.observe(footer);
}