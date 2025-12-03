/* =========================================================
   JAVASCRIPT SIMPLES PARA ROLAGEM SUAVE ENTRE SEÇÕES
========================================================= */

// Seleciona todos os links do menu que começam com "#"
document.querySelectorAll('a[href^="#"]').forEach(link => {

    // Adiciona um evento ao clicar
    link.addEventListener("click", function(e) {

        // Impede que o link funcione da forma tradicional
        e.preventDefault();

        // Obtém o destino do link (ex: #manual)
        const alvo = document.querySelector(this.getAttribute("href"));

        // Rola suavemente até o destino
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});
