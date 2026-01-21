// Botão para Enviar Formulário
let enviarForm = document.querySelector('#enviarForm');
enviarForm.addEventListener('click', ()=> { enviarParaWhatsApp(); })

// Bloquear se o form for enviado com algum campo vazio
function verificarForm() {
    let campos = document.querySelectorAll(".camposForm");
    let preenchido = true;

    // Verifica se todos os campos estão preenchidos
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            preenchido = false;
        }
    });

    if (!preenchido) {
        document.getElementById("form-mensagemErro").style.display = "block";
        return; // Impede o envio
    }

    document.getElementById("form-mensagemErro").style.display = "none"; // Esconde a mensagem de erro

    enviarParaWhatsApp();
}

// Enviando para o WhatsApp (Formulário)
function enviarParaWhatsApp() {
    let campos = document.querySelectorAll(".camposForm");
    let preenchido = true;

    // Verifica se todos os campos estão preenchidos
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            preenchido = false;
        }
    });

    if (!preenchido) {
        return; // Impede o envio
    }

    let nome     = document.getElementById("nome").value.trim();
    let celular  = document.getElementById("celular").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let numeroWhatsApp = "5581985210917"; // Número desejado

    let texto = `Nome: ${nome}\nCelular: ${celular}\nMensagem: ${mensagem}`;

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
}