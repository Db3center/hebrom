document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove o '#'
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth' // Adiciona animação suave
        });
    });
});
