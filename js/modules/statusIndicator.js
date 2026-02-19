export function initStatusIndicator() {
  const statusDot = document.querySelector('.section1-status-dot')
  if (!statusDot) return

  function updateStatus() {
    const date = new Date()
    const hour = date.getHours()
    const day  = date.getDay()

    const isOpen = hour >= 8 && hour < 18 && day !== 0 

    statusDot.style.backgroundColor = isOpen ? 'var(--verde1)' : 'var(--vermelho1)'
  }

  updateStatus()
  setInterval(updateStatus, 60000)
}
