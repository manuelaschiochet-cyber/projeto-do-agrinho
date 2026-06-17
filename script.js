// Mensagem no console para testar o JavaScript
console.log("Script carregado com sucesso! 🚀");

// Seleciona o botão (caso exista no HTML)
const botao = document.querySelector("button");

// Função ao clicar no botão
if (botao) {
  botao.addEventListener("click", function () {
    alert("Você clicou no botão! 👋");
  });
}

// Exemplo: mudar cor do fundo ao clicar na tela
document.addEventListener("click", function () {
  document.body.style.backgroundColor = "#e0f7ff";
});
