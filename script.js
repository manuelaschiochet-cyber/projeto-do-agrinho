// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  // Seleciona elementos do HTML
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

  // Evento de clique no botão
  button.addEventListener("click", async () => {
    output.textContent = "Carregando dados...";

    try {
      // Exemplo de API pública (frases aleatórias)
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      output.textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      output.textContent = "Erro ao carregar dados.";
    }
  });
});
