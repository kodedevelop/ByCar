export default function initMascaraForm() {
  if (typeof $ === 'undefined') return;

  const campoCelular = document.getElementById('celular');
  if (!campoCelular) return;

  $('#celular').mask('(00) 00000-0000');
}
