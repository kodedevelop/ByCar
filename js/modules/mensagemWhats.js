const formulario = document.querySelector('form');

// Verificação e envio dos dados do 
formulario.addEventListener('submit', function(event) {
    // Método para pegar a resposta (o token) do reCAPTCHA que é enviado. Se tivesse um back-end, seria esse token que seria enviado para o back-end.
    const captchaResponse = grecaptcha.getResponse();

    // Verifica se a resposta está vazia
    if (captchaResponse.length === 0) {
        event.preventDefault(); // Impede o envio

        alert("Por favor, preencha o reCAPTCHA!"); // Informa para preencher o reCAPTCHA
        return;
    } else { enviarParaWhatsApp(); }
});

// Função para enviar mensagem para o WhatsApp
function enviarParaWhatsApp() {
    let nome     = document.getElementById("nome").value.trim();
    let celular  = document.getElementById("celular").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let numeroWhatsApp = "5581985210917"; // Número desejado

    let texto = `Nome: ${nome}\nCelular: ${celular}\nMensagem: ${mensagem}`;

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
}