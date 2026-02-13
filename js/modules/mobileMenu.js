export function initMobileMenu() {
  const mobileBtn = document.querySelector('.section1-mobile-toggle')
  const mobileMenu = document.querySelector('.section1-mobile-menu')

  if (!mobileBtn || !mobileMenu) return

  mobileBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open')

    mobileBtn.setAttribute('aria-expanded', isOpen)
    mobileBtn.textContent = isOpen ? '✕' : '☰'
  })
}

/* ==== Summary ==== */
const summary = document.querySelector('.summary');

/* Mudando o texto e a cor texto do summary com o click */
summary.addEventListener('click', ()=>{
  const summaryConteudo = summary.textContent;

  if (summaryConteudo === "Serviços +"){
    // Alterando o texto do Summary
    summary.innerText = "Serviços -";
    summary.style.color = "#000";

  } else if (summaryConteudo === "Serviços -"){
    // Alterando o texto do Summary
    summary.innerText = "Serviços +";
    summary.style.color = "#808383";
  }
})