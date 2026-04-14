// Funcção para acrescentar máscara no input do celular
export function initMascaraForm() {
    if (typeof $ === 'undefined') return;

    const campoCelular = document.getElementById('celular');
    if (!campoCelular) return;

    $('#celular').mask('(00) 00000-0000');
}


// Função que verifica se o reCAPTCHA foi preenchido e, caso preenchido, aciona enviarParaWhatsAp()
export function initEnviarParaWhatsApp() {
    const formulario = document.querySelector('form');

    // verifica se há formulário na pág
    // sem isso ent vai ter erro na Home
    if (!formulario) return;

    formulario.addEventListener('submit', function(event) {
        // Método para pegar a resposta (o token) do reCAPTCHA que é enviado
        // Se tivesse um back-end, seria esse token que seria enviado para o back-end.
        const captchaResponse = grecaptcha.getResponse();

        // Verifica se a resposta está vazia (ou seja, se o form foi preenchido). Se não estiver vazia, então o form será enviado
        if (captchaResponse.length === 0) {
            event.preventDefault(); // Impede o envio

            alert("Por favor, preencha o reCAPTCHA!"); // Informa para preencher o reCAPTCHA
            return;
        } else { mensagemWhatsApp(); }
    });
}

// Função que pega os dados do form, cria a mensagem e envia para o Whatsapp
function mensagemWhatsApp(){
    // Campos do form
    let nome     = document.getElementById("nome").value.trim();
    let celular  = document.getElementById("celular").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    
    // Número do whatsapp
    let numeroWhatsApp = "5581985210917";
    
    // Mensagem com os dados para enviar para o whatsapp
    let texto = `*Nome:* ${nome}\n*Celular:* ${celular}\n*Mensagem:* ${mensagem}`;
    
    // Link para levar para o whatsapp
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
}