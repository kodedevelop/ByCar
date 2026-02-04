export default function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabContents.forEach((content) => content.classList.remove("active"));
  tabButtons.forEach((button) => button.classList.remove("active"));

  const target = document.getElementById(tabName);
  if (!target) return;

  target.classList.add("active");
  evt?.currentTarget?.classList.add("active");
}

// deixa disponível pro onclick do HTML
window.openTab = openTab;