// script.js

// Adicione o código JavaScript aqui para adicionar interatividade à página.

// Exemplo de código para implementar um menu deslizante:

// Seleciona o menu de navegação e os links
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

// Adiciona um evento de clique para cada link do menu
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Fecha o menu se estiver aberto
    nav.classList.remove("open");
  });
});

// Adiciona um evento de clique ao botão do menu (opcional)
const menuButton = document.querySelector("#menu-button"); // Se você tiver um botão
menuButton.addEventListener("click", () => {
  // Abre ou fecha o menu
  nav.classList.toggle("open");
});

// Função para animar o menu deslizante (opcional)
function animateMenu() {
  // Adiciona um efeito de transição suave para a abertura/fechamento do menu
  // Por exemplo, usando CSS e JavaScript
}

// Chama a função animateMenu() quando o menu é aberto ou fechado
nav.addEventListener("transitionend", animateMenu);
