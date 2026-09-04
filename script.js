// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito de carregamento suave ao rolar a página (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 2. Manipulação do formulário de relatos
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const relato = document.getElementById('relato').value;

            if (!nome || !relato) {
                alert('Por favor, preencha pelo menos seu nome e a descrição do fenômeno.');
                return;
            }

            // Animação de envio
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Enviando ao Arquivo...';
            button.disabled = true;

            setTimeout(() => {
                alert(`Obrigado, ${nome}. Seu relato foi gravado nos Arquivos Warren.`);
                form.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    }

    // 3. Efeito sutil no título principal (brilho ao passar o mouse)
    const titulo = document.querySelector('header h1');
    if (titulo) {
        titulo.addEventListener('mouseenter', () => {
            titulo.style.textShadow = '0 0 20px #d60000, 0 0 30px #8b0000';
        });
        titulo.addEventListener('mouseleave', () => {
            titulo.style.textShadow = '0 0 10px rgba(214, 0, 0, 0.5)';
        });
    }

});