// Adiciona um alerta de sucesso ao enviar o formulário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão
        alert("Formulário enviado com sucesso!");
        form.reset(); // Reseta o formulário
      });
    }
  });
  