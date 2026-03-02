export default function abrirWhats(servico) {
  const numeroWhatsApp = '5581985210917';

  const mensagem = `Olá! Gostaria de solicitar um orçamento para ${servico} na BYCAR Auto Premium.`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}