export function initStatusIndicator() {
  const statusDot = document.querySelector('.section1-status-dot')
  if (!statusDot) return

  function updateStatus() {
    const hour = new Date().getHours()

    // Funcionamento: 08h às 18h
    const isOpen = hour >= 8 && hour < 18

    statusDot.style.backgroundColor = isOpen ? 'var(--verde1)' : 'var(--vermelho1)'
  }

  updateStatus()
  setInterval(updateStatus, 60000)
}
